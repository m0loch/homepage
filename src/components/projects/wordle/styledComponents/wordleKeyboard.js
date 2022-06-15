import { Container } from "@mui/material";
import { styled } from '@mui/system';

const WordleKeyboard = styled(Container)(
    ({ theme }) => ({
        userSelect: "none",
        borderRadius: "5px",
        width: "100%",
        padding: "0 10px 0 0",

        [theme.breakpoints.up('md')]: {
            maxWidth: "500px",
        }
    })
);

export default WordleKeyboard;