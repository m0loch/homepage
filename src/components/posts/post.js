import Separator from './separator';

function Post(props) {
    const date = props.date.toLocaleDateString('en-US', {weekday: "long", day: "numeric", month: "long", year: "numeric"});

    const content = props.content?.split("\n");
    const signature = props.signature.split("\n");

    return (
        <div key={props.index} className="post" style={{position: "relative"}}>
            {props.index > 0 ? <Separator/> : null}
            <h1>{props.title}</h1>
            <p style={{fontStyle: "italic"}}>{date}</p>

            {content?.map((str, idx) => str.length === 0 ? 
                <br key={idx}/> :
                <p key={idx} dangerouslySetInnerHTML={{__html: str.replaceAll('"', '')}}/>)}

            {props.smartContent ? <><br/>{props.smartContent}</> : null}

            <br/>
            {signature.map((str, idx) => <p key={idx} style={{fontStyle: "italic", textAlign: "right"}}>{idx === signature.length - 1 ? "-" : null} {str}</p>)}
        </div>
    );
}

export default Post;