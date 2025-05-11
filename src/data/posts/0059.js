import React from 'react';
import { splitText } from '../../components/common/textFunctions';
import CustomImage from "../../components/posts/customImage";
import e33Main from '../../images/post-0059/e33-main.jpg';
import e33Ending from '../../images/post-0059/e33-ending.jpg';

const post = {
    title: "Back from my expedition",
    date: new Date("2025-05-11"),
    smartContent: (
        <>
            {splitText(`As everybody should have expected, here's my mandatory Claire Obscur: Expedition 33 post.
            `)}
            <CustomImage
                src={e33Main}
                alt="Final thanks, from the game itself"
                align="left"
            />

            {splitText(`
            I'd love to tell you how you should play games in a responsible way, but I finished it in 5 days - far less than the time I spent elaborating the experience.

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
            <CustomImage
                src={e33Ending}
                alt="Final thanks, from the game itself"
            />
        </>
    ),
    signature: `Bye for now,
    Romeo`
};

export default post;