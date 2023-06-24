import { Component } from 'react';
import * as PIXI from 'pixi.js';
import * as TWEEN from '@tweenjs/tween.js';
import Board from './board';

class PixiCanvas extends Component {

    NewGame = () => {
        if (!this.board) {
            return;
        }

        this.board.NewGame();
    }

    updatePixiContainer = (element) => {
        // DOM element where the PIXI canvas will be docked
        this.pixiContainer = element;

        if (this.pixiContainer && this.pixiContainer.children.length < 1) {
            this.app = new PIXI.Application({
                width: this.pixiContainer.offsetWidth,
                height: this.pixiContainer.offsetHeight,
                antialias: true,
            });

            this.app.renderer.background.color = 0x303030;
            this.pixiContainer.appendChild(this.app.view);

            this.board = new Board(this.app, this.props.onWin);

            this.app.stage.addChild(this.board);

            window.addEventListener('resize', this.onResize);

            this.animate();
        }
    }

    onResize = () => {
        if (this.pixiContainer) {
            this.app.renderer.resize(
                this.pixiContainer.offsetWidth,
                this.pixiContainer.offsetHeight,
            );

            this.board?.onResize();
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
}

export default PixiCanvas;