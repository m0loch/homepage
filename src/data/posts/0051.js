import React from 'react';
import { useState } from "react";
import { styled } from '@mui/system';

import { splitText } from '../../components/common/textFunctions';
import { ReactComponent as GameAwardsLogo } from '../../images/game-awards-logo.svg';
import YouTubeVideo from '../../components/posts/youtubeVideo';
import InlineSpoiler from "../../components/posts/inlineSpoiler";
import { StyledCollapseHeader, PlainCollapse } from "../../components/posts/collapse";

const StyledGALogo = styled(GameAwardsLogo)(
    ({ theme }) => ({
        width: "100%",

        "& > path": {
            fill: theme.palette.primary.contrast,
        },

    })
);

function StatefulPost() {
    const [open, setOpen] = useState(new Array(6).fill(false));

    const handleStateChange = idx => {
        const newState = [...open];
        newState[idx] = !open[idx];
        setOpen(newState);
    }

    return (
    <>
        <br/>
        <StyledGALogo />
        <br/>
        <br/>
        {splitText(`
        I have no good intro for this post, so I'll go straight to the point: I've never been a fan of the Game Awards, but I'm appalled to learn the results of this year's edition of the Game Awards.

        I generally don't care about awards in general -they're just marketing stunts, and they <i>always</i> come with their fair amount of controversy- and I always try to ignore the Game Awards <i>in particular</i> as they're the manifest of everything wrong in a not so healthy industry.

        To be extremely quick, the candidates for Game of the Year were (in strict alphabetical order):
        <ul>
            <li>Astro Bot</li>
            <li>Balatro</li>
            <li>Black Myth: Wukong</li>
            <li>Elden Ring: Shadow of the Erdtree</li>
            <li>Final Fantasy 7: Rebirth</li>
            <li>Metaphor: ReFantazio</li>
        </ul>

        ...and the winner, <i>I don't know why I've been beating around the bush for so long</i>, is of course Astro Bot.
        `)}
        <YouTubeVideo videoId={"unYFdcEjV9k"} align={"center"}/>
        {splitText(`

        Now, why should this be something to be angry about?
        I have no reason to believe that we're talking about a bad game - hell, the presentation is stunning, and as any owner of a modern PlayStation I had the occasion to try out Astro's Playroom (its unofficial demo, basically) for free so i <i>know for a fact</i> that it's fun oriented, overtly cute and very fluid.

        But let's be serious for a moment and take another look at the list of entries:`)}
        <StyledCollapseHeader
            open={open[0]}
            onClick={() => handleStateChange(0)}
        >
            <h3>Balatro</h3>
        </StyledCollapseHeader>
        <PlainCollapse in={open[0]} timeout="auto" unmountOnExit>
        {splitText(`
        Balatro is an actual gem, but it also represents the mandatory indie game of the pool - it's there because the jury wants to acknowledge the independent share of the industry, not because it can actually win.

        Balatro is the <i>token character</i> of the party, they just added it to <i>indiewash</i> the ceremony, like Hades, Celeste or Disco Elysium before it.`)}
        </PlainCollapse>
        <StyledCollapseHeader
            open={open[1]}
            onClick={() => handleStateChange(1)}
        >
            <h3>Final Fantasy 7: Rebirth</h3>
        </StyledCollapseHeader>
        <PlainCollapse in={open[1]} timeout="auto" unmountOnExit>
        {splitText(`
        I'll immediately address the elephant in the room: I loved the game (what a surprise, huh?), but I never thought it could stand a chance of actually winning.

        The game sold 2 millions of copies in ~9 months, which is considered good but not great (for reference: Astro Bot sold 1.5 in a third of the time, Wukong 20 millions in <u>one month</u>) and it's not unanimously loved even inside its own niche, so I consider the nomination an accomplishment on itself, but while I see it being one of the best games of 2024, being <i>the</i> best is another matter.`)}
        </PlainCollapse>
        <StyledCollapseHeader
            open={open[2]}
            onClick={() => handleStateChange(2)}
        >
            <h3>Metaphor: ReFantazio</h3>
        </StyledCollapseHeader>
        <PlainCollapse in={open[2]} timeout="auto" unmountOnExit>
        {splitText(`
        This is going to be a breeze: I've never even seen a trailer of this game.

        I've heard people that I trust say that it's basically Persona 5 in another setting and that I should definitely play it. I will, <i>eventually</i>, but I've got no opinion of my own.

        Anyway, it won the Best RPG, Best Narrative and Best Art Direction categories, so I can't really say it deserved to be the GOTY, but it <i>must</i> have been a close contender.`)}
        </PlainCollapse>
        <StyledCollapseHeader
            open={open[3]}
            onClick={() => handleStateChange(3)}
        >
            <h3>Elden Ring: Shadow of the Erdtree</h3>
        </StyledCollapseHeader>
        <PlainCollapse in={open[3]} timeout="auto" unmountOnExit>
        {splitText(`
        Another game that I basically don't know.

        It's nomination was shrouded in controversy since day 1, given that <i>it's not a game, it's a DLC for 2022 Best Game Award winner Elden Ring</i> (duh).
        `)}
        <p>Being inserted in the pool as best game is basically a testament on how the Game Awards really, <i>really</i> love From Software<InlineSpoiler mask='*'>Don't get me wrong, they <u>do</u> deserve their success, but over the 10 life span of the award they had 5 different titles in the nominations and won two times (in 2019 with Sekiro and in 2022 with Elden Ring, as mentioned)</InlineSpoiler>, but as said before being in the pool and winning the award are two very different things - also considering the backlash that followed the nomination itself.</p>
        </PlainCollapse>
        <StyledCollapseHeader
            open={open[4]}
            onClick={() => handleStateChange(4)}
        >
            <h3>Black Myth: Wukong</h3>
        </StyledCollapseHeader>
        <PlainCollapse in={open[4]} timeout="auto" unmountOnExit>
        <YouTubeVideo videoId={"fA2ISG1nV5k"} align={"right"}/>
        {splitText(`
        Did I play this game?
        No!

        Do I plan to play it?
        Also no!

        Was it my favourite game for this year's award?
        Of course!

        Ok, I <i>might</i> be joking here -in fact I really plan to play it in the future- but the game combined peculiar aesthetics, a massive commercial success and it's the first AAA title coming from China, I seriously want this game to be good.
        `)}
        <p>By the way, please disregard that video that popped out on the right, <i>I'm sure nothing shady happened</i><InlineSpoiler mask='*'>Ok, seriously, there might have been some suspicious bot activity that prompted IGN to act, but allow me to be a little bothered by what happened...    </InlineSpoiler>.</p>
        <br/>
        <p>I guess the developers will have to settle for the Players' Voice award.</p>
        </PlainCollapse>
        <StyledCollapseHeader
            open={open[5]}
            onClick={() => handleStateChange(5)}
        >
            <h3>Astro Bot (again)</h3>
        </StyledCollapseHeader>
        <PlainCollapse in={open[5]} timeout="auto" unmountOnExit>
        <YouTubeVideo
            videoId={"IwE_LLvllT8"}
            align={"right"}
            short
            caption={<small>Also, being an avid football watcher, I'm really fed up of seing that bot popping up everywhere</small>}
        />
        {splitText(`
        I've already expressed my feelings for this game, but let's reiterate: I'm <i>sure</i> it's a great game, with smooth controls, vibrant colors, fun gameplay and an amount of polish others can only dream about.
        `)}
        {splitText(`
        I still don't think it should have been considered GOTY material.

        From the videos and articles I consumed about it, they built the whole game on a 4 years old tech demo adding tons of nods and reference to the history of PlayStation gaming.
        This is the polar opposite of bringing something new to the table, it's mostly marketing with some nostalgia on top.

        Is this enough to consider Astro Bot not worth of its award?

        I don't know, but allow me to rumble like the old geezer I am.
        `)}
        </PlainCollapse>

        {splitText(`
        Anyway, to sum it up, I'm not happy with the outcome.

        My takeaway is that I have to buy Metaphor: ReFantazio and that Nobuo Uematsu is still the King of Soundtracks.

        I hope I'll be able to go back to ignoring these awards altogether from the next years onwards, I've got better things to worry about.
        `)}

        <small>AND I AM VERY ANGRY FOR THE LACK OF SLAY THE PRINCESS OR MOUTHWASHING OR TACTICAL BREACH WIZARD IN THE INDIE GAMES SECTION</small>
        <br/>
    </>
    )
}

const post = {
    title: "Game awards 2024",
    date: new Date("2024-12-14"),
    smartContent: <StatefulPost />,
    signature: `Romeo`
};

export default post;