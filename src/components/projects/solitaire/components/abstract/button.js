import * as PIXI from 'pixi.js'

class Button extends PIXI.Sprite {
    constructor(texture, callbacks) {
        super(texture);

        this.callbacks = callbacks;

        this.interactive = true;

        // States handling
        this.isPressed = false;
        this.isTouched = false;
        this.isDoubleClk = false;

        // Events handling
        this.on('pointerdown', this.onMouseDown);
        this.on('pointerup', this.onMouseUp);
        this.on('pointerover', this.onMouseOver);
        this.on('pointerout', this.onMouseOut);
        this.on('pointerupoutside', this.onMouseUpOutside);
    }

    // Test double click
    startPressTimer = () => {
        this.isDoubleClk = true;
        this.dblClkTimer = setTimeout(() => {
          this.isDoubleClk = false;
          clearTimeout(this.dblClkTimer);
        }, 500)
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

        if (this.callbacks) {
            if (this.callbacks.onClickEnded) {
                this.callbacks.onClickEnded(this, event);
            }

            if (this.callbacks.onDoubleClickEnded) {
                if (this.isDoubleClk) {
                    this.callbacks.onDoubleClickEnded(this, event);
                    this.isDoubleClk = false;
                } else {
                    this.startPressTimer();
                }
            }
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