import React, { useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';
import { Stage } from '@pixi/react';
import PlayArea from './playArea';

function Runner(props) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        PIXI.Loader.shared
            .add('char', `${props.assetsFolder}/nature-paltformer-tileset-16x16.json`) 
            .add('tiles', `${props.assetsFolder}/Standard sprites upd.json`)
            .load(() => {
            setLoaded(true);
            });

        return () => PIXI.Loader.shared.reset();
    }, [props])

    return (
        <div style={{position: "relative", margin: "auto", width: "100%", height: "100%", display: "flex", alignContent: "center", justifyContent: "center"}}>
                <Stage
                    style={{margin:"auto"}}
                    options={{
                        antialias: false,
                        backgroundAlpha: 1,
                        backgroundColor: 0x303030,
                    }}
                >
                    <PlayArea loaded={loaded}/>
                </Stage>
        </div>
    );
}

export default Runner;