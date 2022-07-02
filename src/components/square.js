import { Link } from "react-router-dom";
import { Card, CardActions, CardContent } from "@mui/material";
import { styled } from '@mui/system';

const StyledCard = styled(Card)(
    ({ theme }) => {
        const baseWidth = "96%";
        return {
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            backgroundColor: theme.palette.background.card,

            maxHeight: `calc(${baseWidth} * 2 / 3)`,
            width: baseWidth,
            transition: "0.3s",
            margin: "2%",

            [theme.breakpoints.up('md')]: {
                maxHeight: baseWidth,
                width: `calc(${baseWidth} / 2)`,
                margin: "1%",
            }
        };
    }
);

function Square(props) {
    return (
        <StyledCard
            id={props.id}
            onClick={props.onClick}
        >
            <CardContent style={{ flexGrow: 1 }}>
                <h2 style={{ marginTop: "30px" }}>{props.title}</h2>
                <p style={{ margin: "30px" }}>{props.content}</p>
            </CardContent>
            <CardActions style={{ justifyContent: "space-around", margin: "1vmin" }}>
                <Link to={`/projects/${props.url}`}>Check it out</Link>
            </CardActions>
        </StyledCard>
    );
}

export default Square;