import * as PIXI from 'pixi.js';

import { RandomizeStart } from '../utils/utils';

import Deck from './deck';
import DiscardPile from './discardPile';
import House from './house';
import CardColumn from './cardColumn';

import Card from './card';

const baseWidth = 960;
const baseHeight = 540;

const baseStep = baseWidth / 8;

class Board extends PIXI.Container {
    constructor(app, onWin) {
        super();

        this.app = app;
        this.onWin = onWin;

        this.background = new PIXI.Sprite(PIXI.Texture.WHITE);
        this.background.tint = 0x308030;
        this.background.height = baseHeight;
        this.background.width = baseWidth;
        this.addChild(this.background);

        this.cardSize = {
            height: PIXI.utils.TextureCache['cardback'].height * 1.5,
            width: PIXI.utils.TextureCache['cardback'].width * 1.5,
        };

        // Creates inner elements:
        // - deck
        // - discard pile
        // - 4 empty houses
        // - 7 card columns

        // Deck
        this.deck = new Deck({
            x: baseStep,
            y: 80,
            ...this.cardSize,
        }, this.onDeckClicked);

        // Discard pile
        this.discardPile = new DiscardPile({
            x: 2 * baseStep,
            y: 80,
            ...this.cardSize,
        });

        // Houses
        this.houses = [];
        for (let i = 0; i < 4; i++) {
            this.houses.push(new House({
                x: (i + 4) * baseStep,
                y: 80,
                ...this.cardSize,
            }));
        }

        // Card columns
        this.cardColumns = [];
        for (let i = 0; i < 7; i++ ) {
            this.cardColumns.push(new CardColumn({
                x: (i + 1) * baseStep,
                y: 230,
                ...this.cardSize,
            }));
        }

        this.onResize();

        // Actually add childred
        this.addChild(this.discardPile);
        this.addChild(this.deck);
        this.houses.forEach((item) => this.addChild(item));
        this.cardColumns.forEach((item) => this.addChild(item));

        // Register events
        this.deck.on('emptydeckclicked', this.onEmptyDeckClicked);
        this.on('dragStart', this.onStartDrag);
        this.on('dragEnd', this.onEndDrag);

        this.NewGame();
    }

    NewGame = () => {

        // Remove every card - useless only on the first load
        this.deck.Destroy();
        this.discardPile.Destroy();
        this.houses.forEach(house => house.Destroy());
        this.cardColumns.forEach(col => col.Destroy());

        let initialCfg = RandomizeStart(52);

        for (let i = 0; i < this.cardColumns.length; i++) {
            for (let k = 0; k < (i+1); k++) {
                this.cardColumns[i].AddCard(new Card(initialCfg.pop()));
            }

            this.cardColumns[i].RevealLastCard();
        }

        while (initialCfg.length > 0) {
            this.deck.AddCard(new Card(initialCfg.pop()));
        }

    }

    CheckWinCondition = () => {
        let result = true;
        this.houses.forEach((house) => { if (house.cards.length < 13) result = false; });

        return result;
    }

    onResize = () => {
        let horizontalFit = this.app.renderer.width / baseWidth;
        let verticalFit = this.app.renderer.height / baseHeight;

        // Scales the container in order to achieve the best fit, then centers it
        if (horizontalFit < verticalFit) {

            this.x = 0;
            this.y = Math.abs((this.app.renderer.height / 2) - (baseHeight * horizontalFit / 2));
            this.scale = { x: horizontalFit, y: horizontalFit};

        } else {

            this.x = Math.abs((this.app.renderer.width / 2) - (baseWidth * verticalFit / 2));
            this.y = 0;
            this.scale = { x: verticalFit, y: verticalFit};

        }
    }

    ///////////////////////
    // Centralized events
    ///////////////////////

    onDeckClicked = (poppedCard) => {
        this.deck.isWaiting = true;
        poppedCard.FlipTo(this.discardPile,
            (card) => {
                this.discardPile.AddCard(card);
                this.deck.isWaiting = false;
            });
    }

    onEmptyDeckClicked = () => {
        while (this.discardPile.cards.length > 0) {
            let card = this.discardPile.GetCard();
            card.SetFaceDown(true);
            this.deck.AddCard(card);
        }
    }

    onStartDrag = (sender) => {
        sender.formerParent = sender.parent;
        sender.parent.RemoveCard(sender);
        this.addChild(sender);

        let chainHandler = sender;
        while (chainHandler.linkedDownCard) {
            chainHandler.linkedDownCard.interactive = false;
            sender.formerParent.RemoveCard(chainHandler.linkedDownCard);
            this.addChild(chainHandler.linkedDownCard);
            chainHandler = chainHandler.linkedDownCard;
        }

        sender.onDragMove();
        this.draggedCard = sender;
    }

    onEndDrag = (card, event) => {
        let position = event.data.getLocalPosition(this.parent);

        let dockPlace = undefined;
        this.children.forEach((child) => {
            if (child.CheckDockableArea && child.CheckDockableArea(position)) {
                dockPlace = child;
            }
        });

        let destination = undefined;
        if (dockPlace && dockPlace.AcceptsCardDock && dockPlace.AcceptsCardDock(card)) {
            destination = dockPlace;
        } else {
            destination = card.formerParent;
        }

        this.removeChild(card);
        destination.AddCard(card);
        let chainHandler = card;
        while (chainHandler.linkedDownCard) {
            this.removeChild(chainHandler.linkedDownCard);
            destination.AddCard(chainHandler.linkedDownCard);
            chainHandler.linkedDownCard.interactive = true;

            chainHandler = chainHandler.linkedDownCard;
        }

        this.draggedCard = undefined;

        // If the sender comes from a CardColumn, ensure that the last card is face up
        if (card.formerParent instanceof CardColumn) {
            card.formerParent.RevealLastCard();
        }

        if (this.CheckWinCondition()) {
            this.onWin();
        }
    }
}

export default Board;