import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from "../../../components/posts/inlineSpoiler";
import CustomImage from "../../../components/posts/customImage";

import CoverArt from '../../../images/post-0063/ff2/ff2-cover.webp';
import AmanoArt from '../../../images/post-0063/ff2/ff2-amano.webp';

function FF2() {
    return (
        <>
        <Bookmark id="FF2Nutshell">A bit of context</Bookmark>
        <CustomImage
            alt="Cover art for the original Final Fantasy II"
            src={CoverArt}
            align="right"
        />
        {splitText(`
        After the success of the first installment, Square doubled down and just a year later released Final Fantasy II.

        Now, let's be as clear and straightforward as possible: if the first game was a success, this one is one of the most hated games in the entire franchise, even more that it deserves.

        Despite all the hate, though, Final Fantasy II tried to be innovative in its own right, and while some idea (i.e.: the character progression system) ended up being scrapped immediately, the focus on a more plot-driven narrative is something on which the franchise has been built upon.
        `)}

        <Bookmark id="FF2Game">The game</Bookmark>
        {splitText(`
        While being very similar to its predecessor in terms of graphics, Final Fantasy II wants to be a different game from the start: where the first game opened with a menu prompting the player to select a party of blank-slate characters, now we're asked to give a name to our four protagonists.

        As soon as the player has done so, the game will then proceed to have said protagonists curb-stomped by a party of dark knights, settings the events in motion.
        `)}
        <p>Given the similarities between the two games, especially in terms of graphics and presentation, these first few minutes are a statement: where the first game could not really convey a plot due to its limitations<InlineSpoiler mask='*'>For example: NPCs could just say a single box of text; when the game needed some longer exposition the developers ended up creating the Circle of Sages, as Lukahn could not talk that much</InlineSpoiler>, this time the player experiences the closest thing to a cutscene the series ever had.</p>
        <CustomImage
            alt="Cover art for the original Final Fantasy II"
            src={AmanoArt}
            align="left"
        >
            <i>Leon, Firion, Maria and Guy while the Emperor looms in the background</i>
        </CustomImage>
        {splitText(`

        The main, major difference between the two games, though, is the complete rework of the character progression system: there are no more jobs, no more levels, and the D&D-like spell system is gone in favour of characters having their own MP pool.

        The fact that characters will now increase their stats by using them, while innovative, is what in the end made this game so hated: while you <i>could</i> try to play the game as intended, players often end up grinding their ass off by having characters attack themselves over and over in order to increase their HP stat.

        Now, a quick list of facts:<ul>`)}

        <p><li>the party features named characters - the canon wants them to be Firion, Maria, Guy and Leon<InlineSpoiler mask='*'>Firion and Leon were actually named Frioniel and Lionheart before the late ports, but I'm being pedantic here</InlineSpoiler></li></p>
        {splitText(`<li>the party composition is volatile: while Firion, Maria and Guy are mandatory, the fourth slot will see guest characters come and go - often after an heroic sacrifice of sorts</li>
        <li>Leon, brother of Maria, will immediately disappear from the party and become the main enemy's first general (err... dark knight), but will come back later</i>
        <li>this is the first game featuring a character named Cid</li>
        <li>chocobos make their first appearance as well - even though they have no impact on the game and secluded to a single forest</li>
        <li>while the first game was pretty linear, FF2 lets you wander off the beaten path <i>for example reaching Mysidia well before intended</i>, because this is a game of abuses</i>
        </ul>
        `)}

        <Bookmark id="FF2Cards">The cards</Bookmark>
        {splitText(`
        Despite the game having four main characters and a bunch of guests, only <a href="https://gatherer.wizards.com/FIN/en-us/137/firion-wild-rose-warrior" target="_blank" rel="noreferrer">Firion</a> and <a href="https://gatherer.wizards.com/FIN/en-us/26/minwu-white-mage" target="_blank" rel="noreferrer">Minwu</a> are represented.

        <a href="https://gatherer.wizards.com/FCA/en-us/3/sram-senior-edificer" target="_blank" rel="noreferrer">Multiple</a> <a href="https://gatherer.wizards.com/FCA/en-us/25/mangara-the-diplomat" target="_blank" rel="noreferrer">times</a>, actually.

        Sorry Maria, Guy, Leon, Josef, Gordon, Leila, Ricard - just consider yourselves represented collectively as a group in the <a href="https://gatherer.wizards.com/FCA/en-us/4/counterspell" target="_blank" rel="noreferrer">Wild Rose Rebellion</a> card.
        `)}
        <p>The big boss, <a href="https://gatherer.wizards.com/FIN/en-us/219/the-emperor-of-palamecia" target="_blank" rel="noreferrer">The Emperor of Palamecia</a><InlineSpoiler mask='*'>in later, collateral games he became Emperor Mateus</InlineSpoiler>, is also represented, with his card being two-sided as well as Garland's from the first game.</p>
        <br/>
        <p>This is a nod to the fact that you'll defeat him once just to have him come back later as the ruler of hell. Or as the <a href="https://gatherer.wizards.com/FCA/en-us/11/yawgmoth-thran-physician" target="_blank" rel="noreferrer">Hell Tyrant</a>, if you prefer.</p>
        <br/>
        <CustomImage
            alt="Guy speak beaver"
            src="https://i.redd.it/lj831pn6hugd1.jpeg"
            align="right"
        >
            <i>source: <a style={{fontSize: "16px"}} href="https://www.reddit.com/r/FinalFantasy/comments/1ekncml/i_have_finally_witnessed_the_peak_of_final_fantasy/" target="_blank" rel="noreferrer">reddit</a></i>
        </CustomImage>
        {splitText(`Moving on from character-based cards, we have a mechanically based one in <a href="https://gatherer.wizards.com/FIN/en-us/150/random-encounter">Random Encounter</a>, even though this isn't something that has been introduced in this installment, just like <a href="https://gatherer.wizards.com/FIN/en-us/276/crossroads-village" target="_blank" rel="noreferrer">Crossroads Village</a> is just a random land card that references the town of Bafsk that Wizard of the Coast decided to put in the game to push the Town sinergies a little bit further.

        The <a href="https://gatherer.wizards.com/FIN/en-us/103/hecteyes" target="_blank" rel="noreferrer">Hecteyes</a> card is a reference to the first appearance of a monster that will become a staple of the series, even without ever becoming as iconic as the likes of the Tonberry, the Malboro etc.
        The remaining cards referencing the set are references to story beats:
        <a href="https://gatherer.wizards.com/FIN/en-us/181/coliseum-behemoth" target="_blank" rel="noreferrer">Coliseum Behemoth</a> is a boss that show up when Firion and the party are forced to fight in a coliseum, trying to save princess Hilda from the Emperor's clutches, while <a href="https://gatherer.wizards.com/FIN/en-us/79/swallowed-by-leviathan" target="_blank" rel="noreferrer">Swallowed by Leviathan</a> is a nod to a Pinocchio-esque moment where the party is swallowed by the titular monster - summons are not yet a thing, though.

        The best one, though, is <a href="https://gatherer.wizards.com/FIN/en-us/182/commune-with-beavers" target="_blank" rel="noreferrer">Commune with Beavers</a>, referencing an early moment in the game where the party is stuck but Guy, a bulky but illiterate man, surprises everyone by stating he can communicate with the local fauna.

        I <i>love</i> that an inner joke of the fans like this, while very minor in the grand scheme of things, has been acknowledged by WotC and turned into a card ~ we will talk about this again in later games.
        `)}
        </>
    )
}

export default FF2;