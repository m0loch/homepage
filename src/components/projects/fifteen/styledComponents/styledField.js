import { Grid } from "@mui/material";
import { styled } from '@mui/system';

const StyledField = styled(Grid, {
    shouldForwardProp: (props) => props !== 'size'
})(
    ({ theme, size }) => ({
        margin: "8px auto",
        borderRadius: "5px",
        backgroundColor: theme.palette.primary.main,
        touchAction: "pan-down",
        width: `${size * 10}vw`,

        [theme.breakpoints.down('md')]: {
            width: `${size * 20}vw`,
        }
    })
);

export default StyledField;