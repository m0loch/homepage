import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Card, LinearProgress } from '@mui/material';

import Classes from '../../../data/classes';
import getExpForNextLevel from '../../../data/levels';

const StyledCharTile = styled(Card)(
    ({ theme }) => ({
        display: 'flex',
        height: '46%',
        width: '46%',
        justifyContent: 'center',

        backgroundColor: theme.palette.background.card,
        margin: '1% 2%',
    })
);

const StyledContentInternal = styled('div')(
    () => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        flexGrow: 2,
    })
);

const StyledProgress = styled(LinearProgress)(
    () => ({
        width: '100%',
        height: '15px',
        borderRadius: '5px',
    })
)

function StyledContent(props) {
    return (
        <div style={{ height: '100%', width: '90%', display: 'flex', flexDirection: 'column' }}>
            <p style={{ flexBasis: '20px' }}>{props.charName}</p>
            <StyledContentInternal>
                {props.children}
            </StyledContentInternal>
        </div>
    )
}

function StatLabel(props) {
    return (
        <div style={{ display: 'flex', width: '60%', justifyContent: 'space-between' }}>
            <div>{props.label}:</div>
            <div>{props.value}</div>
        </div>
    )
}

function CharSheet(props) {
    const [page, setPage] = useState(0);

    return (
        <StyledCharTile onClick={() => setPage((page + 1) % 2)}>
            {page === 0 ? (
                <StyledContent charName={props.char.name}>
                    <p>Level {props.char.lvl} {Classes[props.char.class].name}</p>
                    <p>Health: {props.char.hp}/{props.char.maxhp}</p>
                    <StyledProgress variant='determinate' value={props.char.hp * 100 / props.char.maxhp} />
                    <p>EXP</p>
                    <StyledProgress variant='determinate' value={props.char.xp * 100 / getExpForNextLevel(props.char.lvl)} />
                </StyledContent>
            ) : (
                <StyledContent charName={props.char.name}>
                    <StatLabel label='Strength' value={props.char.str} />
                    <StatLabel label='Agility' value={props.char.agl} />
                    <StatLabel label='Intellgence' value={props.char.int} />
                    <StatLabel label='Vitality' value={props.char.vit} />
                    <StatLabel label='Luck' value={props.char.lck} />
                    <StatLabel label='Hit%' value={props.char.hit} />
                    <StatLabel label='Magic defense' value={props.char.mdef} />
                </StyledContent>
            )}
        </StyledCharTile>
    );
}

export default CharSheet;