import React from 'react';
import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";

function Chapter4() {
    return (
        <>
            <Bookmark id="Multiverse">The elephant in the room</Bookmark>
            {splitText(`
            WiP
            `)}

            <Bookmark id="That_Scene"><i>That</i> scene</Bookmark>
            {splitText(`
            WiP
            `)}

            <Bookmark id="Ending">The ending</Bookmark>
            {splitText(`
            WiP
            `)}

            <Bookmark id="Future">What's missing, and what I think will happen in part three</Bookmark>
            {splitText(`
            WiP
            `)}
        </>
    )
}

export default Chapter4;