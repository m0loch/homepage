import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from "../../../components/posts/inlineSpoiler";
import CustomImage from "../../../components/posts/customImage";
import YouTubeVideo from '../../../components/posts/youtubeVideo';

import CoverArt from '../../../images/post-0063/ff5/cover.jpg';
import LegendaryWeapons from '../../../images/post-0063/ff5/ff5sealedweapons.webp';
import Party from '../../../images/post-0063/ff5/ff5party.webp';

function FF5() {
    return (
        <>
        <Bookmark id="FF5Nutshell">A bit of context</Bookmark>
        <CustomImage
            alt="Cover art for the original Final Fantasy V"
            src={CoverArt}
            align="right"
        />
        {splitText(`
            With Final Fantasy 4 being a success, Square kept working tirelessly on building upon the franchise and, as always, they worked on a very strict schedule to put out the following chapter of the saga.

            While the first trilogy had to struggle against the limitations of a console reaching the end of its life cycle, the fourth game ended up being the first JRPG ever released on the Super Nintendo, a console that was way more powerful <i>and</i> still in its infancy, meaning that there was a lot of room for improvement and experimentation.

            And improvements there were: graphically the game was a huge step forward, with very curated tilesets that put FF4 to shame, some aggressive use of Mode 7 and long cutscenes to convey the story.
            Speaking of cutscenes, a lot of effort was put into the expressiveness of the characters, that for the first time ever conveyed their emotions through facial expressions and body language (and some comic balloons here and there for added measure).

            In the end, Final Fantasy 5 released on December 6th 1992, with a pixel art that was never so detailed and vibrant before... yet it managed to take some unexpected turns and somehow missed an official western port for years.

            Well, time to move on to the game itself.
        `)}

        <Bookmark id="FF5Game">The game</Bookmark>
        {splitText(`
            First of all I want to point out that one can't help but appreciate how the team managed to not sit on their laurels and instead kept pushing the boundaries.

            This led to the aforementioned graphical improvements, but also to a complete re-evaluation of what went right and what went wrong in the yet very successful FF4.

            And, looking at the outcome, it seems like that the biggest flaw it bore was the lack of freedom the linearity of the plot imposed on players, meaning that this time around Sakaguchi and his team decided to go back to a mechanics-first approach.

            This meant, for starters, going back to a restricted party of four (actually: <i>five</i>, but you'll only have four of them available at any given time) very customizable characters, and reintroducing an updated version of FF3's job system.

            But let's start with the plot: the game opens with a brief introduction showing King Tycoon, worried by the wind stopping, leaving his castle to investigate the Wind Crystal and witness its shattering.
        `)}
        <CustomImage
            alt="The room of the Sealed Weapons in Final Fantasy V"
            src={Party}
            align="left"
        >
            <i>The party, as imagined by Yoshitaka Amano</i>
        </CustomImage>
            <p>After that, a meteorite falls from the sky and a young adventurer named Bartz<InlineSpoiler mask='*'>I'll keep some sort of discipline and avoid calling him Butz, even though that was the name he had in the fan localization I <i>had</i> to play back in the day</InlineSpoiler>, along with his trusty chocobo Boko, reaches the crash site finding princess Lenna<InlineSpoiler mask='*'>(daughter of the aforementioned King Tycoon)</InlineSpoiler> and an old man that lost his memory: Galuf.</p>
            <br/>
            <p>After a first introductory section, the three of them will meet Faris, captain of a pirate ship<InlineSpoiler mask='*'>also: the long-lost sister of Lenna that had to cross-dress in order to be taken seriously from the pirate crew; in 2025 the scene where Bartz and Galuf find out would be deemed <i>problematic</i></InlineSpoiler>, and reach the Wind Shrine, where they find the shards of the shattered crystal (thus learning the first batch of jobs).</p>
            <br/>
            <p>Over the course of the game they will try to save the other three elemental crystals from meeting the same fate - they will then learn that Galuf came from another world trying to stop Exdeath, an ancient tree turned evil sorcerer (I swear, I'm not making this up) from fully re-awaken and destroy the world.</p>
            <br/>
            <p>After a second chapter on Galuf's homeworld, the two worlds will then merge and the party<InlineSpoiler mask='*'>well, <i>most of it</i>, as Galuf is eventually subbed out by his nephew Krile</InlineSpoiler> will have to face Exdeath in a dungeon outside of time and space.</p>
        {splitText(`

            There are many aspects of the game where FF5 proves to be a spiritual successor of FF3 like the aforementioned (but dramatically improved) job system, but also the return of the crystals, the multi-phased world, but also a small party of warriors of destiny that try to stop an ancient evil from returning and doom the world to the Void, after the <i>previous</i> party of heroes only managed to seal it away.

            Now that we assessed how much the game borrows from its predecessors, let's talk about the many things it brings to the table.

            While the first Final Fantasy was customizable in the sense that you could choose your party members and their classes, FF3 let you change class <i>almost</i> anytime (you had to spend some job points to do so) - FF5 takes this to the next level by making such changes completely free, but by also letting the player <i>mix</i> said classes, other than just getting rid of bad jobs like the scholar or having "doubles" (i.e. the Devout being a better White Mage or the Black Belt being an upgraded Monk) in favour of more unique jobs like the Blue Mage, the Time Mage, the Mimic, and so on and so forth.

            And yes, this is the first game to introduce Blue Magic, as well as being the first game featuring super bosses like Omega and Shinryuu, and for the first time ever the final boss -albeit being lackluster in terms of characterization- is an <i>actual</i> multiphase fight.

            The writing is very different from the previous entries, with a more lighthearted tone as a baseline mixed with very serious moments, but the most important thing is that while FF4 tried to give each character an identity by tying it to their base class, FF5 manages to give them a personality while maintaining their highly customizable nature.
        `)}
        <CustomImage
            alt="The room of the Sealed Weapons in Final Fantasy V"
            src={LegendaryWeapons}
            align="right"
        >
            <i>The twelve legendary (and optional) Sealed Weapons. Image taken from the <a style={{fontSize: "16px"}} href="https://finalfantasy.fandom.com/wiki/" target="_blank" rel="noreferrer">Final Fantasy Wiki</a>.</i>
        </CustomImage>
        {splitText(`
            The last aspect I want to really focus on is the subtle change in design: previous entries had some gimmicky dungeons here and there, with the two major offenders being the Ancient Ruins in FF3 and the magnetic cave in FF4: the former forces the player to either use katanas or have any fight become a slog, while the latter prevents the player from equipping metallic equipment (that woulr render characters paralyzed) - I don't want to say that this is lazy design, but it often comes off as forced.

            On the other hand FF5 throws some curveballs at you here and there, but the increased flexibility of its mechanics lets players to come up with their own solutions while encouraging them to explore the game's mechanics.
        `)}
        <Bookmark id="FF5Cards">The cards</Bookmark>
        {splitText(`
            Even though I praised how the characters are well-written and relatable, the only playable character that seemed to deserve his own card is <a href="https://gatherer.wizards.com/FCA/en-us/19/winota-joiner-of-forces" target="_blank" rel="noreferrer">Bartz Klauser</a>, that actually deserved two (<a href="https://gatherer.wizards.com/FIN/en-us/175/bartz-and-boko" target="_blank" rel="noreferrer">Bartz and Boko</a>).

            <a href="https://gatherer.wizards.com/FIN/en-us/82/travel-the-overworld" target="_blank" rel="noreferrer">Travel the Overworld</a> is also, basically, a reference to Bartz: the flavor text mentions his backstory as the wandering son of Dorgann, one of the Dawn Warriors, that stayed in the other world to make sure that Exdeath would never return.

            The only other character that gets a mention is Galuf with <a href="https://gatherer.wizards.com/FIN/en-us/186/galufs-final-act" target="_blank" rel="noreferrer">Galuf's Final Act</a> representing the moment he <s>subs out for his nephew</s> sacrifices himself to save the party from an earyl encounter with <a href="https://gatherer.wizards.com/FIN/en-us/220/exdeath-void-warlock" target="_blank" rel="noreferrer">Exdeath, Void Warlock</a> - speaking of which: I love that he's a flip-card, given his multi-phase nature, but also a low-powered uncommon because <i>he sucks</i>.

            Well, to be completely honest, I guess that <a href="https://gatherer.wizards.com/FIN/en-us/98/evil-reawakened" target="_blank" rel="noreferrer">Evil Reawakened</a> is <i>also</i> a reference to Exdeath, that is really get too much recognition...

            Gilgamesh shows up for the first time in this game and deserves two cards: <a href="https://gatherer.wizards.com/FIN/en-us/338/gilgamesh-master-at-arms" target="_blank" rel="noreferrer">Gilgamesh, Master-at-Arms</a> and <a href="https://gatherer.wizards.com/FCA/en-us/13/godo-bandit-warlord" target="_blank" rel="noreferrer">Gilgamesh, Weapon Collector</a>.

            This time <a href="https://gatherer.wizards.com/FIN/en-us/410/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timeless Artificer</a> is an NPC, a scholar that helps the party out through various means. This time he also brings along his nephew Mid, the blonde guy you can see in the background of the cart art.

            I wonder if <a href="https://gatherer.wizards.com/FCA/en-us/41/mizzixs-mastery" target="_blank" rel="noreferrer">Dawn Warriors' Legacy</a> should be considered as another reference to Galuf, since he was <i>also</i> part of the original party that drove Exdeath to Bartz's world trying to keep him sealed there.

            A few cards reference some iconic monsters that debuted in this game: <a href="https://gatherer.wizards.com/FIN/en-us/12/coeurl" target="_blank" rel="noreferrer">Coeurl</a>, <a href="https://gatherer.wizards.com/FIN/en-us/22/gaelicat" target="_blank" rel="noreferrer">Gaelicat</a>, <a href="https://gatherer.wizards.com/FIN/en-us/155/sandworm" target="_blank" rel="noreferrer">Sandworm</a> and, more importantly, the likes of <a href="https://gatherer.wizards.com/FIN/en-us/263/magic-pot" target="_blank" rel="noreferrer">Magic Pot</a> and <a href="https://gatherer.wizards.com/FIN/en-us/122/tonberry" target="_blank" rel="noreferrer">Tonberry</a>.
            `)}<YouTubeVideo videoId={"xJIyjP_--1Q"} align="right" caption="Sick" />
            {splitText(`
            <a href="https://gatherer.wizards.com/FCA/en-us/9/fatal-push" target="_blank" rel="noreferrer">Battle at the Big Bridge</a> is a reference to a kind-of-important story beat that we will always remember because <s>it marks the first appearance of Gilgamesh</s> THE MUSIC THERE ROCKS.

            To wrap things up:
            <ul>
                <li><a href="https://gatherer.wizards.com/FIN/en-us/134/coral-sword" target="_blank" rel="noreferrer">Coral Sword</a> - as previously mentioned, this game features 12 legendary weapons that the party can unlock to fight Exdeath. Too bad the Coral Sword is just a a sword you can buy in shops. It's lightning elemental.</li>
                <li><a href="https://gatherer.wizards.com/FIN/en-us/258/genji-glove" target="_blank" rel="noreferrer">Genji Glove</a> is part of the Genji equipment set - did I mention that FF5 is the first game where you can equip accessories/relics? Well, I just did.</li>
                <li><a href="https://gatherer.wizards.com/FIN/en-us/278/gohn-town-of-ruin" target="_blank" rel="noreferrer">Gohn, Town of Ruin</a> is an uninhabited town built on top of the Ronka Ruins, home of the Earth Crystal.</li>
                <li><a href="https://gatherer.wizards.com/FIN/en-us/30/restoration-magic" target="_blank" rel="noreferrer">Restoration Magic</a> refers to the Cure line of curative spells; no idea on why those should be specifically tied to FF5, though.</li>
                <li>and finally: <a href="https://gatherer.wizards.com/FIN/en-us/157/self-destruct" target="_blank" rel="noreferrer">Self-Destruct</a> is a self-destructing attack (DUH!) that the newly introduced Blue Mages can learn for the first time ever!</li>
            </ul>

            Phew.
        `)}
        </>
    )
}

export default FF5;