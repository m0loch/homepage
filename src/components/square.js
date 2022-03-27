import { Link } from "react-router-dom";


function Square(props) {
    return (
        <div className="square" id={props.id}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <br/>
            <Link to={`/homepage/projects/${props.url}`}>Check it out</Link>
        </div>
    );
}

export default Square;