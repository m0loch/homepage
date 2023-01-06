import { styled } from '@mui/system';

import { Button, Card, Grid } from "@mui/material";
import LoopIcon from '@mui/icons-material/Loop';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';

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
    ({ theme }) => ({
        height: "4vw",
        width: "4vw",

        [theme.breakpoints.down('md')]: {
            width: "16vw",
            height: "16vw",
        },
    })
);

const ScoreSection = styled(Card)(
    ({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background.card,
        height: "4vw",
        width: "4vw",

        [theme.breakpoints.down('md')]: {
            width: "16vw",
            height: "16vw",
        },
    })
)

const ControlBar = (props) => {
    return (
        <ControlBarInternal>
            <ButtonInternal
                variant="contained"
                onClick={props.newGame}
            >
                <LoopIcon />
            </ButtonInternal>
            <ButtonInternal
                variant="contained"
                onClick={props.showHelp}
            >
                <HelpOutlineIcon />
            </ButtonInternal>
            <ButtonInternal
                variant="contained"
                onClick={props.selectLevel}
            >
                <ListAltIcon />
            </ButtonInternal>
            {
                props.bestScore ?
                    <ScoreSection>
                        <p>{props.currentScore} / {props.targetScore}</p>
                    </ScoreSection>
                    : null
            }
        </ControlBarInternal>
    )
}

export default ControlBar;