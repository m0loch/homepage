import React, { useState } from 'react';

import { Container } from "@mui/material";
import Board from './components/board';
import Row from './components/row';
import { GenerateCode, CheckCode } from './utils/utils';
import WinScreen from '../common/winScreen';
import LoseScreen from './components/loseScreen';
import SelectionDlg from './components/selectionDlg';

const Settings = [
    { tries: 9, colors: 6, digits: 4 },
    { tries: 12, colors: 8, digits: 6 },
];

const NewGame = (settings) => {
    return {
        rows: Array.apply(0, { length: settings.tries })
            .map(() => GenerateEmptyRow(settings.digits)),
        hints: [],
        currentTry: 0,
        editingDigit: undefined,
        solution: GenerateCode(settings.digits, settings.colors),
        victory: false,
        failure: false,
        dialogOpen: false,
    };
}

const GenerateEmptyRow = (size) => {
    return Array.apply(0, { length: size }).map(() => undefined);
}

function MasterMind(props) {

    const settings = Settings[props.difficulty];
    const [gameState, setGameState] = useState(NewGame(settings));

    const onOrbClicked = (e, idx) => {
        // Increments color for clicked orb.
        gameState.rows[gameState.currentTry][idx] =
            gameState.rows[gameState.currentTry][idx] === undefined ? 0
            : (gameState.rows[gameState.currentTry][idx] + 1) % settings.colors;

        setGameState({
            ...gameState,
         });
    }

    const onShowSelector = (e, idx) => {
        e.preventDefault();
        setGameState({
            ...gameState,
            dialogOpen: {x: e.clientX, y: e.clientY},
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

    const SubmitTry = (code) => {
        const res = CheckCode(code, gameState.solution);

        const nextTry = gameState.currentTry + 1;
        const isVictory = res.correct === settings.digits;

        if (!isVictory && (nextTry < settings.tries)) {
            const rows = gameState.rows;
            rows[nextTry] = [...rows[gameState.currentTry]];
        }

        setGameState({
            ...gameState,
            hints: [...gameState.hints, res],
            currentTry: isVictory ? -1 : nextTry,
            victory: isVictory,
            failure: nextTry >= settings.tries && res.correct < settings.digits,
        })
    }

    return (
        <Container style={{ width: "fit-content", paddingBottom: "100px" }}>
            <Board container>
                <SelectionDlg
                    open={gameState.dialogOpen !== false}
                    optionsNumber={settings.colors}
                    onSelect={onDlgSelect}
                    onClose={onDlgCancel}
                    position={gameState.dialogOpen}
                />
                {gameState.victory ? <WinScreen onClick={() => setGameState(NewGame(settings))} /> : null}
                {gameState.failure ? <LoseScreen
                    onClick={() => setGameState(NewGame(settings))}
                    optionsNumber={settings.colors}
                    solution={gameState.solution}
                /> : null}
                {gameState.rows.map((row, x) =>
                    <Row
                        key={x}
                        idx={x}
                        selected={x === gameState.currentTry}
                        value={row}
                        hint={gameState.hints[x]}
                        onOrbClicked={onOrbClicked}
                        onShowSelector={onShowSelector}
                        onSubmit={SubmitTry}
                    />
                )}
            </Board>
        </Container>
    );
};

export default MasterMind;