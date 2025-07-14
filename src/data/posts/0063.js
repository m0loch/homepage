import { useState } from "react";
import { styled } from '@mui/system';

import { splitText } from '../../components/common/textFunctions';
import { StyledCollapseHeader, StyledCollapse } from "../../components/posts/collapse";
import { Bookmark, BookmarkLink } from "../../components/posts/bookmarks";
import { Collapse } from "@mui/material";

import { ReactComponent as Logo } from '../../images/post-0063/ffxmtg.svg';

import Chapter1 from "./0063/ff";

const StyledLogo = styled(Logo)(
    ({ theme }) => ({
        display: "block",
        margin: "0 auto",
        width: "50%",
        height: "auto",
    })
);

function StatefulPost() {
    const [open, setOpen] = useState([true]);

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
            <StyledLogo />

            {splitText(`
            It's been a while since I wrote a lengthier post, but the FFxMTG crossover struck a lot of chords with me, and now I feel like the time has come to let some of my thoughts out.

            This is going to be a post with multiple updates, acting both as a way to explain and <i>sometimes</i> even appreciated what Wizards of the Coast has done with my favourite franchise, but also nostalgia trip of sorts where I'll rumble about an almost infinite number of games.

            TL;DR: this is going to take a <i>long</i> while.
            Have fun, I hope I'll do.
            `)}

            <span id="Table_of_contents"></span>
            <StyledCollapseHeader
                caption={"Table of contents"}
                open={open[0]}
                onClick={() => handleStateChange(0)}
            />
            <StyledCollapse in={open[0]} timeout="auto" unmountOnExit>
                <ol>
                    <BookmarkLink id="Final Fantasy" isTitle>Final Fantasy</BookmarkLink>
                    <li><BookmarkLink id="FF1Nutshell" onPreClick={() => forcePanelOpen(1)}>A bit of context</BookmarkLink></li>
                    <li><BookmarkLink id="FF1Game" onPreClick={() => forcePanelOpen(1)}>The game</BookmarkLink></li>
                    <li><BookmarkLink id="FF1Cards" onPreClick={() => forcePanelOpen(1)}>The cards</BookmarkLink></li>
                </ol>
            </StyledCollapse>

            <br/>

            <StyledCollapseHeader
                open={open[1]}
                onClick={() => handleStateChange(1)}
                isSectionTitle
            >
                <Bookmark id="Final Fantasy" isTitle>Final Fantasy</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                <Chapter1/>
            </Collapse>
        </>
    );
}

const post = {
    title: "The. Biggest. Post. Ever.",
    date: new Date("2025-07-012"),
    lastUpdate: new Date("2025-07-14"),
    smartContent: <StatefulPost />,
    signature: `Romeo`
};

export default post;