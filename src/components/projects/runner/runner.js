import React, { useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';
import PixiContainer from '../common/pixiContainer';
import { Stage } from '@pixi/react';
import PlayArea from './playArea';

function Runner(props) {
    const [textures, setTextures] = useState(undefined);

    useEffect(() => {
        PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.NEAREST;

        PIXI.Assets.add('char', `${props.assetsFolder}/nature-paltformer-tileset-16x16.json`);
        PIXI.Assets.add('tiles', `${props.assetsFolder}/Standard sprites upd.json`);

        PIXI.Assets.load(['char', 'tiles'])
            .then(textures => {
                setTextures(textures);
            });

        return () => PIXI.Assets.reset();
    }, [props.assetsFolder]);

    return (
        <PixiContainer>
            <Stage
                style={{ margin: "auto" }}
                options={{
                    antialias: false,
                    backgroundAlpha: 1,
                    backgroundColor: 0x303030,
                }}
            >
                <PlayArea textures={textures} />
            </Stage>
        </PixiContainer>
    );
}

export default Runner;