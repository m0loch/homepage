import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from "../../../components/posts/inlineSpoiler";
import CustomImage from "../../../components/posts/customImage";
import YouTubeVideo from '../../../components/posts/youtubeVideo';

import CoverArt from '../../../images/post-0063/ff4/logo-orig.jpg';
import DSCover from '../../../images/post-0063/ff4/logo-ds.jpg';
import Moon from '../../../images/post-0063/ff4/moon.png';
import Remake3D from '../../../images/post-0063/ff4/3dremake.jpg';
import GiantOfBabil from '../../../images/post-0063/ff4/babil.webp';

function FF4() {
    return (
        <>
        <Bookmark id="FF4Nutshell">A bit of context</Bookmark>
        <CustomImage
            alt="Cover art for the original Final Fantasy IV"
            src={CoverArt}
        />
        {splitText(`
            After the success of Final Fantasy 3, which sold more than the first two games combined, the franchise seemed to have no ceiling, and Square obviously wanted to capitalize on that (which lead, for example, to the first SaGa and Seiken Densetsu games being rebranded as Final Fantasy Legend and Final Fantasy Adventure in the west).

            While, as previously mentioned, the original plan was to release a fourth game for the NES, Square ended up deciding to focus on the next generation of consoles, meaning that the next game would be developed for the Super Famicon, or SNES as we like to call it outside Japan.
        `)}
        <YouTubeVideo videoId={"PojQa9Ir2pY"} align="right" caption="A medley on the original OST" />
        {splitText(`
            Final Fantasy 4, later rebranded as Final Fantasy 2 with its follow-up porting (which generated its fair amount of confusion, back in the day), was released on the 19th of July 1991, just short of a year after the release of the previous chapter - the fourth game in slightly more than four years and a half, please forgive me if I consider that pace crazy.

            And so, the second trilogy of Final Fantasy games begins, with a new team and a new direction.
        `)}

        <Bookmark id="FF4Game">The game</Bookmark>
        <p>The first issue that Hironobu Sakaguchi wanted to address with this new game was the nearly anonymous cast of characters that moved the story forward: while the first game contained a plot that appeared to be compleately disconnected from the party members, the following two -even in a slightly different way- ended up having the plot pushed forward by the guest characters more than the main protagonists themselves, who where either not memorable when not straight up nameless.</p>
        <CustomImage
            alt="Cover art for the original Final Fantasy IV"
            src={Remake3D}
            align="left"
        >
            <i>You can find a 3D remake on Steam. I find it terrible.</i>
        </CustomImage>
        {splitText(`
            Final Fantasy 4 will then take a step back from the job system of its direct predecessor and have its plot centered around a handful of very well defined characters, having each of them a distinct appearance and class, his own backstory, his own motivations.

            The game opens with a long prologue that introduces Cecil a dark knight that, after attacking the peaceful village of Mysidia, starts questioning his own actions and ends up questioning the orders he received from his king - ending up getting stripped of his rank as commander of the Red Wings and sent on a quest to deliver a package to prove his loyalty to the crown.

            En passant, his girlfriend Rosa and Cid the engineer are introduced, as well as his best friend Kain that will join him on this brief quest - a quest that ends with the two delivering the package and unwillingly causing the death of pretty much everyone in the village, except for the young summoner Rydia.
        `)}
        <CustomImage
            alt="Cover art for the original Final Fantasy IV"
            src={DSCover}
            align="right"
        >
            <i>Alternative cover art for the DS remake featuring Golbez</i>
        </CustomImage>
        {splitText(`
            After losing contact with Kain, Cecil will then decide to protect the young orphan while trying to find a way to redeem himself, and this will mark the start of a long journey that will make him cross the lands and meet many other characters, redeeming himself in the process and becoming a paladin, while trying to stop the evil plans of the mysterious Golbez that took his place as commander of the Red Wings.

            Along the way, Cecil meets many other characters, like Tellah the old sage that wants to avenge his daughter, the tormented prince Edward disguising as a bard (a <i>spoony</i> bard), Yang the monk, the twins Palom and Porom from Mysidia, or Edge the ninja prince.

            The party itself is very fluid, as characters join and leave the party multiple times as the plot advances, sometimes multiple times like in the case of Kain that gets mind controlled multiple times, or like Rydia that at some point goes missing for a while after being swallowed by Leviathan (a nod to FF2), but comes back after growing suddenly older.

            We also witness multiple heroic sacrifices, even though more than once people just <i>get better</i> after a while, like Cid or Yang.
        `)}
        <CustomImage
            alt="The party on the moon"
            src={Moon}
            align="left"
        >
            <i>Now, and just for this once, the party features up to five characters.</i>
        </CustomImage>
        <p>The whole plot is kind of linear but very lengthy and epic in nature, with the party having to fight Golbez for the four elemental crystals, then do it again for the <i>other</i> four elemental crystals in the underworld, and then reach the moon where we meet the last character, a lunarian called Fusoya.</p>
        <br/>
        <p>After a quick trip back to Earth to save the world by the Giant of Babil, we then go back to the moon to fight the <i>actual</i> final boss<InlineSpoiler mask='*'>Since we're here, let's spoil everything: the final boss is a lunarian called Zemus (in its final form: Zeromus) that spent the whole game mind controlling Golbez. Golbez is, of course, the elder brother of Cecil. They're both half-lunarians.</InlineSpoiler>.</p>
        <br/>
        {splitText(`
            As you can easily see, the plot is very convoluted and it's very focused on the characters, a characteristic that will define the series from this point onwards.
        `)}
        <Bookmark id="FF4Cards">The cards</Bookmark>
        <CustomImage
            alt="Yoshitaka Amano's artwork representing the Giant of Babil"
            src={GiantOfBabil}
            align="right"
        >
            <i>Artwork by Yoshitaka Amano, representing the Giant of Babil</i>
        </CustomImage>
        {splitText(`
            For the first time, we have a solid group of characters that deserve their own cards, starting with the most obvious <a href="https://gatherer.wizards.com/FIN/en-us/91/cecil-dark-knight" target="_blank" rel="noreferrer">Cecil, Dark Knight</a>, a very powerful flip card that's testament of its spiritual journey.
            He is also referenced in the bonus sheet as <a href="https://gatherer.wizards.com/FCA/en-us/18/tymna-the-weaver" target="_blank" rel="noreferrer">Cecil Harvey</a>.

            Then we have his girlfriend <a href="https://gatherer.wizards.com/FIN/en-us/431/rosa-resolute-white-mage" target="_blank" rel="noreferrer">Rosa, Resolute White Mage</a> (note that she's got Reach, because she's a white mage but also an archer) and his best friend <a href="https://gatherer.wizards.com/FIN/en-us/105/kain-traitorous-dragoon" target="_blank" rel="noreferrer">Kain, Traitorous Dragoon</a>.

            We also have <a href="https://gatherer.wizards.com/FIN/en-us/239/rydia-summoner-of-mist" target="_blank" rel="noreferrer">Rydia, Summoner of Mist</a> that, true to her class, has sinergies with sagas, and <a href="https://gatherer.wizards.com/FIN/en-us/244/tellah-great-sage" target="_blank" rel="noreferrer">Tellah, Great Sage</a> that comes with a built-in self-sacrifice mechanic.

            And then of course we have <a href="https://gatherer.wizards.com/FIN/en-us/409/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timelesse Artificer</a> with his first appearance as playable character.

            No card for Edward, Palom, Porom, Yang, Edge or Fusoya, but that's fine as they're either too bland or stay in the party for a very short amount of time.

            The main antagonist is featured as <a href="https://gatherer.wizards.com/FIN/en-us/225/golbez-crystal-collector" target="_blank" rel="noreferrer">Golbez, Crystal Collector</a> and <a href="https://gatherer.wizards.com/FCA/en-us/10/syr-konrad-the-grim" target="_blank" rel="noreferrer">Golbez, Clad in Darkness</a>.

            The other notable characters that deserve a card are <a href="https://gatherer.wizards.com/FIN/en-us/145/mysidian-elder" target="_blank" rel="noreferrer">Mysidian Elder</a>, a nameless character that guides Cecil towards Mount Ordeals and his path of redemption, and <a href="https://gatherer.wizards.com/FIN/en-us/223/giott-king-of-the-dwarves" target="_blank" rel="noreferrer">Giott, King of the Dwarves</a>, the party's main ally in the underworld.

            The dwarven kingdom is also represented in <a href="https://gatherer.wizards.com/FIN/en-us/18/dwarven-castle-guard" target="_blank" rel="noreferrer">Dwarven Castle Guard</a>, while the towering <a href="https://gatherer.wizards.com/FCA/en-us/20/traxos-scourge-of-kroog" target="_blank" rel="noreferrer">Giant of Babil</a> is featured in the Through the Ages bonus sheet.

            Final Fantasy 4 is the first game of the bunch where the actual final boss is not featured, but we have our bosses quota filled by <a href="https://gatherer.wizards.com/FIN/en-us/97/demon-wall" target="_blank" rel="noreferrer">Demon Wall</a>.
            `)}<YouTubeVideo videoId={"eg_OyqkITSE"} align="right" caption="My idea of Lunar Whale. I know, I don't care." />
            {splitText(`
            Following in the tradition of Final Fantasy 3, this game features various means of transportation, with the <a href="https://gatherer.wizards.com/FIN/en-us/60/the-lunar-whale" target="_blank" rel="noreferrer">The Lunar Whale</a> being the spiritual successor of the previous game's Invincible.

            The card <a href="https://gatherer.wizards.com/FIN/en-us/273/baron-airship-kingdom" target="_blank" rel="noreferrer">Baron, Airship Kingdom</a> represents the kingdom where it all starts, while the momentous event of <a href="https://gatherer.wizards.com/FIN/en-us/198/rydias-return" target="_blank" rel="noreferrer">Rydia's Return</a> deserves a card in its own right.

            To conclude, I'll be completely honest with you and say that I don't really get what the card <a href="https://gatherer.wizards.com/FCA/en-us/33/deadly-dispute" target="_blank" rel="noreferrer">Deadly Dispute</a> represents, but it features a fancy artwork by Airi Yoshioka from the DS artbook so I won't complain.`)}
        <YouTubeVideo videoId={"_N8nK2HmT2I"} align="center" caption={`"It's actually Final Fantasy 4 you idiot!"`} />
        </>
    )
}

export default FF4;