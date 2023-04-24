import React, { useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';
import PixiCanvas from './components/pixiCanvas';

function Solitaire(props) {
    PIXI.utils.skipHello();

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;

        PIXI.Loader.shared
            .add('char', `${props.assetsFolder}/cards.json`)
            .load(() => {
                setLoaded(true);
            });

        return () => PIXI.Loader.shared.reset();
    }, [props])

    const onWin = () => {
        // TODO: add something
        // The main issue here is that changing the state to show the usual WinScreen would start a new game
    }

    return (
        <div style={{ position: "relative", margin: "auto", width: "100%", height: "100%", display: "flex", alignContent: "center", justifyContent: "center" }}>
            { loaded ? <PixiCanvas onWin={onWin}/> : null }
        </div>
    );
}

export default Solitaire;