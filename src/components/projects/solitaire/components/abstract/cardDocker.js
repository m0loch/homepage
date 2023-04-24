import * as PIXI from 'pixi.js'

class CardDocker extends PIXI.Container {
    constructor(props, onClickCallback) {
        super();

        this.cards = [];

        this.x = props.x;
        this.y = props.y;

        this.shadow = new PIXI.Sprite(PIXI.Texture.WHITE);
        this.shadow.tint = 0x004000;
        this.shadow.anchor.set(0.5, 0.5);
        this.shadow.height = props.height * 1.1;
        this.shadow.width = props.width * 1.1;
        this.addChild(this.shadow);

        if (onClickCallback) {
            this.shadow.onClickCallback = onClickCallback;
            this.shadow.interactive = true;

            this.shadow.on('click', () => { this.shadow.onClickCallback(this); });
        }
    }

    AddCard(card) {
        let where = this.GetLandingPosition();
        card.x = where.x;
        card.y = where.y;

        this.cards.push(card);

        this.addChild(card);
    }

    RemoveCard = (card) => {
        this.cards = this.cards.filter((item) => item !== card);
        this.removeChild(card);
    }

    GetLandingPosition = () => {
        let i = this.cards.length + 1;

        return({
            x: -i * .1,
            y: -i * .2,
        });
    }

    Destroy = () => {
        this.cards.forEach(card => this.removeChild(card));
    }
}

export default CardDocker;
