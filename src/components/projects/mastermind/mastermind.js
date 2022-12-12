import React, { useState } from 'react';

import { Container } from "@mui/material";
import Board from './components/board';
import Row from './components/row';
import Orb from './components/orb';
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

    const onOrbClicked = (arg) => {
        console.log(arg);
    }

    return (
        <Container style={{ width: "fit-content" }}>
            <Board container>

                {gameState.victory ? <WinScreen onClick={() => NewGame(settings)} /> : null}
                {gameState.rows.map((row, x) => (
                    <Row
                        key={x}
                        selected={x === gameState.currentTry}
                    >
                        {
                            // TMP: override the first row for debugging purposes
                            (x === 0 && gameState.code ? gameState.code : row).map((tile, y) =>
                                <Orb
                                    key={y}
                                    value={tile}
                                    onClick={() => onOrbClicked(x * 10 + y)}
                                />
                            )
                        }
                    </Row>
                )
                )}
            </Board>
        </Container>
    );
};

export default MasterMind;