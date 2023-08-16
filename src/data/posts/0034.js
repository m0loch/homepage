import { useState } from "react";

import { splitText } from '../../components/common/textFunctions';
import { StyledCollapseHeader, StyledCollapse } from "../../components/posts/collapse";
import { Bookmark, BookmarkLink } from "../../components/posts/bookmarks";
import InlineSpoiler from "../../components/posts/inlineSpoiler";
import CustomImage from "../../components/posts/customImage";
import YouTubeVideo from '../../components/posts/youtubeVideo';

import ff16atl from '../../images/post-0034/active-time-lore.jpg';
import ff16ahriman from '../../images/post-0034/ahriman.jpg';
import ff16benedikta from '../../images/post-0034/benedikta.jpg';
import ff16quest from '../../images/post-0034/ff16quest.jpg';
import ff16hoodedman from '../../images/post-0034/hooded-man.jpg';
import ff16ifrit from '../../images/post-0034/ifrit.jpg';
import ff16ifritGaruda from '../../images/post-0034/ifrit-garuda.webp';
import ff16jill from '../../images/post-0034/young-jill.jpg';
import ff16joshua from '../../images/post-0034/joshua.jpg';
import ff16phoenix from '../../images/post-0034/phoenix.jpg';
import ff16sanbrequeEmperor from '../../images/post-0034/sanbreque-emperor.jpg';
import ff16torgal from '../../images/post-0034/torgal.jpg';

function StatefulPost() {
    const [open, setOpen] = useState(true);
    return (
        <>
            {splitText(`
                Disclaimer: this might end up being lengthy and boring, proceed at your own discretion.

                As previously mentioned I played Final Fantasy 16 and, being a huge fan of the series, it left me with some mixed feelings overall, and I feel like it's time to face the issue and condense my thoughts a little bit.

                I'll try to tackle things in an organized manner, but knowing myself I'm pretty sure it <i>will</i> end up being a slab of text full of digressions that I'll never re-read, so buckle up.
            `)}

            (note: the screenshots have been taken from https://www.rpgfan.com/)

            <span id="Table_of_contents"></span>
            <StyledCollapseHeader
                caption={"Table of contents"}
                open={open}
                onClick={() => setOpen(!open)}
            />
            <StyledCollapse in={open} timeout="auto" unmountOnExit>
                <ol>
                    <li><BookmarkLink id="Presentation">Presentation</BookmarkLink></li>
                    <li><BookmarkLink id="Gameplay">Gameplay</BookmarkLink></li>
                    <li><BookmarkLink id="Game_Design">Game design</BookmarkLink></li>
                    <li><BookmarkLink id="World_Building">World building</BookmarkLink></li>
                    <li><BookmarkLink id="Plot">Plot</BookmarkLink></li>
                    <li><BookmarkLink id="Conclusions">Conclusions</BookmarkLink></li>
                </ol>
            </StyledCollapse    >

            <Bookmark id="Presentation">Presentation</Bookmark>
            <CustomImage
                alt="Phoenix"
                src={ff16phoenix}
                align="left"
            >
                Credits: Square Enix
            </CustomImage>
            {splitText(`
            Let's start by saying this: Final Fantasy 16 is <i>gorgeous</i>: every aspect of it is marvelously crafted, from the 3d models to the backgrounds, the lighting, the shaders, the particle effects, everything is just beautiful.

            Thematically, everything fits together because the setting is a medieval fantasy with the occasional "temple of the techno-ancients" scattered here and there, but long gone are the days of the pseudo-real world merging with a fantasy setting like FF15 or the steampunky-ish feel of FF7 Remake: Valisthea is a land of different biomes, sometimes even stunning like the capital city of Sanbreque, but without strange surprises.
            `)}
            <CustomImage
                alt="Ifrit"
                src={ff16ifrit}
                align="right"
            />
            {splitText(`
            Everything is rendered in real time in the game engine, with no room for CGI movies or anything - with the only caveat of having different "modes" for gameplay and cinematics.
            This means that while the normal gameplay operates on a level of detail that targets the 60 fps threshold (depending on user settings) in order to guarantee the player a certain level of fluidity, cinematics are handled with preset cameras, an higher level of detail and ~30 fps.

            Taking the main visuals aside for a moment, the main dish is the amount of special effects that are constantly thrown at the player: lights, fires, particle effects and the such are very abundant and very well-designed, and you can see that the developers didn't pull any punch, <a href="https://www.gamesradar.com/final-fantasy-16-is-reportedly-overheating-ps5s/">no matter the cost</a>.

            The only real drawback that has arisen is the excess of motion blur that couldn't even be toned down in the early releases (now a specific setting has been introduced, though).

            Bonus: the Final Fantasy games are known for their OSTs, and this game is far from being an exception, with the usual recurring themes being blended with choirs and a distinctive, epic feel.
            `)}
            <iframe title="FINAL FANTASY XVI Original Soundtrack (Prelude)" style={{ borderRadius: "20px" }} src="https://open.spotify.com/embed/album/4SKgLEaL1Zpj6gDrtJ0OHu?si=WStIM2nwS--YrJK-8UeEvg?utm_source=generator" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

            <Bookmark id="Gameplay">Gameplay</Bookmark>
            {splitText(`
            While I can't really say anything bad about the graphics, here things get a little more complicated.

            At the beginning of the game players gets to choose whether they want to focus on the story or the action, implying that the difficulty will get tweaked accordingly.
            What's the difference between the two modes, you may ask - well, let me talk for a moment of the accessibility rings (no, not <a href="https://draftsim.com/mtg-the-one-ring/" target="_blank">that one</a>)...
            Square Enix designed a handful of special accessories with the aim of aiding players struggling with the gameplay, as per the following list:
            <ol>
                <li>Ring of Timely Strikes: perform combos by just keeping the square button pressed</li>
                <li>Ring of Timely Evasion: Clive will auto-dodge incoming attacks, where possible</li>
                <li>Ring of Timely Focus: a toned-down version of the previous one - makes doding easier</li>
                <li>Ring of Timely Healing: Clive will auto-chug a potion when his level bar gets too low</li>
                <li>Ring of Timely Assistance: Torgal will be controlled by the AI</li>
            </ol>
            `)}
            <CustomImage
                alt="Bored Benedikta"
                src={ff16benedikta}
            >
                Piece of cake
            </CustomImage>
            {splitText(`

            Now, it would be easy to expect the "easier" difficulty to feature such rings - and that would be <b>wrong</b>.
            In fact, you'll be awarded all of these nonetheless, the only actual difference is that players choosing the action mode will start the game with none of these rings <i>equipped</i>.

            While on one hand I think that handing the player some means to choose their own difficulty is more than fine - to be completely fair, they manage to trivialize the game so much they're probably even intended as a mean to let people with disabilities to enjoy the game - I feel like that it's quite a strange design choice.
            I'm not against the choice per se, but wouldn't it be better to have some settings in the menu, rather than have items that take up inventory space?
            What's the point of presenting the player a choice between the story driven mode and the action oriented one?

            This leads us to the next big point: the combat system is very cool and you can feel that they've learned their lessons with FF15 and FF7R - but the game is too easy.
            Like, <b>WAY</b> too easy.

            I get that you really want your players to experience your story, but the difficulty setting for the "normal" run is WAY too low - what's even the point of having a good combat system, with many ways to customize your abilities if there's no challenge?

            Another thing that has been pointed out is that in this game status and elements are basically non-existent ~ I'm not among the ranks of those that consider this a major issue, but it is an issue nonetheless, even if we recognize that this is an action RPG and that's pretty common for the genre to lack <i>those</i> kinds of strategic minutiae.

            Last but not least: the eikons fights are the epitome of what's good and wrong in the game.
            `)}
            <CustomImage
                alt="Ifrit vs Garuda"
                src={ff16ifritGaruda}
            >
                "CATCH!~"
            </CustomImage>
            {splitText(`

            They're epic and spectacular, filled to the brim with special effects meant to convey the magnitude of the clash at hand.
            They're also custom tailored to follow a specific structure and narrative... and that's where the shortcomings arise.

            If you remember the Leviathan fight in FF15 you should be able to recall the WRONG way to plot those kind of boss fights: you're having your player fight an immense, godlike creature, you have to both justify the fact that there's a contest at all and design an experience that can be digested as "feasible" (I'll avoid saying "realistic" for obvious reasons).
            FF15 pulled this out by having Noctis going Super Saiyan for the duration of the scene and presenting the fight as a rail shooter-esque series of quicktime events.
            `)}
            <YouTubeVideo videoId={"vkKX77Bq0x8"} />
            {splitText(`

            FF16 does this <b>WAY</b> better, but here and there you can't help but notice how preset thresholds trigger the different parts of the fights, and since the difficulty level is so low longer bosses like Titan and Bahamut end up being a drag, and that's a shame.
            `)}

            <Bookmark id="Game_Design">Game design</Bookmark>
            {splitText(`
            We've already talked about the combat system, but I want to reiterate: it is <u>good</u>.
            <a href="https://finalweapon.net/2023/06/18/final-fantasy-xvi-all-about-combat-director-ryota-suzuki/" target="_blank">And nobody should wonder why</a>.
            `)}
            <CustomImage
                alt="Good boi"
                src={ff16torgal}
                align="right"
            >
                "Who's a good boy? Yes you are!"
            </CustomImage>
            {splitText(`
            It's inherent flaws come from other design choices:
            <ul>
                <li>the lack of status effects and the negligible effect elements have on the combat;</li>
                <li>Torgal's the only party member you can command during the fight;</li>
                <li>it's not challenging until at least the New Game+.</li>
            </ul>

            The very idea of having a New Game+ is good and will ensure replayability - but if you move all of the challenge of your game there, you have a problem.

            With that out of the way, let's take a step back and try to look at the whole picture.

            Once you're done with the prologue, the first thing you'll end up noticing is that this is not an open world.
            That's a great thing in my opinion as I'm already fed up with that genre, but your mileage may vary here.
            In a nutshell: the world map is pretty much an actual map that ties together different macro-locations and lets you fast travel between predetermined beacons.
            Different locations will be unlocked when visited during the normal course of the gameplay.

            The progression of the game is pretty linear with the main quest bringing the plot forward and side quests being collateral.
            How linear, you may ask... I'd say FF13 levels of linearity.
            But while that proved to be a fatal flow to me back in the day, this came as a breath of fresh air in the open world-ridden environment we live in nowadays...
            `)}
            <CustomImage
                alt="Arhiman "
                src={ff16ahriman}
                align="left"
            >
                Maybe the only point of the game where I expect people to get caught off guard and die...
            </CustomImage>
            {splitText(`

            Now, <i>in modern RPGs getting the side quests right is crucial, and often makes the difference between a good game and one doomed to mediocrity.</i>

            Does FF16 get them right?
            Well, yes and no.

            You see, the biggest issue modern gaming has with side quests is the fact that they're usually uninspired and repetitive, and players don't want their side quests to either be a boring way to farm resources or, even worse, an artificial game to keep them invested in some meaningless tasks just to avoid them exiting the loop.
            Players want their side quests to bring them additional value - and you can see the developers wanted to give'em exactly that.

            The problem is that on one each side quest tries to either show some extra bits of lore or bring some piece of character development to the table, on the other after a while you start to see beyond the well-acted and well-scripted dialogues and recognize the usual pattern of "talk with A, go to B, fight some monsters, go talk with A again, profit".
            And that usually for no additional reward rather than having seen an extra dialogue and gained a few XP because most of the time you'll just earn some crafting materials - which are not scarce at all, and crafting is really a mechanic that's not going to keep you invested.

            This issue with the crafting materials being so common and so useless doubles down and hinders free exploration as well - what's the point of exploring locations if all you're going to gains is "some pinches of magicked ash"?
            The way locations are built in this game mean that by spending some extra time exploring will let you discover in advance special places where... nothing happens until you speak at the right place with the right character to unlock the quest that will bring you there.

            Don't worry though: you're not going to miss any quest, as the game will notify you of characters wanting to give you a side quest on both the local map and the world map.
            And if that's not enough there's also a character whose job consists in keeping track of side quests you've yet to accept (yes, this game has an issue with hand-holding).
            `)}
            <CustomImage
                alt="Quest accepted"
                src={ff16quest}
            />

            <Bookmark id="World_Building">World building</Bookmark>
            {splitText(`
            I feel like I'm being harsh in this review, but I want to let you know that I really enjoyed the game.
            Like honestly, a lot.
            I loved the general idea of having a world that's mostly "realistic", but where magic is common.
            A world where humans don't have any inherent magic power, but crystals lets them cast basic spells they can use to cook for a moderate price, while at the same time being impractical for war purposes.
            A world where people that <i>do</i> have innate magic powers are either so powerful they can rule nations or ostracized by the commoners, if not plainly hated, hunted and/or enslaved.

            `)}
            <CustomImage
                alt="Emperor of Sanbreque"
                src={ff16sanbrequeEmperor}
                align="right"
            >
                Not a good character, but not a slaver nonetheless
            </CustomImage>
            {splitText(`
            I liked the fact that slavery is a central theme of the game, maybe being a little bold on stroking the differences between good characters that want equality between everybody and selfish ones that either prosper in the environment or just don't care and focus on having more power.

            In general I feel that the different nations of Valisthea are similar enough to be beliavable <i>(fantasy games tend to neighbouring places being completely different, like having a Frankish-like Kingdom share a border with the Empire of the Magical Frogs of the sands...)</i>, while trying to differentiate different cultures on details.
            I can't really say that they managed to pull it off perfectly, mainly because the core game revolves around characters that operate on their own level rather than being involved too much in the political scene, but I really love the idea of showing small details like the different greetings different people show without being too obvious.

            While slavery -or rather, equality- is the central point of the game, there are a handful of extra themes that the game touches:
            <ul>
            <li>the Blight, aka the illness of the land that progressively reduces the amout on inhabitable land of the continent (<a href="https://en.wikipedia.org/wiki/Lebensraum" target="_blank">Lebensraum</a> anyone?) and how people deal with the matter;</li>
            <li>how power corrupts individuals;</li>
            <li>the value of self-sacrifice vs the importance of the cause (the whole issue with the order of the Undying);</li>
            <li>the "economy" of the crystals in a society where magic is a common commodity and it's usage seem to cause <s>global warming</s> environmental problems;</li>
            </ul>
            `)}
            <CustomImage
                alt="Active time lore"
                src={ff16atl}
                align="left"
            >
                They're so proud of the world building they let you pause every cutscene to learn extra bits of info
            </CustomImage>
            {splitText(`

            The amount of effort that has been put into the lore is huge, and the fact that they even managed to integrate two characters -Harpocrates and Vivian- tasked with the single objectives of letting you access to lore parts you could have missed and insights on the current political situation is a testament on that - even if you (like myself) are not really a fan of them.

            A little extra:
            a lot of the characterization goes through the lenses on how the various actors live their romantic relationships: Clive, his parents, Benedikta, Hugo, Barnabas, Dion have wildly different approaches on the way they live love, even Cid is implied to have quite a tumultuous past (sadly, off-camera).

            ...and of course you'll find the usual amount of references to other Final Fantasy games (Spoony bard, you made me giggle), the usual themes of defeating one's own destiny and the nature of the final boss - the standard Final Fantasy package.
            `)}

            <Bookmark id="Plot">Plot</Bookmark>
            <CustomImage
                alt="Joshua"
                src={ff16joshua}
                align="left"
            />
            {splitText(`
            The game starts in media res, with Clive and his team tasked with a stealth assassination plan while two big armies are facing each other, and soon we're faced with a flashback from Clive's childhood.

            After a lengthy prologue explaining all the trauma our protagonist went through, we quickly gain some insights on a couple of important characters in the current political scene, then face a minor plot twist at the end of the mission and then we're brought to the first central hub of the game.

            I feel like that, at this point, the game is at its peak - the scale of the world has been estabilished, we've witnessed a battle between two big armies (each with its own Eikon), the importance of Dominants in the politics and our fair share of treason.
            `)}
            <CustomImage
                alt="Young Jill"
                src={ff16jill}
                align="right"
            >
                That damn smile...
            </CustomImage>
            {splitText(`
            This is a good time to recall that the team behind the game prepared for the task by binge-watching Game of Thrones, in case you were wondering.

            All in all the plot holds up very well, at least until the late game where the world starts to feel a bit empty with the whole Akashic situation starting to reminisce a bit too much of the whole zombie situation that was everywhere in the media in the last years - when not being a direct reference to the White Walkers I mean.

            What else can I tell you?
            `)}
            <p>There are various plot twists, but most of them are very predictable<InlineSpoiler mask='*'>So you're telling me that there's this guy called <i>Joshua</i>, bearer of the power of the <i>Phoenix</i>, that needs to die for the plot... <b>AND HE COMES BACK? <u>UNEXPECTED!</u></b></InlineSpoiler>, some things are plain confusing (like the ending, or why two completely different guys manage to look perfectly indistinguishable while wearing a hood) but the overall plot is very, very good in my opinion.</p>
            <CustomImage
                alt="Hooded man"
                src={ff16hoodedman}
            >
                Am I the good guy or the incredibly evil one...?
            </CustomImage>

            <Bookmark id="Conclusions">Conclusions</Bookmark>
            {splitText(`
            I'll try to be quick at least here, as this post has been going on forever: the game is great in its own right, and it's a step in the right direction for the whole series after the mess called Final Fantasy 15.

            I'd still prefer Square Enix to move the series back to a turn-based JRPG, but I guess I can still play Octopath Traveler II, don't I?
            `)}
        </>
    );
}

const post = {
    title: "The big Final Fantasy XVI post",
    date: new Date("2023-08-15"),
    smartContent: <StatefulPost />,
    signature: `Romeo`
};

export default post;