import { Link } from "react-router-dom";
import { Card, CardActions, CardContent } from "@mui/material";

function Square(props) {
    return (
        <Card className="square" id={props.id}>
            <CardContent className="content">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            </CardContent>
            <CardActions className="footer">
                <Link to={`/projects/${props.url}`}>Check it out</Link>
            </CardActions>
        </Card>
    );
}

export default Square;