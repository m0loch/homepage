import { Grid } from "@mui/material";
import { styled } from '@mui/system';

const TylesField = styled(Grid)(
    ({ theme, size }) => ({
        margin: "auto",
        borderRadius: "5px",
        backgroundColor: theme.palette.primary.main,
        touchAction: "pan-down",
        width: `${size > 2 ? 40 : 24}vw`,

        [theme.breakpoints.down('md')]: {
            width: "80vw",
        }
    })
);

export default TylesField;