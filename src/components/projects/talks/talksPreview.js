import React from "react";

import { splitText } from "../../common/textFunctions";

function TalksPreview(props) {
    return (
        <div style={{ display: "inline-block" }}>
            {splitText(`<div>A quick act of plagiarism of <a href="https://www.choiceofgames.com/dragon">Choice of the Dragon</a> while waiting to write something of my own"</div>`)}
        </div>
    );
}

export default TalksPreview;