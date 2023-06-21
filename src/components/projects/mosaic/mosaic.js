import React, { useEffect, useState, useCallback } from 'react';
import { Stage } from '@pixi/react';
import * as PIXI from 'pixi.js';

import { styled } from '@mui/system';

import Board from './board';
import WinScreen from '../common/winScreen';
import RandomizeTiles from './utils/randomizeTiles';
import CalculateTileTexture from './utils/calculateTileTexture';

const isDebug = false;

const FullBody = styled('div')(
    () => ({
        alignSelf: "center",
        display: "flex",
        flex: "1 1 auto",
        width: "100%",
        height: "90vh",
    })
);

const PixiContainer = styled('div')(
    () => ({
        position: "relative",
        margin: "auto",
        width: "100%",
        height: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
    })
);

function Mosaic(props) {
    const [texture, setTexture] = useState(undefined);
    const [sprites, setSprites] = useState([]);
    const [victory, setVictory] = useState(false);

    const onVictory = () => {
        setVictory(true);
    }

    const newGame = useCallback(() => {

        if (!texture) {
            return
        }

        const cfg = RandomizeTiles(props.rows * props.cols, isDebug);

        const tileHeight = (texture.height / props.rows);
        const tileWidth = (texture.width / props.cols);

        const tiles = [];
        for (let i = 0; i < (props.rows * props.cols); i++) {

            let tile = CalculateTileTexture(
                texture,
                cfg[i],
                props,
                tileHeight,
                tileWidth);

            tiles.push({
                realIndex: cfg[i], // this will keep track of where the tile will need to end up
                currIndex: i,
                texture: tile,
                x: (i % props.cols) * tileWidth,
                y: Math.floor(i / props.cols) * tileHeight,
            });
        }

        setSprites(tiles);
        setVictory(false);
    }, [texture, props]);

    useEffect(() => {
        PIXI.Assets.load(process.env.PUBLIC_URL + props.img)
            .then(texture => {
                setTexture(texture);
                newGame();
            });
    }, [newGame, props.img])

    return (
        <FullBody>
            <PixiContainer>
                {(victory) ? <WinScreen onClick={newGame} /> : null}
                <Stage
                    style={{ margin: "auto" }}
                    options={{ backgroundAlpha: 0 }}
                >
                    <Board
                        {...props}
                        sprites={sprites}
                        texture={texture}
                        onVictory={onVictory}
                        victory={victory}
                    />
                </Stage>
            </PixiContainer>
        </FullBody >
    );
}

export default Mosaic;