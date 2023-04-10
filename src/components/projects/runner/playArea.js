import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Container, Sprite, useApp, useTick } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import { CalculateScaleWithTiles } from '../common/calculateScale';
import TerrainFactory from './utils/terrainFactory';
import Character from './utils/character';
import BackgroundFactory from './utils/backgroundFactory';

let charFrameAccumulator = 0, sliderFrame = 0, bgSliderFrame = 0;

// Note: being a "real time" game we don't handle these via React state
let start = false;
let stop = false;

function PlayArea(props) {

    const app = useApp();

    const bgSliderRef = useRef(null);
    const sliderRef = useRef(null);

    // Jump support
    const jumpTimerRef = useRef();
    const jumpLevel = useRef(0);

    const char = useMemo(() => new Character(), []);
    const terrainFactory = useMemo(() => new TerrainFactory(), []);
    const backgroundFactory = useMemo(() => new BackgroundFactory(), []);

    const [bgMap, setBgMap] = useState([]);
    const [fieldMap, setFieldMap] = useState([]);
    const [character, setCharacter] = useState(char.GetValue());

    useEffect(() => {
        setBgMap(backgroundFactory.GetInitialSetup());
    }, [backgroundFactory]);

    useEffect(() => {
        setFieldMap(terrainFactory.GetInitialSetup());
    }, [terrainFactory]);

    const slideBg = useCallback((dt) => {

        // Function symmetrical to slideLevel
        bgSliderFrame += dt;

        while (bgSliderFrame >= 16) {
            setBgMap(prevValue => {
                let newVal = []
                prevValue.forEach((item, idx) => {
                    if (idx > 0) {
                        newVal.push(item);
                    }
                });

                newVal.push(backgroundFactory.GetNext());
                return newVal;
            });

            bgSliderFrame -= 16;
        }

        bgSliderRef.current.x = -bgSliderFrame;
    }, [backgroundFactory]);

    const slideLevel = useCallback((dt) => {
        sliderFrame += dt * 2;

        while (sliderFrame >= 16) {

            // If the first column is out of screen,
            // burn it and get the next column from the factory
            setFieldMap(prevValue => {
                let newVal = []
                prevValue.forEach((item, idx) => {
                    if (idx > 0) {
                        newVal.push(item);
                    }
                });

                newVal.push(terrainFactory.GetNext());
                return newVal;
            });

            sliderFrame -= 16;
        }

        // After all the calculations, update the position
        sliderRef.current.x = -sliderFrame;
    }, [terrainFactory]);

    const gameloop = useCallback((dt) => {
        if (stop) return;

        // Character animation
        charFrameAccumulator = (charFrameAccumulator + dt) % 60;

        // Compute gravity
        char.AddVerticalVelocity(0.25);
        if (char.CheckCollisions(fieldMap)) {
            stop = true;
        }

        char.UpdateFrame(charFrameAccumulator);

        setCharacter(char.GetValue());

        if (!start) return;

        // Move background
        if (sliderRef && sliderRef.current) {
            slideLevel(dt);
        }

        if (bgSliderRef && bgSliderRef.current) {
            slideBg(dt);
        }
    }, [char, fieldMap, slideLevel, slideBg]);

    useTick(dt => gameloop(dt));

    const resize = useCallback((containerRef) => {

        if (containerRef) {
            const fit = CalculateScaleWithTiles(
                app.view.parentNode.clientWidth,
                app.view.parentNode.clientHeight,
                16,
                12,
            );

            app.renderer.resize(fit.width, fit.height);

            containerRef.scale = {
                x: fit.scale,
                y: fit.scale,
            }
        }
    }, [app.renderer, app.view.parentNode]);

    const resizeRef = useCallback((containerRef) => {
        resize(containerRef);
    }, [resize]);

    // Jump handling
    const startJump = useCallback(() => {
        if (!start) {
            start = true;
            char.Start();
            return;
        }

        jumpLevel.current = 0;
        jumpTimerRef.current = setTimeout(() => {
            jumpLevel.current = 1;
            char.Jump(jumpLevel.current);
        }, 100)
    }, [jumpLevel, jumpTimerRef, char]);

    const endJump = useCallback(() => {
        char.Jump(jumpLevel.current);

        clearTimeout(jumpTimerRef.current);

    }, [jumpTimerRef, char]);
  
    const handleKeyDown = useCallback((event) => {
        if (event.key === " ") {
            startJump();
        }
    }, [startJump]);

    const handleKeyUp = useCallback((event) => {
        if (event.key === " ") {
            endJump();
        }
    }, [endJump]);

    const handleTapBegin = useCallback(() => startJump(), [startJump]);

    const handleTapEnd = useCallback(() => endJump(), [endJump]);
    // /Jump handling

    useEffect(() => {
        window.addEventListener('resize', resize);
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        window.addEventListener('pointerdown', handleTapBegin);
        window.addEventListener('pointerup', handleTapEnd);


        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            window.removeEventListener('pointerdown', handleTapBegin);
            window.removeEventListener('pointerup', handleTapEnd);
        }
    }, [resize, handleKeyDown, handleKeyUp, handleTapBegin, handleTapEnd]);

    if (!props.loaded) {
        return null;
    }

    return (
        <Container ref={resizeRef}>
            <Container id="bgSlider" ref={bgSliderRef}>
                {bgMap.map((col, i) =>
                    col.map((tile, j) =>
                        <Sprite
                            key={i * col.length + j}
                            texture={PIXI.utils.TextureCache[`nature-paltformer-tileset-16x16${tile}.png`]}
                            x={16 * i}
                            y={16 * j}
                        />
                    )
                )}
            </Container>
            <Container id="slider" ref={sliderRef}>
                {fieldMap.map((col, i) =>
                    col.map((tile, j) =>
                        tile !== null ?
                            <Sprite
                                key={i * col.length + j}
                                texture={PIXI.utils.TextureCache[`nature-paltformer-tileset-16x16${tile}.png`]}
                                x={16 * i}
                                y={16 * j}
                            />
                            : null
                    )
                )}
            </Container>
            <Sprite
                key={'char'}
                texture={char.GetTexture()}
                {...character}
            />
        </Container>
    )
}

export default PlayArea;