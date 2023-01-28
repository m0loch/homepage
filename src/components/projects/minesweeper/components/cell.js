import React from 'react';
import { Grid } from "@mui/material";
import { styled } from '@mui/system';

import FlagIcon from '@mui/icons-material/Flag';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const CellInternal = styled(Grid)(
    ({ theme, columns, covered }) => {

        const coveredStyle = covered ? {
            border: "2px outset",
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.main,

            "&:hover": {
                backgroundColor: theme.palette.primary.light,
                borderColor: theme.palette.primary.light,
            }
        } : {
            border: "1px solid",
            borderColor: theme.palette.primary.dark,
            backgroundColor: theme.palette.background.card,

        }

        return ({
            ...coveredStyle,

            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",

            boxSizing: "border-box",
            width: `${80 / columns}vw`,
            height: `${80 / columns}vw`,
            maxWidth: `${1200 / columns}px`,
            maxHeight: `${1200 / columns}px`,
            color: theme.palette.link,
        })
    }
);

const iconStyle = { display: "block", width: "60%", height: "60%", margin: "auto" };

// POSSIBLE VALUES
//
// First item
// 0-8 -> adjacent bombs count (0 is empty, the others will have a number)
// X   -> mine
// 
// Second item
//
// .   -> covered
// ''  -> no modifier
// !   -> flag set by user
// ?   -> question mark set by user

function Cell(props) {

    const isCovered = props.value[1] === '' ? 0 : 1;
    let icon;

    if (isCovered) {

        switch (props.value[1]) {
            case '!':
                icon = <FlagIcon style={iconStyle} />
                break;

            case '?':
                icon = <QuestionMarkIcon style={iconStyle} />
                break;

            default:
        }

    } else if (props.value[0]) {
        icon = props.value[0];
    }

    return (
        <CellInternal item
            onClick={props.onClick}
            columns={props.columns}
            covered={isCovered}
        >
            {icon}
        </CellInternal>
    )
}

export default Cell;