import React, { useState } from 'react';

import { Container } from "@mui/material";
import Board from './components/board';
import Row from './components/row';
import { GenerateCode } from './utils/utils';
import WinScreen from '../common/winScreen';
import SelectionDlg from './components/selectionDlg';

const Settings = [
    { tries: 9, colors: 6, digits: 4 },
    { tries: 12, colors: 8, digits: 6 },
];

const NewGame = (settings) => {
    return {
        rows: Array.apply(0, { length: settings.tries })
            .map(() => GenerateEmptyRow(settings.digits)),
        currentTry: 0,
        editingDigit: undefined,
        code: GenerateCode(settings.digits, settings.colors),
        victory: false,
        dialogOpen: false,
    };
}

const GenerateEmptyRow = (size) => {
    return Array.apply(0, { length: size }).map(() => undefined);
}

function MasterMind(props) {

    const settings = Settings[props.difficulty];
    const [gameState, setGameState] = useState(NewGame(settings));

    const onOrbClicked = ({ screenX, screenY }, idx) => {
        setGameState({
            ...gameState,
            dialogOpen: {x: screenX, y: screenY},
            editingDigit: idx,
         });
    }

    const onDlgSelect = (value) => {
        const rows = gameState.rows;
        rows[gameState.currentTry][gameState.editingDigit] = value;

        setGameState({
            ...gameState,
            dialogOpen: false,
            editingDigit: undefined,
        })
    }

    const onDlgCancel = () => {
        setGameState({ ...gameState, dialogOpen: false });
    }

    return (
        <Container style={{ width: "fit-content" }}>
            <Board container>
                <SelectionDlg
                    open={gameState.dialogOpen !== false}
                    optionsNumber={settings.colors}
                    onSelect={onDlgSelect}
                    onClose={onDlgCancel}
                    position={gameState.dialogOpen}
                />
                {gameState.victory ? <WinScreen onClick={() => setGameState(NewGame(settings))} /> : null}
                {gameState.rows.map((row, x) =>
                    <Row
                        key={x}
                        idx={x}
                        selected={x === gameState.currentTry}
                        value={row}
                        onOrbClicked={onOrbClicked}
                    />
                )}
            </Board>
        </Container>
    );
};

export default MasterMind;