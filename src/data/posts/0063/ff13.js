import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from '../../../components/posts/inlineSpoiler';
import CustomImage from "../../../components/posts/customImage";

import CoverArt from '../../../images/post-0063/ffxiii/logo.png';

function FF13() {
    return (
        <>
            <Bookmark id="FF13Nutshell">A bit of context</Bookmark>
            <CustomImage
                alt="Cover art for the Final Fantasy XIII"
                src={CoverArt}
            />
            {splitText(`
                <center><i>Coming "soon"</i></center>
            `)}

            <Bookmark id="FF13Cards">The cards</Bookmark>
            {splitText(`
                We just <b>have</b> to start with the main character: <a href="https://gatherer.wizards.com/FIN/en-us/233/lightning-army-of-one" target="_blank" rel="noreferrer">Lightning, Army of One</a> is a very strong card in limited (there's a reason why it's a mythic rare), but didn't seem to break the mold for either constructed or EDH play - I love her Stagger ability, as it translates very well the game's mechanics.
                
                Then we have <a href="https://gatherer.wizards.com/FIN/en-us/560/lightning-security-sergeant" target="_blank" rel="noreferrer">Lightning, Security Sergeant</a>, a great red rare <i>for limited play</i>, and we <i>also</i> have <a href="https://gatherer.wizards.com/FCA/en-us/54/isshin-two-heavens-as-one" target="_blank" rel="noreferrer">Lightning, Lone Commando</a>, a Through the Ages reprint of a very recent card that, I <i>assume</i>, must be a popular Mardu (red-white-black) commander.
                Either that, or people started playing Tiny Leaders again while I wasn't looking.

                <a href="https://gatherer.wizards.com/FIN/en-us/199/sazh-katzroy" target="_blank" rel="noreferrer">Sazh Katzroy</a> and his pet <a href="https://gatherer.wizards.com/FIN/en-us/200/sazhs-chocobo" target="_blank" rel="noreferrer">Sazh's Chocobo</a> are fast inclusions in my Bird Tribe EDH deck, but I don't see them seeing much play outside of that niche - they're good in limited, though.

                <a href="https://gatherer.wizards.com/FIN/en-us/33/snow-villiers" target="_blank" rel="noreferrer">Snow Villiers</a> is an unexciting white uncommon for an unexciting character, let's just move on.

                <a href="https://gatherer.wizards.com/FIN/en-us/226/hope-estheim" target="_blank" rel="noreferrer">Hope Estheim</a> gets an Azorius (white-blue) rare card that mixes the lifegain and the mill subthemes - I've yet to see someone build around it profitably, but it's an interesting design, even though both mechanics are kind of niche.

                We then end the player characters roster with <a href="https://gatherer.wizards.com/FIN/en-us/211/vanille-cheerful-lcie" target="_blank" rel="noreferrer">Vanille, Cheerful l'Cie</a> and <a href="https://gatherer.wizards.com/FIN/en-us/99/fang-fearless-lcie" target="_blank" rel="noreferrer">Fang, Fearless l'Cie</a>, two not-so great uncommons that can meld into an actually strong creature - you just have to play green and black in your deck, and find them both, and pay a good amount of mana.
                That's a lot of hoops to jump in limited, and the final result is not worth the investment in constructed - maybe giving them the Partner mechanic would have made them more appealing, but I believe they would be underwhelming anyway.

                We then have <a href="https://gatherer.wizards.com/FIN/en-us/240/serah-farron" target="_blank" rel="noreferrer">Serah Farron</a>, Lightning's sister and Snow's fiancée, that spends most of the game as a <i>petrified</i> damsel in distress.
                She then becomes the protagonist of FFXIII-2, but that's out of our scope - I'll just say that her card design is solid, but I don't personally consider the card strong by any means.

                This iteration of <a href="https://gatherer.wizards.com/FIN/en-us/418/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timeless Artificer</a>, like the one in the previous game, is a bad guy.
                I found him very uninteresting in the game, though.
                He comes back in Lightning Returns, but it doesn't get better, to be honest.

                This game's final boss, <a href="https://gatherer.wizards.com/FCA/en-us/57/muldrotha-the-gravetide" target="_blank" rel="noreferrer">Orphan, Cocoon fal'Cie</a>, is a Through the Ages reprint of a very grindy Sultai (black-green-blue) commander.
                Feel free to try it out, it appears to see some play either from the command zone or in the 99.

                The local summon, <a href="https://gatherer.wizards.com/FIN/en-us/160/summon-brynhildr" target="_blank" rel="noreferrer">Summon: Brynhildr</a>, aka Sazh's Eidolon, is an <i>almost</i> good red rare - my vote would have been higher if only hey made it transform into a vehicle, but we'll have to live with this missed chance.
            `)}
                <p><a href="https://gatherer.wizards.com/FIN/en-us/165/thunder-magic" target="_blank" rel="noreferrer">Thunder Magic</a> is this set's modal spell for the thunder element - I wonder if they associated it with FFXIII because the main character's name is <i>Lightning</i><InlineSpoiler mask="*">before anyone says that her actual name is Claire: Lightning is not just a nickname, but a new identity she picked up to leave her past life behind</InlineSpoiler>, but in that case it's a joke I glagly accept.</p>
            {splitText(`

                The <a href="https://gatherer.wizards.com/FIN/en-us/61/magic-damper" target="_blank" rel="noreferrer">Magic Damper</a> card, while being an acceptable combat trick / way to protect a creature that could see some play in decks that need specific creatures to stay alive, refers to a <i>very niche</i> Synthesis ability available only to Snow and Fang where said characters become immune to magic if equipped with specific weapons (Feymark/Soulblazer for the former, Shamanic Spear/Heretic's Halberd for the latter) and a full set of Magical Crests.

                The only location for this game is <a href="https://gatherer.wizards.com/FIN/en-us/277/eden-seat-of-the-sanctum" target="_blank" rel="noreferrer">Eden, Seat of the Sanctum</a>, the capital city of Cocoon, named after the local ruling fal'Cie. The card itself is nothing worth mentioning, let's move on.

                <a href="https://gatherer.wizards.com/FIN/en-us/117/shambling-cieth" target="_blank" rel="noreferrer">Shambling Cie'th</a> depicts what happens to any l'Cie that fails to complete its assigned Focus (let's call it "contract"): they lose their humanity and become mindless monsters.

                The <a href="https://gatherer.wizards.com/FIN/en-us/189/gran-pulse-ochu" target="_blank" rel="noreferrer">Gran Pulse Ochu</a> is the boss of the last non-postgame Cie'th Stone Mission, and also the most celebrated appearance of the recurring Ochu enemy type in the series - the card's base form (a common 1/1 deathtouch creature) represents its Microchu variant, I dare say.

                The Through the Ages reprint <a href="https://gatherer.wizards.com/FCA/en-us/44/carpet-of-flowers" target="_blank" rel="noreferrer">Fal'Cie Paradise</a>, while representing what is basically the end of the game, is a reprint of a classic card that still sees competitive play as a sideboard option in eternal formats.

                The last card we'll mention for this game is another Through the Ages reprint: <a href="https://gatherer.wizards.com/FCA/en-us/40/lightning-bolt" target="_blank" rel="noreferrer">Thrum of the Vestige</a>.
                The original card is iconic <i>to say the least</i>, while the vestige we're talking about is, in short, the location where the plot of FFXIII actually starts.
            `)}
        </>
    )
}

export default FF13;