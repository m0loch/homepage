import * as PIXI from 'pixi.js'

class Button extends PIXI.Sprite {
    constructor(texture, callbacks) {
        super(texture);

        this.callbacks = callbacks;

        this.interactive = true;

        // States handling
        this.isPressed = false;
        this.isTouched = false;

        // Events handling
        this.on('mousedown', this.onMouseDown);
        this.on('mouseup', this.onMouseUp);
        this.on('mouseover', this.onMouseOver);
        this.on('mouseout', this.onMouseOut);
        this.on('mouseupoutside', this.onMouseUpOutside);

        // Mobile events
        this.on('touchstart', this.onMouseDown);
        this.on('touchend', this.onMouseUp);
        this.on('touchendoutside', this.onMouseUpOutside);
    }

    onMouseDown = function(event) {
        this.eventData = event.data;
        if (!this.isPressed) {
            this.localStartDragY = event.data.getLocalPosition(this).y;
        }

        this.isPressed = true;
        this.updateTexture();

        if (this.callbacks && this.callbacks.onClickStarted) {
            this.callbacks.onClickStarted(this, event);
        }
     }
    
    onMouseUp = function(event) {
        this.isPressed = false;
        this.updateTexture();

        if (this.callbacks && this.callbacks.onClickEnded) {
            this.callbacks.onClickEnded(this, event);
        }

        this.updateTexture();
    }
    
    onMouseOver = function() {
        this.isTouched = true;
        this.updateTexture();
    }

    onMouseOut = function() {
        this.isTouched = false;
        this.updateTexture();
    }

    onMouseUpOutside = function() {
        this.isPressed = false;
        this.updateTexture();
    }

    updateTexture = function() {
        // default behaviour
        if (this.isPressed && this.isTouched) {
            this.tint = 0x808080;
        } else {
            this.tint = 0xFFFFFF;
        }
    }

    Release = function () {
        this.isPressed = false;
        this.updateTexture();
    }
}

export default Button;