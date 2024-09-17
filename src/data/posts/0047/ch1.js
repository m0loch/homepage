import React from 'react';
import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from "../../../components/posts/inlineSpoiler";
import CustomVideo from "../../../components/posts/customVideo";
import CustomImage from "../../../components/posts/customImage";

import synergy from '../../../media/post-0047/aer-bar.mp4';
import intro from '../../../images/post-0047/ch1/intro.jpg';
import worldmap from '../../../images/post-0047/ch1/world_map.jpg';
import gilgamesh from '../../../images/post-0047/ch1/gilgamesh.jpg';

function Chapter1() {
    return (
        <>
        <Bookmark id="Nutshell">What are we even talking about?</Bookmark>
        <CustomImage
            alt="Where to start"
            src={intro}
            align="right"
        >
            I mean - the game itself says so...
        </CustomImage>
        {splitText(`
        Final Fantasy 7: Rebirth <i>(just "Rebirth" from now on)</i> is the second installment of what we could call the Final Fantasy 7 Remake (FF7R) trilogy.
        Calling it like that is a bit of a stretch given that Final Fantasy 7 Remake is actually the name of the first chapter of said trilogy, but bear with me.
        We're also ignoring, for the sake of simplicity, the existence of the Crisis Core remake, Ever Crisis etc.

        Back to the original question: Rebirth picks up the story at the end of Remake -the party leaving Midgar- and covers the original part of the plot up to Aerith's death, which happens pretty much at the end of the first CD (out of three, for the <i>illiterate</i>).
        `)}

        <iframe title="Final Fantasy 7 Rebirth PREVIEW OST" style={{ borderRadius: "20px" }} src="https://open.spotify.com/embed/album/6RqbGdc1DNiKAHy3fnWzsy?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        Note: I'm still waiting for SQUARE ENIX to publish a full playlist, I wonder if they do so by the time I'll finish this post...

        <Bookmark id="Game_Structure">Game structure</Bookmark>
        {splitText(`
        Rebirth is, first and foremost, an action RPG.
        It builds upon the combat mechanics of its predecessor placing a lot more focus on the sinergies between the various party members.
        `)}
        <CustomImage
            alt="The world of Rebirth"
            src={worldmap}
            align="right"
        />
        {splitText(`
        Outside of combat though, it mixes the original Remake's chapter system with a semi-open world approach: it doesn't feature a full-fledged open world, but lets the player explore 7 different "open regions" linked between each other, but restricting the player's ability to travel to them in order to keep the linearity of the party's journey through the chapters.
        This is nothing groundbreaking, mind you, but it's a solid improvement upon both FF15's and FF16's ground work. 

        Final Fantasy 15 tried the same approach by having a world map that <b>really</b> acted like an open world, but also had a chapter system that changed it's rules around in different moments, with some chapters dragging the party away from it for plot purposes, especially in the last few chapters.
        Final Fantasy 16, on the other hand, tried to persuade the player of the vastity of its world, but its map system felt very <i>insincere</i> to say the least.

        All in all I'm happy on how things turned out: the different locations are <i>mostly</i> faithful to the original ones, the narrative is kept central, and as a player I felt incentivized to explore the surroundings while still not losing focus of the central plot.
        `)}

        <Bookmark id="Gameplay">Gameplay</Bookmark>
        {splitText(`
        The combat system expands on the original Remake, it's smooth, fun and deep and the materia system is very well designed, letting casual players find their comfort zone without the need of spending hours studying, but rewards people wanting to invest some time in research to break the game spectacularly.

        The main new feature you'll notice is the addition of Synergy Skills and Synergy Abilities, with the former being special attacks (or special defensive skills) you can have your controller character perform with the aid of another party member, and the latter being some special attacks performed by two characters at the same time.
        To be more clear: Synergy Skills are either situational defensive skill that help build stagger/limit gauge or slow but powerful attacks that both raise the involved characters' ATB; on the other hand, using ATB bars earns them a synergy bar - every character can store up to 5 ofthem, and those are meant to be spent for Synergy Abilities that <u>do not</u> consume any ATB but cost 3-5 bars from each character that'll be performing them (the cost starts on 3 but rises after each use durin a single combat).

        This is brilliant, as this feature kills two birds with a stone, managing to both address an issue of Remake (the ATB building slowly for non-active characters) and adding some powerful skills in a system that's not tied to the "usual" ATB bar, adding depth to the game play and a lot of personality to the playable characters.
        `)}
        <CustomVideo src={synergy}>
            Also, they're damn cool
        </CustomVideo>
        <br/>
        <p>Speaking of which: the character roster went up to the former four to seven<InlineSpoiler mask='*'>(nine, counting Zack and Sephiroth)</InlineSpoiler>, each with their own personalilty and twist on the combat mechanics, but that will be treated in their dedicated chapters.</p>
        {splitText(`

        The story is also tailored in a way that every character is granted their own time to shine, which can be annoying at times (I'm looking at you, Cait Sith), but allows the player to appreciate the different subsystems <s>before forcing them to spend their lives with Chadley</s>.
        `)}

        <CustomImage
            alt="..."
            src={gilgamesh}
        >
            You should also prepare for a bunch of weird moments - that's why we play JRPGs, don't we?       
        </CustomImage>
        </>
    )
}

export default Chapter1;