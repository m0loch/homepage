import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { tylesSetLevel } from '../../../redux/actions';

import { Container } from "@mui/material";
import TylesField from './components/tylesField';
import Tyle from './components/tyle';
import WinScreen from '../common/winScreen';
import LevelLoader from './utils/levelLoader';
import PerformMove from './utils/movesHandler';


function Tyles(props) {

    const [level, setLevel] = useState({ victory: false, tiles: [] });

    const newGame = () => {
        props.tylesSetLevel(props.level + 1);
    }

    const checkVictory = (tiles) => {
        // reinterprest structure as string
        const depot = JSON.stringify(tiles);

        // searches (linearly) for a tyle set as off
        return !depot.includes('0');
    }

    useEffect(() => {
        LevelLoader(props.levelsFolder, props.level, setLevel);
    }, [props.levelsFolder, props.level]);

    const handleClick = (x, y, value, modifier) => {

        const tiles = PerformMove(level.tiles, x, y, value, modifier);

        setLevel({
            ...level,
            tiles,
            victory: checkVictory(tiles),
         });
    }

    return (
        <Container style={{ display: "flex" }}>
            <TylesField container size={level.columns}>
                {level.victory ? <WinScreen onClick={newGame}></WinScreen> : null}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Tyles);