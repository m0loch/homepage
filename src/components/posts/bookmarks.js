const GoToContent = (e, label) => {
    e.preventDefault();
    document.querySelector(`#${label}`)?.scrollIntoView({
        behavior: "smooth"
    });
}

export function BookmarkLink(props) {

    function checkBookmark(e, label, isFirst) {
        if (!document.querySelector(`#${label}`))
        {
            setTimeout(() => { checkBookmark(e, props.id, false) }, 100);
        }
        else
        {
            if (isFirst) {
                GoToContent(e, props.id);
            }
            else {
                setTimeout(() => { GoToContent(e, props.id) }, 2000);
            }
        }
    }

    return (
        <a
            href={`#${props.id}`}
            onClick={e => {
                if (props.onPreClick) 
                {
                    e.preventDefault();
                    props.onPreClick();
                    checkBookmark(e, props.id, true);
                }
                else
                {
                    GoToContent(e, props.id)
                }
            }}
            style={{...props.style, ...(props.isTitle ? {fontSize: '1.17rem', fontWeight: "bold"} : null)}}
        >
            {props.children}
        </a>
    )
}

export function Bookmark(props) {
    return (
        <h3 style={ props.isTitle ? {fontSize: '1.75rem', fontWeight: "bold"} : null}>
            <span id={props.id}>
                <b>{props.children}</b>
            </span>
            <BookmarkLink id={"Table_of_contents"} style={{ "marginLeft": "5px" }}>
                <b>^</b>
            </BookmarkLink>
        </h3>
    )
}
