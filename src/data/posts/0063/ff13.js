import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from '../../../components/posts/inlineSpoiler';
import CustomImage from "../../../components/posts/customImage";
import YouTubeVideo from '../../../components/posts/youtubeVideo';
import { Link } from 'react-router-dom';

import CoverArt from '../../../images/post-0063/ffxiii/logo.png';
import Lightning from '../../../images/post-0063/ffxiii/lightning.png';
import Sazh from '../../../images/post-0063/ffxiii/sazh.png';
import Snow from '../../../images/post-0063/ffxiii/snow.png';
import Hope from '../../../images/post-0063/ffxiii/hope.png';
import Vanille from '../../../images/post-0063/ffxiii/vanille.png';
import Fang from '../../../images/post-0063/ffxiii/fang.png';

import Alexander from '../../../images/post-0063/ffxiii/alexander.jpg';
import Crystarium from '../../../images/post-0063/ffxiii/crystarium.jpg';
import Navigation from '../../../images/post-0063/ffxiii/navigation.jpg';
import PShift from '../../../images/post-0063/ffxiii/pshift.jpg';
import Summon from '../../../images/post-0063/ffxiii/summon.jpg';

function FF13() {
    return (
        <>
            <Bookmark id="FF13Nutshell">A bit of context</Bookmark>
            <CustomImage
                alt="Cover art for Final Fantasy XIII"
                src={CoverArt}
            />
            {splitText(`
                <i>Before tackling the main topic, I need to get this out of my system: when the series started, JRPGs represented an almost non-existent genre, hardware limitations were strict and games where developed using bare-bones development kits.

                <i>Over the years, while the various chapters of the series were released, JRPGs became more codified, consoles grew more powerful, teams got bigger, and a single games' scope became <b>huge</b>.<i>

                <i>Add to the mix Square-Enix's new policies about creating extended universes and we end up with each new entry in the series become the Hollywood equivalent of what we were accustomed to see in the first ~10 titles: development costs skyrocketed, teams are suddenly <i>huge</i>, and the time requirements are just through the roof. <b>You know where I'm going with this</b>.</i>

                <hr>

                Originally planned in 2004 as a PlayStation 2 title, Final Fantasy XIII is the first and only mainline title for the PlayStation 3.
            `)}
            <p>While having a self-contained plot, it represents the first chapter of the Lightning Saga, a trilogy also featuring Final Fantasy XIII-2 and Lightning Returns: Final Fantasy XIII, which in turn is part of the Fabula Nova Crystallis extended universe<InlineSpoiler mask="*">...which also includes Final Fantasy Type-0, Final Fantasy Agito, Final Fantasy Awakening and <i>Final Fantasy XV</i> - <i>more on that <u>later</u></i></InlineSpoiler>: the first fully original one of the Yoichi Wada era, after the extensions of FF7's and FF Tactics's settings.</p>
            <br/>
            <YouTubeVideo videoId="xI9mCrG-M1g" align="left" caption="Say what you want, but the hype was real"/>
            {splitText(`
                As you can expect from this premise, this is an ambitious title that wanted to transition the series into a new era, leaving the tepid reception of Final Fantasy XII behind and start over with fresh ideas.

                Produced by Yoshinori Kitase and featuring a development team of over 200 people (and rounding up to a ~70 million USD budget), the game was plagued by numerous issues: coordinating such a large workforce was a challenge on its own, and transitioning from PS2 to PS3 basically meant starting over from scratch both in terms of engine and assets.

                The final result is a game that achieved some of its objectives, like implementing a more frenetic battle system while stepping back to the turn based roots of the series or delivering a more futuristic and aesthetically "cool" setting, while having to compromise on a plethora of other aspects that, in the end, undermined the overall reception of the game: the limited amount of exploration and the lack of side content or <i>human settlements</i> are justified by the need of deliver the product on a reasonable timeframe, but contributed to the perception of the game as an <i>empty corridor</i>, even though it wasn't that different from the at the time kind-of-recent example of FFX that is still one of the most beloved entries in the series.

                After a 5-year development cycle, the game hits the shelves on December 17th, 2009 in Japan as a PlayStation 3 exclusive, and on March 9th, 2010 for players abroad, also featuring an Xbox 360 version.
            `)}

            <Bookmark id="FF13Mechanics">The mechanics</Bookmark>
            <CustomImage
                alt="Sazh looking ahead, concerned"
                src={Navigation}
                align="right"
                maxHeight="350px"
            >
                The gfx are stunning - also, note the detail of the visible encounters
            </CustomImage>
            {splitText(`
                First and foremost, the central characteristic that makes the game stand out is its peculiar battle system, that moves away from the MMORPG-like combat of FFXII to a semiautomatic ATB system.

                The peculiarity of the system is that, while being a turn-based system, the designers made it frenetic by having the characters act on their own based on their class, giving the player limited ability to control the single actions of the party.

                What the player <b>can</b> do is to change the party configuration in pseudo real-time, having the party switch between up to six different class combinations (Paradigms) that are pre-determined by the player, performing a <i>Paradigm Shift</i>.
            `)}
            <CustomImage
                alt="Fang, striking a pose"
                src={PShift}
                align="left"
                maxHeight="350px"
            >
                Not <Link to="https://www.youtube.com/watch?v=8tnAlPBWr0Q">THAT</Link> Paradigm Shift!
            </CustomImage>
            {splitText(`
                Not all characters are designed equal, though: despite everyone being able to interpret every class, you'll find that some of them are better suited for specific roles - Lightning is your standard well-rounded main character, but she's still not good at being a tank (Sentinel) or a healer (Medic), while Snow is an excellent Sentinel, Hope and Vanille are very magic-oriented, and so on.

                By leveling up, everyone can invest points in the Crystarium system, a pretty linear version of FFX's sphere grid where everyone has their own skill tree that gives the player just a limited choice on which classes to focus on, and which sub-branches to unlock first; you cannot even overfocus on a single class, as the system features hard barrier that unlocks only after major plot points.
            `)}
            <CustomImage
                alt="The Crystarium system"
                src={Crystarium}
                align="right"
                maxHeight="350px"
            >
                You don't question this UI, though
            </CustomImage>
            {splitText(`
                All in all, the progression system is a visually appealing, yet not so deep mechanic, that works well on a fun combat system.

                Now, the bad aspects: the main criticism of the game is that it is way too linear, and while it's not <i>that</i> different from the likes of FFX, it feels way emptier: FFXIII doesn't feature many towns, and even vendors feel like glorified vending machines rather than actual characters.

                While this is all justified by the need to deliver the game on time, the end result feels off, and the fact that the chapter system prevents you from backtracking makes the railtracks feel even more pronounced.
            `)}

            <Bookmark id="FF13Game">The game</Bookmark>
            {splitText(`
                Following the same philosophy of the battle system, FFXIII is designed in stark contrast with its predecessor: the setting is futuristic and the storyline is completely character-driven, with no extra actors working behind the scenes.

                The very beginning of the plot is exactly the opposite of what FFXII did: the player is thrown into the action without any explanation of what's going on, all while being bombarded with obscure terms like "fal'Cie", "l'Cie", "Focus" and "Pulse" that will make sense only later.
            `)}
            <CustomImage
                alt="Hope summoning Alexander"
                src={Summon}
                align="left"
                maxHeight="350px"
            />
            {splitText(`
                To explain the setting in a couple of sentences: the game is set on the planet called Gran Pulse (Pulse for short), and starts inside the hollow dwarf planet called Cocoon that floats in its atmosphere.

                Cocoon was created by a fal'Cie, a local godlike being, and its inhabitants are still fearful of the external world as, six centuries before the events of the game, an assault from Pulse's forces threatened to destroy it.

                The game starts with the whole population of Bodhum being forcefully displaced (<u>Purge</u>d) out of Cocoon by the local government (the Sanctum) due to them being exposed to an ancient relic of Pulse's origin -the Vestige- harboring a Pulsian fal'Cie, but this is something that the player will experience later, during some flashbacks.

                I considered writing some extensive recap of the plot, but decided against it: the story manages to both be quite simplistic for the series while also being a bit convoluted, but the main reason I decided to not get into much detail is that the central theme of the game is rooted in the interactions between the characters, so the main points will be covered in the next section anyway.

                Note: my main concern with the plot is that, probably due to the amount of cut content, players are being <i>told</i> a lot of things you should have them <i>experience</i> instead, like "how was life in Bodhum before the Purge" or "why is Serah so beloved".
                `)}

            <Bookmark id="FF13Cast">The cast</Bookmark>
            <CustomImage
                alt="Lightning"
                src={Lightning}
                align="left"
                maxHeight="350px"
            />
            {splitText(`
                <b>Lightning</b> (Claire Farron) is either the reason you like this game, or the most problematic lead in the history of the series.
                
                This gunblade-wielding ex-<s>SOLDIER</s><i>PSICOM</i> from Bodhum acts as the protagonist of the game, and is widely celebrated for her <i>coolness</i> and her <i>badassery</i>, but also criticized for being a cold and unrelatable character.

                She was clearly designed to take elements from the likes of Cloud and Squall, but in my opinion lacks the depth of both, showing basically no growth over the course of a full trilogy - except in power level, where she goes from being "just" inhumanly strong to single-handedly keeping divine beings from destroying the world.

                But I'm getting ahead of myself: her role in the game is to both get the plot going (she's the one starting a riot during the Purge) and act as the glue that keeps the party together; my main problem with her is that she doesn't show any kind of leadership quality, people just stick to her for her strength and her ability to get the job done and DESPITE her obvious relational shortcomings: over the course of the game, she physically or mentally abuses every other member of the cast, but everything gets brushed off as she's <i>too cool</i> to be held accountable for such trivialities.

                Oddly enough, her motivation for fighting is to save her sister Serah that, in strong contrast with her, is a very relatable and empathetic character that makes FFXIII-2 much more enjoyable experience from my point of view.
                
                Too bad that Serah gets captured during the pre-game events for her fal'Cie status and gets turned into a crystal very soon during the plot.

                Just for the record: if you have the patience to go through the whole trilogy, she <i>does</i> get some in-depth characterization, but we're focusing on the first episode here.
            `)}
            <CustomImage
                alt="Sazh"
                src={Sazh}
                align="right"
                maxHeight="350px"
            />
            {splitText(`
                <b>Sazh</b> is the other starting character in the opening sequence, and acts as a counterpoint to Lightning's <i>coolness</i> - or, should we say, adds some dynamics in a plot that could otherwise be summarized as "pink-haired commando kicks asses". I'm not kidding if I say that his early interactions with her remind me more of some 80s action movies (i.e. Commando, Lethal Weapon) than the early section of, let's say, Final Fantasy VII with Cloud and Barret.

                Despite being written as a comic relief character (he has a chocobo chick that he carries around in his hair, for crying out loud), he is one of the most relatable ones, though your mileage may vary on this.

                He is a 40 year old pilot that one would <i>wrongly</i> expect to be the most mature of the group, and the motivation that keeps him going is his desire to help his child Dajh, that has become l'Cie during the pre-game and was taken hostage by the government.

                After Lightning decides to fight the Sanctum, he chooses to leave the group and leaves with Vanilla, in a bonding moment that then gets turned into tragedy when Jihl Nabaat, Commander of Sanctum, uses Dajh to hunt them down and, after the kid turns into a crystal, reveals that the whole plot has been turned into motion by none other than Vanille herself, with her being responsible of his son's fate.

                This purely sadistic revelation is followed by what is probably the most intense scene in the game, that ends with Sazh <i>almost</i> shooting himself.

                After this, he realizes that by fulfilling his own Focus he can hope to reunite with his son in the future, and then his growth <u>stops</u>.

                He will keep being a likable character with some funny moments, that's that - and even his later appearances in the series are basically just cameos.

                At least he managed to get reunited with his son in the end...
            `)}
            <CustomImage
                alt="Snow"
                src={Snow}
                align="left"
                maxHeight="350px"
            />
            {splitText(`
                <b>Snow</b> is another problematic one.

                Being fiancée of Serah, he comes out of the gate as a character that's already on <i>bad</i> terms with Lightning (or, at least, let's say she's not very fond of him), and one does really end up asking what could such a likable young gal see in a guy that, while well-meaning, seems to be thick as a brick.
            `)}

                <p>He is the leader of a group called NORA<InlineSpoiler mask="*">a ridicolous acronym chosen by the devs to justify some extra misunderstandings with Hope...</InlineSpoiler> that starts off as a neighborhood vigilante group but, during the events of the Purge and the subsequent rebellion, acts as some sort of improvised rebel militia.</p>
            {splitText(`

                During this initial phase we can gauge his personality as well-intentioned but reckless, and this causes Nora -Hope's mother- to sacrifice herself to save his life, causing <i>some attrition</i> with the kid.

                Such attrition is then further exacerbated by the fact that, despite her death burdening him, he puts up a façade of being cheerful and optimistic nonetheless, further angering Hope.

                He <i>evenually</i> manages to earn his forgiveness, but not before witnessing Serah turning into a crystal and deciding, once again, to go full white knight and refusing to abandon her, causing the group to split up.

                I'm not kidding when I say he's one of my least favorite characters <u>in the series</u>.

                Trivia: apparently, Tetsuya Nomura used a scrapped Kingdom Hearts character as a base for Snow's design - not that this matters much, but HEY IT'S TRIVIA.
            `)}
            <CustomImage
                alt="Hope"
                src={Hope}
                align="right"
                maxHeight="350px"
            />
            {splitText(`
                <b>Hope</b> falls in a weird spot: he's a preteenager and acts like one - a thing that causes some RIGHTFUL concern in adult audiences - but at the same time he's a boy who loses his mother during the intro and has no time to adjust to his loss.

                He would probably deserve some empathy, if only somebody in the cast cared about him.

                We end up with him being wanting revenge on Snow while knowing he can't face him, and with this primal, almost childish motivation that drives his actions.

                Most of said actions, sadly, revolve around trying to pity Lightning into training him and making him strong enough to kill Snow, something that a less detached adult character would try to defuse, but as we already said earlier this whole game is based around these deeply flawed characters being unable to process their traumas.

                In the end, after a terrible showdown between him and Snow, he manages to move on and become a little more relatable, but that's pretty much it <i>for this game</i>.

                To add insult to injury, he is the only character that doesn't get a good ending in this game, as his dead mother just <i>stays dead</i>.

                He becomes a lot more likable as a grown-up in FFXIII-2, I swear.
            `)}
            <CustomImage
                alt="Vanille"
                src={Vanille}
                align="left"
                maxHeight="350px"
            />
            {splitText(`
                <b>Vanille</b> is our resident representation of the "Genki Girl" trope - until she's not.
            `)}
            <p>Originally designed to be the main character<InlineSpoiler mask="*">she acts as the narrator for this very reason</InlineSpoiler>, she loses her status to Lightning because <i>the story would become too dark</i> and, given how the game turned out, I struggle to think about how heavy the plot was intended to be before the writers started pumping the brakes on it.</p>
            {splitText(`

                Being an Oerba native, she's the first character we meet in the game that comes from Pulse rather than Cocoon and, despite her cheerful and apparently shallow personality, bears the burden of being the root cause of everybody's suffering.

                She, along with Fang, was born some six centuries before the events of the game and, during the war between Cocoon and Pulse known as War of Transgression, were turned into l'Cie; after their linked Focus fail, causing only mild damage to Cocoon's outer shell, they both get turned to crystal and wake up in Bodhum at the beginning of the events of the game, kicking the plot into motion.

                Vanille is, for the most part, the very center of the plot: she's the one that, by waking up from her slumber, "infects" Bodhum, causes Serah and Dajh to become l'Cie, and knows for a fact that becoming a crystal is not a permanent state - she just can't face telling the others anything about it, and her initial choice of keeping her silence digs her into a progressively deeper hole.

                Also, in contrast to the late joiner Fang, she knows that her Focus is to become Ragnarok and destroy Cocoon and its inhabitants.

                Her struggle, and her eventual disclosure of the truth, is the main source of tension in the plot and the biggest growth arc the player witness over the course of the game; as I said earlier, there's a stark contrast between her apparently shallow personality and the burden she has to carry, and while the first part of the game is a shitshow of characters fighting each other without having a common goal, in the end the group manages to come together around her and find their way.

                If you can't tell, I believe her to be the best written character in the game, and the real glue that holds the whole game together.
            `)}
            <CustomImage
                alt="Fang"
                src={Fang}
                align="right"
                maxHeight="350px"
            />
            {splitText(`
                <b>Fang</b> is the other Pulse native to join the party.

                Back in their day, she and Vanille became l'Cie with a shared Focus that involved destroying Cocoon.
                
                Given how Vanille was too good-natured to fulfill it, though, she tried to become Ragnarok on her own and destroy Cocoon, but ended up being too weak and just scarring it.

                She is a divisive character for different reasons: on one hand, she strong, determined and cool, and the way she's completely ok with mass murder as long as it's for Vanille's safety can be seen as <i>romantic</i> in a way, but on the other she's a flat character with no room for growth (she's already overcome any kind of internal struggle), limited game time (she joins the party during Chapter 7), and the fact she wakes up from her slumber with a faulty memory is not what I would call good writing.

                In short: she suffers from the Amarant syndrome, where a character is joins the story too late and ends up not fitting the mold - even though this time she at least has some existing relationship with Vanille.

                Trivia: she was originally designed to be a male character, which I guess means that her love story with Vanille needed some rework to be more implicit, while still appearing pretty evident.
            `)}

            <Bookmark id="FF13Cards">The cards</Bookmark>
            {splitText(`
                We just <b>have</b> to start with the main character: <a href="https://gatherer.wizards.com/FIN/en-us/233/lightning-army-of-one" target="_blank" rel="noreferrer">Lightning, Army of One</a> is a very strong card in limited (there's a reason why it's a mythic rare), but didn't seem to break the mold for constructed play - I love her Stagger ability, as it translates very well the game's mechanics.
                The card does see some play in Commander though, even though she doesn't appear to be a widely popular inclusion.

                Then we have <a href="https://gatherer.wizards.com/FIN/en-us/560/lightning-security-sergeant" target="_blank" rel="noreferrer">Lightning, Security Sergeant</a>, a great red rare <i>for limited play</i>, and we <i>also</i> have <a href="https://gatherer.wizards.com/FCA/en-us/54/isshin-two-heavens-as-one" target="_blank" rel="noreferrer">Lightning, Lone Commando</a>, a Through the Ages reprint of a very recent card that, I <i>assume</i>, must be a popular Mardu (red-white-black) commander.
                Either that, or people started playing Tiny Leaders again while I wasn't looking.

                <a href="https://gatherer.wizards.com/FIN/en-us/199/sazh-katzroy" target="_blank" rel="noreferrer">Sazh Katzroy</a> and his pet <a href="https://gatherer.wizards.com/FIN/en-us/200/sazhs-chocobo" target="_blank" rel="noreferrer">Sazh's Chocobo</a> are fast inclusions in my Bird Tribe EDH deck, but I don't see them seeing much play outside of that niche - they're good in limited, though.

                <a href="https://gatherer.wizards.com/FIN/en-us/33/snow-villiers" target="_blank" rel="noreferrer">Snow Villiers</a> is an unexciting white uncommon for an unexciting character, let's just move on.
            `)}
            <CustomImage
                alt="Hope with Alexander"
                src={Alexander}
                align="right"
                maxHeight="350px"
            />
            {splitText(`
                <a href="https://gatherer.wizards.com/FIN/en-us/226/hope-estheim" target="_blank" rel="noreferrer">Hope Estheim</a> gets an Azorius (white-blue) rare card that mixes the lifegain and the mill subthemes - I've yet to see someone build around it profitably, but it's an interesting design, even though both mechanics are kind of niche.

                We then end the player characters roster with <a href="https://gatherer.wizards.com/FIN/en-us/211/vanille-cheerful-lcie" target="_blank" rel="noreferrer">Vanille, Cheerful l'Cie</a> and <a href="https://gatherer.wizards.com/FIN/en-us/99/fang-fearless-lcie" target="_blank" rel="noreferrer">Fang, Fearless l'Cie</a>, two not-so great uncommons that can meld into an actually strong creature - you just have to play green and black in your deck, and find them both, and pay a good amount of mana.
                That's a lot of hoops to jump in limited, and the final result is not worth the investment in constructed - maybe giving them the Partner mechanic would have made them more appealing, but I believe they would be underwhelming anyway.

                We then have <a href="https://gatherer.wizards.com/FIN/en-us/240/serah-farron" target="_blank" rel="noreferrer">Serah Farron</a>, Lightning's sister and Snow's fiancée, that spends most of the game as a <i>petrified</i> damsel in distress.
                She then becomes the protagonist of FFXIII-2, but that's out of our scope - I'll just say that her card design is solid, but I don't personally consider the card strong by any means.

                This iteration of <a href="https://gatherer.wizards.com/FIN/en-us/418/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timeless Artificer</a>, like the one in the previous game, is a bad guy.
                I found him very uninteresting in the game, though.
                He comes back in Lightning Returns, but it doesn't get better, to be honest.

                This game's final boss, <a href="https://gatherer.wizards.com/FCA/en-us/57/muldrotha-the-gravetide" target="_blank" rel="noreferrer">Orphan, Cocoon fal'Cie</a>, is a Through the Ages reprint of a very grindy Sultai (black-green-blue) commander.
                Feel free to try it out, it appears to see some play both from the command zone or in the 99.

                The local summon, <a href="https://gatherer.wizards.com/FIN/en-us/160/summon-brynhildr" target="_blank" rel="noreferrer">Summon: Brynhildr</a>, aka Sazh's Eidolon, is an <i>almost</i> good red rare - my vote would have been higher if only hey made it transform into a vehicle, but we'll have to live with this missed chance.
            `)}

                <p><a href="https://gatherer.wizards.com/FIN/en-us/165/thunder-magic" target="_blank" rel="noreferrer">Thunder Magic</a> is this set's modal spell for the thunder element - I wonder if they associated it with FFXIII because the main character's name is <i>Lightning</i><InlineSpoiler mask="*">before anyone says that her actual name is Claire: Lightning is not just a nickname, but a new identity she picked up to leave her past life behind</InlineSpoiler>, but in that case it's a joke I glagly accept.</p>
                <br/>
                <YouTubeVideo videoId="JNkI08t4rqM" align="right" caption="Promise - the main theme of FFXIII"/>
            {splitText(`
                The <a href="https://gatherer.wizards.com/FIN/en-us/61/magic-damper" target="_blank" rel="noreferrer">Magic Damper</a> card, while being an acceptable combat trick / way to protect a creature that could see some play in decks that need specific creatures to stay alive, refers to a <i>very niche</i> Synthesis ability available only to Snow and Fang where said characters become immune to magic if equipped with specific weapons (Feymark/Soulblazer for the former, Shamanic Spear/Heretic's Halberd for the latter) and a full set of Magical Crests.

                The only location for this game is <a href="https://gatherer.wizards.com/FIN/en-us/277/eden-seat-of-the-sanctum" target="_blank" rel="noreferrer">Eden, Seat of the Sanctum</a>, the capital city of Cocoon, named after the local ruling fal'Cie. The card itself is nothing worth mentioning, let's move on.

                <a href="https://gatherer.wizards.com/FIN/en-us/117/shambling-cieth" target="_blank" rel="noreferrer">Shambling Cie'th</a> depicts what happens to any l'Cie that fails to complete its assigned Focus (let's call it "contract"): they lose their humanity and become mindless monsters.

                The <a href="https://gatherer.wizards.com/FIN/en-us/189/gran-pulse-ochu" target="_blank" rel="noreferrer">Gran Pulse Ochu</a> is the boss of the last non-postgame Cie'th Stone Mission, and also the most celebrated appearance of the recurring Ochu enemy type in the series - the card's base form (a common 1/1 deathtouch creature) represents its Microchu variant, I dare say.

                The Through the Ages reprint <a href="https://gatherer.wizards.com/FCA/en-us/44/carpet-of-flowers" target="_blank" rel="noreferrer">Fal'Cie Paradise</a>, while representing what is basically the end of the game, is a reprint of a classic card that still sees competitive play as a sideboard option in eternal formats.

                The last card we'll mention for this game is another Through the Ages reprint: <a href="https://gatherer.wizards.com/FCA/en-us/40/lightning-bolt" target="_blank" rel="noreferrer">Thrum of the Vestige</a>.
                The original card is iconic <i>to say the least</i>, while the Vestige we're talking about is, in short, the relic of "alien" (to Cocoon) origin that kicks the events in motion, being the vessel in which Vanille, Fang and the fal'Cie Anima reside that gets smuggled into Bodhum.
            `)}
        </>
    )
}

export default FF13;