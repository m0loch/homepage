import * as PIXI from 'pixi.js';
import Button from "../../abstract/pixiButton";

class Location extends PIXI.Container {
    constructor(texture, x, y, eventName, label, tint = 0xFFFFFF) {
        super();

        this.button = new Button(
            texture ? PIXI.utils.TextureCache[texture] : PIXI.Texture.WHITE,
            { onClickEnded: sender => window.dispatchEvent(new CustomEvent(eventName, sender)) },
            tint
        );

        this.button.height = 50;
        this.button.width = 50;
        this.button.alpha = .5;
        this.addChild(this.button);

        this.label = new PIXI.Text(label, {
            fontFamily: 'Ubuntu,sans-serif',
            fontSize: 20,
            fill: 0xFFFFFF,
        });
        this.label.anchor.set(0.5);
        this.label.x = this.width / 2;
        this.label.y = -this.label.height / 2;

        this.addChild(this.label);

        this.x = x;
        this.y = y;
    }
}

export default Location;