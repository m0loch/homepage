import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from "../../../components/posts/inlineSpoiler";
import CustomImage from "../../../components/posts/customImage";
import YouTubeVideo from '../../../components/posts/youtubeVideo';

import CoverArt from '../../../images/post-0063/ff8/logo.png';
import TripleTriad from '../../../images/post-0063/ff8/ttriad.jpg';
import Moron from '../../../images/post-0063/ff8/moron.png';
import GFMemory from '../../../images/post-0063/ff8/gf_memory.jpg';

import Squall from '../../../images/post-0063/ff8/squall.jpg';
import Rinoa from '../../../images/post-0063/ff8/rinoa.jpg';
import Quistis from '../../../images/post-0063/ff8/quistis.jpg';
import Zell from '../../../images/post-0063/ff8/zell.jpg';
import Selphie from '../../../images/post-0063/ff8/selphie.jpg';
import Irvine from '../../../images/post-0063/ff8/irvine.jpg';
import Seifer from '../../../images/post-0063/ff8/seifer.jpg';
import Edea from '../../../images/post-0063/ff8/edea.jpg';
import Laguna from '../../../images/post-0063/ff8/laguna.jpg';

function FF8() {
    return (
        <>
            <Bookmark id="FF8Nutshell">A bit of context</Bookmark>
            <CustomImage
                alt="Cover art for the original Final Fantasy VIII"
                src={CoverArt}
            />
            {splitText(`
                I won't dwell on how successful Final Fantasy VII was, we'll just focus on how Final Fantasy VIII being its direct successor had the unfair task of keeping the momentum going.

                It is really difficult to realize that almost 30 years went by since the time period I'm talking about, but back in the day the situation was <i>extremely</i> different from now: the series was on a roll, with each entry from FF4 onward pushing bar ever so slightly higher, and FF7 in particular drove home such a massive technological leap that the expectations for its direct sequel were non-quantifiable.

                We also have to consider that the team had basically no time to rest, as the development of the 8th chapter started while FF7 was going under its localization process, and we also have to bear in mind that Sakaguchi relegated himself to an executive producer role to focus on the production of Final Fantasy: The Spirits Within - something I'd rather avoid mentioning.
            `)}
                <YouTubeVideo videoId={"8CAVrwaZI80"} align="right" caption="FF7 took the world by storm with its cutscenes - nothing that could even remotely compare to the water and the hair effects shown in FF8's opening" />
            {splitText(`
                "But Romeo", you might object, "if the work on FF8 started before FF7 was out, how can you say that it set the expectations for its sequel too high?", and I wouldn't blame you - but the hype around FF7 was such that it sold 2 millions copies <i>in its first 48 hours of release</i>.

                The sum of these factors brought the team, contrarily to what one could expect, to be even more ambitious than what was already expected from them, both on a technical and a design level.

                This, added with the really tight schedule they were under, brought them to cut on some industry standards - which, I realize, is something that probably doesn't bother most people, but when I hear that the localization team had to basically retro-engineer the copy they were provided or that they had problems with remastering the game because the original source code was -allegedly- lost, I freak out a little.

                But these are stories for another time, we're just here to plaud the quality of a game that, <i>after just a couple of years of development</i>was released on 11/02/1999.
            `)}
            <Bookmark id="FF8GameMechanics">The mechanics</Bookmark>
            {splitText(`
                I feel like I wouldn't do the game justice if I glossed over <b>how much</b> it tried to reinvent itself, rather than just trying to be a new Final Fantasy 7.

                The already talked about <b>Guardian Forces</b> and their role in the story, they're <i>also</i> the backbone of all the other mechanics, but we'll get to that in a bit.
            `)}
                <YouTubeVideo videoId={"1pskj9sbffg"} align="left" caption='On 03/07/2012, this video was announced with the Tweet "Periphery summons a Guardian Force!"' />
            {splitText(`
                The main rework the game went through, the most extreme one, is the magic system: MP are gone now, in this iteration spells are basically items you can either draw from enemies or draw points or craft by using some skills you can learn.

                <i>Of course, to draw spells you need to have GFs junctioned to your characters, as they would only be able to use items or their basic attacks otherwise.</i>

                Every character has a limited number of spell slots, and in each slot you can have 1 to 100 charges of a spell; on top of that, the game offers you the junction system, allowing you to link a single spell to one of your character's stats in order to boost it - the boost is proportional to the nature of the spell and the quantity of charges available.

                <i>GFs provide you both the ability to junction spells, and the ability of crafting them from items</i>.

                On the other hand, characters do not wear armor or accessories anymore: the junction system gives you enough room for growth and customization that adding extra equipment would just be redundant; even weapons are limited in number, and rather than bought they are crafted at shops using specific parts.

                This, in turn, creates a completely different economy system - a thing further emphasized by the fact that random encounters don't award the player money anymore, you'll receive a regular paycheck from your garden, the amount of which depends on your SeeD rank, which is in turn tied to your performances but can also be enhanced by taking a test in the game menu.
            `)}
            <CustomImage
                alt="A game of Triple Triad"
                src={TripleTriad}
                align="right"
            >
                <i>Don't worry: the just played Minotaur will immediately trigger, and the game shall be won</i>
            </CustomImage>
            {splitText(`
                The <i>other</i> economy in the game revolves around <b>collectable cards</b>, that can either be used to battle NPCs in the card game Triple Triad, or morphed into items that can then be used as crafting materials.

                Cards themselves can either be won from NPCs or obtained by using the Card command on actual enemies.

                <i>I'm sure you already know that both the ability to turn enemies into cards and the ability to craft magic and items from them are provided by GFs.</i>

                The only battle system not tied to GFs is the limit system, that works similar to the one in FF6: instead of having a dedicated gauge to fill, characters have a chance to access their limit break tied to how low their HP bar is - or the usage of the spell Aura.

                Limit breaks differ wildly from character to character, and they are generally quite overpowered.

                The complexity of all these systems takes the game to <i>various</i> breaking points: for example, the best weapon in the game (Squall's Lion Heart) can be obtained in <u>Disk 1</u> if you know what you're doing - this also means unlocking the strongest limit break in the game, and as we already mentioned, it <i>breaks</i> the game.

                Likewise, you can easily obtain high level spells early on by crafting them from cards or common items, and that means your characters will be able to junction them to their stats and become ridiculously strong in the early game, despite their low levels.

                This brings us to the final nail in the coffin: the Card command, provided by Quezacotl (the first GF you obtain in the game) allows you to morph enemies into cards <i>avoiding getting experience points</i> which, you'll be pleased to hear, lets you keep your level low - and since the enemies' levels scale with yours, you can completely trivialize the game with very little effort.
            `)}
            <Bookmark id="FF8Game">The game</Bookmark>
            {splitText(`
                The first thing one notices is that, while FF7 tried to bring the spirit of its predecessors into the 3D era while keeping that stylized, chibi look for its characters that switched to a more anatomically correct design during battles, FF8 keeps a more realistic representation of characters in every situation.
            `)}
            <YouTubeVideo videoId={"Na0kklT7N4A"} align="right" caption='The first interaction with Rinoa, during the graduation ceremony' />
            {splitText(`
                Or maybe, one could start be taken by surprise by the completely different different premise of the game: while all the previous entries started off with either a battle or some kind of conflict, as soon as the initial FMV is over we start off with Squall being medicated in the school's infirmary; after a brief exchange with the local nurse, the player will discover that Squall is a student at Balamb Garden, an academy for mercenaries (led by Cid) known as SeeDs, and that he's preparing his graduation exam, a real battle mission where the students are sent to the port of Dollet to prevent a regular army (from Galbadia) from taking control of the local communication tower.

                If that premise wasn't weird enough, after the graduation Squall is sent to help out the Timber Owls, a resistance group fighting against the Galbadian occupation forces guided by Rinoa, a girl we met a little earlier at Balamb Garden.
            `)}
            <CustomImage
                alt="Another iconic quote from Squall"
                src={Moron}
                align="left"
            >
                <i>Another iconic quote from Squall</i>
            </CustomImage>
            {splitText(`
                <b>Before</b> that, though, the party has its first out-of-body experience: while on the train to Timber, Squall, Selphie and Zell pass out simultaneously and experience the life of three galbadian soldiers -Laguna, Kiros and Ward- and the struggles of the former in getting in touch with the girl of his dreams, the pianist Julia.

                Once they regain consciousness, they reach Timber and meet the aforementioned resistance, led by Rinoa: their plan is to kidnap the president of Galbadia, but things <i>as often do in this game</i> quickly go south, as the train we derail and board is actually carrying a <i>body double</i> of the president.

                Events spiral quickly, with the sorceress Edea taking control of Galbadia, Seifer attacking her on his own and getting spirited away by her, and our team setting to Deling City -Galbadia's capital- to try and assassinate her (with the help of the new recruit Irvine) on the evening of her crowning ceremony.

                This fails once again, with Seifer revealing to have switched side to become the sorceress' knight, Squall almost mortally wounded and the full team sent to an undergroud prison.

                Now, there is <i>no way</i> to summarize this game's plot, so I'll start by saying that at some people started theorizing that this point of the game -the end of Disk 1 of 4- marks the death of Squall and everything that happens next is just his dying dream.
            `)}
            <CustomImage
                alt="A warning in the school's PC"
                src={GFMemory}
                align="right"
            >
                <i>Who would have thought that doing your homework at the beginning of the game would spoil a (bad) plot twist?</i>
            </CustomImage>
            <p>
                Putting the tinfoil hat aside, the party escapes the prison, find their way back to Balamb Garden, and, while defusing the world war scenario that Galbadia is trying to start, we discover that the <i>real</i> antagonist of the game is Ultemicia, a sorceress living at the end of time, that Edea is actually Cid's wife, that Cid and Edea set up the Garden system to train SeeDs against herself<InlineSpoiler mask="*">...after being instructed to do so by Squall himself, that paid visit to her during the compression of time at the end of the game</InlineSpoiler>, that everyone except Rinoa was raised at the same orphanage but forgot it because of their extensive usage of Guardian Forces.
            </p>
            {splitText(`
                And again: sorceresses are are actually immmortal, if they want to die they have to pass their powers to another woman - and Rinoa becomes one.

                The key to the whole plot is Ellone, a mysterious girl that pops up from time to time that carries the ability to send people's consciousness back in time and that Ultimecia wants her power to activate compression of time itself, allowing her to rule over past, present and future.

                Ellone is actually Squall's half-sister, being the eldest daughter of Raine Loire aka Laguna's late wife that dies giving birth to Squall (yes, this means that Squall's father <i>is a moron</i>), and they are both sent to Edea's and Cid's orphanage by Laguna when he goes from being an ex-soldier turned journalist to the president of Esthar, a highly advanced nation that decided to hide from the rest of the world while focusing on how to stop the sorceress threat.

                Did I mention that Rinoa is also the daughter of General Caraway, the head of Galbadia's army, and Julia, Laguna's former love interest?

                This game's plot is <i>wild</i>.
            `)}
            <Bookmark id="FF8Cast">The cast</Bookmark>
            {splitText(`
                I know perfectly well that the section about the plot is just over, but I need to add a minor foreword before talking about the specific characters: the reason why FF8 is so beloved by the people that put it on a pedestal isn't the plot or the game mechanics, it's Squall's journey.

                Don't be surprised in learning that the whole cast lives in function of Squall and his development.
            `)}
            <CustomImage
                alt="Squall"
                src={Squall}
                align="left"
                maxWidth="250px"
            />
                <p>
                    <b>Squall</b>, aka the Whatever Boy<InlineSpoiler mask="*">He is infamous for his "Whatever..." quote that he recurrently throws at people around him to show disinterest.<br/>You'll be happy to learn that it wasn't supposed to be a catchphrase of his, it's just something that came up during the english localization.</InlineSpoiler>, is a complex character to judge.
                </p>
            {splitText(`

                I can confidently say, without a single proof to back me up, that they based his personality on what Cloud was during the first half of FF7: a the façade of a tough, confident guy that hides a fragile, insecure person underneath.

                In a completely different way from his predecessor, though, Squall is very vocal about his disinterest in social norms and human relationships - he's an outcast by choice, he revels in his lone wolf attitude and actively pushes people away.

                His full character arc, lasting the whole game, is about him learning how to connect with other people, grappling with his feelings, finding love and become a leader.

                What we should <b>not</b> accept from the game, though, is how the world around him naturally recognizes him as charismatic and fit for leadership even if he never show any of these qualities - I mean, Big Boss Cid <i>knows</i> operates according to the instructions that Future Squall gave him and his wife a decade earlier, but things pan out in a way that's a bit too far-fetched for my taste.

                I mean, I barely keep up with how ladies fall for him just because he is a dark loner, but this game is representative of the late 90s/early 2000s emo wave, let's just move on.

                The byproduct of this kind of writing is that, while the idea of the plot being centered around its protagonist is natural, this is the first game in the series where we have long monologues from the main characters, often internal, <i>sporadically</i> while he is alone in bed.
            `)}
            <CustomImage
                alt="Rinoa"
                src={Rinoa}
                align="right"
                maxWidth="250px"
            />
            {splitText(`
                <b>Rinoa</b>, also known as "Squall's romantic interest", is one of the most beloved female leads in the series.

                If Squall's character is reminiscent of Cloud's, Rinoa is basically Aerith 2.0: she's kind but strong-willed, she's charismatic yet also vulnerable, and in the end she's also magically entangled in the fate of the world.

                To be completely fair to her, Rinoa is often <i>just</i> remembered in function of her relationship with Squall, but she has a lot going on for her: she's both the daughter of general Caraway of the Galbadian army and the leader of the Forest Owls, a resistence fighting group based in Timber.

                Squall meets her during the infamous ballroom scene because she's visiting the Balamb Garden in order to have some mercenary support for her plan of kidnapping the president of Galbadia, not really the typical <i>damsel in distress</i> material. I need to point out that she's SEVENTEEN.

                She's the only main character not grown inside the Garden system, meaning she's way more <i>human</i> and carefree than the others, and during the course of the game she is basically tasked with the job of teaching Squall how to behave like a normal person.

                Their whole relationship, based on mutual growth and support, is the main theme for which the game is remembered, but we also need to acknowledge how Rinoa is so much more than that: on one hand she helps everyone in the party grow from child soldiers into functioning adults, but in the greater picture she is also the key to move the plot forward, mainly by her personal sacrifice in accepting to become a sorceress.

                Then again, of course, the main story beats for which she's remembered are the romantic ones where Squall <i>throws himself into the outer space</i> to save her, but I digress.
            `)}
            <CustomImage
                alt="Quistis"
                src={Quistis}
                align="left"
                maxWidth="250px"
            />
            {splitText(`
                <b>Quistis</b> is the second playable character we encounter in the game and she's... something.

                She starts off as Squall's teacher and she's written as this young, beautiful, intelligent and charismatic figure (I mean, other students even created a <i>fun club</i> for her), even closing the Dollet mission by operating heavy support weaponry - in short: she's our first authority figure in the game, and the intro is specifically written to build her up as this prominent, successful, reliable character that we're supposed to look up to.
            `)}
                <p>
                    Then she forces Squall to take her to the worst date ever, (has she been hyped up that way only for her to be turned down by our cold and detached protagonist?) revealing she's not a teacher anymore<InlineSpoiler mask="*">fun fact: in the original script and in the english translation she gets fired for Seifer's lack of discipline - in other languages, like my beloved italian, she resigns</InlineSpoiler> and after being told by Squall that rather than find a connection she should "go talk to a wall" (sic), she eventually joins the party as a regular member.
                </p>
            {splitText(`

                Her second character arc revolves around her relationship with Rinoa, culminating in their fight during the Deling City assault that ends with Quistis trying to sabotage the whole plan in order to go back and apologize to her. <i>Hilarity ensues</i>.

                After this fact, she behaves like a well-adjusted adult and, while it would have been easy for the writers to try and set up some kind of love triangle, she actively roots for Squall and Rinoa's relationship to blossom, going as far as prompting him to act and <i>do something</i> after she surrenders to Esthar.

                All in all, a good second-tier character with and adequate development arc - a thing that is <i>sadly</i> not the norm in this game.
            `)}
            <CustomImage
                alt="Zell"
                src={Zell}
                align="right"
                maxWidth="250px"
            />
            {splitText(`
                <b>Zell</b> represents the monk of FF8: he's a martial artist and fights with his fists.

                Like Tifa before him, though, he still needs to wear gloves in order to do so - this is is hilariously addressed at the beginning of disc 2, but I'm getting ahead of myself.

                He is sincere, energetic and impulsive, and he often comes off as a bit dumb.

                He first joins the team for the Dollet mission and, in a scene slightly reminiscent of <s>Cloud</s><i>Zack</i> and Sephiroth on the truck before the Nibelheim incident, he immediately ends up with Seifer calling him a "chicken-wuss" and getting under his skin.

                Other than that he's subjected to a couple of recurring jokes, like how he loves the hotdogs from the cafeteria, but they're already sold out, or the way his love story with the librarian girl plays out: she falls in love with him while he remains completely oblivious.

                Luckily, though, the ending seems to imply that he ends acquainted with her even if the player doesn't perform the sidequest that drives her to confess her feelings (because, of course, he would have <i>no idea</i> otherwise), while eating a <i>bunch</i> of hotdogs.

                His first "big moments" comes when, in Timber, he lets it spill that the party attacking president Deling is composed of SeeDs ("You're gonna take this stupid idiot back to Garden, right?").
                With the president himself.
                On a global broadcast.
                The first one in decades.
                This <b>will</b> haunt him later, even though is way less relevant than one would expect - but it still has an impact <i>on him</i>.

                The other bit is when, at the beginning of disk two, the party needs to escape the prison in the desert: as we know, Zell is able to fight even without weapons, and he also knows the place, thanks to a vision he's had where he lives as Ward while he works there.
                Too bad that both things are hinted by Quistis and Rinoa, but at the end of the day he's being engineered to be an adorable dork, isn't he?
            `)}
            <CustomImage
                alt="Selphie"
                src={Selphie}
                align="left"
                maxWidth="250px"
            />
            {splitText(`
                <b>Selphie</b> is a transfer student from Trabia Garden, and we get to meet her for the first time mere minutes after the start of the game.

                This first encounter, though, is just meant as a optional way for the player to be introduced to Balamb, as she asks Squall to show her around - she will become a member of the party only midway during the Dollet mission, after Seifer goes rogue.

                Her personality is very upbeat and cheerful, to the point of being childish at times, which makes her come off as a bit annoying at times.

                During the first part of the game her whole shtick is her wanting to run a school festival, but later is revealed that she's so passionate about it both because she sees it as a way to fit in but also since she promised that to her friends back in Trabia.

                Things take a bit of a dark turn when the team discovers that Galbadia is launching a missile strike against her former home, and while she takes the matter into her hands and lead an infiltration mission to stop the launch, ultimately there's no way for the player to avoid the destruction of that garden.

                That event obviously hits her hard and, in an optional scene, we even see her grieve her lost friends at the local cemetery.

                She manages to organize a festival at Fisherman's Horizon, though - an occasion where the team do their best to set up a date for Squall and Rinoa.

                In the end, I don't like her design but I also feel like that a game that could put a little more effort in developing side characters could do more with her, instead she ends up appearing as a shallow character because she just falls victim of the game's writing.
            `)}
            <CustomImage
                alt="Irvine"
                src={Irvine}
                align="right"
                maxWidth="250px"
            />
            {splitText(`
                <b>Irvine</b> joins the party with a specific role: he's a <i>sharpshooter</i> and he will be the one sniping the sorceress down during her crowning ceremony in Deling City.

                He, for this reason, is the last regular member of the party to join.

                He acts as THE cool guy around and appears to be quite the womanizer but, like Selphie, his true personality his hidden behind a façade built on fake self-confidence and bravado - it's no wonder that he develops a crush on Selphie, even though this is never explored as she never seems to reciprocate his feelings.
                Whether or not this is because she's not interested in him or because she's just oblivious is left to the player's interpretation.

                His mask cracks at the end of Disk 1 when, after the whole plan being built around he shooting the Sorceress from afar, he breaks down with Squall as he hasn't developed the tools to handle that kind of pressure, forcing them the squad leader to take action.

                <i>Note to self: don't hire a 17 years old sniper to assassinate a world leader.</i>

                Later, when the party visits the ruins of Trabia, Irvine does the <b>unthinkable</b>: in an unexplicable turn of events, he reveals that he knew all along that he, Squall, Quistis, Zell, Selphie and Ellone were brought up together in the same orphanage - he just never found the courage to bring it up, since the others seemed to have forgotten.

                You know, he was trained in Galbadia where the GF usage is lower, so his memory wasn't wiped by it.

                I personally found this just a little less insulting than the whole "let's jump into space and die horribly - OH LOOK, a <i>perfectly functional empty  spaceship, what were the odds?</i>" that comes up later, but it makes me angry even just thinking about it.
            `)}
            <CustomImage
                alt="Seifer"
                src={Seifer}
                align="left"
                maxWidth="250px"
            />
            {splitText(`
                <b>Seifer</b> is the rival of Squall, and that's pretty much that.

                They're both gunblade users (the only ones in the garden, to be more precise) and of similar age, but while Squall is slender, introverted and clad in dark colors, Seifer is bulky, aggressive and wears a big white trench coat.

                While the whole plot revolves around Squall's arc, we only get glimpses of Seifer's story: we see him starting from the same position as Squall, but choosing a completely different path that leads him to disobey orders during the Dollet mission, then attacks the Galbadian president on his own, and finally becomes Edea's knight.

                His motivations are disparate: his acts, while completely out of line, are driven by a desire of recognition and to prove himself - he wants to be acknowledged as the best, he wants to do something for his former lover (yes, Rinoa counts), and in the end he believes that serving the sorceress is something romantic to be proud of.

                In short, he's a sociopath. Like Squall, but of a slightly different flavor.

                In the end, he seems to find his peace thanks to his friends Fujin and Raijin, who stand by him despite his flaws. Like the others do with Squall, if you really think about it.
            `)}
            <CustomImage
                alt="Edea"
                src={Edea}
                align="right"
                maxWidth="250px"
            />
            {splitText(`
                <b>Edea</b> the sorceress is the main antagonist of the game... until she is no more.

                We know, after the big reveal at Trabia, that she's Cid's wife and that, together with him, she run the orphanage where Squall and the others grew up.
                
                Later -like, at the end of the game- she meets an adult Squall coming from the future that explains to her and her husband Cid that they will need to create the Garden system to train SeeDs and face her after she gets possessed by Ultimecia.

                At the same time, we witness her accepting the powers from the freshly defeated Ultimecia (and allowing her to die in the process), thus becoming a sorceress herself and setting in motion the events of the game.

                I <i>know</i> that this seems a very convoluted plot, but if you think about it this is very similar to what happens in the first Final Fantasy game, just without most of the narrative capabilities of the same medium 12 years later.
            `)}
            <CustomImage
                alt="Laguna"
                src={Laguna}
                align="left"
                maxWidth="250px"
            />
            {splitText(`
                <b>Laguna</b>, originally meant to be a second protagonist in a different time, is actually Squall's father.

                Squall and the party get to live glimpeses of his life during their out-of-body experiences, until meeting him near the end of the game, now playing the role for the president of Esthar.

                Like Seifer, Laguna acts as a counterpoint to Squall: even if we experience his life in snippets, following a different timeline, we see him starting as a young, reckless soldier with the dream of moving on and travel the world as a journalist, get sent to Sentra and then deserting, becoming a reporter and eventually taking power in Esthar.
            `)}
            <p>Among these experiences, we witness his single, awkward date with Julia<InlineSpoiler mask="*">that convinces her to follow her dreams and become a singer - she will then write the song "Eyes on Me" thinking of Laguna</InlineSpoiler>, his bond with his friends Kiros and Ward, his relationships with Ellone and Raine, but also the way he starts from being an impulsive, rash young soldier to a natural leader through his virtues of honesty and, in particular, selflessness.</p>
            {splitText(`

                In the end, both Squall and Laguna take a central role in saving the world from Ultimecia, and both do so by growing into well-regarded leaders in their own circles, but they do so by coming from veri different backgrounds, with Laguna placing others before himself, while Squall starts off by not wanting to either relay on others or letting others <s>rely</s><i>place their burden</i> on him.
            `)}
            <YouTubeVideo videoId={"l6Mg0mWMUs0"} />
            <Bookmark id="FF8Cards">The cards</Bookmark>
            {splitText(`
                After FF6 and FF7, I have to say it's a relief to see a smaller set of cards to tackle.

                We'll start off with the main protagonist <a href="https://gatherer.wizards.com/FIN/en-us/243/squall-seed-mercenary" target="_blank" rel="noreferrer">Squall, SeeD Mercenary</a> and his rival <a href="https://gatherer.wizards.com/FIN/en-us/156/seifer-almasy" target="_blank" rel="noreferrer">Seifer Almasy</a> which, as you can see, share equal attributes, similar mechanics but stay on the opposite sides of the color pie. Does Squall reanimate creatures because he's a good leader? Does Seifer cast spells because of his affinity with the sorceress?

                I don't know, but I find the idea cute.

                (The Through the Ages reprint for <a href="https://gatherer.wizards.com/FCA/en-us/22/danitha-capashen-paragon" target="_blank" rel="noreferrer">Squall Leonhart</a> is barely worth mentioning, let's just pretend it doesn't exist.)

                We then have the romantic interest <a href="https://gatherer.wizards.com/FIN/en-us/237/rinoa-heartilly" target="_blank" rel="noreferrer">Rinoa Heartilly</a>: kind of a lackluster card, she's been identified as white-green for her go-wide token mechanics, but I find this card really lackluster for a character with her role.

                The only other playable characters considered worthy of a print are <a href="https://gatherer.wizards.com/FIN/en-us/170/zell-dincht" target="_blank" rel="noreferrer">Zell Dincht</a>, a card that appears to have some uses in a landfall deck <i>but for some reason is red instead of green</i>, and <a href="https://gatherer.wizards.com/FIN/en-us/66/quistis-trepe" target="_blank" rel="noreferrer">Quistis Trepe</a>, an unpowered variant of the iconic <a href="https://gatherer.wizards.com/ISD/en-us/78/snapcaster-mage" target="_blank" rel="noreferrer">Snapcaster Mage</a> that lacks flash, but can target other people's graveyards.

                We're also going to mention <a href="https://gatherer.wizards.com/FCA/en-us/32/teferi-mage-of-zhalfir" target="_blank" rel="noreferrer">Edea Kramer</a>, covered just in a Through the Ages reprint, as she is playable for a very brief moment in the game - and she also gives us the hook to remind you that this game's version of <a href="https://gatherer.wizards.com/FIN/en-us/413/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timeless Artificer</a> acts as Balamb Garden's principal but, in a very weird plot twist, is also Edea's husband.
                `)}<YouTubeVideo videoId={"nAepj6cKllE"} align="right" caption="A theme from Ultimecia's castle" />
                {splitText(`
                Speaking of strange choices, the final boss gets two entries with <a href="https://gatherer.wizards.com/FIN/en-us/441/ultimecia-temporal-threat" target="_blank" rel="noreferrer">Ultimecia, Temporal Threat</a> being a somewhat tame rare and <a href="https://gatherer.wizards.com/FIN/en-us/247/ultimecia-time-sorceress" target="_blank" rel="noreferrer">Ultimecia, Time Sorceress</a>, an uncommon with a good power level in limited but way overcosted for constructed.

                The local summon package covers <a href="https://gatherer.wizards.com/FIN/en-us/163/summon-gf-ifrit" target="_blank" rel="noreferrer">Summon: G.F. Ifrit</a>, the first Guardian Force we face in the game (even though it's a bit weird to have it tied to FF8, given it's a recurrent summon since pretty much forever), and <a href="https://gatherer.wizards.com/FIN/en-us/162/summon-gf-cerberus" target="_blank" rel="noreferrer">Summon: G.F. Cerberus</a>, a summonable entity introduced just in this game along the Double and Triple spells and that, among with those, has never came back after this game.

                In the beastiary section, we find <a href="https://gatherer.wizards.com/FIN/en-us/266/pupu-ufo" target="_blank" rel="noreferrer">PuPu Ufo</a> (more than an enemy, we should define this an <i>encounter</i>), an entry for those pesky <a href="https://gatherer.wizards.com/FIN/en-us/173/balamb-t-rexaur" target="_blank" rel="noreferrer">Balamb T-Rexaur</a>s that infest the Balamb Garden, and the <a href="https://gatherer.wizards.com/FIN/en-us/191/jumbo-cactuar" target="_blank" rel="noreferrer">Jumbo Cactuar</a>, a bigger cactuar that grew a moustache.

                <a href="https://gatherer.wizards.com/FIN/en-us/268/relentless-x-atm-092" target="_blank" rel="noreferrer">Relentless X-ATM092</a> is a cute reference to the boss of the initial Dollet mission - if you played the game, you know why it's called <b>relentless</b>.

                Among the unmemorable entries we get <a href="https://gatherer.wizards.com/FIN/en-us/261/lion-heart" target="_blank" rel="noreferrer">Lion Heart</a>, the best weapon in the game, turned into a mediocre equipment.

                <a href="https://gatherer.wizards.com/FIN/en-us/166/triple-triad" target="_blank" rel="noreferrer">Triple Triad</a> on the other hand (no pun intended) looks like to be a fun card for non-competitive environments, and I love the fact they're celebrating the best minigame the series ever came up with in my opinion.

                Location-wise, we have two entries for Balamb Garden: <a href="https://gatherer.wizards.com/FIN/en-us/272/balamb-garden-seed-academy" target="_blank" rel="noreferrer">Balamb Garden, SeeD Academy</a> - I love the idea it turns into a vehicle, but I'm not sold on the Towns mechanic for it - and a good reprint in the form of <a href="https://gatherer.wizards.com/FCA/en-us/64/command-beacon" target="_blank" rel="noreferrer">Balamb Garden</a>.

                Does the <a href="https://gatherer.wizards.com/FIN/en-us/262/lunatic-pandora" target="_blank" rel="noreferrer">Lunatic Pandora</a> count as a "location"? If not, let's just pretend it's in the next section, the <b>story beats</b>.

                <a href="https://gatherer.wizards.com/FIN/en-us/50/dreams-of-laguna" target="_blank" rel="noreferrer">Dreams of Laguna</a> references the various Ellone-induced flashbacks - <i>yes, this card includes the <b>flashback</b> mechanic!</i> - with the art pointing to the scene where Laguna meets Julia.

                <a href="https://gatherer.wizards.com/FIN/en-us/63/memories-returning" target="_blank" rel="noreferrer">Memories Returning</a> is a nod to the plot twist where the party suddenly remember that they all (except Rinoa) grew up together in the same orphanage - <i>yes, the <b>flashback</b> mechanic is here as well</i>.

                <a href="https://gatherer.wizards.com/FIN/en-us/159/sorceresss-schemes" target="_blank" rel="noreferrer">Sorceress's Schemes</a> is the third <b>flashback</b> card in a row, even if it involves no memory-based justification. Given that we're talking about mind control and time manipulation, though, we accept this design anyway.

                <a href="https://gatherer.wizards.com/FCA/en-us/39/light-up-the-stage" target="_blank" rel="noreferrer">A Promise Fulfilled</a> is a sweet shoutout to the ending <i>and</i> the opening scene, with the promise in question being the one Squall makes to Rinoa after she dreams about them being separated and lost - the thread that binds them together during the final time compression, saving them from oblivion.

                Too bad such a big plot point is a reprint of a not-so-great card that just found some use in the standard format.
            `)}
        </>
    )
}

export default FF8;