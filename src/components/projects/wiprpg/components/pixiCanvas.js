import { Component } from 'react';
import * as PIXI from 'pixi.js';
import * as TWEEN from '@tweenjs/tween.js';
import Location from './scenes/location';

class PixiCanvas extends Component {

    updatePixiContainer = element => {

        if (!element || this.app) {
            // If ref uninitialized, or PIXI app already set up, just leave.
            return;
        }

        // DOM element where the PIXI canvas will be docked
        this.pixiContainer = element;

        this.app = new PIXI.Application({
            width: this.pixiContainer.offsetWidth,
            height: this.pixiContainer.offsetHeight,
            antialias: false,
        });

        this.app.renderer.background.color = 0x303030;
        this.pixiContainer.appendChild(this.app.view);

        this.scene = new Location(this.app, this.props.location);

        this.app.stage.addChild(this.scene);

        window.addEventListener('resize', this.onResize);
        
        this.animate();
    }

    onResize = () => {
        if (this.pixiContainer) {
            this.app.renderer.resize(
                this.pixiContainer.offsetWidth,
                this.pixiContainer.offsetHeight,
            );

            this.scene.onResize();
        }
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        TWEEN.update();
    }

    ///////////////
    // DOM events
    ///////////////

    render() {
        return <div
            style={{ display: "flex", width: "100%" }}
            ref={this.updatePixiContainer}
        />;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    shouldComponentUpdate(nextProps) {
        // Check for location change
        if (this.app && (nextProps.location?.name !== this.scene?.name)) {
            this.app.stage.removeChild(this.scene);
            this.scene = new Location(this.app, nextProps.location);
            this.app.stage.addChild(this.scene);
        }
        return true;
    }
}

export default PixiCanvas;