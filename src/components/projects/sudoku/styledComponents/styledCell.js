import React from 'react';
import { Grid } from "@mui/material";
import { styled } from '@mui/system';

const StyledCellInternal = styled('div', {
    shouldForwardProp: (props) => props !== 'dark'
})(
    ({ theme, dark, isBase }) => {
        return ({
            display: "flex",
            backgroundColor: dark ? theme.palette.sudoku.darkbg : theme.palette.sudoku.lightbg,
            color: isBase ? theme.palette.sudoku.base : theme.palette.sudoku.value,
            alignContent: "center",
            justifyContent: "center",
            height: '100%',
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: theme.palette.link,
        })
    }
);

function StyledCell(props) {
    const style = {
        width: `${100/(props.vCount)}%`,
        height: `${100/(props.hCount)}%`,
    };

    // For odd numbers of columns it's easy, on even numbers we need to change parity
    // at the beginning of each row
    const dark = props.hCount % 2 ?
        props.section % 2 === 0 : // odd columns: easy
        (props.section + Math.floor(props.section / 2)) % 2 === 0;

    return (
        <Grid item
            key={props.value}
            style={style}
        >
            <StyledCellInternal dark={dark} isBase={props.isBase} onClick={(e) => props.onClick(e, props.section, props.idx)}>
                <p style={{ margin: "auto", fontSize: "3vw" }} value={props.value}>{props.value}</p>
            </StyledCellInternal>
        </Grid>
    )
}

export default StyledCell;