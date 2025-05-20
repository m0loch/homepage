import React from 'react';
import { useState } from "react";

import { splitText } from '../../components/common/textFunctions';
import { StyledCollapseHeader, StyledCollapse } from "../../components/posts/collapse";
import { Bookmark, BookmarkLink } from "../../components/posts/bookmarks";
import { Collapse } from "@mui/material";
import CustomImage from "../../components/posts/customImage";
import InlineSpoiler from "../../components/posts/inlineSpoiler";
import e33Head from '../../images/post-0060/e33-head.jpg';
import wizardry from '../../images/post-0060/wizardry.jpg';
import e33Mansion from '../../images/post-0060/e33-mansion.jpg';
import e33WhiteNevron from '../../images/post-0060/e33-white-nevron.jpg';
import e33Noco from '../../images/post-0060/e33-noco.jpg';
import e33Mystery from '../../images/post-0060/e33-mystery.jpg';
import e33Piano from '../../images/post-0060/e33-piano.jpg';
import YouTubeVideo from '../../components/posts/youtubeVideo';

function StatefulPost() {
    const [open, setOpen] = useState([true, false, false, false, false, false]);

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
                src={e33Head}
                alt="Verso looking at the monolith in the distance"
            />
            {splitText(`I'm sorry if everyone is concerned about how much I'm posting about this game, but I need to get this out of my system.

            So, please bear with me for the last installment of my Clair Obscur: Expedition 33 brainstorm session.
            `)}

            <span id="Table_of_contents"></span>
            <StyledCollapseHeader
                caption={"Table of contents"}
                open={open[0]}
                onClick={() => handleStateChange(0)}
            />

            <StyledCollapse in={open[0]} timeout="auto" unmountOnExit>
                <ol>
                    <li><BookmarkLink id="Mechanics" onPreClick={() => forcePanelOpen(1)}>Mechanics</BookmarkLink></li>
                    <li><BookmarkLink id="Visuals" onPreClick={() => forcePanelOpen(2)}>Visuals</BookmarkLink></li>
                    <li><BookmarkLink id="Plot" onPreClick={() => forcePanelOpen(3)}>Plot</BookmarkLink></li>
                    <li><BookmarkLink id="Not_a_JRPG" onPreClick={() => forcePanelOpen(4)}>A godless endeavor</BookmarkLink></li>
                    <li><BookmarkLink id="Production" onPreClick={() => forcePanelOpen(5)}>Production takeaways</BookmarkLink></li>
                    <li><BookmarkLink id="Conclusions" onPreClick={() => forcePanelOpen(6)}>Closing thoughts</BookmarkLink></li>
                </ol>
            </StyledCollapse>
            <br/>
            <StyledCollapseHeader
                open={open[1]}
                onClick={() => handleStateChange(1)}
                isSectionTitle
            >
                <Bookmark id="Mechanics" isTitle>Mechanics</Bookmark>
            </StyledCollapseHeader>
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
            {splitText(`
            As you probably know already, we're talking about a 3D RPG with a turn-based combat system that borrows some elements from the Souls series.
            `)}
            <CustomImage
                src={wizardry}
                alt="Wizardry cover art"
                align="left"
            >
                Did you know there's a remake of Wizardry on <a href='https://store.steampowered.com/app/2518960/Wizardry_Proving_Grounds_of_the_Mad_Overlord/' target="_blank" rel="noreferrer" style={{ fontSize: "initial", fontWeight: "initial" }}>Steam</a>?
                <br/>
                <i>Neither did I.</i>
            </CustomImage>
            {splitText(`I'll start by spewing some historical facts: role-playing videogames have been around since pretty much <i>forever</i>, with Dungeons & Dragons based games dating back to the mid-70s and then Wizardry (1981) and Ultima (1981) being the first real hits.
            Half a decade later Japan then blesses us with JRPG with Dragon Quest (1986) and Final Fantasy (1987) setting up the standards for turn-based combat.

            The genre then thrived and evolved, with many games following the tracks of the Zelda series and moving towards real-time combat, while others trying to build on the turn-based mechanics.
            `)}
            <YouTubeVideo videoId={"8d0r0hndsEU"} align={"right"} caption="A more in-depth analysis" time={393}/>
            {splitText(`One very important instance of this is Super Mario RPG (1996), which introduced the concept of timed hits and blocks, that let for the first time the player interact with the combat system by pressing a button at the right time to either deal a significant higher amount of damage or to mitigate the damage taken by enemy attacks - even allowing to negate it entirely.

            Other games did similar things and, apart from the obvious Mario-related series (Paper Mario, Mario & Luigi, Mario &  Rabbids), we go from Final Fantasy VIII (1999) to the recent times with Sea of Stars (2023) - but nothing really reaches the extremes of what we're seeing here.

            "Ok then", you might ask, "what's the big deal with this game's mechanics then?"

            It's a matter of execution: you see, while timed hits are nothing new, this system has a very high ceiling for the player willing to master it.
            The developer themselves cited From software's games as a source of inspiration, and it shows: mastering the four different parrying techniques is not a must per sé, but it's various orders of magnitude better than any of the RPG implementations of the mechanic I've ever experienced.
            `)}
            <YouTubeVideo videoId={"-LSNrw83dHo"} align={"right"} caption="(sometimes you'll have to parry, though)" short/>
            {splitText(`
            You never feel like you <i>have</i> to parry, but the game makes it very clear from the get-go that doing so <b>will</b> make your party perform at a much higher level.
            This then feeds to the leveling system: every time a character levels up it gets 3 extra points to spend on stats and you <i>know</i> that being good at parrying means that you can afford to neglect HP and the defense stats entirely.
            You definitely <i>can</i> play the game without parrying too much, but being good at it encourages you to focus on the offensive stats, leading good players to impose the challenge on themselves. And it's brilliant.
            I've never played a Souls game since that genre it's not really my cup of tea but I can see why this kind of hook is so effective.
            `)}
            </Collapse>
            <StyledCollapseHeader
                open={open[2]}
                onClick={() => handleStateChange(2)}
                isSectionTitle
            >
                <Bookmark id="Visuals" isTitle>Visuals</Bookmark>
            </StyledCollapseHeader>
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
            {splitText(`
            While you can spot some imperfections here and there (i.e.: in-combat facial expressions are not that good, hair and Monoco's staff are very stiff), the graphics are very good but what really stands out is the art direction: everything in the game feels cohesive and the art style makes it very recognizable.

            The visuals are mainly inspired, according to the developers themselves, from Belle Epoque and Art Deco references, which is of course unusual and contributes to the game's uniqueness.
            `)}
            <CustomImage
                src={e33Mansion}
                alt="The Mansion"
            />
            {splitText(`
            On the design side, you can also easily spot the influence of the Persona series, but without feeling like they just lazily copied it.

            The choice of having the heroes start their adventure in the <i>realistic</i> city of <s>Paris</s> <i>Lumière</i>, and then move to the main continent where everything starts to become progressively more and more outlandish and surreal helps the player immersion.
            `)}
            <CustomImage
                src={e33WhiteNevron}
                alt="A white nevron"
                align="right"
            >
                A white Nevron. Consider him a friend.
            </CustomImage>
            {splitText(`
            We also need to mention how the non-human characters are designed: the main enemies you, as the player, will face are called Nevrons, creatures that have been apparently created by the Paintress herself and that feel like they've been put there just to antagonize you - some of them will prove to not even be hostile and will even ask for help, while still maintaining their alien nature.

            Please note that, when I say "alien", I don't mean they don't appear to be human: they don't appear to be part of the world.
            `)}
            <CustomImage
                src={e33Noco}
                alt="Noco, the first gestral you'll interact with"
                align="left"
            />
            {splitText(`
            Later on you'll encounter Gestrals, cartoonish creatures that appear to be taken out of a children's book and that, in contrast with the Nevrons, not only appear to be mostly friendly, but also have a story of their own, a culture, a <i>purpose</i>.
            They bring some <i>life</i> to the world.

            While goofy and childish, they live in their own society, build their towns, follow their rules and grow their lore.

            They are, <i>by great margin</i>, the most integrated race you'll encounter during your adventure on the continent.

            There are also encounter other weird creatures, some of which will feel like part of the world and its lore, while others will appear to be more akin to eldritch horrors.

            The real kicker is that, when reaching the end of the game, every piece will fall into place and you'll understand why everything appears the way it does, and one can only appreciate the amount of work that went into this kind of worldbuilding.
            `)}
            </Collapse>
            <StyledCollapseHeader
                open={open[3]}
                onClick={() => handleStateChange(3)}
                isSectionTitle
            >
                <Bookmark id="Plot" isTitle>Plot</Bookmark>
            </StyledCollapseHeader>
            <Collapse in={open[3]} timeout="auto" unmountOnExit>
            <p>We already discussed how the Souls and Persona series have influenced the game design so far, let's discuss the plot as well.</p>
            <br/>
            <CustomImage
                src={e33Mystery}
                alt="A faceless character"
                align="right"
            />
            {splitText(`
            The basic premise can be summarized as follows: 67 years ago the city of Lumière was ripped from the main continent and, since then, a mysterious creature called the <i>Paintress</i> has been updating a countdown on a distant monolith, causing every inhabitant with the age of the current value to face <i>gommage</i> - erasure from existence.
            Yes, this is very similar to Final Fantasy X's premises.

            The idea of the Paintress's next victims to, once a year, organize an expedition to try and stop her is in turn taken by a french novel called <i>La Horde du Contrevent</i> (The Horde of the Counterwind) that, I'm not going to lie, I had never heard of before reading <a href="https://www.cnet.com/tech/gaming/clair-obscur-expedition-33-producer-talks-whats-coming-in-the-french-jrpg/" target="_blank" rel="noreferrer">this interview</a> where François Meurisse (producer and co-founder of Sandfall Interactive) cited it as a main source of inspiration.

            Scratching under the surface, though, the main plot points can be summarized in grief and family ties, two unexpectedly adult themes that give this game a couple of heart-wrenching moments that, I'm sure, really contributed to the game's success.
            `)}
            <p>The two big plot twists that are presented to the player are both well executed being both well foreshadowed and not too obvious<InlineSpoiler mask='*'>I have to admit, though, that the party trusts Verso <i>way</i> too much during the second act</InlineSpoiler>, and the final choice (that will remind of NieR: Automata to someone) il really full of <i>gravitas</i>.</p>
            <br/>
            <p>10/10 with some minor drawbacks, if you ask me.</p>
            </Collapse>

            <StyledCollapseHeader
                open={open[4]}
                onClick={() => handleStateChange(4)}
                isSectionTitle
            >
                <Bookmark id="Not_a_JRPG" isTitle>A godless endeavor</Bookmark>
            </StyledCollapseHeader>
            <Collapse in={open[4]} timeout="auto" unmountOnExit>
            {splitText(`<h3>Or: why this is <i>not</i> a JRPG.</h3>

            Aside from the fact that I really don't see a way why we should call "JRPG" a game developed and produced in France, the discussion is more interesting than one might think.

            One might say that the the main difference between western RPGs and JRPGs is the way the story is told: JRPGs tend to be story-driven, letting minimal customizations to the player, while western RPGs tend to be more open-ended and allow for a greater degree of player choice.
            `)}
            <YouTubeVideo videoId={"IEUqLL8J4gI"} align={"right"} caption="Here's a 90 minutes video essay on the topic"/>
            {splitText(`
            <b>BUT</b> there is also another common trope that permeates the genre: you see, in the vast majority of cases, the player follows the journey of a hero that, usually following an inciting event, sets out to save the world from a great evil, ending up facing an antagonist that transcended humanity to reach godhood.

            Clair Obscur: Expedition 33 plays with the trope in a variety of ways: while the first act plays the trope straight, the other two progressively subvert the basics leaving us with no hero, no antagonist, no evil, and no god.

            Just a world that needs some saving... maybe?
            `)}
            </Collapse>

            <StyledCollapseHeader
                open={open[5]}
                onClick={() => handleStateChange(5)}
                isSectionTitle
            >
                <Bookmark id="Production" isTitle>Production takeaways</Bookmark>
            </StyledCollapseHeader>
            <Collapse in={open[5]} timeout="auto" unmountOnExit>
            <CustomImage
                src={e33Piano}
                alt="A faceless character"
            />
            {splitText(`
            There are two different stances that people is taking on this game: on one hand we have the people that are saying that this is a AAA game made by a small indie studio, while on the other hand <a href="https://www.reddit.com/r/IndieDev/comments/1j2wpg5/how_did_sandfall_interactive_clair_obscur/" target="_blank" rel="noreferrer">others</a> (correctly, in my opinion) point out the fact that you can't compare the resources Sanfall Interactive had at their disposal with your average indie studio.

            It's true that we're talking abount a small team of around 30 people (which beats most indie studios, by the way), but <i>usually</i> you don't expect a company that has yet to release a single game to have access to public funding, to be able to work on their first game for almost 6 years or to come up with such a marketing presence.

            I'm not going to downplay the magnitude of what they achieved or to portray them as "posers", I just feel like they had a jumpstart that most indie studios don't have and that I fear that it might set the expectations for the indie scene a bit too high in the future.

            I mean, not every new studio can be founded by a bunch of ex-Ubisoft employees, right?
            You can't expect everyone to be able to afford outsourcing work to that scale on their first project, <i>right</i>?

            I don't want to focus on this, though.

            The main thing I want to point out is that this game, manages to play in the same league as the big AAA titles without being a finance-driven product.

            If the same game came out of a big studio you'd expect some <i>very</i> different design choices, but they wanted to create the game <i>they</i> wanted to create, without any kind of executive meddling, and they sold 1.5 million copies in a week.

            So, <i>apparently</i>, turns out turn based JRPGs are... good?

            I hope Square Enix is taking notes, you know?
            `)}
            </Collapse>

            <Bookmark id="Conclusions" isTitle>Closing thoughts</Bookmark>
            {splitText(`
            It took me some time to put my thoughts together even though I have to admit that my takes are not that original - sorry for that.

            All in all the I believe the game is far from perfect, but it does so mmany things right that I expect it to not only be a commercial success, but I hope for it to have impact the whole industry.

            It certainly had an impact on the meme scene, though, which is promising.
            `)}

            <YouTubeVideo videoId={"UJl_L1YQ_nU"}/>
        </>
    )
}

const post = {
    title: "For those who come after",
    date: new Date("2025-05-20"),
    smartContent: <StatefulPost />,
    signature: `Romeo`
};

export default post;