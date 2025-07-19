import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import CustomImage from "../../../components/posts/customImage";

import CoverArt from '../../../images/post-0063/ff3/ff3-cover.webp';
import ModernIllustration from '../../../images/post-0063/ff3/ff3-modern.jpg';


function FF3() {
    return (
        <>
        <Bookmark id="FF3Nutshell">A bit of context</Bookmark>
        <CustomImage
            alt="Cover art for the original Final Fantasy III"
            src={CoverArt}
            align="right"
        />
        {splitText(`
            After the domestic success of the first two games, Final Fantasy if both an emerging franchise and a series that needs to choose its direction.

            There's no doubt about how Square wants to strike the iron while it's hot, but the experimentations done on FF2 brought both good and bad things to the table, forcing Sakaguchi's team to reconsider some aspect of their game design.

            After just a bit more that a year of development, Final Fantasy 3 published on the 27th of April 1990, closing the original trilogy.

            Now, for a bit of trivia: Square's plans involved having a fourth NES release, but what was originally intended to be Final Fantasy 4 got canceled as the console's life cycle was considered to be nearing its end, and the team focused what was planned to be Final Fantasy 5 but ended up becoming Final Fantasy 4 in Japan and Final Fantasy 2 in the west - at least, until recent times.

            Speaking of international releases: the first game, at this point of time, was still unknown outside Japan, as it will be first released in north America on the 12th of July - almost 3 months after FF3's release.
        `)}

        <Bookmark id="FF3Game">The game</Bookmark>
        {splitText(`
            Once Final Fantasy 2 got out to the wilds, the developers started working on their new game knowing that some of the changes they made on the original formula didn't work out how they wanted, so they backtracked some of those features and focused on different aspects of the game.

            This brought back, for example, character levels (yay) but also that D&D-inspired magic system where a character has a limited number of spells-per-level at their disposal in place of the more modern concept of MP pool.

            Gone is the idea of having a named party member being able to use any piece of equipment or magic, but in need of proper training in order to get proficient at it, it's time to go back to the good old job system that everyone loved from the first game - with a twist! Now characters can change class at any time, and this becomes the focus on the game.
        `)}
        <CustomImage
            alt="Cover art for the original Final Fantasy III"
            src="https://images.steamusercontent.com/ugc/1838035412344235136/04266AEC7911FF92CBC8F0C3D2C1C0277A1B352C/"
            align="left"
        >
            <i>Image taken from this <a style={{fontSize: "16px"}} href="https://steamcommunity.com/sharedfiles/filedetails/?id=2757775149" target="_blank" rel="noreferrer">Steam guide</a> for the Pixel Remaster</i>
        </CustomImage>
        {splitText(`
            Aside from some well-received quality of life improvement (especially the in battle targeting system) everything else focuses on the job system so much that it even overrides the very idea of a plot: nobody will ever feel any regret about FF2's password system getting ditched, but we also have to register a step back from the epic tale of four orphans that fight the evil empire to a not-so-epic, kind-of-linear story of four orphans that need to find the next crystal to unlock new jobs.

            I don't want to say that FF3 has no plot at all, but it's pretty clear that it focuses mainly on the mechanics while the plot becomes almost an afterthought.

            I mean: the four main protagonists are given a name only 16 years after the original release with the not-so-good 3D remaster for the DS.

            On the good side of things: this is the  first game with summons!
        `)}

        <Bookmark id="FF3Cards">The cards</Bookmark>
        <CustomImage
            alt="Cover art for the original Final Fantasy III"
            src={ModernIllustration}
            align="right"
        >
            <i>From the left: Refia, Luneth, Ingus and Arc.<br/>We don't acknowledge this existence of this port, though.</i>
        </CustomImage>
        {splitText(`
            This game's version of <a href="https://gatherer.wizards.com/FIN/en-us/408/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timelesse Artificer</a> speaks volumes about how wacky this game can be compared to its gloomy predecessor.

            The characters, as previously mentioned, are once again orphans without a name, so they are just referenced as <a href="https://gatherer.wizards.com/FIN/en-us/14/the-crystals-chosen" target="_blank" rel="noreferrer">The Crystal's Chosen</a> (and as <a href="https://gatherer.wizards.com/FCA/en-us/1/adeline-resplendent-cathar" target="_blank" rel="noreferrer">Hero of Light</a> in the bonus sheet).

            The actual antagonist is <a href="https://gatherer.wizards.com/FIN/en-us/516/xande-dark-mage" target="_blank" rel="noreferrer">Xande, Dark Mage</a> (or <a href="https://gatherer.wizards.com/FCA/en-us/6/venser-shaper-savant" target="_blank" rel="noreferrer">Master Xande</a>) and, for once, is not a flip card: that's because instead of taking multiple forms <i>as actually expected in a Final Fantasy</i>, he just tags out for the actual final boss: the <a href="https://gatherer.wizards.com/FIN/en-us/217/cloud-of-darkness" target="_blank" rel="noreferrer">Cloud of Darkness</a> (it's not even a multi-stage battle, this game's ending features a final dungeon that goes on forever).

            The <a href="https://gatherer.wizards.com/FIN/en-us/87/ahriman" target="_blank" rel="noreferrer">Ahriman</a>, the <a href="https://gatherer.wizards.com/FIN/en-us/271/adventurers-inn" target="_blank" rel="noreferrer">Adventurer's Inn</a> and the <a href="https://gatherer.wizards.com/FIN/en-us/142/item-shopkeep" target="_blank" rel="noreferrer">Item Shopkeep</a> cards' tie to Final Fantasy 3 are very <i>tenuous</i>, but we have some iconic, plot-relevant cards in the crystal set:
            <a href="https://gatherer.wizards.com/FIN/en-us/43/the-wind-crystal" target="_blank" rel="noreferrer">The Wind Crystal</a>
            <a href="https://gatherer.wizards.com/FIN/en-us/85/the-water-crystal" target="_blank" rel="noreferrer">The Water Crystal</a>
            <a href="https://gatherer.wizards.com/FIN/en-us/135/the-fire-crystal" target="_blank" rel="noreferrer">The Fire Crystal</a>
            <a href="https://gatherer.wizards.com/FIN/en-us/184/the-earth-crystal" target="_blank" rel="noreferrer">The Earth Crystal</a>
            <a href="https://gatherer.wizards.com/FIN/en-us/96/the-darkness-crystal" target="_blank" rel="noreferrer">The Darkness Crystal</a>

            The last two FF3 inspired cards from the bonus sheet reference the first and the last dungeon of the game: <a href="https://gatherer.wizards.com/FCA/en-us/61/chromatic-lantern" target="_blank" rel="noreferrer">Crystal of Altar Cave</a> and <a href="https://gatherer.wizards.com/FCA/en-us/29/cryptic-command" target="_blank" rel="noreferrer">To the Crystal Tower</a>`)}
        </>
    )
}

export default FF3;