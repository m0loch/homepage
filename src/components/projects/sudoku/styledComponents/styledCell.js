import React from 'react';
import { Grid } from "@mui/material";
import { styled } from '@mui/system';

const StyledCellInternal = styled('div', {
    shouldForwardProp: (props) => props !== 'dark'
        && props !== 'base'
        && props !== 'toggle'
        && props !== 'error'
})(
    ({ theme, dark, base, toggle, error }) => {
        return ({
            display: "flex",
            backgroundColor: dark ? theme.palette.sudoku.darkbg : theme.palette.sudoku.lightbg,
            color: error ? theme.palette.sudoku.error : (toggle || base ? theme.palette.sudoku.base : theme.palette.sudoku.value),
            alignContent: "center",
            justifyContent: "center",
            height: '100%',
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: theme.palette.link,
            fontWeight: base ? "bold" : "normal",
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
        (props.section + Math.floor(props.section / 2)) % 2 === 0
    ;

    let value = props.value;
    let isNote = (value === null);

    if (isNote) {
        value = [];
        for (let i = 0; i < props.notes.length; i++) {
            if (props.notes[i] === 0) continue;
            if (value.length > 0) value += " ";
            value += i+1;
        }
    }

    return (
        <Grid item
            key={props.value}
            style={style}
        >
            <StyledCellInternal
                dark={dark}
                base={props.base}
                toggle={props.toggle}
                error={props.error === 1}
                onClick={(e) => {
                    return (props.base || !props.onClick) ? undefined : props.onClick(e, props.section, props.idx);
                }}
            >
                <p style={{ margin: "auto 5px", fontSize: isNote ? "1.4vmin" : "3.5vmin" }}>{value}</p>
            </StyledCellInternal>
        </Grid>
    )
}

export default StyledCell;