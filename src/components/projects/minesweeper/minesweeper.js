import React, { useState } from 'react';

import { Container } from "@mui/material";

import ControlBar from './components/controlBar';
import Field from './components/field';
import Cell from './components/cell';
import WinScreen from '../common/winScreen';
import Randomizer from './utils/randomizer';
import { CheckVictory, DiscoverTile } from './utils/utils';

const Settings = [
    { rows: 9, cols: 9, mines: 10 },
    { rows: 16, cols: 16, mines: 40 },
    { rows: 16, cols: 30, mines: 90 },
];

function Minesweeper(props) {

    const settings = Settings[props.difficulty];

    const getEmptyGameState = () => {
        return {
            inited: false,
            flags: 0,
            victory: false,
            failure: false,
            field: Array.apply(0, { length: settings.rows })
                .map(() => Array.apply(0, { length: settings.cols })
                    .map(() => [0, '.'])),
        }
    }

    const [level, setLevel] = useState(getEmptyGameState());
    const [mode, setMode] = useState(0);

    const newGame = () => {
        setLevel(getEmptyGameState());
    }

    const handleClick = (x, y, value) => {

        // If the game is ended, exit
        if (level.victory || level.failure) {
            return;
        }

        const newState = { ...level };

        if (mode === 0) {

            if (!level.inited) {
                Randomizer(x, y, settings, newState.field);
                newState.inited = true;
            }

            DiscoverTile(newState.field, x, y, settings);

            if (value === 'X') {
                // animate exploding mine...?
                newState.failure = true;
            }
        
            if (CheckVictory(newState.field)) {
                newState.victory = true;
            }

        } else if (mode === 1) {

            if (newState.field[y][x][1] === '') { return; }

            // Checks if there's already a flag set
            if (newState.field[y][x][1] === '!') {

                newState.field[y][x][1] = '.';
                newState.flags--;

            } else {

                if (level.flags < settings.mines) {

                    // Set flag
                    newState.field[y][x][1] = '!';
                    newState.flags++;
                }

            }

        } else if (mode === 2) {

            if (newState.field[y][x][1] === '') { return; }

            // Set question mark - no further action required
            newState.field[y][x][1] = newState.field[y][x][1] === '?' ? '.' : '?';

        }

        setLevel(newState);
    }

    return (
        <Container style={{ display: "flex", flexDirection: "column" }}>
            <ControlBar
                newGame={newGame}
                minesLeft={settings.mines - level.flags}
                mode={mode}
                onModeChange={setMode}
            />
            <Field container>
                {level.victory ? <WinScreen onClick={newGame} /> : null}
                {level.field.map((row, y) => (
                    <div key={y} style={{ display: "flex", flexDirection: "row" }}>{
                        row.map((el, x) => (
                            <Cell
                                key={x}
                                idx={x}
                                value={el}
                                hasEnded={level.victory || level.failure}
                                columns={settings.cols}
                                onClick={() => handleClick(x, y, el[0])}
                            />
                        ))
                    }</div>
                ))}
            </Field>
        </Container>
    );
}

export default Minesweeper;