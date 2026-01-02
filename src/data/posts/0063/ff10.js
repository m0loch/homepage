import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from '../../../components/posts/inlineSpoiler';
import CustomImage from "../../../components/posts/customImage";
import YouTubeVideo from '../../../components/posts/youtubeVideo';

import CoverArt from '../../../images/post-0063/ffx/logo.png';

function FF10() {
    return (
        <>
            <Bookmark id="FF10Nutshell">A bit of context</Bookmark>
            <CustomImage
                alt="Cover art for the original Final Fantasy X"
                src={CoverArt}
            />
            {splitText(`
                <center><i>Later, later</i></center>
            `)}

            <Bookmark id="FF10Cards">The cards</Bookmark>
            {splitText(`
                For the regular set, the amount of characters is quite limited:
                the protagonist <a href="https://gatherer.wizards.com/FIN/en-us/246/tidus-blitzball-star" target="_blank" rel="noreferrer">Tidus, Blitzball Star</a>, which also features as <a href="https://gatherer.wizards.com/FCA/en-us/58/thrasios-triton-hero" target="_blank" rel="noreferrer">Tidus, Zanarkand Fayth</a>, is really nothing to write home about, while <a href="https://gatherer.wizards.com/FIN/en-us/250/yuna-hope-of-spira" target="_blank" rel="noreferrer">Yuna, Hope of Spira</a> Yuna is a sensibly better mythic rare with some good enchantment/saga synergies, given her role as summoner.

                On the antagonists' side we have <a href="https://gatherer.wizards.com/FIN/en-us/242/sin-spiras-punishment" target="_blank" rel="noreferrer">Sin, Spira's Punisher</a> - I wonder if his graveyard interacting mechanic is meant as a nod to his ability of bringing people back and forth between Spira and Zanarkand, if somebody does please let me know.

                On the side of the lesser evils (but still evil), we have <a href="https://gatherer.wizards.com/FIN/en-us/452/seymour-flux" target="_blank" rel="noreferrer">Seymour Flux</a>, boss version of the unsent that gained the power over the Church of Yevon trying to become the new Sin.

                For its "normal" form (we can't say "human", as he's half-guado), we have the Through the Ages card <a href="https://gatherer.wizards.com/FCA/en-us/55/kinnan-bonder-prodigy" target="_blank" rel="noreferrer">Seymour Guado</a> - a very strong Simic (blue-green) commander.

                Then we have <a href="https://gatherer.wizards.com/FIN/en-us/104/jecht-reluctant-guardian" target="_blank" rel="noreferrer">Jecht, Reluctant Guardian</a>, a card reminiscing of the late Tidus' father and the tragic end of his pilgrimage with Braska.

                The current iteration of <a href="https://gatherer.wizards.com/FIN/en-us/415/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timeless Artificer</a> is the head of the Al Bhed (also see: <a href="https://gatherer.wizards.com/FIN/en-us/88/al-bhed-salvagers" target="_blank" rel="noreferrer">Al Bhed Salvagers</a>), father of Rikku and uncle of Yuna - quite an influential guy, huh?

                In the summons category -or Aeons, as they're called in FFX- we have <a href="https://gatherer.wizards.com/FIN/en-us/78/summon-shiva" target="_blank" rel="noreferrer">Summon: Shiva</a> and <a href="https://gatherer.wizards.com/FIN/en-us/1/summon-bahamut" target="_blank" rel="noreferrer">Summon: Bahamut</a> that are some good, old favorites, along with <a href="https://gatherer.wizards.com/FIN/en-us/120/summon-anima" target="_blank" rel="noreferrer">Summon: Anima</a>, the dark spirit of Seymour's mother that also happens to be the dark-elemental Aeon of the game.
            `)}
                <p>I'll take a quick detour here to list a handful of cards linked to one of the most controversial minigames in the franchise: Blitzball<InlineSpoiler mask="*">Sorry I just <i>need</i> to link <a href="https://www.nuklearpower.com/2007/04/26/episode-838-no-air-down-there/" target="_blank" rel="noreferrer">this page</a> and <a href="https://www.nuklearpower.com/2007/04/28/episode-839-wide-world-of-sports/"target="_blank" rel="noreferrer">the following</a> - life was way easier 20 years ago, and we used to laugh for some <i>very</i> stupid shit</InlineSpoiler>!</p>
            {splitText(`

                To start off, we have <a href="https://gatherer.wizards.com/FIN/en-us/254/blitzball" target="_blank" rel="noreferrer">Blitzball</a> -not as in the sport <i>per sé</i>, but as the ball used in this local <i>underwaterpolo</i> thing that everyone on Spira is so crazy about- which is an interesting card for a multiplayer Commander game: 3 CMC for a mana rock is a bit overcosted, but the ability of turning it into a Divination effect when someone else's commander deals damage to an opponent is relevant, sometimes.

                We then have an unremarkable but flavorful combat trick -<a href="https://gatherer.wizards.com/FIN/en-us/176/blitzball-shot" target="_blank" rel="noreferrer">Blitzball Shot</a>- and <a href="https://gatherer.wizards.com/FIN/en-us/158/sidequest-play-blitzball" target="_blank" rel="noreferrer">Sidequest: Play Blitzball</a> which, as the other Sidequests, is an enchantment that flips under certain conditions, with the B side being Wakka's <s>ultimate</s> <i>celestial</i> weapon in this case.

                That is the only equipment for this game, but let's cite <a href="https://gatherer.wizards.com/FIN/en-us/56/ice-magic" target="_blank" rel="noreferrer">Ice Magic</a> for the "general spells" category - it's a modal instant that can help blue decks to solve the problem of problematic permanents, but I don't foresee it being played in any format.

                It is also time to list <a href="https://gatherer.wizards.com/FIN/en-us/109/overkill" target="_blank" rel="noreferrer">Overkill</a> - it is a <i>game mechanic</i> specific to this game, which makes this card pretty unique; it is also a very <i>weird</i> card, and its combo with <a href="https://gatherer.wizards.com/TDC/en-us/27/jaws-of-defeat" target="_blank" rel="noreferrer">Jaws of Defeat </a> is so impractical that I expect lots of people trying to build around it just for the meme.

                For locations, we have:
                <a href="https://gatherer.wizards.com/FIN/en-us/281/guadosalam-farplane-gateway" target="_blank" rel="noreferrer">Guadosalam, Farplane Gateway</a>, home of the Guado people, but more importantly the place where it all began: <a href="https://gatherer.wizards.com/FIN/en-us/293/lasting-fayth" target="_blank" rel="noreferrer">Zanarkand, Ancient Metropolis</a>.

                The art is split in two halves, to let the artist show both its dream reality and its present-day ruins - if only it was a strong card as well...

                While not being a land, <a href="https://gatherer.wizards.com/FCA/en-us/63/strixhaven-stadium" target="_blank" rel="noreferrer">Luka Stadium</a> qualifies as well - even though it's a Through the Ages reprint of a bad card from an even worse set (maybe this was meant to go in the Blitzball subsection, but w/e).

                Then, we move on to the story beats!

                After meeting becoming a guardian, Tidus gets some proper introduction to the combat system and, in particular, on how elements work: the image and flavor text on <a href="https://gatherer.wizards.com/FIN/en-us/48/combat-tutorial" target="_blank" rel="noreferrer">Combat Tutorial</a> (a <a href="https://gatherer.wizards.com/M15/en-us/52/divination" target="_blank" rel="noreferrer">Divination</a> with a small upside) are a direct reference of Lulu jumping in into our first battle agains an <a href="https://gatherer.wizards.com/FIN/en-us/55/ice-flan" target="_blank" rel="noreferrer">Ice Flan</a> that you can't just bash to death with your sword - a really unremarkable creature on its own, tbh.

                Later in the game, the will need to traverse the Moonflow river, and to do so they will need to <a href="https://gatherer.wizards.com/FIN/en-us/197/ride-the-shoopuf" target="_blank" rel="noreferrer">Ride the Shoopuf</a>, with said shoopuf being a mix between an elephant and a brontosaurus that ferries people between the two banks.
                The card is interesting in limited formats, and that's pretty much it.

                <a href="https://gatherer.wizards.com/FIN/en-us/76/stuck-in-summoners-sanctum" target="_blank" rel="noreferrer">Stuck in Summoner's Sanctum</a> refers to the ingenious idea the Al Bhed came up with to save summoners from their bleak destiny: <i>kidnap</i> them, thus preventing their pilgrimage from being completed.
                Just your regular blue removal enchantment, nothing worth discussing here.

                As our last "regular" card, we have <a href="https://gatherer.wizards.com/FIN/en-us/8/aurons-inspiration" target="_blank" rel="noreferrer">Auron's Inspiration</a>, the endgame motivational quote from Auron, after Yuna decides to break the cycle of death and rebirth of Sin.

                I'll keep <a href="https://gatherer.wizards.com/FCA/en-us/31/rhystic-study" target="_blank" rel="noreferrer">Stay with Me</a>, a Through the Ages reprint of a commander staple, in its own category, aka the "emotional moments that break players' hearts".
            `)}
            <Bookmark id="FF10ThemeDeck">The pre-constructed deck</Bookmark>
            {splitText(`
                Also, given that it's undoubtedly one of the most popular entries, Final Fantasy X features its own thematic deck: <a href="https://magic.wizards.com/en/news/announcements/final-fantasy-commander-decklists#FFX" target="_blank" rel="noreferrer">decklist</a>.

                Its name is Counter Blitz and it's a Bant (green-white-blue) deck based on counters synergies.
        `)}
                <p>The cast features, for the summoner and her guardians:</p>
                <ul>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/5/tidus-yunas-guardian" target="_blank" rel="noreferrer">Tidus, Yuna's Guardian</a></li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/8/yuna-grand-summoner" target="_blank" rel="noreferrer">Yuna, Grand Summoner</a></li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/97/wakka-devoted-guardian" target="_blank" rel="noreferrer">Wakka, Devoted Guardian</a></li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/38/lulu-stern-guardian" target="_blank" rel="noreferrer">Lulu, Stern Guardian</a></li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/85/kimahri-valiant-guardian" target="_blank" rel="noreferrer">Kimahri, Valiant Guardian</a></li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/10/auron-venerated-guardian" target="_blank" rel="noreferrer">Auron, Venerated Guardian</a></li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/41/rikku-resourceful-guardian" target="_blank" rel="noreferrer">Rikku, Resourceful Guardian</a></li>
                </ul>
                <br/>
                <p>And then, for the NPCs:</p>
                <ul>
                <li>our nemesis <a href="https://gatherer.wizards.com/FIC/en-us/68/maester-seymour" target="_blank" rel="noreferrer">Master Seymour</a></li>
                <li>his butler <a href="https://gatherer.wizards.com/FIC/en-us/73/tromell-seymours-butler" target="_blank" rel="noreferrer">Tromell, Seymour's Butler</a></li>
                <li>his father <a href="https://gatherer.wizards.com/FIC/en-us/23/lord-jyscal-guado" target="_blank" rel="noreferrer">Lord Jyscal Guado</a></li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/39/oaka-traveling-merchant" target="_blank" rel="noreferrer">O'aka, Traveling Merchant</a> (hint: he's got a good synergy with <a href="https://gatherer.wizards.com/FIN/en-us/235/noctis-prince-of-lucis" target="_blank" rel="noreferrer">Noctis, Prince of Lucis</a>)</li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/19/gatta-and-luzzu" target="_blank" rel="noreferrer">Gatta and Luzzu</a> are two young crusaders that take part in Operation Mi'ihen<InlineSpoiler mask="*">sadly, only one of them survives the encounter with Sin, depending on the player's actions</InlineSpoiler></li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/94/shelinda-yevon-acolyte" target="_blank" rel="noreferrer">Shelinda, Yevon Acolyte</a> is a naive but gentle cleric of Yevon</li>
                <li>and, finally, we have the Big Boss himself: <a href="https://gatherer.wizards.com/FIC/en-us/95/sin-unending-cataclysm" target="_blank" rel="noreferrer">Sin, Unending Cataclysm</a> (ok, he's pretty underwhelming)</li>
                </ul>
                <br/>
                <p>A great deal of importance is given to the summons in this game, as you might have noticed:</p>
                <ul>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/42/summon-valefor" target="_blank" rel="noreferrer">Summon: Valefor</a> is the first Aeon Yuna manages to summon</li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/27/summon-ixion" target="_blank" rel="noreferrer">Summon: Ixion</a> a lightning-based unicorn obtained at Djose</li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/28/summon-yojimbo" target="_blank" rel="noreferrer">Summon: Yojimbo</a> is an optional Aeon you can hire (like, with <i>money</i>) in the Cavern of the Stolen Fayth - he's the most powerful of all Aeons, being able to one-shot the most powerful optional bosses, but you need to pay for his services everytime...<br/>As a card, he's a removal that then becomes a <a href="https://gatherer.wizards.com/CHK/en-us/10/ghostly-prison" target="_blank" rel="noreferrer">Ghostly Prison</a> for a couple of turns and, before leaving, gives you some mana back - I don't see it becoming a staple of any format, but it's a fun card</li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/71/summon-magus-sisters" target="_blank" rel="noreferrer">Summon: Magus Sisters</a> represents the final Aeon you can earn, after unlocking all the others, and it sucks.</li>
                </ul>
            {splitText(`
                <a href="https://gatherer.wizards.com/FIC/en-us/34/blitzball-stadium" target="_blank" rel="noreferrer">Blitzball Stadium</a> is yet another Blitzball reference, and a card I will ignore.

                <a href="https://gatherer.wizards.com/FIC/en-us/12/chocobo-knights" target="_blank" rel="noreferrer">Chocobo Knights</a> is an in-game military group that translates to a non-amazing card, but don't underestimante the fact that <i>they don't need to be attacking</i> for their ability to trigger.
                I'm pissed that they don't have the Bird subtype, though, so they're useless for my <a href="https://gatherer.wizards.com/FIN/en-us/215/choco-seeker-of-paradise" target="_blank" rel="noreferrer">Choco, Seeker of Paradise</a> deck.

                <a href="https://gatherer.wizards.com/FIC/en-us/24/protection-magic" target="_blank" rel="noreferrer">Protection Magic</a> is, as the name suggests, a protection spell. It's tuned for three creatures, as per the party's active members, and it's counter-based, but I'm still not really impressed.

                <a href="https://gatherer.wizards.com/FIC/en-us/70/sphere-grid" target="_blank" rel="noreferrer">Sphere Grid</a>, a nod to this game's leveling system, appears to be an interesting card - too bad it will never see competitive play.

                <a href="https://gatherer.wizards.com/FIC/en-us/29/summoners-sending" target="_blank" rel="noreferrer">Summoner's Sending</a>, referring to the summoner's duty of letting the spirits of the dead find their peace, is both a token generator and a graveyard hate enchantment, albeit very slow and limited to creatures.

                <a href="https://gatherer.wizards.com/FIC/en-us/74/yunas-decision" target="_blank" rel="noreferrer">Yuna's Decision</a> is an underwhelming card that speaks about some kind of decisions Yuna should take during the game BUT IT'S A LIE, there's no real decision to be made, come on!

                <a href="https://gatherer.wizards.com/FIC/en-us/75/yunas-whistle" target="_blank" rel="noreferrer">Yuna's Whistle</a> is kind of a cool card - and a nod to when Tidus teaches Yuna how to whistle during the story; I should add something about a certain cutscene in FFX-2 here, but luckily that's outside the scope of this post.
        `)}
        </>
    )
}

export default FF10;