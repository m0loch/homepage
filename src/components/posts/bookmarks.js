const GoToContent = (e, label) => {
    e.preventDefault();
    document.querySelector(`#${label}`)?.scrollIntoView({
        behavior: "smooth"
    });
}

export function BookmarkLink(props) {
    return (
        <a
            href={`#${props.id}`}
            onClick={e => GoToContent(e, props.id)}
            style={props.style}
        >
            {props.children}
        </a>
    )
}

export function Bookmark(props) {
    return (
        <h3>
            <span id={props.id}>
                <b>{props.children}</b>
            </span>
            <BookmarkLink id={"Table_of_contents"} style={{ "margin-left": "5px" }}>
                <b>^</b>
            </BookmarkLink>
        </h3>
    )
}
