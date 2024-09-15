import { useState } from "react";

import { splitText } from '../../components/common/textFunctions';
import { StyledCollapseHeader, StyledCollapse } from "../../components/posts/collapse";
import { Bookmark, BookmarkLink } from "../../components/posts/bookmarks";
import { Collapse } from "@mui/material";
import InlineSpoiler from "../../components/posts/inlineSpoiler";
import CustomImage from "../../components/posts/customImage";
import CustomVideo from "../../components/posts/customVideo";

import synergy from '../../media/post-0047/aer-bar.mp4';
import rebirthlogo from '../../images/post-0047/ch1/logo.png';
import intro from '../../images/post-0047/ch1/intro.jpg';
import worldmap from '../../images/post-0047/ch1/world_map.jpg';
import gilgamesh from '../../images/post-0047/ch1/gilgamesh.jpg';
import cloud from '../../images/post-0047/characters/cloud.jpg';
import barret from '../../images/post-0047/characters/barret.jpg';
import tifa from '../../images/post-0047/characters/tifa.jpg';
import aerith from '../../images/post-0047/characters/aerith.jpg';
import red_xiii from '../../images/post-0047/characters/red_xiii.jpg';
import yuffie from '../../images/post-0047/characters/yuffie.jpg';
import cait_sith from '../../images/post-0047/characters/cait_sith.jpg';
import zack from '../../images/post-0047/characters/zack.jpg';
import sephiroth from '../../images/post-0047/characters/sephiroth.jpg';
import cid from '../../images/post-0047/characters/cid.jpg';
import vincent from '../../images/post-0047/characters/vincent.jpg';

import unreliableCloud from '../../images/post-0047/ch2/cloud-unreliable-1.jpg';
import unreliableCloud2 from '../../images/post-0047/ch2/cloud-unreliable-2.jpg';
import homecoming from '../../images/post-0047/ch2/cloud-homecoming.jpg';
import barret_date from '../../images/post-0047/ch2/barret-date.jpg';
import barret_dyne from '../../images/post-0047/ch2/barret-dyne.jpg';
import barret_dyne2 from '../../images/post-0047/ch2/barret-dyne-2.jpg';

import WarningIcon from '@mui/icons-material/Warning';

function StatefulPost() {
    const [open, setOpen] = useState([true, true, true, false, false]);

    const handleStateChange = (idx) => {
        const newState = [...open];
        console.log(newState);
        console.log(open);
        newState[idx] = !open[idx];
        setOpen(newState);
    }

    const tempIconStyle = {
            fill: "red",
            width: "60",
            height: "auto"
    }

    return (
        <>
            {/* temp warning */}
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                    <WarningIcon style={tempIconStyle}/>
                    <p style={{color: "red", textAlign: "center"}}>This is a work in progress and it's taking forever, so I'll just update this post over the course of the next <i>weeks</i></p>
                    <WarningIcon style={tempIconStyle}/>
            </div>
            {/* temp warning */}
            <CustomImage
                alt="FF7 Rebirth logo"
                src={rebirthlogo}
                align="center"
            />

            {splitText(`
                <u>Disclaimer</u>: this <i>will</i> end up being lengthy and boring, proceed at your own discretion.

                <u>Disclaimer #2</u>: this will not be short and will not be easy - at the time of writing I have no plans on which direction this whole post will take.

                It could end up being a big rant or just be a lengthy analysis, I don't know yet.
                I know I have a strong opinion and that I need to put it down on (digital) paper, but I'm not even sure if that's an overall good opinion or not.

                <u>Disclaimer #3</u>: this won't be spoiler free. This post is meant for people that have played the original game <b>and</b> the new ones. If you didn't, proceed at your own risk.
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
                    <li><BookmarkLink id="Nutshell">What are we even talking about?</BookmarkLink></li>
                    <li><BookmarkLink id="Game_Structure">Game structure</BookmarkLink></li>
                    <li><BookmarkLink id="Gameplay">Gameplay</BookmarkLink></li>
                    <br/>
                    <BookmarkLink id="Pt2" isTitle>Part 2: The characters</BookmarkLink>
                    <li><BookmarkLink id="Cloud">Cloud Strife</BookmarkLink></li>
                    <li><BookmarkLink id="Barret">Barret Wallace</BookmarkLink></li>
                    <li><BookmarkLink id="Tifa">Tifa Lockhart</BookmarkLink></li>
                    <li><BookmarkLink id="Aerith">Aerith Gainsborough</BookmarkLink></li>
                    <li><BookmarkLink id="Red_XIII">Red XIII</BookmarkLink></li>
                    <li><BookmarkLink id="Yuffie">Yuffie Kisaragi</BookmarkLink></li>
                    <li><BookmarkLink id="Cait_Sith">Cait Sith</BookmarkLink></li>
                    <li><BookmarkLink id="Zack">Zack Fair</BookmarkLink></li>
                    <li><BookmarkLink id="Sephiroth">Sephiroth</BookmarkLink></li>
                    <li><BookmarkLink id="Cid">Cid Highwind</BookmarkLink></li>
                    <li><BookmarkLink id="Vincent Valentine">Vincent</BookmarkLink></li>
                    <li><BookmarkLink id="Shinra_Turks">Shinra and the Turks</BookmarkLink></li>
                    <li><BookmarkLink id="Cameos">Cameos</BookmarkLink></li>
                    <br/>
                    <BookmarkLink id="Pt3" isTitle>Part 3: The discovery of the "new" Gaia</BookmarkLink>
                    <li><BookmarkLink id="WB_Summary">How the planet changed in just 27 years</BookmarkLink></li>
                    <li><BookmarkLink id="Grasslands">The grasslands</BookmarkLink></li>
                    <li><BookmarkLink id="Mythril_Mines">The mythril mines</BookmarkLink></li>
                    <li><BookmarkLink id="Junon">Junon and its surroundings</BookmarkLink></li>
                    <li><BookmarkLink id="Corel">Costa del Sol, Mt Corel, the Gold Saucer and the desert</BookmarkLink></li>
                    <li><BookmarkLink id="Gongaga">Gongaga!</BookmarkLink></li>
                    <li><BookmarkLink id="Cosmo_Canyon">Cosmo Canyon</BookmarkLink></li>
                    <li><BookmarkLink id="Nibelheim">The Nibelheim area</BookmarkLink></li>
                    <li><BookmarkLink id="Meridian_Ocean">The ocean and Gilgamesh island</BookmarkLink></li>
                    <li><BookmarkLink id="Temple_Cetra">The temple of the Ancient and their city</BookmarkLink></li>
                    <br/>
                    <BookmarkLink id="Pt4" isTitle>Part 4: what is <i>actually</i> happening here</BookmarkLink>
                    <li><BookmarkLink id="Multiverse">The elephant in the room</BookmarkLink></li>
                    <li><BookmarkLink id="That_Scene"><i>That</i> scene</BookmarkLink></li>
                    <li><BookmarkLink id="Ending">The ending</BookmarkLink></li>
                    <li><BookmarkLink id="Future">What's missing, and what I think will happen in part three</BookmarkLink></li>
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
            </Collapse>

            <StyledCollapseHeader
                open={open[2]}
                onClick={() => handleStateChange(2)}
                isSectionTitle
            >
                <Bookmark id="Pt2" isTitle>Part 2: The characters</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                <Bookmark id="Cloud">Cloud Strife</Bookmark>
                <CustomImage
                    alt="Cloud Strife"
                    src={cloud}
                />
                {splitText(`
                Cloud comes back from Remake keeping his role as the party's jack of all trades (very fitting for a mercenary, of course), but with a couple of extra tricks up his sleeve - namely: while in Remake he was not that good against airborne enemies, his aerial game is now very good, and he also has a long range attack at his disposal.

                But.
                This is not what this section is about.

                Cloud is still the mail focus of the plot, he's the literal cornerstone of everything that has happened in the past and is happening in the present, and he is also our own <i>unreliable narrator</i>.

                This is a bit different from the original game, where his psychotic breaks were few and far between and the narration was more party-based, and it's A LOT stronger than it was in the Remake.
                `)}
                <CustomImage
                    alt="Aerith and Tifa are not amused"
                    src={unreliableCloud}
                    align="left"
                >
                    <i>"How dare you talk shit about Zack?!?"</i>
                </CustomImage>
                {splitText(`

                With some minor exceptions, the plot of Rebirth is either seen through his very eyes of with a specific focus on him and his deteriorating mental state.

                In the second chapter Tifa confronts him about the fact that his recollection of the Nibelheim facts is not... really on point, let's say - and we're confronted to multiple instances of here and Aerith discussing Cloud, that incident and the fact that our hero doesn't remember Zack at all.
                `)}
                <CustomImage
                    alt="The world of Rebirth"
                    src={unreliableCloud2}
                    align="right"
                >
                    (This has never happened)
                </CustomImage>
                {splitText(`
                ...so we also witness Cloud ret-con his own memory and come up with a completely made up scenario where Zack died in the river when the bridge collapsed.

                And don't get me started on the multiple occasions where visions of Sephiroth pop up telling Cloud that Tifa is dead and he should be aware of that girl in our party claiming to be her.

                Or the multiple times times when he starts acting like Sephiroth, for that matter. 

                The actual end of Rebirth dances between the great multiverse plot point and his own mental breakdown - I'm talking both about the actual ending and <i>that scene</i>.

                But we'll talk about it later.
                `)}
                <CustomImage
                    alt="Cloud losing his shit"
                    src={homecoming}
                    align="center"
                >
                    <i>"It's not death. It's a homecoming."</i>
                </CustomImage>

                <Bookmark id="Barret">Barret Wallace</Bookmark>
                <CustomImage
                    alt="Barret Wallace"
                    src={barret}
                >
                </CustomImage>
                {splitText(`
                Barret is back and he's as angry as before!

                ...or is he?
                Mechanically he's pretty much the same character we used to play in Remake, focusing mainly in tanking damage and supporting the rest of the crew, so I'm not going to comment upon that.
                From a plot perspective, I don't like what they did to him.

                Please bear with me: in the original game he was a self-centered, constantly swearing caricature of a person of color as seen from a japanese writer trying to incorporate some stereotypes taken from Hollywood movies... but just below that first layer, he is first of all a damaged man that leads a group of ecoterrorists against Shinra while secretly pursuing his personal vendetta.
                His story is tragic and he is broken: his actions are always fueled by anger and passion, he refuses to bow down and wants to be the leader of the party, even when his close friends at Avalanche die in the Sector 7 incident he raises the stakes bouncing off any kind of personal responsibility but adding them to the stack of things that Shinra should pay for.

                No, I'm not saying that he doesn't care about them, I'm just pointing out the way his brain works.
                `)}
                <CustomImage
                alt="A date with Barret"
                src={barret_date}
                align="right"
                >
                    He's still my best bud after all
                </CustomImage>
                {splitText(`
                Over the equivalent of the plot section covered by Rebirth, we see the original game's Barret having to cope with the fact that the party's leadership is given to Cloud, we bring him to Corel to re-live his trauma, and then we see him recollect himself in Cosmo Canyon swearing once again that Shinra's going to pay, and that that'll be a new start for Avalance.

                I believe that now is a good time as any to remind you all that, in <i>this</i> universe, Avalanche is not just made of Barret and his friends, but he is just the leader of a <i>splinter cell</i>(sic) of it.

                Also, the whole visit to Cosmo Canyon plays out completely different - but that's going to be discussed when talking about it.
                Above all, though, I <u>need</u> to point out how different the whole Corel segment is, and how it <u>stripped</u> value from the character of Barret. 

                In short:
                <ul>
                <li>the arrival in Corel is not identical, but similar enough;</li>
                <li>in the original we are lead to believe that Barret could be the culprit, while this time around we see Barret spotting the real perpetrator* (from his own point of view, in a game where we're often forced to see everything through Cloud's lenses);</li>
                <li>the party chooses to enter Corel's prison (in order to clear Barret's name) rather than getting thrown there with great prejudice... but whatever;</li>
                <li>this is also due to the fact that we arrive at the scene after the mess has already been cleaned up, rather than being caught by Dio;</li>
                <li>finally, we find Dyne, that has already been subjugated by a third party, then free him, then fight him, then he comes up with some superpowers, them Shinra jumps in and let him have his heroic moment dying while protecting Barret.</li>
                </ul>
                `)}
                <CustomImage
                alt="Meeting Dyne"
                src={barret_dyne}
                align="left"
                />
                {splitText(`
                This is outrageous, and robs Barret of a dramatic moment that let the character grow.
                The original Dyne is not just a crazy monster that succumbed to his own trauma and went full Joker, but he's first and foremost an actual reflection of Barret, and by facing him Barret also ends up facing his own self, the fact that while he managed to "do a better job" than Dyne in recovering, he mainly did so thanks to the responsabilities he took towards Marlene, while her <i>actual father</i> had to live all these years thinking she was dead.

                After their confrontation, the original Dyne decided to put an end to his own life because he didn't want her daughter's father to be a monster and realized that, from his point of view, that was his only way out; Barret can't do anything about this, he'll just have to bear the burden of this on top of everything else.
                His friend, that was right all along about Shinra, is basically dead <i>again</i> and he could do nothing to save him <i>again</i>.
                It's sad, it's powerful... and it's probably a bit too much for Square Enix in 2024.
                `)}
                <CustomImage
                alt="Facing Dyne"
                src={barret_dyne2}
                align="right"
                />
                {splitText(`

                Now please fight Palmer in the robofrog, it's wacky boss time!
                (By the way: I'll talk about the weird pacing of these story beats later when discussing about Corel).
                `)}

                <Bookmark id="Tifa">Tifa Lockhart</Bookmark>
                <CustomImage
                    alt="Tifa Lockhart"
                    src={tifa}
                >
                </CustomImage>
                {splitText(`
                `)}
                
                <Bookmark id="Aerith">Aerith Gainsborough</Bookmark>
                <CustomImage
                    alt="Aerith Gainsborough"
                    src={aerith}
                >
                </CustomImage>
                {splitText(`
                `)}

                <Bookmark id="Red_XIII">Red XIII</Bookmark>
                <CustomImage
                    alt="Red XIII"
                    src={red_xiii}
                >
                </CustomImage>
                {splitText(`
                `)}

                <Bookmark id="Yuffie">Yuffie Kisaragi</Bookmark>
                <CustomImage
                    alt="Yuffie Kisaragi"
                    src={yuffie}
                >
                </CustomImage>
                {splitText(`
                `)}

                <Bookmark id="Cait_Sith">Cait Sith</Bookmark>
                <CustomImage
                    alt="Cait Sith"
                    src={cait_sith}
                >
                </CustomImage>
                {splitText(`
                `)}

                <Bookmark id="Zack">Zack Fair</Bookmark>
                <CustomImage
                    alt="Zack Fair"
                    src={zack}
                >
                </CustomImage>
                {splitText(`
                `)}

                <Bookmark id="Sephiroth">Sephiroth</Bookmark>
                <CustomImage
                    alt="Sephiroth"
                    src={sephiroth}
                >
                </CustomImage>
                {splitText(`
                `)}

                <Bookmark id="Cid">Cid Highwind</Bookmark>
                <CustomImage
                    alt="Cid Highwind"
                    src={cid}
                >
                </CustomImage>
                {splitText(`
                `)}

                <Bookmark id="Vincent">Vincent Valentine</Bookmark>
                <CustomImage
                    alt="Vincent Valentine"
                    src={vincent}
                >
                </CustomImage>
                {splitText(`
                `)}

                <Bookmark id="Shinra_Turks">Shinra and the Turks</Bookmark>
                <Bookmark id="Cameos">Cameos</Bookmark>

            </Collapse>

            <StyledCollapseHeader
                open={open[3]}
                onClick={() => handleStateChange(3)}
                isSectionTitle
            >
                <Bookmark id="Pt2" isTitle>Part 3: The discovery of the "new" Gaia</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[3]} timeout="auto" unmountOnExit>
            WIP
            {/* Corel
            - now that we've reached the prison, rather than get in touch with Barret, find Dyne, solve the mystery and then find a way up, we get ambushed by some goons, forced to feed a chocobo in order to win a race, and just then we'll be able to go back to our plot */}
            </Collapse>

            <StyledCollapseHeader
                open={open[4]}
                onClick={() => handleStateChange(4)}
                isSectionTitle
            >
                <Bookmark id="Pt2" isTitle>Part 4: what is <i>actually</i> happening here</Bookmark>
            </StyledCollapseHeader>

            <Collapse in={open[4]} timeout="auto" unmountOnExit>
            WIP
            </Collapse>
        </>
    );
}

const post = {
    title: "The big Final Fantasy VII Rebirth post",
    date: new Date("2024-09-15"),
    smartContent: <StatefulPost />,
    signature: `Romeo`
};

export default post;