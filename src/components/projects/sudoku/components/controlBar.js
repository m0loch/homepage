import { styled } from '@mui/system';

import { IconButton, Grid } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import UndoIcon from '@mui/icons-material/Undo';
import ClearIcon from '@mui/icons-material/Clear';
import EditNoteIcon from '@mui/icons-material/EditNote';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

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

const ButtonInternal = styled(IconButton)(
    ({ theme }) => ({
        height: "4vw",
        width: "4vw",
        display: "flex",
        flexDirection: "column",
        color: theme.palette.link,

        [theme.breakpoints.down('md')]: {
            width: "16vw",
            height: "16vw",
        },
    })
);

const ControlBar = (props) => {
    return (
        <ControlBarInternal>
            <ButtonInternal
                variant="contained"
                onClick={props.reset}
            >
                <ReplayIcon />
                <p>Reset</p>
            </ButtonInternal>
            <ButtonInternal
                variant="contained"
                onClick={props.undo}
            >
                <UndoIcon />
                <p>Undo</p>
            </ButtonInternal>
            <ButtonInternal
                variant="contained"
                onClick={props.erase}
            >
                <ClearIcon />
                <p>Erase</p>
            </ButtonInternal>
            <ButtonInternal
                variant="contained"
                onClick={props.notes}
            >
                <EditNoteIcon />
                <p>Notes</p>
            </ButtonInternal>
            <ButtonInternal
                variant="contained"
                onClick={props.hint}
            >
                <HelpOutlineIcon />
                <p>Hint</p>
            </ButtonInternal>
        </ControlBarInternal>
    )
}

export default ControlBar;