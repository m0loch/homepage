import { Card } from "@mui/material";
import { styled, useTheme } from '@mui/system';
import Status from "../status";

const WordleTileContainer = styled('div')(
    ({ theme }) => {
        const desktopDim = "62px";
        const mobileDim = "48px";

        return ({
            display: "flex",
            width: desktopDim,
            height: desktopDim,
            margin: "5px",

            [theme.breakpoints.down('md')]: {
                width: mobileDim,
                height: mobileDim,
                }
        })
    }
);

const WordleTileInternal = styled(Card)(
    ({ theme }) => ({
        display: "flex",
        margin: "auto",
        width: "100%",
        height: "100%",
        "--base-bg-color": theme.palette.background.card,
        backgroundColor: theme.palette.background.card,
        color: theme.palette.wordle.text,
        transition: "none",

        // Different animations for each column, with carefully calculated delays

        /************************************************************** 
         *   0 125 250 375 500 625 750 875 1000 1125 1250 1375 1500 ms
         *   0              33               66                 100  %
         **************************************************************/

        '@keyframes flip0': {
            '0%': { height: "100%", backgroundColor: "var(--base-bg-color)" },
            '33%':  { height: 0, backgroundColor: "var(--base-bg-color)" },
            '66%': { height: "100%" },
            '100%': { height: "100%" },
        },
        '@keyframes flip1': {
            '0%': { height: "100%", backgroundColor: "var(--base-bg-color)" },
            '8%': { height: "100%", backgroundColor: "var(--base-bg-color)" },
            '42%':  { height: 0, backgroundColor: "var(--base-bg-color)" },
            '75%': { height: "100%" },
            '100%': { height: "100%" },
        },
        '@keyframes flip2': {
            '0%': { height: "100%", backgroundColor: "var(--base-bg-color)" },
            '17%': { height: "100%", backgroundColor: "var(--base-bg-color)" },
            '50%':  { height: 0, backgroundColor: "var(--base-bg-color)" },
            '82%': { height: "100%" },
            '100%': { height: "100%" },
        },
        '@keyframes flip3': {
            '0%': { height: "100%", backgroundColor: "var(--base-bg-color)" },
            '25%': { height: "100%", backgroundColor: "var(--base-bg-color)" },
            '59%':  { height: 0, backgroundColor: "var(--base-bg-color)" },
            '90%': { height: "100%" },
            '100%': { height: "100%" },
        },
        '@keyframes flip4': {
            '0%': { height: "100%", backgroundColor: "var(--base-bg-color)" },
            '33%': { height: "100%", backgroundColor: "var(--base-bg-color)" },
            '66%':  { height: 0, backgroundColor: "var(--base-bg-color)" },
            '100%': { height: "100%" },
        },
    })
);

function WordleTile(props) {
    const style = {};

    const theme = useTheme();

    if (props.char && ("correct" in props.char)) {

        style.animation = `flip${props.idx} 1.5s ease-in-out`;

        switch (props.char.correct) {

            case Status.Correct:
                style.backgroundColor = theme.palette.wordle.correct;
                break;

            case Status.Misplaced:
                style.backgroundColor = theme.palette.wordle.misplaced;
                break;

            default:
                break;
        }
    }

    return (
        <WordleTileContainer key={props.idx}>
            <WordleTileInternal
                key={props.idx}
                style={style}
            >
                <p style={{ margin: "auto" }} key={props.idx}>{props.char?.value}</p>
            </WordleTileInternal>
        </WordleTileContainer>
    );
}

export default WordleTile;