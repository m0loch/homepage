import * as PIXI from 'pixi.js';
import Tavern from './town/tavern';
import Church from './town/church';
import Merchant from './town/merchant';
import Smith from './town/smith';
import TownExit from './town/townExit';

class TownScene extends PIXI.Container {
    constructor(app) {
        super();

        this.app = app;

        const texture = PIXI.utils.TextureCache['town'];
        this.baseWidth = texture.width;
        this.baseHeight = texture.height;

        // Background image
        this.addChild(new PIXI.Sprite(texture));

        this.addChild(new Church(30, 260));
        this.addChild(new Merchant(220, 260));
        this.addChild(new Smith(690, 260));
        this.addChild(new Tavern(430, 260));
        this.addChild(new TownExit(900, 470));

        this.onResize();
    }

    onResize = () => {
        let horizontalFit = this.app.renderer.width / this.baseWidth;
        let verticalFit = this.app.renderer.height / this.baseHeight;

        // Scales the container in order to achieve the best fit, then centers it
        if (horizontalFit < verticalFit) {

            this.x = 0;
            this.y = Math.abs((this.app.renderer.height / 2) - (this.baseHeight * horizontalFit / 2));
            this.scale = { x: horizontalFit, y: horizontalFit };

        } else {

            this.x = Math.abs((this.app.renderer.width / 2) - (this.baseWidth * verticalFit / 2));
            this.y = 0;
            this.scale = { x: verticalFit, y: verticalFit };

        }
    }
}

export default TownScene;