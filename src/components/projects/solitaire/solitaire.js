import React, { useEffect, useState, useRef } from 'react';
import * as PIXI from 'pixi.js';
import PixiContainer from '../common/pixiContainer';
import PixiCanvas from './components/pixiCanvas';
import WinScreen from '../common/winScreen';

function Solitaire(props) {
    const [textures, setTextures] = useState(undefined);
    const [victory, setVictory] = useState(false);

    const boardRef = useRef(null);

    useEffect(() => {
        PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.LINEAR;

        PIXI.Assets.add('cards', `${props.assetsFolder}/cards.json`);
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
        <PixiContainer>
            {victory ? <WinScreen onClick={newGame} /> : null}
            {textures ? <PixiCanvas ref={boardRef} onWin={onWin} /> : null}
        </PixiContainer>
    );
}

export default Solitaire;