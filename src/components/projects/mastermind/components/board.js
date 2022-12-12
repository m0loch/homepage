import { Grid } from "@mui/material";
import { styled } from '@mui/system';

const Board = styled(Grid, {
    shouldForwardProp: (props) => props !== 'size'
})(
    ({ theme, size }) => ({
        flexDirection: "column",
        margin: "8px auto",
        borderRadius: "5px",
        backgroundColor: theme.palette.primary.main,
        touchAction: "pan-down",

        [theme.breakpoints.down('md')]: {
            width: `${size * 20}vw`,
        }
    })
);

export default Board;