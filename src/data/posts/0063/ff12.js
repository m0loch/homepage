import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from '../../../components/posts/inlineSpoiler';
import CustomImage from "../../../components/posts/customImage";

import CoverArt from '../../../images/post-0063/ffxii/logo.png';

function FF12() {
    return (
        <>
            <Bookmark id="FF12Nutshell">A bit of context</Bookmark>
            <CustomImage
                alt="Cover art for the Final Fantasy XII"
                src={CoverArt}
                // align="right"
            />
            {splitText(`
                <center><i>Coming "soon"</i></center>
            `)}

            <Bookmark id="FF12Cards">The cards</Bookmark>
            {splitText(`
                The protagonist Vaan gets both a regular rare in <a href="https://gatherer.wizards.com/FIN/en-us/168/vaan-street-thief" target="_blank" rel="noreferrer">Vaan, Street Thief</a> (it is nearly playable in constructed, but falls short due to its lack of haste and underwhelming stats) and a Through the Ages reprint that's equally underwhelming: <a href="https://gatherer.wizards.com/FCA/en-us/38/captain-lannery-storm" target="_blank" rel="noreferrer">Vaan, Aspiring Sky Pirate</a>.

                <a href="https://gatherer.wizards.com/FIN/en-us/7/ashe-princess-of-dalmasca" target="_blank" rel="noreferrer">Ashe, Princess of Dalmasca</a>, the real protagonist, is an ok uncommon in limited, but I don't see it seeing much play outside of that.

                <a href="https://gatherer.wizards.com/FIN/en-us/213/balthier-and-fran" target="_blank" rel="noreferrer">Balthier and Fran</a>, the real <i>real</i> protagonists, do get a rare card at least, but I've yet to see it played anywhere. Their synergy with vehicles is pretty on point, lore-wise, so extra points for that.

                Then, moving on to the antagonists, we have the usual <a href="https://gatherer.wizards.com/FIN/en-us/417/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timeless Artificer</a> acting, for once, as the evil scientist working for the big bad; later in the game we also discover he's Balthier's father.

                Speaking of evil relatives <a href="https://gatherer.wizards.com/FIN/en-us/230/judge-magister-gabranth" target="_blank" rel="noreferrer">Judge Magistrate Galbranth</a>, aka the guy portrayed in the game's logo, is Basch's twin brother that killed both Vaan's brother and Ashe's father King Raminas in the intro.
                He's a complex character that follows quite a complicated arc throughout the game - he totally deserves a mediocre card in his honor.

                The <i>actual</i> antagonist, <a href="https://gatherer.wizards.com/FCA/en-us/46/fynn-the-fangbearer" target="_blank" rel="noreferrer">Vayne Carudas Solidor</a>, gets a Through the Ages reprint of a classic green aggro commander that, while not eligible for competitive cEDH, is totally playable on casual tables.
                I love how, even in the art of his "own" card, his brother Larsa gets the "main character" treatment.
                He manages to be the center of attention in the cheap removal <a href="https://gatherer.wizards.com/FIN/en-us/124/vaynes-treachery" target="_blank" rel="noreferrer">Vayne's Treachery</a>, at least.

                Moving on to locations, the Boros common town is <a href="https://gatherer.wizards.com/FIN/en-us/287/rabanastre-royal-city" target="_blank" rel="noreferrer">Rabanastre, Royal City</a>, former capital of the Kingdom of Dalmasca, is basically the starting town of the game.

                On the other hand, the capital of the Archadian Empire (aka the bad guys) is represented by <a href="https://gatherer.wizards.com/FCA/en-us/27/wall-of-omens" target="_blank" rel="noreferrer">The Imperial City of Archades</a>, a Through the Ages reprint of... a creature, instead of a land card. Go figure.

                We also end the Through the Ages collection of this chapter with <a href="https://gatherer.wizards.com/FCA/en-us/62/smugglers-copter" target="_blank" rel="noreferrer">The Strahl</a>, Balthier and Fran's airship, fittingly represented with a vehicle card that dominated a couple of standard seasons back in the day.

                Changing topic: <a href="https://gatherer.wizards.com/FIN/en-us/123/undercity-dire-rat" target="_blank" rel="noreferrer">Undercity Dire Rat</a>, a very basic black common creature, references an early quest during the game's tutorial section.

                We then have <a href="https://gatherer.wizards.com/FIN/en-us/119/sidequest-hunt-the-mark" target="_blank" rel="noreferrer">Sidequest: Hunt the Mark</a>, a limited playable uncommon card, stands for this game's main side activity: hunting special monsters, following requests published on the <i>hunt boards</i> scattered in the various taverns around the world.

                <a href="https://gatherer.wizards.com/FIN/en-us/19/fate-of-the-sun-cryst" target="_blank" rel="noreferrer">Fate of the Sun-Cryst</a> is a common removal based upon a late-game story beat.

                Closing this section, we have the uncommon red removal <a href="https://gatherer.wizards.com/FIN/en-us/132/choco-comet" target="_blank" rel="noreferrer">Choco-Comet</a> that also spawns a 2/2 chocobo token: it's a good card in limited, but my favorite part is that, in a game where farming equipment is king, we get a big nod to the lvl 99 Red Chocobo encounter, aka a classic way to farm Ribbons.
            `)}
        </>
    )
}

export default FF12;