import * as PIXI from 'pixi.js'
import * as TWEEN from '@tweenjs/tween.js'
import Button from './abstract/button'

const baseScale = { x: 1.5, y: 1.5 };

function onClick(sender, eventData) {
    // Propagates the event - only if the parents supports that
    if (!sender.parent || !sender.parent.onCardClicked) {
        return;
    }
    sender.parent.onCardClicked(sender, eventData);
}

function onStartDrag(sender) {
    sender.parent.parent.emit('dragStart', sender);
}

function onEndDrag(sender, eventData) {
    sender.parent.emit('dragEnd', sender, eventData);
}

let cardCallbacks = {
    onClickStarted: (sender) => {if (!sender.isFaceDown) { onStartDrag(sender) }},
    onClickEnded: (sender, eventData) => {
        onEndDrag(sender, eventData);
        onClick(sender, eventData);
    },
}

function GetCardValue(intValue) {
    return (intValue % 13) + 1;
}

function GetCardSuit(intValue) {
    let intSuit = Math.floor(intValue / 13);
    switch (intSuit) {
        case 0:
            return 'clubs';
        case 1:
            return 'diamonds';
        case 2:
            return 'spades';
        default:
            return 'hearts';
        }
}

function GetCardColor(intValue) {
    return Math.floor(intValue / 13) % 2 === 0 ? 'Black' : 'Red';
}

class Card extends Button {
    constructor(seed) {
        super(PIXI.utils.TextureCache['cardback'], cardCallbacks);
 
        this.cardValue = GetCardValue(seed);
        this.cardSuit = GetCardSuit(seed);
        this.cardColor = GetCardColor(seed);

        this.isFaceDown = true;

        this.anchor.set(0.5, 0.5);

        this.backTexture = PIXI.utils.TextureCache['cardback'];
        this.frontTexture = PIXI.utils.TextureCache[`card_${this.cardValue}_${this.cardSuit}`];

        this.scale = baseScale;

        this.on('mousemove', this.onDragMove);
        this.on('touchmove', this.onDragMove);
    }

    SetFaceDown = function(faceDown) {
        this.isFaceDown = faceDown;
        this.texture = this.isFaceDown ? this.backTexture : this.frontTexture;
    }

    FlipTo = function(destination, callback) {
        this.interactive = false;
        this.isFaceDown = !this.isFaceDown;

        // Setup movement
        let landingPosition = destination.GetLandingPosition();

        let Movement = new TWEEN.Tween(this.position)
            .to({
                x: destination.position.x - this.parent.position.x + landingPosition.x,
                y: destination.position.y - this.parent.position.y + landingPosition.y
            }, 500);

        // Setup flip animation
        let defaultScale = this.scale.x;
        
        let FlipIn = new TWEEN.Tween(this.scale)
            .to({x: 0}, 250)
            .onComplete(() => {
                if (this.isFaceDown) {
                    this.texture = this.backTexture;
                } else {
                    this.texture = this.frontTexture;
                }
            });

        let FlipOut = new TWEEN.Tween(this.scale)
            .to({x: defaultScale}, 250)
            .onComplete(() => {
                this.interactive = true;
                if (callback) {
                    callback(this);
                }
            });

        FlipIn.chain(FlipOut);
        FlipIn.start();
        Movement.start();
    }

    Click = () => {
        onClick(this);
    }

    onDragMove = () => {
        if (!this.isFaceDown && this.isPressed) {
            let newPosition = this.eventData.getLocalPosition(this.parent);
            newPosition.y -= this.localStartDragY;
            this.position = newPosition;

            // Breaks card chain, if we're in the middle of one
            if (this.linkedUpCard) {
                this.linkedUpCard.linkedDownCard = undefined;
                this.linkedUpCard = undefined;
            }

            this.DragLinkedCards(newPosition.x, newPosition.y + 14);
        }
    }

    DragLinkedCards(x, y) {
        if (this.linkedDownCard) {
            this.linkedDownCard.x = x;
            this.linkedDownCard.y = y;
            this.linkedDownCard.DragLinkedCards(x, y + 14);
        }
    }
}

export default Card;