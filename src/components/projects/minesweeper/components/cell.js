import React from 'react';
import { Grid } from "@mui/material";
import { styled } from '@mui/system';

import FlagIcon from '@mui/icons-material/Flag';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const CellInternal = styled(Grid)(
    ({ theme, columns }) => ({
        boxSizing: "border-box",
        border: "2px outset",
        borderColor: theme.palette.primary.main,
        width: `${80 / columns}vw`,
        height: `${80 / columns}vw`
    })
);

const StyledIconInternal = styled('div')(
    ({ theme, covered }) => ({
        display: "flex",
        backgroundColor: covered ? theme.palette.primary.main : theme.palette.background.card,
        color: theme.palette.link,
        alignContent: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",

        "&:hover": {
            backgroundColor: covered ? theme.palette.primary.light : theme.palette.background.card
        }
    })
);

const iconStyle = { display: "block", width: "60%", height: "60%", margin: "auto" };

// POSSIBLE VALUES
//
// First character
// 0-8 -> adjacent bombs count (0 is empty, the others will have a number)
// X   -> mine
// 
// Second character
//
// null -> no modifier
// ! -> flag set by user
// ? -> question mark set by user

function Cell(props) {
    let icon;
    switch (props.value[1]) {
        case '!':
            icon = <FlagIcon style={iconStyle} />
            break;

        case '?':
            icon = <QuestionMarkIcon style={iconStyle} />
            break;

        default:
    }

    return (
        <CellInternal item
            onClick={props.onClick}
            columns={props.columns}
        >
            <StyledIconInternal
                covered={true}
            >
                {icon}
            </StyledIconInternal>
        </CellInternal>
    )
}

export default Cell;