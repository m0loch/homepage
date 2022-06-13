import { Card, Grid } from "@mui/material";
import { styled } from '@mui/system';

const StyledTileInternal = styled(Card)(
    ({ theme }) => ({
        display: "flex",
        backgroundColor: theme.palette.background.card,
        color: theme.palette.link,
        alignContent: "center",
        justifyContent: "center",
        height: "8vw",
        width: "8vw",
        margin: "auto",

        [theme.breakpoints.down('md')]: {
            width: "16vw",
            height: "16vw",
        }
    })
);

function StyledTile(props) {
    const style = {
        padding: "1vw",
        opacity: props.value === 0 ? 0 : 1,
    };

    return (
        <Grid item
            key={props.value}
            xs={3}
            style={style}
            onClick={props.onClick}
        >
            <StyledTileInternal className={
                `${props.transition?.idx === props.idx ? `transition${props.transition.dir}` : ""}`
            }
            >
                <p style={{ margin: "auto", fontSize: "3vw" }} value={props.value}>{props.value}</p>
            </StyledTileInternal>
        </Grid>
    )
}

export default StyledTile;