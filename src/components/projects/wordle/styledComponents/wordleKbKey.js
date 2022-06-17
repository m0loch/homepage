import { Card } from "@mui/material";
import { styled, useTheme } from '@mui/system';
import Status from "../status";

const WordleKbKeyInternal = styled(Card)(
    ({ theme }) => ({
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        border: 0,
        padding: 0,
        margin: "0 6px 0 0",
        height: "58px",

        backgroundColor: theme.palette.background.card,
        color: theme.palette.wordle.text,

        fontFamily: "inherit",
        fontWeight: "bold",
        textTransform: "uppercase",
        cursor: "pointer",
        userSelect: "none",
    })
);


function WordleTile(props) {
    const style = {};

    const theme = useTheme();

    switch (props.keyStyle) {

        case Status.Correct:
            style.backgroundColor = theme.palette.wordle.correct;
            break;

        case Status.Misplaced:
            style.backgroundColor = theme.palette.wordle.misplaced;
            break;

        case Status.Wrong:
            style.backgroundColor = theme.palette.wordle.wrong;
            break;

        default:
            break;
    }

    return (
        <WordleKbKeyInternal
            onClick={props.onClick}
            style={style}
        >
            {props.value}
        </WordleKbKeyInternal>
    );
}

export default WordleTile;