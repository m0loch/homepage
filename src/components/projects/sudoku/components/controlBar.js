import { styled } from '@mui/system';

import { IconButton, Grid } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import UndoIcon from '@mui/icons-material/Undo';
import ClearIcon from '@mui/icons-material/Clear';
import EditNoteIcon from '@mui/icons-material/EditNote';
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

const ButtonInternal = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== 'pressed'
})(
    ({ theme, pressed }) => ({
        height: "4vw",
        width: "4vw",
        display: "flex",
        flexDirection: "column",
        color: pressed ? theme.palette.sudoku.selected : theme.palette.link,

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
                onClick={props.reset}
            >
                <ReplayIcon />
                <p>Reset</p>
            </ButtonInternal>
            <ButtonInternal
                onClick={props.undo}
            >
                <UndoIcon />
                <p>Undo</p>
            </ButtonInternal>
            <ButtonInternal
                onClick={props.erase}
                pressed={props.isErasing}
            >
                <ClearIcon />
                <p>Erase</p>
            </ButtonInternal>
            <ButtonInternal
                onClick={props.notes}
                pressed={props.isNotating}
            >
                <EditNoteIcon />
                <p>Notes</p>
            </ButtonInternal>
            <ButtonInternal
                onClick={props.selectLevel}
            >
                <ListAltIcon />
                <p>Levels</p>
            </ButtonInternal>
        </ControlBarInternal>
    )
}

export default ControlBar;