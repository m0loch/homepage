import React, { useEffect, useState, useCallback } from 'react';
import { Stage } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';

import "../../../css/pixi.css";

import Board from './board';
import RandomizeTiles from './utils/randomizeTiles';
import CalculateTileTexture from './utils/calculateTileTexture';

function WinScreen(props) {
    
    return(
        <div className="winpanel" onClick={props.onClick}>
            <h1>VICTORY</h1>
        </div>
    );
}

function Mosaic(props) {

    const [loaded, setLoaded] = useState(false);
    const [sprites, setSprites] = useState([]);
    const [victory, setVictory] = useState(false);

    const onVictory = () => {
        setVictory(true);
    }

    
    const newGame = useCallback(() => {
        const cfg = RandomizeTiles(props.rows * props.cols);

        const texture = PIXI.utils.TextureCache['img'];
        const tileHeight = (texture.height / props.rows);
        const tileWidth = (texture.width / props.cols);
    
        const tiles = [];
        for (let i = 0; i < (props.rows * props.cols); i++) {

            let texture = CalculateTileTexture(
                cfg[i],
                props,
                tileHeight,
                tileWidth);

            tiles.push({
                realIndex: cfg[i], // this will keep track of where the tile will need to end up
                currIndex: i,
                texture,
                x: (i % props.cols) * tileWidth,
                y: Math.floor(i / props.cols) * tileHeight,
            });
        }

        setSprites(tiles);
        setVictory(false);
    }, [props]);

    useEffect(() => {
        const loader = PIXI.Loader.shared;

        if (!PIXI.utils.TextureCache['img']) {
            loader
                .add('img', process.env.PUBLIC_URL + props.img)
                .load(() => {
                    setLoaded(true);
                    newGame();
                });
        } else {
            setLoaded(true);
            newGame();
        }

    }, [newGame, props.img])

    return (
        <div className='full-body'>
            <div className="pixi-container">
            {(victory) ? <WinScreen onClick={newGame}></WinScreen> : null}
                <Stage style={{margin:"auto"}}>
                    <Board
                        image={props.img}
                        rows={props.rows}
                        cols={props.cols}
                        sprites={sprites}
                        loaded={loaded}
                        onVictory={onVictory}
                        victory={victory}
                    />
                </Stage>
            </div>
        </div>
    );
}

export default Mosaic;