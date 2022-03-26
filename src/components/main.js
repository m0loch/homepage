function Separator() {
    return (
        <div>
            <br/>
            <hr/>
            <br/>
        </div>
    );
}

function Main(props) {
    const dateOptions = {weekday: "long", day: "numeric", month: "long", year: "numeric"};

    return(
        <section className="main">
            <div className="main-text">
                {props.posts
                    .sort((a,b) => b.key - a.key) // newer posts are meant to be shown before the older ones
                    .map((post, index) => {
                        const content = post.content.split("\n");
                        const signature = post.signature.split("\n");

                        return (
                            <div key={post.key} className="post" style={{position: "relative"}}>
                                {index > 0 ? <Separator/> : null}
                                <h1>{post.title}</h1>
                                <p style={{fontStyle: "italic"}}>{post.date.toLocaleDateString('en-US', dateOptions)}</p>

                                {content.map((str, idx) => str.length === 0 ? <br key={idx}/> : <p key={idx} dangerouslySetInnerHTML={{__html: str.replaceAll('"', '')}}/>)}
                                
                                <br/>
                                {signature.map((str, idx) => <p key={idx} style={{fontStyle: "italic", textAlign: "right"}}>{idx === signature.length - 1 ? "-" : null} {str}</p>)}
                            </div>
                        )
                    })}
            </div>
        </section>
    );
}

export default Main;