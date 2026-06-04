import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from '../../../components/posts/inlineSpoiler';
import CustomImage from "../../../components/posts/customImage";
import YouTubeVideo from '../../../components/posts/youtubeVideo';

import CoverArt from '../../../images/post-0063/ffxii/logo.webp';
import Vaan from '../../../images/post-0063/ffxii/ff12-vaan.jpg';
import Penelo from '../../../images/post-0063/ffxii/ff12-penelo.jpg';
import Balthier from '../../../images/post-0063/ffxii/ff12-balthier.jpg';
import Fran from '../../../images/post-0063/ffxii/ff12-fran.jpg';
import Basch from '../../../images/post-0063/ffxii/ff12-basch.jpg';
import Ashe from '../../../images/post-0063/ffxii/ff12-ashe.jpg';
import Larsa from '../../../images/post-0063/ffxii/ff12-larsa.jpg';
import Vayne from '../../../images/post-0063/ffxii/ff12-vayne.jpg';

import Battle from '../../../images/post-0063/ffxii/battle.jpg';
import Cast from '../../../images/post-0063/ffxii/cast.webp';
import FF12International from '../../../images/post-0063/ffxii/ff12-international-1.jpg';
import Leave from '../../../images/post-0063/ffxii/leave.jpg';

import BalthierFran from '../../../images/post-0063/ffxii/balthier-fran.jpg';
import Gabranth from '../../../images/post-0063/ffxii/gabranth.jpg';
import Reks from '../../../images/post-0063/ffxii/reks.jpg';

function FF12() {
    return (
        <>
            <Bookmark id="FF12Nutshell">A bit of context</Bookmark>
            <CustomImage
                alt="Cover art for Final Fantasy XII"
                src={CoverArt}
                align="right"
                style={{ backgroundColor: "white", padding: "0 0 0 12%" }}
            />
            {splitText(`
                With Final Fantasy X being the last game of the "golden era" of the franchise, and the eleventh mainline entry being a total departure from the classic formula, Final Fantasy XII stands in a weird spot in the series' history.

                Following the failure of Final Fantasy: The Spirits Within and the subsequent departure of Hironobu Sakaguchi from Square, the company found itself both in need of money and without a clear direction for the future of the franchise. The fact that, halfway through the development phase, Square would complete its merger with its former rival Enix is a testament to that.

                Up to this point, Final Fantasy games had been characterized by an almost formulaic approach to the turn-based JRPG genre, with each iteration having a slightly different flavor without straying too far from the established conventions. FFXII is a completely different beast.

                In stark contrast with everything that came before it, FFXII is a game heavily influenced by the success of its MMORPG predecessor, and while returning to single-player play, it forgoes the usual turn-based combat style in favor of a more action-oriented approach, reminiscent of the clunky combat typical of the MMORPGs of the time.

                Similarly, instead of having an original setting of its own, FFXII takes place in Ivalice, a world originally created for Final Fantasy Tactics, which would end up being the common denominator for a related project called "Ivalice Alliance", which would also include Vagrant Story and Final Fantasy Tactics Advance, among others.
            `)}
            <YouTubeVideo videoId="IqY4Fj-s2Ek" align="left" caption="The"/>
            <p>Despite some serious behind-the-scenes drama<InlineSpoiler mask="*">Nothing that could ever compete with Final Fantasy 15, though</InlineSpoiler>, with Yasumi Matsuno (incidentally: the mastermind behind the Ivalice Alliance project) leaving the project in the hands of Hiroyuki Ito and multiple late changes during the development, the game was released on 16/03/2006, <b>five years after the previous single-player mainline entry</b>, partly because of the sudden competition from previous entries' expanded universes (see: FF7 Compilation, FFX-2), something that Hironobu Sakaguchi strongly opposed in the past.</p>
            <br/>
            <p>Something that -in my opinion- contributedto the loss of momentum the franchise experienced from this time onwards.</p>

            <Bookmark id="FF12Mechanics">The mechanics</Bookmark>
            {splitText(`
                As already mentioned, the game is heavily influenced by the success of FFXI, with most of its mechanics moving toward a more MMORPG-like system.
            `)}
            <CustomImage
                alt="The MMORPG-inspired battle system of FFXII"
                src={Battle}
                align="right"
            />
            {splitText(`
                Things, though, are just a little more nuanced than that: the issue being addressed by this change was that, especially back in the day, the usual gameplay loop of interrupting exploration with a random encounter to start a (semi-active) turn based battle was considered old and boring, so the new system took heavy inspiration from a successful product like the previous chapter and tried to hybridize its system with the old, consolidated one.

                So here we are, with encounters no longer being random, and enemies being fought on the main map rather than having the game load a different scene entirely.

                The next step was to change combat from having the two opposing sides in neat, tidy formations to a system that incorporated the free roaming mode the main character was already in - so we get AoE spells, basic attacks performed automatically (but still tied to the old ATB bar), spacing taking an active role in combat with misses and parries based on distance and direction, but also commands that can be issued manually like in the old games.
            `)}
            <CustomImage
                alt="The cast, this time with jobs"
                src={FF12International}
                align="left"
            >
                <i>Jobs are also introduced in the Final Fantasy XII International Zodiac Job System release</i>
            </CustomImage>
            {splitText(`
                To accommodate this new system, a new mechanic was introduced: rather than forcing the player to manually control the full party or forcing them to heavily rely on AI, developers designed the gambit system, a basic yet surprisingly deep system of conditional commands that the player can set up for each character, allowing for heavy customization of each character's automated behavior.

                Oddly enough, gambit slots, conditions, and commands need to be <i>bought in shops</i>, which brings us to another innovation: monsters don't award gil anymore, but rather loot that can then be sold - killing multiple monsters of the same type will initiate a chain that awards better loot, and selling large amounts of the same item will unlock extra options in shops.

                A cornerstone of the game's design is the introduction of a free camera, which solves what was considered to be a major issue in FFX, greatly aids exploration, and is <b>central</b> during combat; this, along with the different map design, makes the game feel much less linear, something FFX struggled with.

                The other main point I want to touch on is the fact that, in pure MMORPG fashion, FFXII introduces rare monster hunts to the mainline series. Whether this is a good or bad thing is a matter of personal preference; consider this just pure trivia.
            `)}

            <Bookmark id="FF12Game">The game</Bookmark>
            <CustomImage
                alt="The cast, drawn by Akihiko Yoshida"
                src={Cast}
                align="right"
            >
                <i>The cast, drawn by Akihiko Yoshida</i>
            </CustomImage>
            <p>After a quite lengthy introduction detailing how, right after the marriage between Prince Rasler<InlineSpoiler mask="*">(that falls in battle during this very opening sequence)</InlineSpoiler> and Princess Ashe, the Kingdom of Nabradia is invaded by the Archadian Empire, the game finally starts <i>in media res</i>, with our main character Reks<InlineSpoiler mask="*">or is he...?</InlineSpoiler> taking part in a battle against Archadian forces under the command of Basch fon Rosenburg<InlineSpoiler mask="*"><b>or is he...?</b></InlineSpoiler>, who is trying to rescue King Raminas of Dalmasca, who had left to sign a peace treaty with the Empire in a last-ditch effort to save his kingdom and fell into a trap.</p><br/>
            {splitText(`
                After the tutorial section, Reks discovers that Basch killed the king for treason - and then gets stabbed by him as well.

                Final Fantasy XII offers various twists on the usual Final Fantasy formula, but the first thing this tutorial teaches the player is that the story is central, while the characters come second.

                It's a story about gray morality, where the good guys rebel against a surprisingly "fair" empire, and the bad guys often seem to be reasonable opponents rather than the vicious monsters we're accustomed to - but I'm getting ahead of myself.

                The game <i>really</i> starts with the player taking control of Vaan, Reks' younger brother, two years after the events of the prologue.

                He, along with his friend Penelo, is an orphan living in the streets of Rabanastre, the former capital of Dalmasca, and dreams of becoming a sky pirate - his adventure starts when, taking advantage of the installation of the new consul Vayne Carudas Solidor (sent by the Empire after annexing Dalmasca, following the disappearance of Princess Ashe, who is claimed to have committed suicide), he tries to sneak into the local castle and run away with some loot.
            `)}
                <p>Things don't go as planned, and he and Penelo end up crossing paths with a couple (note: their romantic relationship is never explicitly stated) of <i>actual</i> sky pirates in the form of Charismatic Boy Balthier and Bunny Girl Fran. The newly formed party then has to run away from the battle that suddenly begins between the imperial guards and a commando unit of rebels led by a girl named Amalia<InlineSpoiler mask="*">or is she...?</InlineSpoiler>.</p>
            {splitText(`
                Vaan, Balthier, and Fran then get jailed by the Empire but find a way to break free, recruiting a beat-up Basch on their way out. It's worth mentioning that, during this sequence, the party hides from Judge Gabranth (the guy on the cover of the game) and discovers that he is in fact the twin brother of our new team member and the real killer of Reks and King Raminas.

                Let's say it's not the best plot twist ever.
            `)}
            <CustomImage
                alt="Vaan and Balthier escaping the Nalbina Dungeons"
                src={Leave}
                align="left"
            >
                <i>Vaan and Balthier escaping the Nalbina Dungeons</i>
            </CustomImage>
            {splitText(`
                After some quests that bring the party around Ivalice, they eventually join the Resistance and meet <s>Amalia</s> Princess Ashe again, really kickstarting the main theme of the game: rebelling against the Empire and reclaiming the throne of Dalmasca.

                I'm not going to dwell on the minutiae of the plot as, by now, I expect you to already have a general idea of how the story goes - I'd rather touch on how this game is different.

                First of all, as already mentioned, while Archadia is definitely an empire that wages war against its neighbors and militarily occupies them, it is not your typical Star Wars-esque evil empire, and that puts it in strong contrast with the likes of the evil empires of FF2 or FF15 (more on that later, obviously).

                I mean, Archadia's <i>actual</i> enemies are, on one hand, the Rozarrian Empire, which barely even takes part in the game, and, on the other, the internal conflicts among the various people in power: Vayne's struggle to succeed the terminally ill Emperor, the various judges that either support him or his brother Larsa, etc.

                The game's main antagonist, Vayne Carudas Solidor, while relentless in his own right, is depicted as a rational leader, a talented politician, and a skilled military commander, not the kind of power-hungry maniac we faced in older games.

                In the same fashion, the local "mad scientist" Cid is in no way similar to the likes of Hojo from FF7. He is actually pretty likable, even if we can perfectly understand that he's using the party for his own ends.
            `)}
            <CustomImage
                alt="Gabranth without his helmet"
                src={Gabranth}
                align="right"
            >
                <i>Judge Gabranth, without his helmet, during the last showdown with the party</i>
            </CustomImage>
            {splitText(`
                The <i>actual</i> plot twist, in a game where the main party's quests seem tangential to the REAL plot about the political landscape of Ivalice and the internal power struggles of the Empire, is that both Cid and Vayne are acting as they do because of their relationship with a mysterious entity named Venat, a spectral being (technically, an Occuria) that left the "masonic" council of its kind to gift humanity the means of self-determination (Prometheus vibes, anyone?).
                And, guess what, the main council of the Occuria is using the party as a pawn against Venat by guiding Ashe with visions of her late husband Rasler, so ARE WE THE BADDIES?

                Now you know why every FF critic will tell you that this game has a great setting and plot, but pretty unremarkable characters.
            `)}

            <Bookmark id="FF12Cast">The cast</Bookmark>
            <CustomImage
                alt="Vaan"
                src={Vaan}
                align="left"
                maxHeight="350px"
            />
            {splitText(`
                <b>Vaan</b> is the main character of the game, but not the protagonist, and that's probably why he is so widely (but not universally, mind you) ill-received. One could like or dislike his design, personality, or really anything else, but he lacks any real connection to what happens in the story and doesn't have any actual stakes.

                But let's start from the beginning: Vaan is a 17 years old orphan living in the streets of Rabanastre; his dream is to become a famous sky pirate, but his day-to-day reality is that of a pickpocket and thief.

                The last family member he had was his older brother Reks, who died shortly after being injured during the rescue mission to save King Raminas two years before the events of the game, so he now lives among other street urchins trying to survive in the streets.

                His involvement in the story is purely accidental: he sneaks into the Royal Palace of Rabanastre during the festival for the new consul Vayne, steal the Dusk Shard without knowing what it is, and stumble into Balthier and Fran.

                <u>By design</u>, over the course of the game he doesn't have any big character development, and he is mostly taking part in the story as a player stand-in, so I can't really hate him. At the same time we can't pretend he's a memorable character or anything.

                The only real plot point he should have is that, for the information he has, his brother Reks died by Basch's hand, but when the party meets and recruits Basch, he ends up rationalizing the whole thing in record time - and, don't get me wrong, it's not like I wanted some ham here, I'm just pointing out that this game doesn't really focus on its characters that much.

                To add insult to injury, halfway through the game he confesses to Ashe that everything he's done up to that point, from his desire to become a sky pirate to taking part in the party's adventures, was his way of escaping the trauma of losing his brother.

                Pretty bland, if you ask me.
            `)}
            <CustomImage
                alt="Penelo"
                src={Penelo}
                align="right"
                maxHeight="350px"
            />
            {splitText(`
                <b>Penelo</b>, a 16 years old girl raised in the streets of Rabanastre like Vaan, is his childhood friend - almost a sister, given that her family basically took him (and Reks) in after the death of his parents from a plague some five years earlier.

                While noticeably more mature than Vaan, to whom she often plays the role of voice of reason, and despite the fact that they're not romantically involved (not before FFXII: Revenant Wings, at least), you often end up lumping the two of them together because of their dynamic.

                Story-wise, she joins the party after being kidnapped by the bangaa Ba'Gamnan and his gang of bounty hunters, who, seeing that she's somehow involved with Balthier and Fran (via Vaan, obviously), want to lure the sky pirates into a trap in the Lhusu Mines. She then befriends Larsa (the younger brother of Vayne) before rejoining the party for good.

                All in all, while still falling a little flat, Penelo is a bit more involved in the story than Vaan and, despite her dream being to become a dancer, she ends up sharing with him the same fate of becoming a sky pirate.
            `)}
            <CustomImage
                alt="Balthier"
                src={Balthier}
                align="left"
                maxHeight="350px"
            />
            {splitText(`
                <b>Balthier</b>, the best character in the game bar none, announces himself in the game with the words "I play the leading man, who else?", and that's just the first of a long series of in-jokes on how he exudes main-character energy, while the likes of Vaan pale in comparison.

                The running joke is so prominent that, during the ending sequence of the game, Fran even jokes about it telling him "I'd say you're more of a supporting role", closing the circle on the whole thing.

                Other than being an actual sky pirate and the cool guy of the party, Balthier is a resolute individual who, in stark contrast to the idea of a hero you would expect from a Final Fantasy game, comes off as a bit patronizing and cynical.

                His backstory, which is revealed only towards the end of the game, while not tragic on its own, explains a lot of his personality: born Ffamran mied Bunansa, he is the son of Cid, and six years before the events of the game he was inducted as a Judge at just 16 years old.

                After noticing the changes in his father's behavior and his growing obsession with the nethicites, he steals a ship (the Strahl) and flees the Archadian Empire for good, becoming a sky pirate and adopting a new name.

                Jokes aside, Balthier is a funny character with some personal investment in the story (or personal gain to pursue) that kicks the plot into motion multiple times by either being very active in his approach or by having some kind of knowledge or connection to people and places due to his background.

                We need more characters like him in our games.
            `)}
            <CustomImage
                alt="Fran"
                src={Fran}
                align="right"
                maxHeight="350px"
            />
            {splitText(`
                <b>Fran</b>, the only non-human playable character, is a Viera, a female-only race of humanoid rabbits that lives in the forests of Ivalice.

                She's fundamentally different from the rest of the cast, as her race is more magically attuned than the average human and, a bit like the elves of Tolkien's works, despite her appearance, she's quite a bit older than the rest of the group, as her race has a much longer lifespan.

                Joining the party as Balthier's partner in crime, her quiet and reserved nature on one hand balances his outgoing personality, but on the other locks her into the role of being just an extension of the cool guy.

                She does have a personality of her own, but her moments are few and far between, and her backstory is limited to a quick detour through Eruyt Village - the Viera settlement where she comes from - where we learn that, some decades earlier, she decided to leave her family and home behind to embrace a life of freedom, but that means she's not welcome back anymore, as her community disowns her for it.

                Her awkwardness is funny, though, and she should have had more space to shine in my opinion.
            `)}
            <CustomImage
                alt="Basch"
                src={Basch}
                align="left"
                maxHeight="350px"
            />
            {splitText(`
                <b>Basch</b> fon Rosenburg is the first character who joins the party that we can consider to be <b>truly</b> central to the plot: the whole point of the prologue is to set him up as the killer of King Raminas (and Reks), only to have everything subverted later in the plot.

                Born 36 years before the events of the game in Landis, he was receiving military training in Dalmasca when the Empire invaded his homeland, and he lost contact with what was left of his family - his mother and his twin brother Noah.

                After climbing the ranks of the Dalmascan army and becoming captain, the incident that led to the King's death occurred, and following Reks' testimony he is branded a traitor and imprisoned for two years, until the party stumbles upon him during their escape from the Nalbina dungeons and ends up freeing him

                He soon becomes a central figure in the plot, using his newly acquired freedom to join the Resistance and help the cause of reclaiming the throne for Ashe, uncovering the truth behind his original framing in the process: the real culprit behind the death of King Raminas is his long-lost twin brother, who now operates under the name of Judge Gabranth and felt betrayed by his brother joining the Dalmascan army rather than reconnecting with his family.
            `)}
            <CustomImage
                alt="Ashe"
                src={Ashe}
                align="right"
                maxHeight="350px"
            />
            {splitText(`
                Princess <b>Ashe</b> (briefly known as Amalia when we first meet her with the party) is <i>the</i> pivotal character of the plot: the prologue starts right after the marriage between her and Prince Rasler, and the rest of the plot, from the moment she joins onwards, is completely centered around her... even though the journey changes course a little over time.

                After the fall of Dalmasca, she is declared dead, so she can operate under the radar for a while, and that's why she's undercover when the party first meets her.

                Following the big reunion, the plot adjusts to how important her figure is within the the good old Resistance vs Empire trope; we then move on to obtaining proof of her legitimacy to the throne by visiting the Tomb of Raithwall, where we witness the first of many visions of her late husband Rasler and the party gets jailed for a third time, this time thanks to the betrayal of Vossler, a former knight of Dalmasca and <i>supposed</i> ally of the Resistance.

                The power of the newly acquired Dawn Shard, though, lets the characters regain their freedom once again -at the expense of the entire Archadian Imperial Fleet- and the plot then becomes more nethicite-centric: can Ashe learn to use the power of the shards against the Empire? Does the Empire have its own nethicite? Is there a way to learn more?

                After traveling around Ivalice and learning more about the topic, she once again leads the party towards a confrontation with Cid in Giruvegan, hoping to destroy the Empire's nethicite with the Sword of Kings, yet another artifact coming from the legacy of King Raithwall. In another plot twist we discover that Cid tricked the party into going there to have them meet the Occuria, with the intent of manipulating Ashe into destroying the Sun-Cryst, the source of all the nethicite shards.

                In the end, at the literal eleventh hour, Ashe understands that her vision of Rasler was a manipulation by the Occuria and, rather than obtaining a new piece of nethicite from the Sun-Cryst as they wanted her to do, she decides to destroy it (even though the actual act of doing so comes from the sacrifice of former judge-turned-pirate Reddas), thus breaking the Occuria's hold on humanity and bringing to completion the original plan that Venat had in mind when he left their council.
            `)}
            <CustomImage
                alt="Vayne"
                src={Vayne}
                align="left"
                maxHeight="350px"
            />
            {splitText(`
                <b>Vayne</b>, the newly appointed consul of Rabanastre, acts as the game's main antagonist and final boss.

                Despite never being a playable character, I decided to include him in this section because, as you may have already noticed, this game's plot is convoluted and confusing, and things happen behind the scenes without the player being involved - and, more often than not, Vayne is the force that puts everything in motion.

                He is the third son of the Archadian Emperor Gramis, and during the first part of the game he comes across as ruthless yet rational.

                After the first impression we have of him during his introduction as consul, we learn early on that, before the game even starts, he had his two older brothers killed on the accusation of plotting a coup against their father, <i>incidentally</i> becoming the heir apparent to the throne.

                Despite these "credentials", he remains protective of his younger brother Larsa, and even his final confrontation with his father, before the latter's <i>unfortunate death by poisoning</i>, is more of an argument about how to handle the internal struggles between House Solidor and the Senate, rather than a power-hungry son trying to get rid of his father. He ends up claiming the throne by force nonetheless, but you get the point.

                Later on, we learn that <b>even the initial invasion of Dalmasca</b>, which led to the death of King Raminas, Rasler, and Reks among countless others, was part of his plan, as was the idea of framing Basch for treason. In short, he is the main driving force behind the whole story, while the party goes from being an ensemble of victims of his schemes to being a mild annoyance and then a pawn. 
                
                The final confrontation between him and the party then represents the last remaining obstacle to the completion of his masterpiece of a plan.

                Your mileage may vary, but I think he's an unusually complex and well written villain for the standards of the franchise.
            `)}
           <CustomImage
                alt="Larsa"
                src={Larsa}
                align="right"
                maxHeight="350px"
            />
            {splitText(`
                <b>Larsa</b>, aged 12, is the youngest son of Emperor Gramis and the younger brother of Vayne.

                Despite his family ties, Larsa is a very peaceful and kind individual, and he is much more mature than his age would suggest.

                His view of his brother is both critical and flawed, as he holds some very different ideals but fails to acknowledge how cruel Vayne appears to be at times - not to the point of defending him, mind you, but in subtler ways, like blaming the circumstances around his actions or focusing on the silver lining of his deeds.

                Nonetheless, he goes out of his way multiple times to help the party, first joining them under the false name of Lamont and then helping them escape the Leviathan and reunite with Penelo, for example.

                He sees Ashe and the Resistance as a legitimate force with whom he can work, and even summons her to Mt Bur-Omisace to try to negotiate a lasting peace treaty, all while sharing with the party much needed information on the nature of the nethicite.

                All his efforts, though, are in vain, as Vayne's <i>coup d'état</i> comes to fruition and the war becomes inevitable.

                In the final act, Larsa draws his sword to fight his brother, but he is easily defeated and spared by Vayne, who once again proves that he still cares for his younger brother, in spite of how merciless he appears to be during the ending sequence.

                In the epilogue, he becomes the new emperor of Archadia, hires Basch as his personal guard, and keeps in contact with Penelo, proving his kindness.
            `)}
            <CustomImage
                alt="Vaan and Reks"
                src={Reks}
                align="center"
            >
                <i>A flashback of Vaan visiting Reks after he's been stabbed. I felt like having an image with him was mandatory.</i>
            </CustomImage>
 
            <Bookmark id="FF12Cards">The cards</Bookmark>
            {splitText(`
                The protagonist Vaan gets both a regular rare in <a href="https://gatherer.wizards.com/FIN/en-us/168/vaan-street-thief" target="_blank" rel="noreferrer">Vaan, Street Thief</a> (it is nearly playable in constructed, but falls short due to its lack of haste and underwhelming stats) and a Through the Ages reprint that's equally underwhelming: <a href="https://gatherer.wizards.com/FCA/en-us/38/captain-lannery-storm" target="_blank" rel="noreferrer">Vaan, Aspiring Sky Pirate</a>.

                <a href="https://gatherer.wizards.com/FIN/en-us/7/ashe-princess-of-dalmasca" target="_blank" rel="noreferrer">Ashe, Princess of Dalmasca</a>, the real protagonist, is an ok uncommon in limited, but I don't see it seeing much play outside of that.`)}
            <CustomImage
                alt="Balthier and Fran"
                src={BalthierFran}
                align="right"
            >
                <i>Did you know about the <a href="https://health.clevelandclinic.org/what-to-know-about-main-character-syndrome" target="_blank" rel="noreferrer" style={{ fontSize: "1rem" }}>Main character syndrome</a>?</i>
            </CustomImage>
            {splitText(`

                <a href="https://gatherer.wizards.com/FIN/en-us/213/balthier-and-fran" target="_blank" rel="noreferrer">Balthier and Fran</a>, the real <i>real</i> protagonists, do get a rare card at least, but I've yet to see it played anywhere. Their synergy with vehicles is pretty on point, lore-wise, so extra points for that.

                Then, moving on to the antagonists, we have the usual <a href="https://gatherer.wizards.com/FIN/en-us/417/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timeless Artificer</a> acting, for once, as the evil scientist working for the big bad; later in the game we also discover he's Balthier's father.

                Speaking of evil relatives <a href="https://gatherer.wizards.com/FIN/en-us/230/judge-magister-gabranth" target="_blank" rel="noreferrer">Judge Magistrate Gabranth</a>, aka the guy portrayed in the game's logo, is Basch's twin brother that killed both Vaan's brother and Ashe's father King Raminas in the intro.
                He's a complex character that follows quite a complicated arc throughout the game - I feel he should have deserved a better card than this.

                The <i>actual</i> antagonist, <a href="https://gatherer.wizards.com/FCA/en-us/46/fynn-the-fangbearer" target="_blank" rel="noreferrer">Vayne Carudas Solidor</a>, gets a Through the Ages reprint of a classic green aggro commander that, while not eligible for competitive cEDH, is totally playable on casual tables.
                I love how, even in the art of his "own" card, his brother Larsa gets the "main character" treatment.
                He manages to be the center of attention in the cheap removal <a href="https://gatherer.wizards.com/FIN/en-us/124/vaynes-treachery" target="_blank" rel="noreferrer">Vayne's Treachery</a>, at least.

                Moving on to locations, the Boros common town is <a href="https://gatherer.wizards.com/FIN/en-us/287/rabanastre-royal-city" target="_blank" rel="noreferrer">Rabanastre, Royal City</a>, former capital of the Kingdom of Dalmasca, is basically the starting town of the game.

                On the other hand, the capital of the Archadian Empire (aka the bad guys) is represented by <a href="https://gatherer.wizards.com/FCA/en-us/27/wall-of-omens" target="_blank" rel="noreferrer">The Imperial City of Archades</a>, a Through the Ages reprint of... a creature, instead of a land card. Go figure.

                We also end the Through the Ages collection of this chapter with <a href="https://gatherer.wizards.com/FCA/en-us/62/smugglers-copter" target="_blank" rel="noreferrer">The Strahl</a>, Balthier and Fran's airship, fittingly represented with a vehicle card that dominated a couple of standard seasons back in the day.
            `)}
            <YouTubeVideo videoId="FbPuqJcbBIs" align="right" caption="Nobuo Uematsu's only contribution to FFXII - truly the end of an era"/>
            {splitText(`
                Changing topic: <a href="https://gatherer.wizards.com/FIN/en-us/123/undercity-dire-rat" target="_blank" rel="noreferrer">Undercity Dire Rat</a>, a very basic black common creature, references an early quest during the game's tutorial section.

                We then have <a href="https://gatherer.wizards.com/FIN/en-us/119/sidequest-hunt-the-mark" target="_blank" rel="noreferrer">Sidequest: Hunt the Mark</a>, a limited playable uncommon card, stands for this game's main side activity: hunting special monsters, following requests published on the <i>hunt boards</i> scattered in the various taverns around the world.

                <a href="https://gatherer.wizards.com/FIN/en-us/19/fate-of-the-sun-cryst" target="_blank" rel="noreferrer">Fate of the Sun-Cryst</a> is a common removal based upon a pivotal moment of the game, when Ashe decides to destroy the Sun-Cryst rather than side with the Occuria and Reddas sacrifices himself to do so. A pretty anticlimatic choice, I've got to say.

                Closing this section, we have the uncommon red removal <a href="https://gatherer.wizards.com/FIN/en-us/132/choco-comet" target="_blank" rel="noreferrer">Choco-Comet</a> that also spawns a 2/2 chocobo token: it's a good card in limited, but my favorite part is that, in a game where farming equipment is king, we get a big nod to the lvl 99 Red Chocobo encounter, aka a classic way to farm Ribbons.
            `)}
        </>
    )
}

export default FF12;