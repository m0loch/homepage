import { Card } from "@mui/material";
import { styled } from '@mui/system';
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

        backgroundColor: "var(--square-color)",
        color: "var(--letter-color)",

        fontFamily: "inherit",
        fontWeight: "bold",
        textTransform: "uppercase",
        cursor: "pointer",
        userSelect: "none",

        // TODO: set up an animation instead of a transition
        // in order to avoid messing with the dark mode switch
        transitionProperty: "background-color",
        transitionDelay: "1s",
        transitionDuration: "1s",
    })
);


function WordleTile(props) {
    const style = {};

    switch (props.keyStyle) {

        case Status.Correct:
            style.backgroundColor = "var(--correct-letter)";
            break;

        case Status.Misplaced:
            style.backgroundColor = "var(--misplaced-letter)";
            break;

        case Status.Wrong:
            style.backGroundColor = "var(--wrong-letter)";
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