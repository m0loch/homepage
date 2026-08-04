import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from '../../../components/posts/inlineSpoiler';
import CustomImage from "../../../components/posts/customImage";
import YouTubeVideo from '../../../components/posts/youtubeVideo';

import CoverArt from '../../../images/post-0063/ffxiv/logo.png';
import FF14Amano from '../../../images/post-0063/ffxiv/ff14-amano.png';
import Classes from '../../../images/post-0063/ffxiv/classes-yoshida.png';
import RealmRebornAmano from '../../../images/post-0063/ffxiv/realmreborn-amano.png';
import HeavenswardYoshida from '../../../images/post-0063/ffxiv/heavensward-yoshida.png';
import ShadowbringersYoshida from '../../../images/post-0063/ffxiv/shadowbringers-yoshida.png';
import StormbloodYoshida from '../../../images/post-0063/ffxiv/stormblood-yoshida.png';
import DawntrailYoshida from '../../../images/post-0063/ffxiv/dawntrail-yoshida.png';
import EndwalkerAmano from '../../../images/post-0063/ffxiv/endwalker-amano.png';
import EvercoldAmano from '../../../images/post-0063/ffxiv/evercold-amano.png';

import EndsingerAmano from '../../../images/post-0063/ffxiv/endsinger-amano.png';
import EndwalkerYoshida from '../../../images/post-0063/ffxiv/endwalker-yoshida.png';
import StormbloodAmano from '../../../images/post-0063/ffxiv/stormblood-amano.png';
import HeavenswardAmano from '../../../images/post-0063/ffxiv/heavensward-amano.png';

function FF14() {
    return (
        <>
            <Bookmark id="FF14Nutshell">A bit of context</Bookmark>
            <CustomImage
                alt="Cover art for Final Fantasy XIV"
                src={CoverArt}
            />
            <p>Final Fantasy XIV is the second MMORPG in the series and, out of pure coherence by my side, the second game in the series I won't touch with a ten-foot pole.</p>
            <br/>
            <YouTubeVideo videoId="99uyS9WCV38" align="right" caption="I need to finish this post before that"/>
            {splitText(`
                It's also probably the main reason Square Enix is still afloat, and at the time of writing (early August 2026) they just announced a Switch 2 port (that should be distributed on August 4th), a FF7 Gold Saucer based event for October, and a new upcoming expansion (THE SEVENTH!) called "Evercold" that's scheduled for release in January 2027.

                But let's start from the beginning: initially incepted as Project Rapture, it's first predecessor is presented as a tech demo at E3 2005 (along with the first trailer of a potential FF7 Remake), dating the first draft to somewhere around 2004 - making it contemporary to FFXIII, with which it shares both development philosophy and the internal development tools: the Crystal Tools engine.
            `)}
            <p>As you can expect, the same issues that plagued FFXIII's development affected FFXIV as well: the focus on spectacle and graphics that led to rewriting the engine from scratch moving from PS2 to PS3, developers moved across different projects due to shifting priorities and the general difficulties of working on a still work-in-progress engine built to accomodate both a turn-based RPG and a MMORPG (...and an action RPG, but that's his own episode<InlineSpoiler mask="*"><a href='https://tvtropes.org/pmwiki/pmwiki.php/Main/Foreshadowing' target="_blank" rel="noreferrer"><i>Foreshadowing</i></a></InlineSpoiler>) caused all the delays you would expect on a project of that magnitude.</p>
            <YouTubeVideo videoId="4wsHIvGpwrg" align="left" caption="Rapture"/>
            {splitText(`
                In the end, the game was officially announced as Final Fantasy XIV at E3 2009 for both PlayStation 3 and Windows, then launched on September 30th, 2010. And this is when hell broke loose.
            `)}
                <p>It is difficult to give an exact magnitude of the issue the game had at release: while still showing some promise, the game had serious performance issues and was heavily criticized both narratively and mechanically, with reviews going as far as to say "<i>Rather than learn from past mistakes and incorporate what are inarguably advancements in the genre, Square Enix seems to have designed Final Fantasy XIV in a vacuum and released it halfway before it was done. It just simply isn't worth the hassle</i><InlineSpoiler mask="*"><a href='https://web.archive.org/web/20140825160635/http://www.gametrailers.com/reviews/2bde2i/final-fantasy-xiv-review' target="_blank" rel="noreferrer"><i>Wayback machine</i></a></InlineSpoiler>".</p>
                <br/>
                <p>Nowadays we're more accustomed to disastrous launches (Cyberpunk 2077, Concord...), but back in 2010 this was a <b>big</b> deal, and the issues were so severe that the project -now with Naoki Yoshida in charge- swerved towards a complete reboot of the game<InlineSpoiler mask="*"><a href="https://gdcvault.com/play/1020796/Behind-the-Realm" target="_blank" rel="noreferrer">Here</a> you can find the famous keynote "Behind the Realm Reborn"<br/>delivered by Naoki Yoshida himself at GDC 2014.<br/><br/><a href="https://media.gdcvault.com/GDC2014/Presentations/GDC2014_FFXIV_Behind_The_Realm_Reborn_NaokiYoshida_v2.pdf" target="_blank" rel="noreferrer">Click here</a> for the slides.</InlineSpoiler>.</p>
            {splitText(`

                Over the course of the following couple of years, up until the infamous patch 1.23b, players kept defending Eorzea from the Garlean Empire, facing in particular the fall of Dalamud, a red, artificial moon slowly falling towards the planet.
            `)}
            <YouTubeVideo videoId="39j5v8jlndM" align="right" caption="The in-game cutscene that marked the end of FFXIV 1.0"/>
            {splitText(`
                Then, on November 11, 2012, Dalamud actually fell in an event known as Seventh Umbral Calamity, revealing the true nature of the moon as Bahamut's prison and triggering, after the dragon's escape, a final showdown between the beast and the Circle of Knowing led by Louisoix Leveilleur.

                <i>And then the servers went down</i>.

                After a thorough rewrite of the UI, the combat system and much of the network code, Final Fantasy XIV was launched <i>again</i> on August 27, 2013, this time under the name of Final Fantasy XIV: A Realm Reborn to great success.

                I usually use this platform to discuss the minutiae of game mechanics and plots, but being a software developer myself I can't help but admire how a backbreaking launch was turned into such a success.

                Please, remember that at the time of writing we've just witnessed the announcement of the sixth expansion of A Realm Reborn, the eighth different major release of a project that could spell the end of a company but, as of now, is still generating a steady revenue that keeps Square Enix afloat.
            `)}

            <Bookmark id="FF14Cards">The cards</Bookmark>
            <p><i>Disclaimer: I don't have any screenshots from a game I've never played, but BOY, did they produce a lot of wonderful illustrations over the course of eight expansions...</i></p>
            <CustomImage
                alt="Illustration by Yoshitaka Amano for the original Final Fantasy XIV"
                src={FF14Amano}
                align="right"
            >
                Illustration by Yoshitaka Amano for the original Final Fantasy XIV
            </CustomImage>
            {splitText(`

                Similarly to FFXI -the other MMORPG in the series- we don't have entries for playable characters, so we will once again start with NPCS:

                <a href="https://gatherer.wizards.com/FIN/en-us/480/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timeless Artificer</a> is the head of the Garlon Ironworks and he's pretty central to the main storylines of the main game and the expansions.

                <a href="https://gatherer.wizards.com/FIN/en-us/21/graha-tia" target="_blank" rel="noreferrer">G'raha Tia</a>, aka The Chrystal Exarch, seems to starts off as a modern take on Desch from FF3, but he eventually becomes a major ally to the Warrior of Light in later expansions.
                His card, though, is an overpriced uncommon that has some minor card advantage built in - I'd play it if forced, but I don't see this win some major grindfest.

                <a href="https://gatherer.wizards.com/FIN/en-us/151/raubahn-bull-of-ala-mhigo" target="_blank" rel="noreferrer">Raubahn, Bull of Ala Mhigo</a> (Raubahn Aldynn) is a former general of Ala Mhigo (duh) before it was conquered by the Garlean forces guided by Gaius Van Baelsar.
                He then regained his freedom after becoming a veteran gladiator, then becoming the leader of the Immortal Flames.
                This 2/2 rare with ward and equipment synergy won't probably ever see any competitive play, but is a neat card in limited - a format where you should never underestimate the power of 2/2 for 1R.

                With his appearance based on Naoki Yoshida (aka: the game director), <a href="https://gatherer.wizards.com/FIN/en-us/249/the-wandering-minstrel" target="_blank" rel="noreferrer">The Wandering Minstrel</a> is a fun, non-competitve commander if you liked how Amulet Titan lines from the days where it was Modern popular.
                He doesn't seem to be a character with any real impact on the story, though.
            `)}
            <CustomImage
                alt="Conceptual art from Akihiko Yoshida"
                src={RealmRebornAmano}
                align="right"
            >
                Illustration by Yoshitaka Amano for A Realm Reborn
            </CustomImage>

            {splitText(`
                <a href="https://gatherer.wizards.com/FIN/en-us/39/venat-heart-of-hydaelyn" target="_blank" rel="noreferrer">Venat, Heart of Hydaelyn</a> is an Ancient that the Warrior of Light can meet in the past, during the events of the Endwalker expansion.
                After helping the party as an NPC, she eventually becomes a boss fight in the form of the Primal Hydaelyn - represented in the other side of the same card.
                It's a limited bomb rare, but it's probably too slow even for EDH...

                <a href="https://gatherer.wizards.com/FIN/en-us/86/yshtola-rhul" target="_blank" rel="noreferrer">Y'shtola Rhul</a> is a magic wielding Miqo'te (a catgirl, for short) that helps the Warrior of Light in many, many quests over the span of the main game and every expansion, making her a very popular character.
                This doesn't translate into a very good card, though: while the effect is powerful for blink decks, a 3/5 for 4UU mythic rare is horrendous, for a card that doesn't even represent a real win condition on her own.

                I'm putting <a href="https://gatherer.wizards.com/FIN/en-us/59/louisoixs-sacrifice" target="_blank" rel="noreferrer">Louisoix's Sacrifice</a> because, while not being a creature card, it's a reference to Louisoix Leveilleur, an elder mage that helps the party during the main events of the game, to the point of sacrificing himself to defeat Bahamut.
                It does seem like the Leveilleur family is pretty important in the story, but apparently this is the only card referencing them in the base set; the card itself seem to be kind of flexible, but I don't see it seeing much play at all.
            `)}
            <CustomImage
                alt="Illustration by Akihiko Yoshida for Heavensward"
                src={HeavenswardYoshida}
                align="right"
            >
                Illustration by Akihiko Yoshida for Heavensward
            </CustomImage>
            {splitText(`
                Among the bad guys we then have:
                <a href="https://gatherer.wizards.com/FIN/en-us/102/gaius-van-baelsar" target="_blank" rel="noreferrer">Gaius Van Baelsar</a>, with an aesthetic vaguely reminiscent of FFXII's judges, he starts off as a minor antagonist of the base game, but becomes a major antagonist later.
                This uncommon black card is... ok, but nothing to write home about: a 3/2 for 2BB is kind of bad, the "everyone sacs" effect could be useful on asymmetric boards, but I don't see it being constructed playable.

                He is also mentioned in the card <a href="https://gatherer.wizards.com/FIN/en-us/38/ultima" target="_blank" rel="noreferrer">Ultima</a>, your classic "5 CMC wrath variant with a spin" that sees niche play outside limited, while being very good in it.

                <a href="https://gatherer.wizards.com/FIN/en-us/127/zenos-yae-galvus" target="_blank" rel="noreferrer">Zenos yae Galvus</a>, being the crown prince of the Garlean Empire, is the one of the main antagonists, with a particular focus on the Stormblood expansion.
                This card represents his final form in that expansion, with the design heavily focusing on his antagonistic relationship with the Warrior of Light, and a flipped side reminiscent of his fused form with the Primal Shinryu.
                I can't say this is a strong card, but it's definitely a fun one - and I would first pick it in limited if I had the chance to.

                Time for the main antagonist: <a href="https://gatherer.wizards.com/FIN/en-us/218/emet-selch-unsundered" target="_blank" rel="noreferrer">Emet-Selch, Unsundered</a> (also depicted in the Through the Ages reprint of <a href="https://gatherer.wizards.com/FCA/en-us/36/krrik-son-of-yawgmoth" target="_blank" rel="noreferrer">Emet-Selch, Ascian</a>), is <b>the</b> Bad Guy all around, and discussing his character is <i>way</i> beyond the scope of this, especially considering that I don't plan to ever play FFXIV.`)}
            <CustomImage
                alt="Illustration by Akihiko Yoshida for Stormblood"
                src={StormbloodYoshida}
                align="right"
            >
                Illustration by Akihiko Yoshida for Stormblood
            </CustomImage>
            {splitText(`
                His namesake card is neat and Yawgmoth's Will effect are certainly powerful, to the point people started writing articles on how to abuse him as a commander https://edhrec.com/articles/emet-selch-unsundered-storm-deck-tech...

                <a href="https://gatherer.wizards.com/FIN/en-us/128/zodiark-umbral-god" target="_blank" rel="noreferrer">Zodiark, Umbral God</a>, is a Primal and, basically, the embodiment of darkness.
                This bomb rare is pretty much unplayable in constructed due to its very specific BBBBB cost, but it's a fun design nonetheless.

                Speaking of Primals, let's quickly discuss Summons:
                <a href="https://gatherer.wizards.com/FIN/en-us/37/summon-primal-garuda" target="_blank" rel="noreferrer">Summon: Primal Garuda</a> is a 3/3 flyer for 3W that can help turning around the momentum of the game with its chapters, but the fact it's got 3 turns to live is a pretty big drawback - like for all sagas.

                <a href="https://gatherer.wizards.com/FIN/en-us/121/summon-primal-odin" target="_blank" rel="noreferrer">Summon: Primal Odin</a> is a good, yet not stellar, rare: its stats of 5/3 for 4BB are not exceptional, but its chapters are good, especially if you have a way to make it connect during chapter 2 (I know, I know, that was an hot take).

                Moving quickly... FFXIV features <u>lots</u> of equipments, mainly for representing the jobs that define its MMORPG nature, like in the following examples:`)}
            <CustomImage
                alt="Concept art for jobs by Akihiko Yoshida"
                src={Classes}
                align="right"
            >
                Concept art for jobs by Akihiko Yoshida
            </CustomImage>
            {splitText(`
                <ul>
                    <li><a href="https://gatherer.wizards.com/FIN/en-us/46/astrologians-planisphere" target="_blank" rel="noreferrer">Astrologian's Planisphere</a> has become a legacy cube staple;</li>
                    <li><a href="https://gatherer.wizards.com/FIN/en-us/174/bards-bow" target="_blank" rel="noreferrer">Bard's Bow</a> is pretty mediocre ~ 6 is too much for equipping it;</li>
                    <li><a href="https://gatherer.wizards.com/FIN/en-us/95/dark-knights-greatsword" target="_blank" rel="noreferrer">Dark Knight's Greatsword</a> +3/+0 is ok, paying 3 life for equipping is a bit situational;</li>
                    <li><a href="https://gatherer.wizards.com/FIN/en-us/17/dragoons-lance" target="_blank" rel="noreferrer">Dragoon's Lance</a> cheap way to get an evasive creature, equipping for 4 is still kinda expensive;</li>
                    <li><a href="https://gatherer.wizards.com/FIN/en-us/23/machinists-arsenal" target="_blank" rel="noreferrer">Machinist's Arsenal</a> is good but expensive, there are tons of better rares around;</li>
                    <li><a href="https://gatherer.wizards.com/FIN/en-us/108/ninjas-blades" target="_blank" rel="noreferrer">Ninja's Blades</a> is a weird take on the classic ninjutsu / Dark Confidant abilities, but not bad in any way - I still don't see it strong enought for constructed play, though;</li>
                    <li><a href="https://gatherer.wizards.com/FIN/en-us/28/paladins-arms" target="_blank" rel="noreferrer">Paladin's Arms</a> Ward 1 is an interesting bit of lore, but that's pretty much it;</li>
                    <li><a href="https://gatherer.wizards.com/FIN/en-us/70/sages-nouliths" target="_blank" rel="noreferrer">Sage's Nouliths</a> weird effect, equipping for 3 is kind of ok;</li>
                    <li><a href="https://gatherer.wizards.com/FIN/en-us/154/samurais-katana" target="_blank" rel="noreferrer">Samurai's Katana</a> I SURE DO LOVE RED EQUIPMENTS THAT GRANT CREATURES HASTE, BUT EQUIP 5 IS BAAAAD (a 3/3 hasty trample for 3 is very good, though);</li>
                    <li><a href="https://gatherer.wizards.com/FIN/en-us/205/summoners-grimoire" target="_blank" rel="noreferrer">Summoner's Grimoire</a> - I'm sure some people will fall in the trap of trying to make this work; for example: myself.</li>
                </ul>

                <a href="https://gatherer.wizards.com/FIN/en-us/253/aettir-and-priwen" target="_blank" rel="noreferrer">Aettir and Priwen</a>, lacking the Job Select keywords, are instead advanced (I guess level 270 is advanced?) Paladin's equipment -a sword and a shield, respectively- that promise big stats in their MTG form, but are very expensive.

                <a href="https://gatherer.wizards.com/FIN/en-us/562/magitek-scythe" target="_blank" rel="noreferrer">Magitek Scythe</a> is another non-Job Select equipment - nothing to write home about, anyway.
            `)}
            <CustomImage
                alt="Illustration by Akihiko Yoshida for Shadowbringers"
                src={ShadowbringersYoshida}
                align="right"
            >
                Illustration by Akihiko Yoshida for Shadowbringers
            </CustomImage>
            {splitText(`
                For non-equippable Items, FFXIV features <a href="https://gatherer.wizards.com/FIN/en-us/256/elixir" target="_blank" rel="noreferrer">Elixir</a>, aka a worse version of <a href="https://gatherer.wizards.com/C21/en-us/243/elixir-of-immortality" target="_blank" rel="noreferrer">Elixir of Immortality</a>, and <a href="https://gatherer.wizards.com/FIN/en-us/41/white-auracite" target="_blank" rel="noreferrer">White Auracite</a> an <a href="https://gatherer.wizards.com/MM2/en-us/29/oblivion-ring" target="_blank" rel="noreferrer">Oblivion Ring</a> with a minor upside that you can at least play in limited.

                I don't have a better place to place <a href="https://gatherer.wizards.com/FIN/en-us/92/circle-of-power" target="_blank" rel="noreferrer">Circle of Power</a> in, so I'll put it here: this black uncommon that fuses a classic <a href="https://gatherer.wizards.com/M13/en-us/110/sign-in-blood" target="_blank" rel="noreferrer">Sign in Blood</a> effect with a Wizard Token generation is good, even if a little pricey for 3B, and it refers to the Ley Lines ability Black Mages can gain at level 52.

                The cards <a href="https://gatherer.wizards.com/FIN/en-us/11/cloudbound-moogle" target="_blank" rel="noreferrer">Cloudbound Moogle</a>, <a href="https://gatherer.wizards.com/FIN/en-us/15/delivery-moogle" target="_blank" rel="noreferrer">Delivery Moogle</a>, <a href="https://gatherer.wizards.com/FIN/en-us/57/il-mheg-pixie" target="_blank" rel="noreferrer">Il Mheg Pixie</a>, <a href="https://gatherer.wizards.com/FIN/en-us/192/loporrit-scout" target="_blank" rel="noreferrer">Loporrit Scout</a>, <a href="https://gatherer.wizards.com/FIN/en-us/107/namazu-trader" target="_blank" rel="noreferrer">Namazu Trader</a>, <a href="https://gatherer.wizards.com/FIN/en-us/69/rook-turret" target="_blank" rel="noreferrer">Rook Turret</a>, and <a href="https://gatherer.wizards.com/FIN/en-us/71/sahagin" target="_blank" rel="noreferrer">Sahagin</a> are all a bunch of filler cards based on some minor lore - nothing really worth mentioning, but we <i>need</i> to have them here anyway.

                A recurring superboss of the series, <a href="https://gatherer.wizards.com/FIN/en-us/236/omega-heartless-evolution" target="_blank" rel="noreferrer">Omega, Heartless Evolution</a> is an ancient robotic lifeform that managed to get its own questline in FFXIV.
                It's an 8/8 artifact creature for 5UG with some minor affinity for non-basic lands, I don't believe you can extract much collateral value from this card, but it's still a huge body for an uncommond card.
            `)}
            <CustomImage
                alt="Illustration by Akihiko Yoshida for Dawntrail"
                src={DawntrailYoshida}
                align="right"
            >
                Illustration by Akihiko Yoshida for Dawntrail
            </CustomImage>
            {splitText(`
                A quick detour on locations (pun intended):
                <a href="https://gatherer.wizards.com/FIN/en-us/283/faith-grief" target="_blank" rel="noreferrer">Ishgard, the Holy See</a> is the city-state where most of the Heavensward expansion takes place, a mountainous citadel full of dragoons at war with the dragons of the neighboring region of Dravania;
                <a href="https://gatherer.wizards.com/FIN/en-us/288/sharlayan-nation-of-scholars" target="_blank" rel="noreferrer">Sharlayan, Nation of Scholars</a> is, well... a nation of scholars, located in the Northern Empty. Home of the Leveilleur family, but also Y'shtola Rhul, Matoya and G'raha Tia, its colony in the Dravanian Hinterlands is important in the Heavensward expansion, while the main city (Old Sharlayan) is central to the story of Endwalker.

                As a one-off section that only FFXIV deserves, here's a short list of cards dedicated to representing the game's expansions:
                <ul>
                <li><a href="https://gatherer.wizards.com/FIN/en-us/196/a-realm-reborn" target="_blank" rel="noreferrer">A Realm Reborn</a>, aka FFXIV 2.0, seems a card with potential in decks based on token, but I feel it's pretty niche;</li>
                <li><a href="https://gatherer.wizards.com/FCA/en-us/51/dovins-veto" target="_blank" rel="noreferrer">Shadowbringers</a> is the third expansion of the game, and the Through the Ages version of a card I don't even consider worth of a reprint;</li>
                <li><a href="https://gatherer.wizards.com/FCA/en-us/28/brainstorm" target="_blank" rel="noreferrer">Endwalker</a>, on the other hand, is the reprint of a very iconic card (and represents the fourth expansion pack).</li>
                </ul>

                As a closing note, a handful of cards referencing some specific quests:
            `)}
            <CustomImage
                alt="Illustration by Yoshitaka Amano for Endwalker"
                src={EndwalkerAmano}
                align="right"
            >
                Illustration by Yoshitaka Amano for Endwalker
            </CustomImage>
            {splitText(`
                <a href="https://gatherer.wizards.com/FIN/en-us/101/the-final-days" target="_blank" rel="noreferrer">The Final Days</a> is a recurrent, cataclysmic event that threatens to destroy the whole world - the Warrior of Light will then save the world in the main quest The Final Day, in the Endwalker expansion.
                The card is pretty solid for a limited uncommon, but I don't see it being played in other formats.

                <a href="https://gatherer.wizards.com/FIN/en-us/73/sidequest-card-collection" target="_blank" rel="noreferrer">Sidequest: Card Collection</a> is here because, after its FFVIII success, FFXIV introduced its own version of Triple Triad.

                <a href="https://gatherer.wizards.com/FIN/en-us/94/dark-confidant" target="_blank" rel="noreferrer">Dark Confidant</a> represents an Ascian that meets the Warrior of Light during the Skeletons in Her Closet quest, but above all else it's a reprint of a pretty iconic card originally designed by the hall of famer <a href="https://en.wikipedia.org/wiki/Bob_Maher_Jr." target="_blank" rel="noreferrer">Bob Maher Jr.</a>.

                And then, as the last Through the Ages reprint for the set, we have <a href="https://gatherer.wizards.com/FCA/en-us/45/farseek" target="_blank" rel="noreferrer">Newfound Adventure</a> - a classic 1G ramp/fixing spell for your green commander decks, but also a shout-out to a post-game quest in Endwalker involving Tataru Taru sowing the player some new clothes.
            `)}

            <Bookmark id="FF14ThemeDeck">The pre-constructed deck</Bookmark>
            {splitText(`
                The last precon of the set has been reserved,rightfully so, for Final Fantasy XIV: <a href="https://magic.wizards.com/en/news/announcements/final-fantasy-commander-decklists#FFXIV" target="_blank" rel="noreferrer">decklist</a>.

                Named Scions & Spellcraft, this Esper (blue-white-black) monstrosity is just all over the place.
                            `)}
            <CustomImage
                alt="Illustration by Akihiko Yoshida for Endwalker"
                src={EndwalkerYoshida}
                align="right"
            >
                Illustration by Akihiko Yoshida for Endwalker
            </CustomImage>

            {splitText(`
                The default commander, <a href="https://gatherer.wizards.com/FIC/en-us/7/yshtola-nights-blessed" target="_blank" rel="noreferrer">Y'shtola, Night's Blessed</a>, is a card with some build-around potential that encourages you to play non-creature spells of CMC 3 or greater, but most of the deck's non-creature spells are artifacts, often cheap ones, and there are also four equipments (more on this later) which need some creatures to be worth the opportunity cost of playing them, even considering that all of them bear the Job Select keyword.

                The second-in-chief commander, <a href="https://gatherer.wizards.com/FIC/en-us/3/graha-tia-scion-reborn" target="_blank" rel="noreferrer">G'raha Tia, Scion Reborn</a> (note: while its "regular" version references his first, unassuming appearance as a Cat Archer, this Cat Wizard version is a nod to his later, post big-reveal persona) carries less potential, but is at least marginally more synergic with cheap non-creature spells.

                Both of them are at odds with 21 other creature cards contained in the deck, especially if you consider that we're also running three wrath effects. Oh well.

                The NPCs represented in the deck are:
                <ul>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/9/alisaie-leveilleur" target="_blank" rel="noreferrer">Alisaie Leveilleur</a> and <a href="https://gatherer.wizards.com/FIC/en-us/33/alphinaud-leveilleur" target="_blank" rel="noreferrer">Alphinaud Leveilleur</a> are the twin grandchildren of the aforementioned Louisoix; their partner mechanic is cute, but they're not that good.</li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/82/estinien-varlineau" target="_blank" rel="noreferrer">Estinien Varlineau</a> is a dragoon allied to the protagonist and bearer of one of the <i>Eyes of Nidhogg</i> (see later). A pretty forgettable card.</li>`)}
            <CustomImage
                alt="Lyse Hext by Yoshitaka Amano, from the Stormblood promo artbook"
                src={StormbloodAmano}
                align="right"
            >
                Lyse Hext by Yoshitaka Amano, from the Stormblood promo artbook
            </CustomImage>

            <p><li><a href="https://gatherer.wizards.com/FIC/en-us/86/krile-baldesion" target="_blank" rel="noreferrer">Krile Baldesion</a> is another Matoya's student, like Y'shtola, and represents an obvious nod to the last FF5 character to join the party (her grandfather is called Galuf here as well); she becomes a recurrent ally of the Warrior of Light from Heavensward onwards. Her card is just weird, and you'd need to be play it in a UWx deck featuring both low-curve creatures and cheap spells to milk any value out of it ~ a scenario I don't think will come up often, honestly.</li></p>
            <p><li><a href="https://gatherer.wizards.com/FIC/en-us/88/lyse-hext" target="_blank" rel="noreferrer">Lyse Hext</a> on the other hand appears to be a commander with potential, with its only downfall being the fact that other commanders<InlineSpoiler mask="*">i.e.: <a href="https://gatherer.wizards.com/KTK/en-us/190/narset-enlightened-master" target="_blank" rel="noreferrer">Narset, Enlightened Master</a>, <a href="https://gatherer.wizards.com/FRF/en-us/52/shu-yun-the-silent-tempest" target="_blank" rel="noreferrer">Shu Yun, the Silent Tempest</a></InlineSpoiler> already exist and have more tools at their disposal. As an NPC, she's a central character in many storylines due to her affiliation with the Circle of Knowing and the Scions of the Seventh Dawn later - even though she's just impersonating her dead sister Yda.<br/>She's also the narrator of the Stormblood expansion's events.</li></p>
            {splitText(`<li><a href="https://gatherer.wizards.com/FIC/en-us/90/papalymo-totolymo" target="_blank" rel="noreferrer">Papalymo Totolymo</a> is a Lalafell Thaumaturge that shares most of his storyline with Yda and then Lyse Hext, being a close companion of the former and helping the latter to disguise herself as her own sister later. He sacrifices himself at the end of Heavensward. I won't spend much time discussing the card, as I find it not really strong or interesting.</li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/31/thancred-waters" target="_blank" rel="noreferrer">Thancred Waters</a>, yet another Scion of the Seventh Dawn, acts as an ally to the Warrior of Light except in A Realm Reborn, when he gets possessed by the Ascian Lahabrea and turns <i>heel</i> for a while. I sure love disseminating this wall of text with spoilers while not having played the game at all. His card is pretty bad, even if I have to admit that its design exudes some 80s action hero vibes, but a 3/5 for 5CMC is <b>BAD</b>.</li>`)}
            <CustomImage
                alt="The Endsinger, portrayed by Yoshitaka Amano"
                src={EndsingerAmano}
                align="right"
            >
                The Endsinger, portrayed by Yoshitaka Amano
            </CustomImage>
            {splitText(`<li><a href="https://gatherer.wizards.com/FIC/en-us/96/urianger-augurelt" target="_blank" rel="noreferrer">Urianger Augurelt</a>, the last member of the Scions of the Seventh Dawn deemed worthy of a card of his own, and while it's base abilities are interesting albeit <b>very</b> slow, some people are building UW control shells with combo finish based around them. I refuse to engage in such shithousery. As a character, he is an astrologian and a cryptic bearer of prophecies - a trait that explains the abilities his card beaars.</li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/30/tataru-taru" target="_blank" rel="noreferrer">Tataru Taru</a> is a banger in competitive Commander: it cycles itself for a small downside, it functionally costs just 1 mana, and will give you some serious mana advantage if somebody at the table played <a href="https://gatherer.wizards.com/IA/en-us/0/mystic-remora" target="_blank" rel="noreferrer">Mystic Remora</a> or <a href="https://gatherer.wizards.com/PR/en-us/45/rhystic-study" target="_blank" rel="noreferrer">Rhystic Study</a>. In-game, she's a young Lalafell that works as a receptionist (and coinmaster) for the Scions of the Seventh Dawn, and while lacking combat abilities, she's a very beloved, supporting character.</li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/83/hildibrand-manderville" target="_blank" rel="noreferrer">Hildibrand Manderville</a> is probably my favorite FFXIV card - while not particularly strong (but still seeing some play in the MTGO Legacy Cube format), it's a great design choice for designing his personal lore. In game, he is basically a cartoonishly bad, self-proclaimed "agent of enquiry, inspector extraordinaire" that acted as a comic relief character during the 1.0 version of the game that came back thanks to its popularity among the fanbase.</li>`)}
            <CustomImage
                alt="Illustration by Yoshitaka Amano for Heavensward"
                src={HeavenswardAmano}
                align="right"
            >
                Illustration by Yoshitaka Amano for Heavensward (picturing a Dragoon)
            </CustomImage>
            {splitText(`<li><a href="https://gatherer.wizards.com/FIC/en-us/37/hraesvelgr-of-the-first-brood" target="_blank" rel="noreferrer">Hraesvelgr of the First Brood</a> is an Elder Dragon, brother of Nidhogg, that despite being the boss of the Sohr Khai dungeon is basically a friendly NPC that helps the Warrior of Light defeat his brother during the Heavensward expansion. The card is ok on its own (5/5 flying-vigilance-ward 2 for 4U is a good deal, with the extra ability being a nice bonus) but it's not worth the Commander slot and, except for maybe dedicated dragon tribal decks, you can find better alternatives in the 99 as well.</li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/36/hermes-overseer-of-elpis" target="_blank" rel="noreferrer">Hermes, Overseer of Elpis</a> is an Ancient that, as the chief Overseer of the Elpis research facility, created many forms of life, specializing in avian life forms. While not a baddie <i>per sé</i>, he accidentally creates Meteion - the final boss of Endwalker. This powerful entity is celebrated in a card that is just a glorified <a href="https://gatherer.wizards.com/GRN/en-us/45/murmuring-mystic" target="_blank" rel="noreferrer">Murmuring Mystic</a>.</li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/77/ardbert-warrior-of-darkness" target="_blank" rel="noreferrer">Ardbert, Warrior of Darkness</a>, or simply "the Warrior of Darkness", is a former Warrior of Light from The First that, after the calamity known as The Flood of Light, ends up roaming the world as a spirit until ultimely merging his sould with the Warrior of Light to defeat Emet-Selch. Apparently, people consider this card to be a good commander for go-wide Orzhov aggro strategies.</li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/81/emet-selch-of-the-third-seat" target="_blank" rel="noreferrer">Emet-Selch of the Third Seat</a> - we already talked about him, this is just the worst of the cards representing this character.</li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/46/fandaniel-telophoroi-ascian" target="_blank" rel="noreferrer">Fandaniel, Telophoroi Ascian</a> is a fun card, but you should always remember that cards that let opponents choose are inherently worse than what you expect on paper. In game, he is a 5000 years old entity born by the name of Amon that plays the role of ally of Zenos and, more in general, of a recurrent antagonist.</li>
                </ul>`)}
            <CustomImage
                alt="Illustration by Yoshitaka Amano for Evercold"
                src={EvercoldAmano}
                align="right"
            >
                Illustration by Yoshitaka Amano for Evercold (picturing a Reaper)
            </CustomImage>
            {splitText(`

                As mentioned above, the deck is running four job-selecting equipments which, beside an Astrologian's Planisphere (already discussed in the previous sections), are:
                <ul>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/35/blue-mages-cane" target="_blank" rel="noreferrer">Blue Mage's Cane</a></li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/17/dancers-chakrams" target="_blank" rel="noreferrer">Dancer's Chakrams</a></li>
                <li><a href="https://gatherer.wizards.com/FIC/en-us/48/reapers-scythe" target="_blank" rel="noreferrer">Reaper's Scythe</a></li>
                </ul>
                (and they're all kind of bad)

                <a href="https://gatherer.wizards.com/FIC/en-us/44/eye-of-nidhogg" target="_blank" rel="noreferrer">Eye of Nidhogg</a> is not really an equipment, but it's pretty adjacent as a concept.
                The two eyes of the titular, blind dragon are a relic kept by humans, as they contain the power of the dragon itself.
                From a lore perspective, it's a card I like - I just won't try to sell it as good, I never liked <a href="https://gatherer.wizards.com/M13/en-us/185/rancor" target="_blank" rel="noreferrer">Rancor</a> variants to begin with.

                The only summon in the deck is <a href="https://gatherer.wizards.com/FIC/en-us/26/summon-good-king-mog-xii" target="_blank" rel="noreferrer">Summon: Good King Mog XII</a>, the primal that acts as the king of all moogles of FFXIV's universe.
                Not the best token generator you'll ever play, but a cute one at least.

                Speaking of tokens, <a href="https://gatherer.wizards.com/FIC/en-us/11/champions-from-beyond" target="_blank" rel="noreferrer">Champions from Beyond</a> is both a good generator (the X cost lets it scale) and a payoff card - even if the Full Party mode sounds a little difficult to trigger in actual gameplay.

                <a href="https://gatherer.wizards.com/FIC/en-us/40/observed-stasis" target="_blank" rel="noreferrer">Observed Stasis</a> and <a href="https://gatherer.wizards.com/FIC/en-us/52/transpose" target="_blank" rel="noreferrer">Transpose</a> are just a couple of extra spells with some minor thematic coherence to the set, but that's that I believe.

                Phew!
            `)}
        </>
    )
}

export default FF14;

