import React from 'react';
import { styled, keyframes } from '@mui/system';
import { Button } from "@mui/material";

const appearAnimation = keyframes`
    0%   { opacity: 0 },
    100% { opacity: 1 },
`;

const StyledPanel = styled('div')(
    ({ theme }) => ({
        position: "fixed",
        top: "25%",
        left: "30%",
        zIndex: 10,
        height: "50%",
        width: "40%",
        backgroundColor: theme.palette.primary.main,
        border: "5px ridge",
        borderColor: theme.palette.primary.light,
        borderRadius: "5px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",

        opacity: 0,
        animation: `${appearAnimation} .5s ease-in .5s 1 normal forwards`,

        [theme.breakpoints.down('md')]: {
            width: "80%",
            height: "16%",
            top: "42%",
            left: "10%",
        }
    })
);

const ReportVoice = styled('div')(
    ({ theme }) => ({
        display: "flex",
        width: "80%",
        justifyContent: "space-between",
    })
);

const ReportActions = styled('div')(
    ({ theme }) => ({
        display: "flex",
        width: "80%",
        justifyContent: "space-around",
    })
);

const ActionButton = styled(Button)(
    ({ theme }) => ({
        backgroundColor: theme.palette.background.card,
        color: theme.palette.primary.contrast,
        '&:hover': {
            backgroundColor: theme.palette.background.opaque,
        }
    })
);

const calculateRating = (par) => {
    switch (true) {
        case par === 0:
            return 'S';

        case par < 3:
            return 'A';

        case par < 5:
            return 'B';

        default:
            return 'C';
    }
}

export default function TylesWinScreen(props) {

    const rating = calculateRating(props.moves - props.minMoves);

    return (
        <StyledPanel>
            <h1 style={{ maxWidth: "80%", textAlign: "center" }}>Well done!</h1>
            <ReportVoice><p>Optimal number of moves for this stage:</p> <p>{props.minMoves}</p></ReportVoice>
            <ReportVoice><p>Your moves:</p> <p>{props.moves}</p></ReportVoice>
            <ReportVoice><p>RANK:</p> <p>{rating}</p></ReportVoice>

            <ReportActions>
                <ActionButton onClick={props.onReplay}>Play again</ActionButton>
                <ActionButton onClick={props.onNext}>On to the next level!</ActionButton>
            </ReportActions>
        </StyledPanel>
    );
}
