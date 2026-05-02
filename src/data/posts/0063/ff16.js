import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
// import InlineSpoiler from '../../../components/posts/inlineSpoiler';
import CustomImage from "../../../components/posts/customImage";

import CoverArt from '../../../images/post-0063/ffxvi/logo.png';

function FF16() {
    return (
        <>
            <Bookmark id="FF16Nutshell">A bit of context</Bookmark>
            <CustomImage
                alt="Cover art for the Final Fantasy XVI"
                src={CoverArt}
            />
            {splitText(`
                <center><i>Coming "soon"</i></center>
            `)}

            <Bookmark id="FF16Cards">The cards</Bookmark>
            {splitText(`
                For the last installment of this feature, we'll start with the main character, the only playable one: <a href="https://gatherer.wizards.com/FIN/en-us/133/clive-ifrits-dominant" target="_blank" rel="noreferrer">Clive, Ifrit's Dominant</a>; this card (as many tied to this entry) is just too pricey and slow to see constructed play, but it's designed to be <b>ePiC</b> and it delivers in giving you the impression of a powerful character.
                The Through the Ages version of <a href="https://gatherer.wizards.com/FCA/en-us/59/vial-smasher-the-fierce" target="_blank" rel="noreferrer">Clive Rosfield</a>, on the other hand, is a popular cEDH partner commander when used in junction with <a href="https://gatherer.wizards.com/SPG/en-us/16/thrasios-triton-hero" target="_blank" rel="noreferrer">Thrasios, Triton Hero</a>, which means that Clive and Tidus from FFX would make a great pair. But also a weird cross-over episode.

                The other dominants are depicted as:<ul>
                <li><a href="https://gatherer.wizards.com/FIN/en-us/229/joshua-phoenixs-dominant" target="_blank" rel="noreferrer">Joshua, Phoenix's Dominant</a> could find a place in Commander, in a Mardu reanimator shell of sort... I didn't put much thought into it but it <i>might</i> be;</li>
                    <li><a href="https://gatherer.wizards.com/FIN/en-us/58/jill-shivas-dominant" target="_blank" rel="noreferrer">Jill, Shiva's Dominant</a> is a <a href="https://gatherer.wizards.com/P3/en-us/41/man-o-war">Man-o'-War</a> with upsides, every casual Commander deck based on blinking will find a place for her;</li>
                    <li><a href="https://gatherer.wizards.com/FIN/en-us/420/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timeless Artificer</a> - yes, the best Cid's incarnation ever is too stuck in the meme to be an <i>actual</i> dominant, mechanically speaking;</li>
                    <li><a href="https://gatherer.wizards.com/FIN/en-us/16/dion-bahamuts-dominant" target="_blank" rel="noreferrer">Dion, Bahamut's Dominant</a> has some token synergies while respecting the dominant archetype, I don't know if this card can see any play but it <i>could</i> have some use, somewhere.</li>
                </ul>

                Staying in the NPC's lane, we also have a couple of animal companions to talk about:
                <a href="https://gatherer.wizards.com/FIN/en-us/208/torgal-a-fine-hound" target="_blank" rel="noreferrer">Torgal, A Fine Hound</a> is first and foremost A GOOD BOI, but also a 2/2 for a CMC of 2 that ramps, fixes your mana and give some passive returns in the form of +1/+1 counters. I've seen worse uncommons, to be honest.
                <a href="https://gatherer.wizards.com/FIN/en-us/6/ambrosia-whiteheart" target="_blank" rel="noreferrer">Ambrosia Whiteheart</a>, on the other hand, is a <a href="https://gatherer.wizards.com/PLC/en-us/22/whitemane-lion" target="_blank" rel="noreferrer">Whitemane Lion</a> with the common chocobo landfall trigger - an unexciting uncommon that still have its uses, but not the most original work of design in my opinion.

                Then we have the final boss: <a href="https://gatherer.wizards.com/FIN/en-us/2/ultima-origin-of-oblivion" target="_blank" rel="noreferrer">Ultima, Origin of Oblivion</a>. Their stats are <i>unexciting</i> and their land interactions are kind of weird, I see it being used as a ramp card with minor disruptive power in eldrazi decks, but I thinks <a href="https://edhrec.com/commanders/zhulodok-void-gorger" target="_blank" rel="noreferrer">Zhulodok, Void Gorger</a> is way more popular as a commander...?

                In the locations section we've got two entries:
                <a href="https://gatherer.wizards.com/FIN/en-us/275/clives-hideaway" target="_blank" rel="noreferrer">Clive's Hideaway</a>, aka the central hub of a good chunk of the game, is a colorless land sporting the Hideaway mechanic, but don't expect it to be as good as <a href="https://gatherer.wizards.com/LRW/en-us/281/windbrisk-heights" target="_blank" rel="noreferrer">Windbrisk Heights</a> or <a href="https://gatherer.wizards.com/LRW/en-us/272/shelldock-isle" target="_blank" rel="noreferrer">Shelldock Isle</a>.
                <a href="https://gatherer.wizards.com/FIN/en-us/274/capital-city" target="_blank" rel="noreferrer">Capital City</a> references Oriflamme, the capital city of Sanbreque, but feel free to ignore its existence unless you're desperate for an extra Town to add to your deck.

                The last original cards of the set are, oddly enough, all removals:
                <a href="https://gatherer.wizards.com/FIN/en-us/180/clash-of-the-eikons" target="_blank" rel="noreferrer">Clash of the Eikons</a> is a <a href="https://gatherer.wizards.com/ISD/en-us/200/prey-upon" target="_blank" rel="noreferrer">Prey Upon</a> with some upside, if you control a saga;
                <a href="https://gatherer.wizards.com/FIN/en-us/557/deadly-embrace" target="_blank" rel="noreferrer">Deadly Embrace</a> represents the classic 3BB sorcery removal you play in draft, but cycles itself - or draws even more cards if played post-combat;
                <a href="https://gatherer.wizards.com/FIN/en-us/559/judgment-bolt" target="_blank" rel="noreferrer">Judgment Bolt</a> is an inefficient red removal with a small synergy equipments... a wasted rare slot, if you ask me.

                The other Through the Ages cards are dedicated to the antagonist dominants, and by virtues of being reprints of previously existing cards, don't follow the "standard" dominant template.
                Here they are, by order of appearance:
                <ul>
                    <li><a href="https://gatherer.wizards.com/FCA/en-us/53/ishai-ojutai-dragonspeaker" target="_blank" rel="noreferrer">Benedikta Harman</a> is a commander that, at the time of writing (late April 2026) is gaining traction in cEDH when paired with <a href="https://gatherer.wizards.com/CMR/en-us/197/rograkh-son-of-rohgahh" target="_blank" rel="noreferrer">Rograkh, Son of Rohgahh</a>. Poor Kupka.</li>
                    <li><a href="https://gatherer.wizards.com/FCA/en-us/50/bruse-tarl-boorish-herder" target="_blank" rel="noreferrer">Hugo Kupka</a> is another commander featuring the Partner mechanic, but way less popular - for what I can see, it's mostly used for color identity reasons in <a href="https://gatherer.wizards.com/SPG/en-us/16/thrasios-triton-hero" target="_blank" rel="noreferrer">Thrasios</a> decks; for that reason, given its white overlap with Benedikta, we will probably never see them paired outside lore-based decks - the irony never ends.</li>
                    <li><a href="https://gatherer.wizards.com/FCA/en-us/56/kraum-ludevics-opus" target="_blank" rel="noreferrer">Barnabas Tharmr</a> is yet another Partner commander with some cEDH playability, this time usually in pair with <a href="https://gatherer.wizards.com/CMR/en-us/539/tymna-the-weaver" target="_blank" rel="noreferrer">Tymna, the Weaver</a> - which means you can build a potentially competitive deck by pairing the protagonist of FF4 with the Evil Guy from FF16. I mean, I know this situation is mostly due to the idea of reprinting some popular commanders, but I feel consider this whole thing pretty funny.</li>
                </ul>
            `)}
        </>
    )
}

export default FF16;