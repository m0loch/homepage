import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { tylesSetLevel } from '../../../redux/actions';

import { Container } from "@mui/material";
import StyledField from './components/styledField';
import StyledTile from './components/styledTile';
import WinScreen from '../common/winScreen';
import LevelLoader from './utils/levelLoader';


function Tyles(props) {

    const [level, setLevel] = useState({ tiles: [] });
    const [victory, setVictory] = useState(false);

    const reader = new FileReader();
    reader.onload = async () => {
        console.log(reader.result);
    }

    const newGame = () => {
        props.tylesSetLevel(props.level + 1);
        setVictory(false);
    }

    const checkVictory = (tiles) => {
        return false;
    }

    useEffect(() => {
        LevelLoader(props.levelsFolder, props.level, setLevel);
    }, [props.levelsFolder, props.level]);

    ////////////////////////
    // Check for game's end
    ////////////////////////
    if (!victory && checkVictory(level.tiles)) {
        setVictory(true);
    }

    return (
        <Container style={{ display: "flex" }}>
            <StyledField container size={level.columns}>
                {victory ? <WinScreen onClick={newGame}></WinScreen> : null}
                {level.tiles.map(
                    (row, y) => (
                        row.map(
                            (el, x) => (
                                <StyledTile
                                    key={x}
                                    idx={x}
                                    value={el}
                                    tilesPerSide={level.columns}
                                    onClick={() => alert(y * level.columns + x)}
                                />
                            )
                        )
                    )
                )}
            </StyledField>
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