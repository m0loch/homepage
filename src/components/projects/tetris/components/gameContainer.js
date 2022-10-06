import React from 'react';
import { styled } from '@mui/system';
import { Grid } from '@mui/material';

const StyledGrid = styled(Grid)(
    ({ theme }) => ({
        width: "clamp(800px, 80% ,900px)",
        margin: "auto",

        [theme.breakpoints.down('md')]: {
            width: "95%"
        }
    })
);

function GameContainer(props) {
    return (
        <StyledGrid container>
            {props.children}
        </StyledGrid>
    );
}

export default GameContainer;