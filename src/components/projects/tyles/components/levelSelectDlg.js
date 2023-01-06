import React from 'react';
import { styled, keyframes } from '@mui/system';
import { Button } from "@mui/material";
import LevelSelect from './levelSelect';

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

export default function LevelSelectDlg(props) {

    return (
        <StyledPanel>
            <LevelSelect {...props} />
            <ReportActions>
                <ActionButton onClick={props.onOK}>Ok</ActionButton>
            </ReportActions>
        </StyledPanel>
    );
}
