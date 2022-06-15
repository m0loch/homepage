import { Container } from "@mui/material";
import { styled } from '@mui/system';

const WordleContainer = styled(Container)(
    () => ({
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        flexGrow: 1,
        overflow: "hidden",
        width: "100%",
        height: "90vh",
        padding: 0,
    })
);

export default WordleContainer;