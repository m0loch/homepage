import React from 'react';
import { styled } from '@mui/system';

import { Button, Card, Grid } from "@mui/material";
import LoopIcon from '@mui/icons-material/Loop';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import FlagIcon from '@mui/icons-material/Flag';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


const ControlBarInternal = styled(Grid)(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "space-around",

        margin: "30px auto",
        width: "40vw",

        [theme.breakpoints.down('md')]: {
            width: "80vw",
        }
    })
);

const ButtonInternal = styled(Button)(
    ({ theme, highlight }) => {

        const hl = highlight ? {
            border: `2px outset ${theme.palette.primary.contrast}`,
        } : null;

        return ({
            ...hl,
            height: "4vw",
            width: "4vw",

            [theme.breakpoints.down('md')]: {
                height: "8vw",
                width: "8vw",
                minWidth: "unset"
            },
        })
    }
);

const ModeSelector = styled('div')(
    ({ theme }) => ({
        [theme.breakpoints.up('md')]: {
            display: "none",
        },
    })
)

const ScoreSection = styled(Card)(
    ({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background.card,
        height: "4vw",
        width: "8vw",

        [theme.breakpoints.down('md')]: {
            height: "8vw",
            width: "24vw",
        },
    })
)

const ControlBar = (props) => {
    const selectors = [
        <LocationSearchingIcon />,
        <FlagIcon />,
        <QuestionMarkIcon />,
    ];

    return (
        <ControlBarInternal>
            <ButtonInternal
                variant="contained"
                onClick={props.newGame}
            >
                <LoopIcon />
            </ButtonInternal>

            <ModeSelector>
                {selectors.map((item, idx) =>
                    <ButtonInternal
                        key={idx}
                        highlight={idx === props.mode ? 1 : 0}
                        variant="contained"
                        onClick={() => props.onModeChange(idx)}
                    >
                        {item}
                    </ButtonInternal>
                )}
            </ModeSelector>

            <ScoreSection>
                <p>{props.minesLeft} to go</p>
            </ScoreSection>
        </ControlBarInternal>
    )
}

export default ControlBar;