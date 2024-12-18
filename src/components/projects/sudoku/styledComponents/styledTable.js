import { Grid } from "@mui/material";
import { styled } from '@mui/system';

const StyledTable = styled(Grid)(
    ({ theme }) => ({
        margin: "8px auto",
        backgroundColor: theme.palette.primary.main,
        touchAction: "pan-down",
        width: '70vmin',
        height: '70vmin',
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: theme.palette.link,
        position: "relative",
    })
);

export default StyledTable;