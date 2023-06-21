import React, { useCallback, useEffect, useRef } from 'react';
import { Container, Sprite, useApp } from '@pixi/react';
import { CalculateFullscreenScale } from '../common/calculateScale';

let movingSprite = undefined;

function Board(props) {

    const app = useApp();

    // Needed for handling drag
    app.stage.interactive = true;
    app.stage.hitArea = app.screen;

    const mainRef = useRef(null);
    const spriteRefs = useRef([]);

    const handleBeginTouch = (sprite, event) => {

        movingSprite = sprite;
        movingSprite.touchId = event.data.identifier;

        // NB: in order for this to work, we need the parent to have the sortableChildren property active
        sprite.zIndex = 1;

        sprite.touchOffset = event.data.getLocalPosition(sprite);

        movingSprite.originalPos = {
            x: sprite.x,
            y: sprite.y,
        };

    }

    const handleDrag = useCallback(event => {

        if (movingSprite) {
            let newPos = event.data.getLocalPosition(movingSprite.parent);
            newPos.x -= movingSprite.touchOffset.x;
            newPos.y -= movingSprite.touchOffset.y;
            movingSprite.position = newPos;
        }

    }, []);

    const handleEndTouch = () => {

        const container = movingSprite.parent;

        const targetSprite = container.children.find(
            child => (child.idx !== movingSprite.idx)
                && (Math.abs(child.position.x - movingSprite.x) < (movingSprite.width * 0.5))
                && (Math.abs(child.position.y - movingSprite.y) < (movingSprite.height * 0.5))
        );

        if (targetSprite) {
            // Perform move
            movingSprite.position.x = targetSprite.position.x;
            movingSprite.position.y = targetSprite.position.y;

            targetSprite.position.x = movingSprite.originalPos.x;
            targetSprite.position.y = movingSprite.originalPos.y;

            const depot = movingSprite.currIdx;
            movingSprite.currIdx = targetSprite.currIdx;
            targetSprite.currIdx = depot;

            let err = container.children.find(child => child.idx !== child.currIdx);

            if (!err) {
                props.onVictory();
            }
        } else {
            // Rollback move
            movingSprite.position.x = movingSprite.originalPos.x;
            movingSprite.position.y = movingSprite.originalPos.y;
        }

        movingSprite.zIndex = 0;
        movingSprite = undefined;
    }

    useEffect(() => {
        app.stage.on('pointermove', handleDrag);
    }, [app, handleDrag]);

    // Resizing
    const resize = useCallback(() => {
        if (mainRef && mainRef.current) {
            app.renderer.resize(app.view.parentNode.clientWidth, app.view.parentNode.clientHeight);

            const calc = CalculateFullscreenScale(app.renderer, props.texture);
            mainRef.current.x = calc.x;
            mainRef.current.y = calc.y;
            mainRef.current.scale = {
                x: calc.scale,
                y: calc.scale,
            };
        }
    }, [app.renderer, app.view.parentNode, props.texture]);

    useEffect(() => {
        window.addEventListener('resize', resize);

        return () => window.removeEventListener('resize', resize);
    }, [resize]);

    if (!props.texture) {
        return null;
    }

    resize();

    return (
        <Container
            sortableChildren={true}
            ref={mainRef}
        >
            {props.victory ? (
                <Sprite
                    texture={props.texture}
                />
            ) : props.sprites?.map((sprite) => {
                return (
                    <Sprite
                        key={sprite.realIndex}
                        idx={sprite.realIndex}
                        currIdx={sprite.currIndex}
                        eventMode={'static'}
                        texture={sprite.texture}
                        x={sprite.x}
                        y={sprite.y}
                        ref={el => spriteRefs.current[sprite.realIndex] = el}
                        pointerup={event => handleEndTouch(event)}
                        pointerdown={event => handleBeginTouch(spriteRefs.current[sprite.realIndex], event)}
                    />
                )
            })
            }
        </Container>
    );
}

export default Board;