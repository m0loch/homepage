import React, { useState } from 'react';

import { Container } from "@mui/material";

import ControlBar from './components/controlBar';
import Field from './components/field';
import Cell from './components/cell';
import WinScreen from '../common/winScreen';
import Randomizer from './utils/randomizer';

const isDebug = true;

const Settings = [
    { rows: 9, cols: 9, mines: 10 },
    { rows: 16, cols: 16, mines: 40 },
    { rows: 16, cols: 30, mines: 90 },
];

function Minesweeper(props) {

    const settings = Settings[props.difficulty];

    const getEmptyGameState = () => {
        return {
            moves: 0,
            flags: 0,
            victory: false,
            field: Array.apply(0, { length: settings.rows })
                .map(() => Array.apply(0, { length: settings.cols })
                    .map(() => [0, '.'])),
        }
    }

    const [level, setLevel] = useState(getEmptyGameState());
    const [mode, setMode] = useState(0);

    if (isDebug) {
        console.log(props.difficulty);
        console.log(settings);
        console.log(level);
    }

    const newGame = () => {
        setLevel(getEmptyGameState());
    }

    const handleClick = (x, y, value, modifier) => {

        if (modifier === ''         // cell already discovered
            || modifier === '!') {  // flag set
            return;
        }

        const newState = { ...level };

        if (mode === 0) {

            if (level.moves === 0) {
                Randomizer(x, y, settings, newState.field);
            }

            newState.moves++;

            // Discover cell
            newState.field[y][x][1] = '';

            // if (digmine) {}
            //  -> set loss
            //  -> animate exploding mine...?
            // } else if (checkvictory) {
            //    newState.victory = true;
            // }
        } else {

            // Set flag / question mark
            newState.field[y][x][1] = mode === 1 ? '!' : '?';

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
                                columns={settings.cols}
                                onClick={() => handleClick(x, y, el[0], el[1])}
                            />
                        ))
                    }</div>
                ))}
            </Field>
        </Container>
    );
}

export default Minesweeper;