import { useState } from "react";
import { styled } from '@mui/system';

import { splitText } from '../../components/common/textFunctions';
import { StyledCollapseHeader, StyledCollapse } from "../../components/posts/collapse";
import { Bookmark, BookmarkLink } from "../../components/posts/bookmarks";
import { Collapse } from "@mui/material";

import { ReactComponent as Logo } from '../../images/post-0063/ffxmtg.svg';

import FFpage from "./0063/ff";
import FF2page from "./0063/ff2";
import FF3page from "./0063/ff3";
import FF4page from "./0063/ff4";
import FF5page from "./0063/ff5";
import FF6page from "./0063/ff6";
import FF7page from "./0063/ff7";
import FF8page from "./0063/ff8";
import FF9page from "./0063/ff9";
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

            UPDATE: I'm barely compiling the FF7 section part, and WotC announced <i>extra printings</i> and new products. This is officially a nightmare ^_^;`)}
            <a href="https://magic.wizards.com/en/news/feature/collecting-final-fantasy" target="_blank" rel="noreferrer">https://magic.wizards.com/en/news/feature/collecting-final-fantasy</a>

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
                <ol>
                    <BookmarkLink id="FinalFantasy3" isTitle>Final Fantasy III</BookmarkLink>
                    <li><BookmarkLink id="FF3Nutshell" onPreClick={() => forcePanelOpen(3)}>A bit of context</BookmarkLink></li>
                    <li><BookmarkLink id="FF3Game" onPreClick={() => forcePanelOpen(3)}>The game</BookmarkLink></li>
                    <li><BookmarkLink id="FF3Cards" onPreClick={() => forcePanelOpen(3)}>The cards</BookmarkLink></li>
                </ol>
                <ol>
                    <BookmarkLink id="FinalFantasy4" isTitle>Final Fantasy IV</BookmarkLink>
                    <li><BookmarkLink id="FF4Nutshell" onPreClick={() => forcePanelOpen(4)}>A bit of context</BookmarkLink></li>
                    <li><BookmarkLink id="FF4Game" onPreClick={() => forcePanelOpen(4)}>The game</BookmarkLink></li>
                    <li><BookmarkLink id="FF4Cards" onPreClick={() => forcePanelOpen(4)}>The cards</BookmarkLink></li>
                </ol>
                <ol>
                    <BookmarkLink id="FinalFantasy5" isTitle>Final Fantasy V</BookmarkLink>
                    <li><BookmarkLink id="FF5Nutshell" onPreClick={() => forcePanelOpen(5)}>A bit of context</BookmarkLink></li>
                    <li><BookmarkLink id="FF5Game" onPreClick={() => forcePanelOpen(5)}>The game</BookmarkLink></li>
                    <li><BookmarkLink id="FF5Cards" onPreClick={() => forcePanelOpen(5)}>The cards</BookmarkLink></li>
                </ol>
                <ol>
                    <BookmarkLink id="FinalFantasy6" isTitle>Final Fantasy VI</BookmarkLink>
                    <li><BookmarkLink id="FF6Nutshell" onPreClick={() => forcePanelOpen(6)}>A bit of context</BookmarkLink></li>
                    <li><BookmarkLink id="FF6Game" onPreClick={() => forcePanelOpen(6)}>The game</BookmarkLink></li>
                    <li><BookmarkLink id="FF6Cast" onPreClick={() => forcePanelOpen(6)}>The cast</BookmarkLink></li>
                    <li><BookmarkLink id="FF6Cards" onPreClick={() => forcePanelOpen(6)}>The cards</BookmarkLink></li>
                    <li><BookmarkLink id="FF6ThemeDeck" onPreClick={() => forcePanelOpen(6)}>The pre-constructed deck</BookmarkLink></li>
                </ol>
                <ol>
                    <BookmarkLink id="FinalFantasy7" isTitle>Final Fantasy VII</BookmarkLink>
                    <li><BookmarkLink id="FF7Nutshell" onPreClick={() => forcePanelOpen(7)}>A bit of context</BookmarkLink></li>
                    <li><BookmarkLink id="FF7Game" onPreClick={() => forcePanelOpen(7)}>The game</BookmarkLink></li>
                    <li><BookmarkLink id="FF7Cast" onPreClick={() => forcePanelOpen(7)}>The cast</BookmarkLink></li>
                    <li><BookmarkLink id="FF7Cards" onPreClick={() => forcePanelOpen(7)}>The cards</BookmarkLink></li>
                    <li><BookmarkLink id="FF7ThemeDeck" onPreClick={() => forcePanelOpen(7)}>The pre-constructed deck</BookmarkLink></li>
                </ol>
                <ol>
                    <BookmarkLink id="FinalFantasy8" isTitle>Final Fantasy VIII</BookmarkLink>
                    <li><BookmarkLink id="FF8Nutshell" onPreClick={() => forcePanelOpen(8)}>A bit of context</BookmarkLink></li>
                    <li><BookmarkLink id="FF8GameMechanics" onPreClick={() => forcePanelOpen(8)}>The mechanics</BookmarkLink></li>
                    <li><BookmarkLink id="FF8Game" onPreClick={() => forcePanelOpen(8)}>The game</BookmarkLink></li>
                    <li><BookmarkLink id="FF8Cast" onPreClick={() => forcePanelOpen(8)}>The cast</BookmarkLink></li>
                    <li><BookmarkLink id="FF8Cards" onPreClick={() => forcePanelOpen(8)}>The cards</BookmarkLink></li>
                </ol>
                <ol>
                    <BookmarkLink id="FinalFantasy9" isTitle>Final Fantasy IX</BookmarkLink>
                    <li><BookmarkLink id="FF9Nutshell" onPreClick={() => forcePanelOpen(9)}>A bit of context</BookmarkLink></li>
                    <li><BookmarkLink id="FF9Game" onPreClick={() => forcePanelOpen(9)}>The game</BookmarkLink></li>
                    <li><BookmarkLink id="FF9Cast" onPreClick={() => forcePanelOpen(9)}>The cast</BookmarkLink></li>
                    <li><BookmarkLink id="FF9Cards" onPreClick={() => forcePanelOpen(9)}>The cards</BookmarkLink></li>
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

            <StyledCollapseHeader
                open={open[3]}
                onClick={() => handleStateChange(3)}
                isSectionTitle
            >
                <Bookmark id="FinalFantasy3" isTitle>Final Fantasy III</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[3]} timeout="auto" unmountOnExit>
                <FF3page/>
            </Collapse>

            <StyledCollapseHeader
                open={open[4]}
                onClick={() => handleStateChange(4)}
                isSectionTitle
            >
                <Bookmark id="FinalFantasy4" isTitle>Final Fantasy IV</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[4]} timeout="auto" unmountOnExit>
                <FF4page/>
            </Collapse>

            <StyledCollapseHeader
                open={open[5]}
                onClick={() => handleStateChange(5)}
                isSectionTitle
            >
                <Bookmark id="FinalFantasy5" isTitle>Final Fantasy V</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[5]} timeout="auto" unmountOnExit>
                <FF5page/>
            </Collapse>

            <StyledCollapseHeader
                open={open[6]}
                onClick={() => handleStateChange(6)}
                isSectionTitle
            >
                <Bookmark id="FinalFantasy6" isTitle>Final Fantasy VI</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[6]} timeout="auto" unmountOnExit>
                <FF6page/>
            </Collapse>

            <StyledCollapseHeader
                open={open[7]}
                onClick={() => handleStateChange(7)}
                isSectionTitle
            >
                <Bookmark id="FinalFantasy7" isTitle>Final Fantasy VII</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[7]} timeout="auto" unmountOnExit>
                <FF7page/>
            </Collapse>

            <StyledCollapseHeader
                open={open[8]}
                onClick={() => handleStateChange(8)}
                isSectionTitle
            >
                <Bookmark id="FinalFantasy8" isTitle>Final Fantasy VIII</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[8]} timeout="auto" unmountOnExit>
                <FF8page/>
            </Collapse>

            <StyledCollapseHeader
                open={open[9]}
                onClick={() => handleStateChange(9)}
                isSectionTitle
            >
                <Bookmark id="FinalFantasy9" isTitle>Final Fantasy IX</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[9]} timeout="auto" unmountOnExit>
                <FF9page/>
            </Collapse>
        </>
    );
}

const post = {
    title: "The. Biggest. Post. Ever.",
    date: new Date("2025-07-12"),
    lastUpdate: new Date("2025-12-26"),
    smartContent: <StatefulPost />,
    signature: `Romeo`
};

export default post;