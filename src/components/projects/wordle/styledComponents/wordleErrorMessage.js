import React from 'react';
import { Card } from "@mui/material";
import { styled, keyframes } from '@mui/system';

const fadeAnimation = keyframes`
    0%   { opacity: 1 },
    100% { opacity: 0 },
`;

const WordleErrorDlg = styled(Card)(
    ({ theme }) => ({
        position: "fixed",
        top: "10%",
        zIndex: 1,
        borderRadius: "5px",

        alignItems: "center",
        justifyContent: "center",

        animation: `${fadeAnimation} .5s ease-in .5s 1 normal forwards`,

        [theme.breakpoints.down('md')]: {
             top: "8%",
        },

        backgroundColor: theme.palette.background.card,
        color: theme.palette.wordle.text,
    })
);

function WordleErrorMessage(props) {
    return (
        <WordleErrorDlg>
            <p style={{ margin: "10px" }}>{props.value}</p>
        </WordleErrorDlg>
    );
}

export default WordleErrorMessage;