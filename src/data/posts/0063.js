import { useState } from "react";
import { styled } from '@mui/system';

import { splitText } from '../../components/common/textFunctions';
import { StyledCollapseHeader, StyledCollapse } from "../../components/posts/collapse";
import { Bookmark, BookmarkLink } from "../../components/posts/bookmarks";
import { Collapse } from "@mui/material";

import { ReactComponent as Logo } from '../../images/post-0063/ffxmtg.svg';

import FFpage from "./0063/ff";
import FF2page from "./0063/ff2";
import CustomImage from "../../components/posts/customImage";

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
                <BookmarkLink id="Set description" isTitle>Set description</BookmarkLink>
                <ol>
                    <BookmarkLink id="FinalFantasy" isTitle>Final Fantasy</BookmarkLink>
                    <li><BookmarkLink id="FF1Nutshell" onPreClick={() => forcePanelOpen(1)}>A bit of context</BookmarkLink></li>
                    <li><BookmarkLink id="FF1Game" onPreClick={() => forcePanelOpen(1)}>The game</BookmarkLink></li>
                    <li><BookmarkLink id="FF1Cards" onPreClick={() => forcePanelOpen(1)}>The cards</BookmarkLink></li>
                </ol>
                <ol>
                    <BookmarkLink id="FinalFantasy2" isTitle>Final Fantasy II</BookmarkLink>
                    <li><BookmarkLink id="FF2Nutshell" onPreClick={() => forcePanelOpen(2)}>A bit of context</BookmarkLink></li>
                    <li><BookmarkLink id="FF2Game" onPreClick={() => forcePanelOpen(2)}>The game</BookmarkLink></li>
                    <li><BookmarkLink id="FF2Cards" onPreClick={() => forcePanelOpen(2)}>The cards</BookmarkLink></li>
                </ol>
            </StyledCollapse>

            <br/>
            <Bookmark id="Set description" isTitle>Set description</Bookmark>
            <CustomImage
                src="https://cardkingdom.imgix.net/promotional-316038"
                alt="Diabolos, Guardian Force - a Death's Shadow reprint"
                align="right"
            >
                <i>
                    Also: promo cards.
                    There's no way to keep track of everything, , apparently.
                </i>
            </CustomImage>
            {splitText(`
            Up until now I treated this initiative as a single set, but they are actually <i>three</i>:
            <ol>
                <li><a href="https://gatherer.wizards.com/sets/FIN">Magic: The Gathering—FINAL FANTASY</a></li>
                <li><a href="https://gatherer.wizards.com/sets/FIC">Magic: The Gathering—FINAL FANTASY Commander set</a></li>
                <li><a href="https://gatherer.wizards.com/sets/FCA">FINAL FANTASY Through the Ages</a></li>
            </o>

            If you ever find yourself wondering, you can quickly discover which set a card belongs to by looking at the bottom left corner of the card, where you'll find the set code (FIN, FIC or FCA) and the collector number.
            You'll also find what game the card references, as well as rarity, language etc.

            As a quick rule of thumb: the "proper" set that feeds card to the current standard format is the first one.

            The second set is a container for four different Commander preconstructed decks, each one themed around a single game (Final Fantasy 6, Final Fantasy 7, Final Fantasy 10 and Final Fantasy 14).
            Cards from this set are <b>not</b> legal in standard, but can be used in Commander and other eternal formats.

            Through the Ages is a "bonus sheet": they are not original cards, but reprints of older cards with a new name and art -just another way to <s>milk collectors</s> <i>give a nod to the franchise's history</i>- you can find them as extras in "regular" booster packs, but their legality is tied to their respective original card.
            You won't be able to cast Dark Ritual in Standard anytime soon, I'm sorry.
            `)}

            <StyledCollapseHeader
                open={open[1]}
                onClick={() => handleStateChange(1)}
                isSectionTitle
            >
                <Bookmark id="FinalFantasy" isTitle>Final Fantasy</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                <FFpage/>
            </Collapse>

            <StyledCollapseHeader
                open={open[2]}
                onClick={() => handleStateChange(2)}
                isSectionTitle
            >
                <Bookmark id="FinalFantasy2" isTitle>Final Fantasy II</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                <FF2page/>
            </Collapse>
        </>
    );
}

const post = {
    title: "The. Biggest. Post. Ever.",
    date: new Date("2025-07-012"),
    lastUpdate: new Date("2025-07-16"),
    smartContent: <StatefulPost />,
    signature: `Romeo`
};

export default post;