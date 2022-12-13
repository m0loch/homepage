import React, { useState } from 'react';

import { Container } from "@mui/material";
import Board from './components/board';
import Row from './components/row';
import { GenerateCode } from './utils/utils';
import WinScreen from '../common/winScreen';

const Settings = [
    { tries: 9, colors: 6, digits: 4 },
    { tries: 12, colors: 8, digits: 6 },
];

const NewGame = (settings) => {
    return {
        rows: Array.apply(0, { length: settings.tries })
            .map(() => GenerateEmptyRow(settings.digits)),
        currentTry: 0,
        code: GenerateCode(settings.digits, settings.colors),
        victory: false,
    };
}

const GenerateEmptyRow = (size) => {
    return Array.apply(0, { length: size }).map(() => undefined);
}

function MasterMind(props) {

    const settings = Settings[props.difficulty];
    const [gameState, setGameState] = useState(NewGame(settings));

    // TMP
    console.log(gameState);

    const onOrbClicked = ({ screenX, screenY }, idx) => {
        console.log(`${screenX} x ${screenY}`);
        console.log(idx);


        // setGameState({ ...gameState, victory: true });
    }

    return (
        <Container style={{ width: "fit-content" }}>
            <Board container>

                {gameState.victory ? <WinScreen onClick={() => setGameState(NewGame(settings))} /> : null}
                {gameState.rows.map((row, x) =>
                    <Row
                        key={x}
                        idx={x}
                        selected={x === gameState.currentTry}
                        value={x === 0 ? gameState.code : row} // TMP: override the first row for debugging purposes
                        onOrbClicked={onOrbClicked}
                    />
                )}
            </Board>
        </Container>
    );
};

export default MasterMind;