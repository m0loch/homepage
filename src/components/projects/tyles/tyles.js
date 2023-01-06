import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { tylesSetLevel, tylesSetLevelBestScore } from '../../../redux/actions';

import { Container } from "@mui/material";

import ControlBar from './components/controlBar';
import TylesField from './components/tylesField';
import Tyle from './components/tyle';
import TylesWinScreen from './dialogs/tylesWinScreen';
import LevelLoader from './utils/levelLoader';
import PerformMove from './utils/movesHandler';
import LevelSelectDlg from './dialogs/levelSelectDlg';
import HelpDlg from './dialogs/helpDlg';


function Tyles(props) {

    const [dlgOpen, setDlgOpen] = useState(0);
    const [level, setLevel] = useState({ moves: 0, victory: false, tiles: [] });
    const bestScore = props.scores[props.level].bestScore;

    // Only accessible through winScreen
    const nextLevel = () => {
        props.tylesSetLevel(props.level + 1);
    }

    // ControlBar events
    const startOver = () => {
        LevelLoader(props.levelsFolder, props.level, setLevel);
    }

    const showHelp = () => { if (dlgOpen === 0 && !level.victory) { setDlgOpen(1) } }
    const selectLevel = () => { if (dlgOpen === 0 && !level.victory) { setDlgOpen(2) } }
    const onDlgClose = () => setDlgOpen(0);

    const checkVictory = (tiles, movesCount) => {
        // reinterprest structure as string
        const depot = JSON.stringify(tiles);

        // searches (linearly) for a tyle set as off
        const victory = !depot.includes('0');

        if (victory) {
            if (!bestScore || movesCount < bestScore) {
                props.tylesSetLevelBestScore(
                    props.level,
                    { bestScore: movesCount, isBest: movesCount === level.minMoves }
                )
            }
        }

        return victory;
    }

    useEffect(() => {
        LevelLoader(props.levelsFolder, props.level, setLevel);
    }, [props.levelsFolder, props.level]);

    const handleClick = (x, y, value, modifier) => {

        const tiles = PerformMove(level.tiles, x, y, value, modifier);

        setLevel({
            ...level,
            moves: level.moves + 1,
            tiles,
            victory: checkVictory(tiles, level.moves + 1),
        });
    }

    return (
        <Container style={{ display: "flex", flexDirection: "column" }}>
            <ControlBar
                newGame={startOver}
                showHelp={showHelp}
                selectLevel={selectLevel}
                currentScore={level.moves}
                bestScore={bestScore}
                targetScore={level.minMoves}
            />
            <TylesField container size={level.columns}>
                {
                    dlgOpen === 1 ?
                    <HelpDlg types={level.types} onOK={onDlgClose} />
                    : dlgOpen === 2 ?
                    <LevelSelectDlg
                        level={props.level}
                        scores={props.scores}
                        onSelect={idx => props.tylesSetLevel(idx)}
                        onOK={onDlgClose}
                    />
                    : null
                }
                {level.victory ?
                    <TylesWinScreen
                        onReplay={startOver}
                        onNext={nextLevel}
                        minMoves={level.minMoves}
                        moves={level.moves}
                    />
                    : null}
                {level.tiles.map(
                    (row, y) => (
                        row.map(
                            (el, x) => (
                                <Tyle
                                    key={x}
                                    idx={x}
                                    value={el}
                                    columns={level.columns}
                                    onClick={() => handleClick(x, y, el[0], el[1])}
                                />
                            )
                        )
                    )
                )}
            </TylesField>
        </Container>
    );
}


function mapStateToProps(state) {
    return { ...state.tyles };
}

const mapDispatchToProps = {
    tylesSetLevel,
    tylesSetLevelBestScore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tyles);