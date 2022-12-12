import { Grid } from "@mui/material";
import { styled } from '@mui/system';

const Board = styled(Grid)(
    ({ theme }) => ({
        flexDirection: "column",
        margin: "8px auto",
        borderRadius: "5px",
        backgroundColor: theme.palette.primary.main,
        touchAction: "pan-down"
    })
);

export default Board;