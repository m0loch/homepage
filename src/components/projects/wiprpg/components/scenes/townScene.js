import * as PIXI from 'pixi.js';
import Tavern from './town/tavern';
import Church from './town/church';
import Merchant from './town/merchant';
import Smith from './town/smith';
import TownExit from './town/townExit';
import MenuBtn from './menuBtn';

const LookUp = location => {
    switch (location) {
        case 'church': return Church;
        case 'merchant': return Merchant;
        case 'smith': return Smith;
        case 'tavern': return Tavern;
        default: return TownExit;
    }
}

class TownScene extends PIXI.Container {
    constructor(app, townDef) {
        super();

        this.app = app;

        const texture = PIXI.utils.TextureCache[townDef.name];
        this.baseWidth = texture.width;
        this.baseHeight = texture.height;

        // Background image
        this.addChild(new PIXI.Sprite(texture));

        // Menu button
        this.addChild(new MenuBtn(this.baseWidth - 30, 30));

        // Points of interest
        for (const building in townDef.poi) {
            const buildData = townDef.poi[building];
            this.addChild(new (LookUp(building))(buildData.x, buildData.y));
        }

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