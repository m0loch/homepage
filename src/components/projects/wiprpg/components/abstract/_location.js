import * as PIXI from 'pixi.js';
import PixiButton from "./pixiButton";

class Location extends PIXI.Container {
    constructor(
        texture,
        x,
        y,
        eventName,
        label,
        tint = 0xFFFFFF,
        eventPayload = {}
    ) {
        super();

        this.button = new PixiButton(
            texture ? PIXI.utils.TextureCache[texture] : PIXI.Texture.WHITE,
            { onClickEnded: () => window.dispatchEvent(new CustomEvent(eventName, { detail: eventPayload })) },
            tint
        );

        this.button.height = 50;
        this.button.width = 50;
        this.button.alpha = .5;
        this.addChild(this.button);

        this.label = new PIXI.Text(label, {
            fontFamily: 'Ubuntu,sans-serif',
            fontSize: PIXI.utils.isMobile.any ? 35 : 20,
            fill: 0xFFFFFF,
            stroke: 0x000000,
            strokeThickness: 5
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