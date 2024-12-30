import React from 'react';
import Separator from './separator';

import { splitText, splitSignature } from '../common/textFunctions';
import PostReference from './postReference';

function Post(props) {

    const date = props.date.toLocaleDateString('en-US', {weekday: "long", day: "numeric", month: "long", year: "numeric"});

    const lastUpdate = props.lastUpdate ?
        props.lastUpdate.toLocaleDateString('en-US', {weekday: "long", day: "numeric", month: "long", year: "numeric"})
        : null;

    return (
        <div key={props.index} className="post" style={{position: "relative"}}>
            {props.index > 0 ? <Separator/> : null}
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between"
            }}>

            {/* The span is used as a bookmark the post */}
            <span id={`post${props.id}`}>
                <h1>{props.title}</h1>
            </span>
            <PostReference id={props.id}/>
            </div>

            <p style={{fontStyle: "italic"}}>{!lastUpdate ? date : `${date} - ${lastUpdate}`}</p>

            {splitText(props.content)}

            {props.smartContent ? <><br/>{props.smartContent}</> : null}

            <br/>
            {splitSignature(props.signature)}
        </div>
    );
}

export default Post;