import { Grid } from "@mui/material";
import { styled } from '@mui/system';

const GameArea = styled(Grid)(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "column",

        margin: "8px auto",
        borderRadius: "5px",
        border: "5px solid",

        borderColor: theme.palette.primary.main,

        width: "80vw",
    })
);

export default GameArea;