import React, { useEffect, useState, useRef } from 'react';
import * as PIXI from 'pixi.js';
import PixiCanvas from './components/pixiCanvas';
import WinScreen from '../common/winScreen';

function Solitaire(props) {
    const [loaded, setLoaded] = useState(false);
    const [victory, setVictory] = useState(false);

    const boardRef = useRef(null);

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
        setVictory(true);
    }

    const newGame = () => {
        boardRef?.current?.NewGame();
        setVictory(false);
    }

    return (
        <div style={{ position: "relative", margin: "auto", width: "100%", height: "100%", display: "flex", alignContent: "center", justifyContent: "center" }}>
            { victory  ? <WinScreen onClick={newGame} /> : null}
            { loaded ? <PixiCanvas ref={boardRef} onWin={onWin} /> : null }
        </div>
    );
}

export default Solitaire;