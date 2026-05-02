import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from '../../../components/posts/inlineSpoiler';
import CustomImage from "../../../components/posts/customImage";

import CoverArt from '../../../images/post-0063/ffxv/logo.png';

function FF15() {
    return (
        <>
            <Bookmark id="FF15Nutshell">A bit of context</Bookmark>
            <CustomImage
                alt="Cover art for the Final Fantasy XV"
                src={CoverArt}
            />
            {splitText(`
                <center><i>Coming "soon"</i></center>
            `)}

            <Bookmark id="FF15Cards">The cards</Bookmark>
            {splitText(`
                For obvious reasons, we're going to start with the main character, as usual.

                <a href="https://gatherer.wizards.com/FIN/en-us/235/noctis-prince-of-lucis" target="_blank" rel="noreferrer">Noctis, Prince of Lucis</a> is a is a pretty straightforward Esper (white-blue-black) commander that synergizes with artifacts and graveyards - just build a shell with <a href="https://gatherer.wizards.com/HOU/en-us/22/solemnity" target="_blank" rel="noreferrer">Solemnity</a> and <a href="https://gatherer.wizards.com/MH3/en-us/212/vexing-bauble" target="_blank" rel="noreferrer">Vexing Bauble</a> to get around the finality counter mechanic, then stick an <a href="https://gatherer.wizards.com/KLD/en-us/192/aetherflux-reservoir" target="_blank" rel="noreferrer">Aetherflux Reservoir</a> on the board and go <b>craaaaazy</b> with <a href="https://gatherer.wizards.com/DK/en-us/0/tormods-crypt" target="_blank" rel="noreferrer">Tormod's Crypt</a>, <a href="https://gatherer.wizards.com/CSP/en-us/138/mishras-bauble" target="_blank" rel="noreferrer">Mishra's Bauble</a> or whatever alternative you find.
                
                But Noctis also features a Through the Ages reprint in the form of <a href="https://gatherer.wizards.com/FCA/en-us/23/kenrith-the-returned-king" target="_blank" rel="noreferrer">Noctis Lucis Caelum</a>, one of the most popular 5c commanders <i>up to the printing of <a href="https://gatherer.wizards.com/FIN/en-us/245/terra-magical-adept" target="_blank" rel="noreferrer">Terra</a> in this very set</i>.

                The rest of the party is comprised of <a href="https://gatherer.wizards.com/FIN/en-us/224/gladiolus-amicitia" target="_blank" rel="noreferrer">Gladiolus Amicitia</a>, <a href="https://gatherer.wizards.com/FIN/en-us/227/ignis-scientia" target="_blank" rel="noreferrer">Ignis Scientia</a> and <a href="https://gatherer.wizards.com/FIN/en-us/148/prompto-argentum" target="_blank" rel="noreferrer">Prompto Argentum</a>, all depicted in some uncommon cards with a varying degree of effectiveness.

                <a href="https://gatherer.wizards.com/FIN/en-us/267/the-regalia" target="_blank" rel="noreferrer">The Regalia</a> might probably qualify as part of the main cast as well, and its card is a very popular ramp spell in casual Commander as well.
                This card is so important that it also gets an additional rare card depicting it: <a href="https://gatherer.wizards.com/FIN/en-us/20/from-father-to-son" target="_blank" rel="noreferrer">From Father to Son</a>, a tutor <i>for vehicles</i>, which can be good in your <a href="https://gatherer.wizards.com/WAR/en-us/24/parhelion-ii" target="_blank" rel="noreferrer">Parhelion II</a> deck, I guess...?
            `)}
                <p>Speaking of inheritance, <a href="https://gatherer.wizards.com/FIN/en-us/269/ring-of-the-lucii" target="_blank" rel="noreferrer">Ring of the Lucii</a> is a good ramp card in limited that doubles as <a href="https://gatherer.wizards.com/2U/en-us/0/icy-manipulator" target="_blank" rel="noreferrer">Icy Manipulator</a><InlineSpoiler mask='*'>Yes, I deliberately chose the shout-out to that famous self-portrait from Escher</InlineSpoiler> with a downside.</p>
            {splitText(`

                Obligatory  <a href="https://gatherer.wizards.com/FIN/en-us/419/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timeless Artificer</a> mention: the first thing we have to do after the beginning of the game is to reach his gas station; I'm happy they ignored his fan-servicey daughter, let's just move on.

                <a href="https://gatherer.wizards.com/FIN/en-us/89/ardyn-the-usurper" target="_blank" rel="noreferrer">Ardyn, the Usurper</a> is a proper villain, the best in a while I dare say, and this card is very powerful on paper, but its steep mana cost is a problem; also, being the cool villain that he is, he deserved a Through the Ages reprint in the form of <a href="https://gatherer.wizards.com/FCA/en-us/37/varragoth-bloodsky-sire" target="_blank" rel="noreferrer">Ardyn Izunia</a>.

                Summons:
                <a href="https://gatherer.wizards.com/FIN/en-us/204/summon-titan" target="_blank" rel="noreferrer">Summon: Titan</a> is the first summon the player gets, and as pretty much every other summon cards it's not constructed playable but interesting in Commander; ironically, its Through the Ages reprint, on the other hand <a href="https://gatherer.wizards.com/FCA/en-us/48/primeval-titan" target="_blank" rel="noreferrer">Astral Titan</a>, is an iconic card that spawned a whole deck archetype in Modern (just google "Amulet Titan"), but it's <b>banned</b> in Commander.
                <a href="https://gatherer.wizards.com/FIN/en-us/77/summon-leviathan" target="_blank" rel="noreferrer">Summon: Leviathan</a> is a very strong card in limited, but I don't know how much play it sees outside of that - I want to point out that Leviathan's in-game appearance, this time, is a MAJOR plot point, but also the moment when I really felt like the game was <i>losing steam</i>, as I could really get behind the spectacle angle they were going for, but the whole boss fight was just a big quick-time event.

                Speaking of things that made me angry from this game, I guess WotC couldn't pass the opportunity to rub some extra salt in my wounds by printing this <a href="https://gatherer.wizards.com/FIN/en-us/259/instant-ramen" target="_blank" rel="noreferrer">Instant Ramen</a>, even if I have to recognize the <i>memetic value</i> of the side quest it's referencing.

                And, speaking of side quests, let's also discuss <a href="https://gatherer.wizards.com/FIN/en-us/31/sidequest-catch-a-fish" target="_blank" rel="noreferrer">Sidequest: Catch a Fish</a>: I'm not a fan of that minigame and the card is not even that good, but it's pretty on point, flavour-wise.

                For the locations section, we have just <a href="https://gatherer.wizards.com/FIN/en-us/282/insomnia-crown-city" target="_blank" rel="noreferrer">Insomnia, Crown City</a>, a place that you can witness in all its splendor in the <i>companion anime</i>.
                I sure do love FFXV.

                A quick mention to the monsters tied to this game as well:
                The <a href="https://gatherer.wizards.com/FIN/en-us/25/magitek-infantry" target="_blank" rel="noreferrer">Magitek Infantry</a>, while having a name that reminds of the imperial special forces from FF6, is a very specific enemy from this game, aka random soldiers from Niflheim that dropship out of nowhere at random times while in the open - they are represented in this random common.
                
                The <a href="https://gatherer.wizards.com/FIN/en-us/187/gigantoad" target="_blank" rel="noreferrer">Gigantoad</a>, the <a href="https://gatherer.wizards.com/FIN/en-us/260/iron-giant" target="_blank" rel="noreferrer">Iron Giant</a> and the <a href="https://gatherer.wizards.com/FIN/en-us/106/malboro" target="_blank" rel="noreferrer">Malboro</a>, on the other hand, are recurrent enemies from the series that get tagged for this entry, I believe, just to balance the lack of other more flavourful cards.
                They're all unpowered common cards, with only the last one having some vague potential of seeing play in Pauper, but I wouldn't bet on it.

                <a href="https://gatherer.wizards.com/FIN/en-us/172/ancient-adamantoise" target="_blank" rel="noreferrer">Ancient Adamantoise</a> is a more interesting entry, as it's representing the big, optional boss of the game - the card is pretty underwhelming, though.

                As a last entry, the final Through the Ages card for this game: <a href="https://gatherer.wizards.com/FCA/en-us/21/akromas-will" target="_blank" rel="noreferrer">Blessing of the Oracle</a>, with the titular Oracle being Lunafreya, the soon-to-be wife of Noctis and the girl depicted in the logo.
            `)}
        </>
    )
}

export default FF15;