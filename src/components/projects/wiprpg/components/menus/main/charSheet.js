import React from 'react';
import { styled } from '@mui/system';
import { Card, Grid, LinearProgress } from "@mui/material";
import Classes from '../../../data/classes';
import getExpForNextLevel from '../../../data/levels';

const StyledCharTile = styled(Card)(
    ({ theme }) => ({
        display: 'flex',
        height: '46%',
        width: '46%',
        justifyContent: 'center',

        backgroundColor: theme.palette.background.card,
        margin: "1% 2%",
    })
);

const StyledContent = styled('div')(
    () => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '90%',
        width: '90%',
    })
);

const StyledProgress = styled(LinearProgress)(
    () => ({
        width: "100%",
        height: "15px",
        borderRadius: "5px",
    })
)

function CharSheet(props) {
    return (
        <StyledCharTile>
            <StyledContent>
                <p>{props.char.name}</p>
                <p>Level {props.char.lvl} {Classes[props.char.class].name}</p>
                <p>Health: {props.char.hp}/{props.char.maxhp}</p>
                <StyledProgress variant="determinate" value={props.char.hp * 100 / props.char.maxhp} />
                <p>EXP: {props.char.xp}/{getExpForNextLevel(props.char.lvl)}</p>
                <StyledProgress variant="determinate" value={props.char.xp * 100 / getExpForNextLevel(props.char.lvl)} />
            </StyledContent>
        </StyledCharTile>
    );
}

export default CharSheet;