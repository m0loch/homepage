import * as PIXI from 'pixi.js';
import PixiButton from "../abstract/pixiButton";

class MenuBtn extends PixiButton {
    constructor({x, y}) {
        super(PIXI.utils.TextureCache['orb'],
        { onClickEnded: sender => window.dispatchEvent(new CustomEvent('openMenu', sender)) },
        );

        this.x = x;
        this.y = y;
        this.anchor.set(.5);
        this.height = 30;
        this.width = 30;
    }
}

export default MenuBtn;