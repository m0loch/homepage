import React, { useEffect, useState, useRef } from 'react';
import * as PIXI from 'pixi.js';
import PixiCanvas from './components/pixiCanvas';
import WinScreen from '../common/winScreen';

function Solitaire(props) {
    const [textures, setTextures] = useState(undefined);
    const [victory, setVictory] = useState(false);

    const boardRef = useRef(null);

    useEffect(() => {
        PIXI.Assets.add('cards', `${props.assetsFolder}/cards.json`, { scaleMode: PIXI.SCALE_MODES.LINEAR });
        PIXI.Assets.load('cards')
            .then(textures => {
                setTextures(textures);
            });

        return () => PIXI.Assets.reset();
    }, [props])

    const onWin = () => {
        setVictory(true);
    }

    const newGame = () => {
        boardRef?.current?.NewGame();
        setVictory(false);
    }

    return (
        <div style={{
            position: "relative",
            margin: "auto",
            width: "100%",
            height: "100%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center"
        }}>
            {victory ? <WinScreen onClick={newGame} /> : null}
            {textures ? <PixiCanvas ref={boardRef} onWin={onWin} /> : null}
        </div>
    );
}

export default Solitaire;