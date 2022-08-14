import React from 'react';
import { styled } from '@mui/system';

const StyledGrid = styled('div')(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        position: "relative",

        height: `calc((22 * ${theme.components.tetris.cellSize}) + 6px)`,
        width: `calc(10 * ${theme.components.tetris.cellSize} + 6px)`,
        borderRadius: "5px",
        border: `solid ${theme.palette.primary.contrast}`,
    })
);

function GameGrid(props) {
    return (
        <StyledGrid {...props} >
            {props.children}
        </StyledGrid>
    );
}

export default GameGrid;