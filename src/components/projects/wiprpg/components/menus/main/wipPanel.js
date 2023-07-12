import React from 'react';
import { styled } from '@mui/system';
import { Card, } from '@mui/material';

const StyledPanel = styled(Card)(
    ({ theme }) => ({
        display: 'flex',
        height: '96%',
        width: '96%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

        backgroundColor: theme.palette.background.card,
        margin: '1% 2%',
    })
);

function WipPanel(props) {
    return (
        <StyledPanel>
            <h1>{props.children}</h1>
            <br/>
            <h1>WORK IN PROGRESS</h1>
        </StyledPanel>
    );
}

export default WipPanel;