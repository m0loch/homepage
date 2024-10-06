import React from 'react';
import { useState } from "react";

import { splitText } from '../../components/common/textFunctions';
import { StyledCollapseHeader, StyledCollapse } from "../../components/posts/collapse";
import { Bookmark, BookmarkLink } from "../../components/posts/bookmarks";
import { Collapse } from "@mui/material";
import CustomImage from "../../components/posts/customImage";

import rebirthlogo from '../../images/post-0047/ch1/logo.png';

import Chapter1 from "./0047/ch1";
import Chapter2 from "./0047/ch2";
import Chapter3 from './0047/ch3';
import Chapter4 from './0047/ch4';

function StatefulPost() {
    const [open, setOpen] = useState([true, false, false, false, false]);

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
            <CustomImage
                alt="FF7 Rebirth logo"
                src={rebirthlogo}
                align="center"
            />

            {splitText(`
                <u>Spoiler warning</u>: This post is meant for people that have played the original game <b>and</b> the new ones. If you didn't, proceed at your own risk.

                I know this post is huge, but the impact this game had on me cannot be overstated.
                I bought it as soon as it became available, then waited for several months after the official release in order to be sure I had enough time to play it.

                After finishing it, I let another month go by before actually trying to go for the platinum, another month then passed by before starting to write this post, and then it took me almost a month to actually write it.

                I apologize to anyone that'll try to read this, but I've finally reached my catharsis.
            `)}

            <span id="Table_of_contents"></span>
            <StyledCollapseHeader
                caption={"Table of contents"}
                open={open[0]}
                onClick={() => handleStateChange(0)}
            />
            <StyledCollapse in={open[0]} timeout="auto" unmountOnExit>
                <ol>
                    <BookmarkLink id="Pt1" isTitle>Part 1: Rebirth in a vacuum</BookmarkLink>
                    <li><BookmarkLink id="Nutshell" onPreClick={() => forcePanelOpen(1)}>What are we even talking about?</BookmarkLink></li>
                    <li><BookmarkLink id="Game_Structure" onPreClick={() => forcePanelOpen(1)}>Game structure</BookmarkLink></li>
                    <li><BookmarkLink id="Gameplay" onPreClick={() => forcePanelOpen(1)}>Gameplay</BookmarkLink></li>
                    <br/>
                    <BookmarkLink id="Pt2" isTitle>Part 2: The characters</BookmarkLink>
                    <li><BookmarkLink id="Cloud" onPreClick={() => forcePanelOpen(2)}>Cloud Strife</BookmarkLink></li>
                    <li><BookmarkLink id="Barret" onPreClick={() => forcePanelOpen(2)}>Barret Wallace</BookmarkLink></li>
                    <li><BookmarkLink id="Tifa" onPreClick={() => forcePanelOpen(2)}>Tifa Lockhart</BookmarkLink></li>
                    <li><BookmarkLink id="Aerith" onPreClick={() => forcePanelOpen(2)}>Aerith Gainsborough</BookmarkLink></li>
                    <li><BookmarkLink id="Red_XIII" onPreClick={() => forcePanelOpen(2)}>Red XIII</BookmarkLink></li>
                    <li><BookmarkLink id="Yuffie" onPreClick={() => forcePanelOpen(2)}>Yuffie Kisaragi</BookmarkLink></li>
                    <li><BookmarkLink id="Cait_Sith" onPreClick={() => forcePanelOpen(2)}>Cait Sith</BookmarkLink></li>
                    <li><BookmarkLink id="Cid" onPreClick={() => forcePanelOpen(2)}>Cid Highwind</BookmarkLink></li>
                    <li><BookmarkLink id="Vincent" onPreClick={() => forcePanelOpen(2)}>Vincent Valentine</BookmarkLink></li>
                    <li><BookmarkLink id="Zack" onPreClick={() => forcePanelOpen(2)}>Zack Fair</BookmarkLink></li>
                    <li><BookmarkLink id="Sephiroth" onPreClick={() => forcePanelOpen(2)}>Sephiroth</BookmarkLink></li>
                    <br/>
                    <BookmarkLink id="Pt3" isTitle>Part 3: The discovery of the "new" Gaia</BookmarkLink>
                    <li><BookmarkLink id="WB_Summary" onPreClick={() => forcePanelOpen(3)}>How the planet changed in just 27 years</BookmarkLink></li>
                    <li><BookmarkLink id="Grasslands" onPreClick={() => forcePanelOpen(3)}>The grasslands</BookmarkLink></li>
                    <li><BookmarkLink id="Mythril_Mines" onPreClick={() => forcePanelOpen(3)}>The mythril mines</BookmarkLink></li>
                    <li><BookmarkLink id="Junon" onPreClick={() => forcePanelOpen(3)}>Junon and its surroundings</BookmarkLink></li>
                    <li><BookmarkLink id="Corel" onPreClick={() => forcePanelOpen(3)}>Costa del Sol, Mt Corel, the Gold Saucer</BookmarkLink></li>
                    <li><BookmarkLink id="Gongaga" onPreClick={() => forcePanelOpen(3)}>Gongaga!</BookmarkLink></li>
                    <li><BookmarkLink id="Cosmo_Canyon" onPreClick={() => forcePanelOpen(3)}>Cosmo Canyon</BookmarkLink></li>
                    <li><BookmarkLink id="Nibelheim" onPreClick={() => forcePanelOpen(3)}>The Nibelheim area</BookmarkLink></li>
                    <li><BookmarkLink id="Temple_Cetra" onPreClick={() => forcePanelOpen(3)}>The temple of the Ancient and their city</BookmarkLink></li>
                    <br/>
                    <BookmarkLink id="Pt4" isTitle>Part 4: What is <i>actually</i> happening here</BookmarkLink>
                    <li><BookmarkLink id="Multiverse" onPreClick={() => forcePanelOpen(4)}>The elephant in the room</BookmarkLink></li>
                    <li><BookmarkLink id="Multiverse_1" onPreClick={() => forcePanelOpen(4)}>General concepts</BookmarkLink></li>
                    <li><BookmarkLink id="Multiverse_2" onPreClick={() => forcePanelOpen(4)}>Epileptic Trees</BookmarkLink></li>
                    <li><BookmarkLink id="That_Scene" onPreClick={() => forcePanelOpen(4)}><i>That</i> scene</BookmarkLink></li>
                    <li><BookmarkLink id="Ending" onPreClick={() => forcePanelOpen(4)}>The ending</BookmarkLink></li>
                    <li><BookmarkLink id="Future" onPreClick={() => forcePanelOpen(4)}>What's missing, and what I think will happen in part three</BookmarkLink></li>
                </ol>
            </StyledCollapse>

            <br/>

            <StyledCollapseHeader
                open={open[1]}
                onClick={() => handleStateChange(1)}
                isSectionTitle
            >
                <Bookmark id="Pt1" isTitle>Part 1: Rebirth in a vacuum</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                <Chapter1/>
            </Collapse>

            <StyledCollapseHeader
                open={open[2]}
                onClick={() => handleStateChange(2)}
                isSectionTitle
            >
                <Bookmark id="Pt2" isTitle>Part 2: The characters</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                <Chapter2/>
            </Collapse>

            <StyledCollapseHeader
                open={open[3]}
                onClick={() => handleStateChange(3)}
                isSectionTitle
            >
                <Bookmark id="Pt3" isTitle>Part 3: The discovery of the "new" Gaia</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[3]} timeout="auto" unmountOnExit>
                <Chapter3/>
            </Collapse>

            <StyledCollapseHeader
                open={open[4]}
                onClick={() => handleStateChange(4)}
                isSectionTitle
            >
                <Bookmark id="Pt4" isTitle>Part 4: what is <i>actually</i> happening here</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[4]} timeout="auto" unmountOnExit>
                <Chapter4/>
            </Collapse>
        </>
    );
}

const post = {
    title: "The big Final Fantasy VII Rebirth post",
    date: new Date("2024-09-15"),
    lastUpdate: new Date("2024-10-06"),
    smartContent: <StatefulPost />,
    signature: `Romeo`
};

export default post;