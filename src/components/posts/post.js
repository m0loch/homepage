import Separator from './separator';

import { splitText, splitSignature } from '../common/textFunctions';

function Post(props) {
    const date = props.date.toLocaleDateString('en-US', {weekday: "long", day: "numeric", month: "long", year: "numeric"});

    return (
        <div key={props.index} className="post" style={{position: "relative"}}>
            {props.index > 0 ? <Separator/> : null}
            <h1>{props.title}</h1>
            <p style={{fontStyle: "italic"}}>{date}</p>

            {splitText(props.content)}

            {props.smartContent ? <><br/>{props.smartContent}</> : null}

            <br/>
            {splitSignature(props.signature)}
        </div>
    );
}

export default Post;