import React, { useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';
import { Stage } from '@pixi/react';
import PlayArea from './playArea';

function Runner(props) {
    const [textures, setTextures] = useState(undefined);

    useEffect(() => {
        PIXI.Assets.add('char', `${props.assetsFolder}/nature-paltformer-tileset-16x16.json`, { scaleMode: PIXI.SCALE_MODES.NEAREST });
        PIXI.Assets.add('tiles', `${props.assetsFolder}/Standard sprites upd.json`, { scaleMode: PIXI.SCALE_MODES.NEAREST });
        PIXI.Assets.load(['char', 'tiles'])
            .then(textures => {
                setTextures(textures);
            });

        return () => PIXI.Assets.reset();
    }, [props.assetsFolder]);

    return (
        <div style={{ position: "relative", margin: "auto", width: "100%", height: "100%", display: "flex", alignContent: "center", justifyContent: "center" }}>
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
        </div>
    );
}

export default Runner;