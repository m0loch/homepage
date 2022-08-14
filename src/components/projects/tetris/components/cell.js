import React from 'react';
import { styled } from '@mui/system';

function GetTileTheme(value) {
    switch (value) {
        case 1:
            return {
                tileColor: "#01F0F1",
                shadow: "#51FFFF",
                darkShadow: "#00807F",
            };
        case 2:
            return {
                tileColor: "#EFA000",
                shadow: "#FFB050",
                darkShadow: "#785000",
            };
        case 3:
            return {
                tileColor: "#0001F0",
                shadow: "#5052FF",
                darkShadow: "#000080",
            };
        case 4:
            return {
                tileColor: "#00F000",
                shadow: "#50FF50",
                darkShadow: "#008000",
            };
        case 5:
            return {
                tileColor: "#F10100",
                shadow: "#FF5250",
                darkShadow: "#810000",
            };
        case 6:
            return {
                tileColor: "#A100F2",
                shadow: "#B051FF",
                darkShadow: "#510081",
            };
        case 7:
            return {
                tileColor: "#F0F001",
                shadow: "#FFFF51",
                darkShadow: "#808000",
            };
        // case 0:
        default:
            return {
                tileColor: "transparent",
                shadow: "transparent",
                darkShadow: "transparent",
            };
    }
}

const StyledTile = styled('div', {
    shouldForwardProp: (prop) => prop !== 'color'
})(
    ({ theme, color }) => ({
        height: theme.components.tetris.cellSize,
        width: theme.components.tetris.cellSize,

        backgroundColor: color.tileColor,
        boxShadow: `inset -3px -3px ${color.darkShadow},
            inset 3px 3px ${color.shadow}`,
    })
);

function Cell(props) {
    const color = GetTileTheme(props.color);

    return (
        <StyledTile {...props} color={color}/>
    );
}

export default Cell