import React, { useState } from 'react';

import { Container } from "@mui/material";

import ControlBar from './components/controlBar';
import Field from './components/field';
import Cell from './components/cell';
import WinScreen from '../common/winScreen';

const isDebug = true;

const Settings = [
    { rows: 9, cols: 9, mines: 10 },
    { rows: 16, cols: 16, mines: 40 },
    { rows: 16, cols: 30, mines: 90 },
];

function Minesweeper(props) {

    const settings = Settings[props.difficulty];

    if (isDebug) {
        console.log(props.difficulty);
        console.log(settings);
    }

    const getEmptyGameState = () => {
        return {
            moves: 0,
            flags: 0,
            victory: false,
            field: Array.apply(0, { length: settings.rows })
                .map(() => Array.apply(0, { length: settings.cols })
                    .map(() => '0.')),
        }
    }
    

    const [level, setLevel] = useState(getEmptyGameState());

    console.log(level);

    const newGame = () => {
        setLevel(getEmptyGameState());
    }

    const handleClick = (x, y, value, modifier) => {

        alert('move detected');
        const newState = { ...level };

        if (level.moves === 0) {
            // mines placement
        }

        newState.moves++;

        // if (digmine) {}
        //  -> set loss
        //  -> show mines placement
        //  -> animate exploding mine...?
        // } else if (checkvictory) {
        //    newState.victory = true;
        // }
    }

    return (
        <Container style={{ display: "flex", flexDirection: "column" }}>
            <ControlBar
                newGame={newGame}
                minesLeft={settings.mines - level.flags}
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