import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from "../../../components/posts/inlineSpoiler";
import CustomImage from "../../../components/posts/customImage";

import CoverArt from '../../../images/post-0063/ff/ff-cover.png';
import FamitsuAd from '../../../images/post-0063/ff/famitsuad.jpeg';
import GarlandFight from '../../../images/post-0063/ff/garland.png';

function FF1() {
    return (
        <>
        <Bookmark id="FF1Nutshell">A bit of context</Bookmark>
        <CustomImage
            alt="Where to start"
            src={CoverArt}
            align="right"
        />
        {splitText(`
        Published in 1987, Final Fantasy is the last ditch effort of SquareSoft to save the company from bankruptcy - or at least, that's what the legend says.
        <a href="https://mcvuk.com/development-news/sakaguchi-discusses-the-development-of-final-fantasy/" target="_blank" rel="noreferrer">According to Hironobu Sakaguchi himself</a>, though, the "finalilty" referenced in the title was a nod to how he felt that the game was his own last ditch effort at being a successful game developer, and go back to university if it failed.

        Luckily for us, things went <i>acceptably</i> well.

        As the first game of a yet-to-be-born franchise, Final Fantasy is a game that is deeply influenced by the commercial success of Dragon Quest, while trying to be his own thing, with a grittier tone, some out-of-the-box thinking and some added replayability value coming from its design choices.
        `)}

        <Bookmark id="FF1Game">The game</Bookmark>
        {splitText(`
        The game follows the journey of four silent, unnamed heroes on their quest to defeat Chaos and restore the balance of the world.

        The adventure begins in the kingdom of Cornelia, where the king asks the Warriors of Light to rescue his daughter, Princess Sarah, from the clutches of Garland, a former knight who has kidnapped her and brought her to the near ruins of the Chaos Shrine.
        This cover what ends up being the prologue of the game - as doing so will cause the king of Cornelia to build a bridge effectively allowing the player to explore the rest of the world, and <i>only then</i> the game will actually start, with the Final Fantasy logo being shown to the player.
        `)}
        <CustomImage
            alt="Where to start"
            src={GarlandFight}
            align="left"
        >
            The first boss fight of the series!
        </CustomImage>
        {splitText(`
        Over the course of the game, the party will venture through various dungeons, defeat four elemental fiends, travel through various means of transportation (no chocobos yet, but the airship makes its first appearance here) and eventually face Chaos, the final boss of the game.

        It's worth noting that, in order to distinguish itself from the other games of the time, Final Fantasy ends up embracing sci-fi elements and time travel, with the whole apocalyptic theme of the game being the result of Garland being consumed by the power of Chaos and travelling 2000 years into the past, where he then puts everything in motion.

        Yes, the first boss of the game is actually also the final boss.
        Also: yes, this is an actual paradox.
        `)}

        <Bookmark id="FF1Cards">The cards</Bookmark>
        <p>The first thing we need to mention about Final Fantasy is that it <i>doesn't</i> feature any character named Cid<InlineSpoiler mask='*'>At least in the original game, he will be introduced as the guy who built the airship in the remakes</InlineSpoiler>.</p>
        {splitText(`

        I know that starting by what the game <i>lacks</i> sounds stupid, but we'll come back to this later.

        The other thing that this game oddly doesn't feature is a named protagonist - or a named player character, for that matter.
        The initial party of heroes is composed of four blank-sheet characters simply referred as <a href="https://gatherer.wizards.com/FCA/en-us/17/jodah-the-unifier" target="_blank" rel="noreferrer">Warriors of Light</a>.

        No worries though: this lack of actual characters is solved by creating a set of thematic equipments that bear the <b>Job select</b> keyword - thus creating a 1/1 hero token when put on the battlefield that gets immediately attached to your freshly created artifact.
        They're not even legendary, because everyone deserves their fair chance of lining up four Black Belts like in the original game.

        They are, as follows:
        the <a href="https://gatherer.wizards.com/FIN/en-us/169/warriors-sword" target="_blank" rel="noreferrer">Warrior's Sword</a>, the <a href="https://gatherer.wizards.com/FIN/en-us/81/thiefs-knife" target="_blank" rel="noreferrer">Thief's Knife</a>, the <a href="https://gatherer.wizards.com/FIN/en-us/265/monks-fist" target="_blank" rel="noreferrer">Monk's Fist</a>, the <a href="https://gatherer.wizards.com/FIN/en-us/152/red-mages-rapier" target="_blank" rel="noreferrer">Red Mage's Rapier</a>, the <a href="https://gatherer.wizards.com/FIN/en-us/42/white-mages-staff" target="_blank" rel="noreferrer">White Mage's Staff</a>, and the <a href="https://gatherer.wizards.com/FIN/en-us/90/black-mages-rod" target="_blank" rel="noreferrer">Black Mage's Rod</a>
        `)}
        <CustomImage
            alt="The Cloudsea Djinn"
            src={FamitsuAd}
            align="left"
        >
            The Cloudsea Djinn art, as seen in the Famitsu ad for the original game. ICONIC.
        </CustomImage>
        {splitText(`
        The prologue phase of the game is referenced by the <a href="https://gatherer.wizards.com/FIN/en-us/289/starting-town" target="_blank" rel="noreferrer">Starting Town</a> and the <a href="https://gatherer.wizards.com/FIN/en-us/209/town-greeter" target="_blank" rel="noreferrer">Town Greeter</a> cards, a nod to the party first visiting the town of Cornelia, while the <a href="https://gatherer.wizards.com/FIN/en-us/252/adventurers-airship" target="_blank" rel="noreferrer">Adventurer's Ship</a> and the <a href="https://gatherer.wizards.com/FIN/en-us/270/world-map" target="_blank" rel="noreferrer">World Map</a> card represent what would soon become staples of the series.

        The card <a href="https://gatherer.wizards.com/FIN/en-us/32/slash-of-light" target="_blank" rel="noreferrer">Slash of Light</a> is a reference to the end of the game, with the illustration depicting a Warrior of Light defeating the final boss, Chaos.

        Three NPCs are also featured in the set with <a href="https://gatherer.wizards.com/FIN/en-us/15/azusa-lost-but-seeking" target="_blank" rel="noreferrer">Princess Sarah</a> being the princess of Cornelia that gets abducted in the beginning by <a href="https://gatherer.wizards.com/FIN/en-us/221/garland-knight-of-cornelia" target="_blank" rel="noreferrer">Garland, Knight of Cornelia</a>, and <a href="https://gatherer.wizards.com/FIN/en-us/62/matoya-archon-elder" target="_blank" rel="noreferrer">Matoya, Archon Elder</a> being a blind witch that the party will meet just after the end of the prologue.
        The fact that Garland is a flip card is a nice touch, as it references how he will eventually become Chaos, and the idea of the time loop is referenced in Chaos going back in the library if killed.

        I would have bet on a card being dedicated to either Lukahn, the Circle of Sages, Bahamut or the Rat's Tail, but you can't have everything in life, I guess.

        The last two cards worth mentioning are <a href="https://gatherer.wizards.com/FCA/en-us/12/ancient-copper-dragon" target="_blank" rel="noreferrer">Dragon of Mount Gulg</a> and <a href="https://gatherer.wizards.com/FCA/en-us/16/nyxbloom-ancient" target="_blank" rel="noreferrer">The Cloudsea Djinn</a>, both being just some random excuses to include some art from Yoshitaka Amano - I'm not a collector, so I won't complain too much, but the Djinn didn't even make it into the <i>actual</i> game...
        `)}
        </>
    )
}

export default FF1;