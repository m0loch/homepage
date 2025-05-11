import React from 'react';
import { useState } from "react";

import { splitText } from '../../components/common/textFunctions';
import { StyledCollapseHeader, StyledCollapse } from "../../components/posts/collapse";
import { Bookmark, BookmarkLink } from "../../components/posts/bookmarks";
import { Collapse } from "@mui/material";
import CustomImage from "../../components/posts/customImage";
import e33Head from '../../images/post-0059/e33-head.jpg';
import e33Ending from '../../images/post-0059/e33-ending.jpg';

function StatefulPost() {
    const [open, setOpen] = useState([true, false, false, false, false, false, false]);

    const handleStateChange = idx => {
        const newState = [...open];
        newState[idx] = !open[idx];
        setOpen(newState);
    }

    const forcePanelOpen = idx => {
        const newState = [...open];

        // If the section is closed, force it open to allow navigation
        if (!open[idx]) {
            newState[idx] = true;
            setOpen(newState);
        }
    }

    return (
        <>
            {splitText(`As everybody should have expected, here's my mandatory Claire Obscur: Expedition 33 post.
            `)}
            <CustomImage
                src={e33Head}
                alt="Verso looking at the monolith in the distance"
            />

            {splitText(`
            I'd love to tell you how you should play games in a responsible way, but I finished it in 5 days - I'll just tell you that it's GOTY material so <b>go play it</b>.

            A week's has already passed and I've rewritten this post one times too many, so I believe it's time to write down a couple of things and come back to it later. Eventually. <i>Maybe.</i>

            So, here we are:
            <ol>
            <li>The game is wonderful</li>
            <li>Go play it</li>
            <ol>

            Provided, of course, that a turn-based RPG with a dodge mechanic is something you'll be interested in.
            The plot and the aesthetics are a breath of fresh air and the gameplay is the cherry on top of the cake.

            Seriously, this is GOTY material.
            `)}
        </>
    )
}

const post = {
    title: "Back from my expedition",
    date: new Date("2025-05-11"),
    smartContent: <StatefulPost />,
    signature: `Bye for now,
    Romeo`
};

export default post;