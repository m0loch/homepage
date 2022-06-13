import { Card, Grid } from "@mui/material";
import { styled } from '@mui/system';

const StyledTileInternal = styled(Card)(
    ({ theme, className }) => {
        let animation = null;
        switch (className) {
            case 'transitionLeft':
                animation = "slideLeft 150ms linear";
                break;

            case 'transitionRight':
                animation = "slideRight 150ms linear";
                break;

            case 'transitionUp':
                animation = "slideUp 150ms linear";
                break;

            case 'transitionDown':
                animation = "slideDown 150ms linear";
                break;

            default:
                break;
        };

        return ({
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
            },

            '@keyframes slideLeft': {
                '0%': { transform: "translateX(100%)" },
                '100%': { transform: "translateX(0)" },
            },

            '@keyframes slideRight': {
                "0%": { transform: "translateX(-100%)" },
                "100%": { transform: "translateX(0)" },
            },

            '@keyframes slideUp': {
                "0%": { transform: "translateY(100%)" },
                "100%": { transform: "translateY(0)" },
            },

            '@keyframes slideDown': {
                "0%": { transform: "translateY(-100%)" },
                "100%": { transform: "translateY(0)" },
            },

            animation,
        })
    }
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