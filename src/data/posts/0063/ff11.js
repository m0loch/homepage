import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from '../../../components/posts/inlineSpoiler';
import CustomImage from "../../../components/posts/customImage";
import YouTubeVideo from '../../../components/posts/youtubeVideo';

import CoverArt from '../../../images/post-0063/ffxi/logo.png';

function FF11() {
    return (
        <>
            <Bookmark id="FF11Nutshell">A bit of context</Bookmark>
            <CustomImage
                alt="Cover art for the Final Fantasy XI"
                src={CoverArt}
            />
            {splitText(`
                <center><i>Coming "soon"</i></center>
            `)}

            <Bookmark id="FF11Cards">The cards</Bookmark>
            {splitText(`
                With this game being a MMORPG, there's no main playable character, so we'll start with the NPCs:

                <a href="https://gatherer.wizards.com/FIN/en-us/416/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timeless Artificer</a>, in this iteration, is a hume inventor residing in Bastok.
                He helps the players out in various missions and, to the surprise of no one, he helped developing airship technology.

                <a href="https://gatherer.wizards.com/FIN/en-us/241/shantotto-tactician-magician" target="_blank" rel="noreferrer">Shantotto, Tactician Magician</a> is a female Tarutaru black mage, former hero of the Crystal War, that proved to be a fan favorite among the playerbase.
                The card is not that powerful to be honest, but plays well in limited with the "X is 4 or more" spellslinging archetype.
            `)}

            <YouTubeVideo videoId={"aaiZCZ0HY1w"} align="right" caption={<i><a href="https://gatherer.wizards.com/FIN/en-us/212/absolute-virtue" target="_blank" rel="noreferrer">Absolute Virtue</a> is an infamously difficult boss fight from the Chains of Promathia expansion, I'll let Darryl from FF Union fill you in with the details</i>} />

            {splitText(`

                She's also represented in the Through the Ages reprint <a href="https://gatherer.wizards.com/FCA/en-us/34/diabolic-intent" target="_blank" rel="noreferrer">Shantotto's Coercion</a>, a tutor that finds some play in commander.

                Similarly, <a href="https://gatherer.wizards.com/FIN/en-us/193/prishes-wanderings" target="_blank" rel="noreferrer">Prishe's Wanderings</a> references Prishe, an elvaan monk/white mage that acts as the main character of the Chains of Promathia expansion - the card is nothing more than a limited ramp spell, though.

                <a href="https://gatherer.wizards.com/FCA/en-us/2/ranger-captain-of-eos" target="_blank" rel="noreferrer">Knights of San d'Oria</a> - not to be confused with <a href="https://en.wikipedia.org/wiki/UC_Sampdoria" target="_blank" rel="noreferrer">Sampdoria</a> - is the reprint of a card that see some eternal play, other than being a shoutout to the Royal Knights of the kingdom of San d'Oria, an elite group of Elvaan knights at the direct service of the king.

                <a href="https://gatherer.wizards.com/FCA/en-us/35/gix-yawgmoth-praetor" target="_blank" rel="noreferrer">The Shadow Lord</a> is the original big bad of the game, so its Through the Ages reprint is a fitting one.

                With Vana'diel being the world where Final Fantasy XI takes place, I guess <a href="https://gatherer.wizards.com/FCA/en-us/30/laboratory-maniac" target="_blank" rel="noreferrer">Vana'diel Adventurers</a> represents every player that ever played the game; mechanically, it's a reprint of a classic win condition, even though it's been rendered obsolete by the printing of <a href="https://gatherer.wizards.com/MB2/en-us/175/thassas-oracle" target="_blank" rel="noreferrer">Thassa's Oracle</a>.

                <a href="https://gatherer.wizards.com/FIN/en-us/65/qiqirn-merchant" target="_blank" rel="noreferrer">Qiqirn Merchant</a> is not a proper reference to a character, Qiqirn is just a non-playable race of beastmen that can cover a variety of jobs and roles - the card itself bears some limited value for non-aggressive strategy, offering both a decent body for blocking and some card selection/draw.

                Likewise, qutrubs are a race of undead, as portrayed in <a href="https://gatherer.wizards.com/FIN/en-us/112/qutrub-forayer" target="_blank" rel="noreferrer">Qutrub Forayer</a>, a decent limited common.

                Speaking of monsters: <a href="https://gatherer.wizards.com/FIN/en-us/153/sabotender" target="_blank" rel="noreferrer">Sabotender</a>, an aggressive red common, is just a regular mob as far as I know, but maybe it's been considered worth a mention as it is usual translated as Cactuar when localized in English - I don't see any other possible reason for this printing, otherwise.

                <a href="https://gatherer.wizards.com/FIN/en-us/190/gysahl-greens" target="_blank" rel="noreferrer">Gysahl Greens</a>, <a href="https://gatherer.wizards.com/FIN/en-us/188/goobbue-gardener" target="_blank" rel="noreferrer">Goobbue Gardener</a> and <a href="https://gatherer.wizards.com/FIN/en-us/49/dragoons-wyvern" target="_blank" rel="noreferrer">Dragoon's Wyvern</a> are three decent commons with no apparent extra merit.

                Moving on to summons, this game only features <a href="https://gatherer.wizards.com/FIN/en-us/203/summon-fenrir" target="_blank" rel="noreferrer">Summon: Fenrir</a>, a decent saga that grants both ramp and a small card advantage.

                The local Town, <a href="https://gatherer.wizards.com/FIN/en-us/292/windurst-federation-center" target="_blank" rel="noreferrer">Windurst, Federation Center</a>, refers to a nation in the grasslands once ravaged by the Crystal War that has now become a peaceful place thanks to the cooperation between Tarutaru and Mithra citizens.
            `)}
        </>
    )
}

export default FF11;