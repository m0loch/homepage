import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import { Link } from 'react-router-dom';
import InlineSpoiler from "../../../components/posts/inlineSpoiler";
import CustomImage from "../../../components/posts/customImage";
import YouTubeVideo from '../../../components/posts/youtubeVideo';

import Logo from '../../../images/post-0063/ff7/logo.png';
import Shinra from '../../../images/post-0063/ff7/shinra.jpg';
import FirstReactor from '../../../images/post-0063/ff7/first-reactor.jpg';
import Cloud from '../../../images/post-0063/ff7/cloud.jpg';
import Barret from '../../../images/post-0063/ff7/barret.jpg';
import Tifa from '../../../images/post-0063/ff7/tifa.jpg';
import Aerith from '../../../images/post-0063/ff7/aerith.jpg';
import RedXIII from '../../../images/post-0063/ff7/red-xiii.jpg';
import CaitSith from '../../../images/post-0063/ff7/cait-sith.jpg';
import Cid from '../../../images/post-0063/ff7/cid.jpg';
import Yuffie from '../../../images/post-0063/ff7/yuffie.jpg';
import Vincent from '../../../images/post-0063/ff7/vincent.jpg';
import Sephiroth from '../../../images/post-0063/ff7/sephiroth.jpg';
import Chocobo from '../../../images/post-0063/ff7/chocobo.webp';

function FF7() {
    return (
        <>
        <Bookmark id="FF7Nutshell">A bit of context</Bookmark>
        <CustomImage
            alt="Logo for Final Fantasy VII"
            src={Logo}
        />
        <p>Starting this section feels kind of weird, as I have already <Link to="/posts/16">written</Link> <Link to="/posts/18">many</Link> <Link to="/posts/20">posts</Link> <Link to="/posts/39">about</Link> <Link to="/posts/42">its</Link> <Link to="/posts/44">extended</Link> <Link to="/posts/45">universe</Link>.</p>
        <br/>
        <p><b><Link to="/posts/46">TOO</Link>. <Link to="/posts/47">MANY</Link>.</b></p>
        <br/>
        {splitText(`
            I'll try to be brief just for the sake of being consistent with the rest of the narration, if I fail just know I tried my best.

            Final Fantasy 6 was a huge domestic success and managed to bring a lot of new elements to a series that, while not stagnant, was starting to fall prey of its own tropes, while at the same time cementing Square as the only real contender to Enix's throne in the JRPG market.
        `)}
        <YouTubeVideo videoId={"TPO7c_XmesU"} align="right" caption="The first 3D demo, with Terra, Locke and Shadow from FF6"/>
        {splitText(`
            After the release of FF6, the team immediately started brainstorming for new ideas but, for the first time, they had so much work on their hands (in particular with Chrono Trigger) that they were basically forced to take a breath.

            When going back to the drawing board, they explored various options and then decided to push the boundaries of what could be done even harder choosing to go for a 3D game, thus setting in motion a chain reaction that brought Square to an unamicable split with Nintendo as cartridges were considered unsuitable for such a project and the beginning of the PlayStation era.

            On 31/01/1997, after the longest development cycle so far, a team that was almost five times as large as the one that worked on the previous entry, Final Fantasy 7 was officially released.

            The end product is groundbreaking in many ways, but it is also a bit rough around the edges - the team had to go through some massive crunch in order to deliver the game as soon as possible, as its release was symbolic for both Square's new ambitions after severing ties with Nintendo and Sony's pride in breaking that bond; this means that the game presents some bugs here and there, the translation is questionable at times (especially nearing the end of the game), some content was cut... yet the game managed to be a masterpiece.
            
        `)}

        <Bookmark id="FF7Game">The game</Bookmark>
        {splitText(`
            Following in the trail of its direct predecessor, Final Fantasy 7 takes some extra steps away from the traditional fantasy settings and places the player in a contemporary world with a lot of extra elements that can be taken, in turn, from steampunk, dieselpunk or cyberpunk aesthetics, depending on the different locations.
        `)}
        <CustomImage
            alt="The Shinra hierarchy"
            src={FirstReactor}
            align="left"
        >
            <i>3D models on prerendered backgrounds were cutting edge tech, back then</i>
        </CustomImage>
        {splitText(`
            Mechanically, the game tries to improve on FF6 by having every character have their own quirks while being very customizable, but the Magicite system where characters could equip a single relic that let them learn spells and improve their skills, the Materia system has the characters unable to learn anything but able to equip up to 16 different materia each, some of which can be combined to create custom effects.

            We start off with the main character, Cloud, taking part in a bombing mission lead by Barret (the leader of the eco-terrorist group known as Avalanche) and his associates Biggs, Wedge and Jessie,with the goal of destroying a mako reactor (the in-universe version of a nuclear reactor).

            "What is mako?" I hear <i>nobody</i> ask in 2025?

            Mako is a super-efficient form of energy that lead the world to a sudden burst of technological advancement and the company that extracts it, Shinra Electric Power Company, to rise to power, to the point they have their own army (SOLDIER) and can move war towards sovereign nations, like what happened to Wutai before the events of the game.
            Also, mako is the very soul of the planet, and its extraction is killing the world.
        `)}
        <CustomImage
            alt="The Shinra hierarchy"
            src={Shinra}
            align="right"
        />
        <p>So, we're once again back to the basic theme of having rebels fighting an evil empire, with the minor twist being that the empire is a <a href="https://en.wikipedia.org/wiki/Zaibatsu" target="_blank" rel="noreferrer">zaibatsu</a><InlineSpoiler mask="*">Another concept you should be familiar with if you're accustomed to cyberpunk. Or Tekken.</InlineSpoiler>.</p>
        {splitText(`

            After a first chapter fully set in the city of Midgar, the president of Shinra is killed by Sephiroth, a legendary SOLDIER that was thought to be dead - the party will then leave the city and travel the world in search of him, trying to stop him from whatever he's trying to do - and yes, this is the plot of FF7: Remake.

            Likewise, the second part of the plot is <i>mostly</i> covered by FF7: Rebirth, seeing our heroes continuing their investigation throughout the world, until they reach the northern continent when Sephiroth does <i>the unthinkable</i> and summons Meteor, with the intent of destroying the planet. Please note that Rebirth ends with <i>the unthinkable</i>, but you get the idea.

            The final part of the story, that will be covered in the third part of the remake trilogy, focuses on the aftermath of the end of the second part and stopping Sephiroth from achieving godhood through the destruction of the planet.
        `)}

        <Bookmark id="FF7Cast">The cast</Bookmark>
        {splitText(`
            Once again, the plot is shaped around its cast of characters, that are both well-defined on their own while also extremely customizable due to the Materia system.

            This time around, though, the real core theme tying everything together is <i>identity</i>, with a the juxtaposition of memories and reality being being even more central than the one between corporate greed and environmentalism.

            For this reason, if you're reading this in 1998 or you lived under a rock in the mean time, be warned that everything will be discussed with an unprecedented amount of spoilers.
        `)}
        <CustomImage
            alt="Cloud"
            src={Cloud}
            align="left"
        />
        {splitText(`
            <b>Cloud</b> is the protagonist of the story: even though he's just 21 but he has already been through a lot, and starts the story as a mercenary working for Avalanche.

            Before the player gets the chance to name him, he fights a couple of Shinra patrols as "Ex-SOLDIER", because he is <i>supposedly</i> a former first class member of the Shinra military group.

            In the very first hour of the game, we see him as being extremely proficient combat-wise, but he also totally detached from Avalanche's cause, being involved just by his long time Tifa's insiscence, and only under the promise of a big paycheck.

            The player also experiences some glimpse of mental instability on his part, though, episodes when he spaces out and hears voices or experiences some unexplained flashbacks.

            At the end of the first "chapter", when the party gets captured by Shinra but manages to escape in the commotion following Sephiroth's assassination of the president, the group stops by Kalm in order to collect their thoughts and Cloud recounts what happened in Nibelheim five years before the events of the game, with him and Sephiroth going there on a routine mission, and the latter discovering the truth about his origins (being born from Jenova's cells as a genetic experiments, though being, in his mind, an ancient), losing his mind, setting the whole place on fire and, supposedly, dying.

            At this point the plot turns on its head and stops being about Avalanche's fight for the planet against Shinra, but more of a quest to stop Sephiroth from <i>whatever he's doing</i>, even though that's not exactly clear - the player just witnesses him wrecking havoc without a real chance of interacting with him.

            When the party finally manages to reach the northern crater at the beginning of disk 2, Cloud discovers that his memories are false and that he was being manipulated by Sephiroth all along, breaking down in the process.

            The player then starts the following part of the game without him, finding some time later in a catatonic state on the island of Mideel and witnessing Tifa leaving the party as well - the <i>third</i> character to leave, as a compliment to the <i>end of the world</i> atmosphere that permeates this whole section.

            After witnessing some of the adventures the party has to face while led by Cid, the story eventually goes back to Cloud that, with the help of Tifa, manages to put together the shards of his real memory and discovers that he never managed to enter SOLDIER in the first place, but after being experimented on (in the aftermath of the Nibelheim incident) and saved by Zack Fair, he assumed Zack's identity after witnessing his death at the hands of Shinra troops outside Midgar.

            All in all Cloud inherits some of Terra's characteristics from FF6 but becomes the real centerpiece of the story and goes through a major deconstruction of his identity, which is probably what made FF7's story so memorable and well-regarded by his fans.
        `)}
        <CustomImage
            alt="Barret"
            src={Barret}
            align="right"
        />
        {splitText(`
            <b>Barret</b> is the leader of Avalance (or, in the remakes, the leader of <i>a splinter cell</i> of Avalance) that embraces terrorist acts as his way of fighting Shinra's exploits of mako energy.

            On one hand, we progressively come to learn how his ideas are correct, given that said mako energy is nothing short of the literal <i>life</i> of the planet itself, and its extraction by Shinra is the most on-the-nose representation of corporate greed and environmental destruction.

            If you scratch under the surface, though, you discover that Barret's motives are deeply personal <i>and flawed</i>: some years before the events of the game, Barret lived in Coral as a coal miner - not really an environmental-friendly occupation, if you ask me.

            When Shinra came around offering the town a deal for the construction of a mako reactor, promising new jobs and prosperity, and while his close friend Dyne fiercely opposed such a deal, Barret was very vocal in its support and managed to convince the town council to accept it.

            Shortly after the reactor was built, however, an incident at the reactor causes a violent reprisal by Shinra troops, that wipes out the whole town.

            At this point Barret, who lost his wife, his best friend and his right arm, adopts Dyne's daughter Marlene as his own and leaves for Midgar in order to have his revenge.

            The Barret we meet at the beginning of the game is a violent and angry brute that doesn't care about the consequences of his actions, but as the story progresses he grows into a more responsible character, aware of the meaning of his actions and of his place in the party and in the world.

            If the story wasn't tailored around Cloud, Barret could have been a good protagonist as well.
        `)}
        <CustomImage
            alt="Tifa"
            src={Tifa}
            align="left"
        />
        {splitText(`
            <b>Tifa</b> is a childhood friend of Cloud - or, to be more honest, the childhood crush that convinced him to leave Nibelheim and try to become famous.

            During their childhood they had this awkward relationship where Cloud the outcast wanted to be a closer friend to the popular Tifa, but the mix between his shyness and the inner circle of Tifa's friends prevented that from happening.

            After her mother's death, Tifa ran to the mountains hoping to meet her ghost (seriously, I'm not making this up) but fell down a cliff - Cloud, who was following her, managed to save her but took the blame in the process, giving him the "platform" to wanting to pursue his dream of becoming a hero like Sephiroth.

            They meet again years later when the Nibelheim incident happens, but she <i>doesn't know</i>, as he decides to hide his identity, embarrassed of his failure at becoming a SOLDIER and accepting to just be a Shinra regular infantryman.

            After the incident Tifa, now orphaned and wounded, is saved by Zangan her martial arts teacher, that brings her to Midgar where she befriend Avalanche and manages her own bar, the 7th Heaven, that also serves as Avalanche's headquarter.

            Five years after the incident, she meets Cloud again and, despite the fact that some of his memories and stories don't add up, she has Barret hire him in order to keep an eye on him and understand what's wrong with him.

            It is worth noting that, when meeting Cloud in the slums of Midgar, he is still catathonic as per the results of the experiments he was subjected to (see Crisis Core for more details), and that he "gets better" meeting her - too bad that this is when he subconsciously starts putting up his façade of being a former SOLDIER, too bad that the <i>very first thing</i> he says is that they haven't met in five years, when they're seven from her point of view, but she decides to let it slide.

            When Cloud, after the party leaves Midgar, gives his own recollection of the Nibelheim incident making it obvious that something is wrong, Tifa chooses to keep silent and keep an eye on him - a noble purpose, that ends up backfiring when Sephiroth takes advantage of Cloud's mental state and causes him to break down.

            After the party finds Cloud catatonic in Mideel, she decides to stay with him because, at this point, she feels responsible for him and feels that she would rather spend her time with him than continue the fight against the odds for the planet's survival.

            After Ultima Weapon attacks Mideel causing the two of them to fall in the lifestream, they end up in some sort of a mental connection where they piece together both what really happened in their past, the truth about the events of the Nibelheim incident, and ultimately Cloud's real "self", in a segment that I consider, hands down, the best thing I ever played in a videogame.
        `)}
        <CustomImage
            alt="Aerith"
            src={Aerith}
            align="right"
        />
        {splitText(`
            <b>Aerith</b> (or Aeris, in the original western localization) is the last of the Cetra, an ancient race of people -colloquially known as "Ancients"- that had a deep connection with the planet and life altogether.

            She is central to the plot and acts both as an antithesis to Sephiroth - a real Ancient, attuned with the planet opposed to a lab product that <i>thinks</i> he's an Ancient, but he's actually derived from a parasitic, alien entity - and as a "rival" to Tifa in the love triangle with Cloud.

            The juxtaposition with Sephiroth also comes from their very lineage: while Aerith (as we discover in Icicle Inn after her demise) is the daughter of Ifalna and Professor Gast, Sephiroth is the son of Lucrecia and Hojo, Gast's rival; while Aerith's powers are naturally inherited from her lineage, Sephiroth's are artificially induced through experimentation.

            Her romantic involvement with Cloud, though varying from playthrough to playthrough as there are a bunch of minor interactions that can lead to a different date at the Gold Saucer (we'll get there later), never moves beyond a phase of playful flirting, as she understand that Cloud is (willingfully or not) not showing his true self.
        `)}

        <p>This is both done as a way to remark her empathy and kindness, but also as a sort of foreshadow of the big reveal on Cloud's identity, as her "romantic identity" is tied to having been Zack's girlfriend, back in the day.<InlineSpoiler mask="*">in the extended universe this is a slippery slope - Advent Children depicts them as being reunited after death, while the On the Way to a Smile tells a different story; let's see what this Remake cycle will end up doing</InlineSpoiler></p><br/>

        {splitText(`
            Aerith ends up being one of the most beloved character in the game (and in the whole series) because she manages to both embody the archetypal frailty of the white mage and an energetic, upbeat personality that really ties the party together.

            She's silly, she's funny, she's daring, while also bearing the weight of her destiny on her shoulders alone.

            FF7 is a game of many turning points, and while I believe anyone in 2025 knows about her premature departure from the realm of the living, in fact things get weird right after the quest to the Temple of the Ancients, at the end of which Sephiroth gets hold of the Black Materia by controlling Cloud, prompting her to leave the party as she is the only one that can summon Holy and doesn't want to put the others in danger.

            By the way, the game starts and ends with her, if that's not proof of her importance I don't know what it is...
        `)}
        <CustomImage
            alt="Red XIII"
            src={RedXIII}
            align="left"
        />
        {splitText(`
            <b>Red XIII</b> is the first non-human character to join the party, and while there's some debate on his actual nature (Tetsuya Nomura himself called him "somer sort of feline"), but he exhibits some canine traits as well - especially in Rebirth when they play on his enhanced sense of smell.

            His lack of opposable thumbs doesn't take away from his intelligence, though, and the fact that he's the first four-legged character in the series (Mog and Umaro beat him in the non-human department) doesn't stop him from being intellectually on par with the rest of the cast - with some caveats.

            The party meets him in Midgar, where he's being held captive by Hojo who tries to have him mate Aerith (I'll avoid commenting on that), and the first thing he does is acting all feral to trick him to just acting well-educated as soon as they manage to break free.

            He is the (supposed) last of his kind, his tribe being the guardians of Cosmo Canyon, and his whole backstory gets revealed and explored once the party reaches said location: while being the oldest member of the party (48 years of age, to be precise), his <i>grandfather</i> Bugenhagen tells us that given his tribe's longevity he is basically a teenager, a 16-years-old in human terms.

            I never really accepted this bit, as one matures by experiencing the world rather than by reaching a milestone tied to one's body expiration date - and don't get me started on how the math doesn't add up when, in the ending, we see him run around with a bunch of cubs while being <i>over 500 years old</i>.

            Wasn't he supposed to be the last of his kind, anyway? Does his race reproduce by parthenogenesis?

            He <i>is</i> an interesting character, anyway, even though his main arc is basically limited to the quest in the Cave of the Gi in Cosmo Canyon when he discovers the truth about his heritage.

            Moving forward his contribution to the plot is pretty much <i>being Bugenhagen's nephew</i>, but having him more tied to the main story would objectively be difficult given his unorthodox nature <b>and</b> I think that his full arc is very satisfying as it is, both emotionally and in terms of character growth.
        `)}
        <CustomImage
            alt="Cait Sith"
            src={CaitSith}
            align="right"
        />
        {splitText(`
            <b>Cait Sith</b> is the weirdest character in the game - period.

            We're talking about a talking, robotic cat riding a giant stuffed moogle that works as a fortune teller in the Gold Saucer and, after reading the party's fortunes, takes said prophecy as an excuse to force himself into the party.

            Later on we discover that he's actually a Shinra spy, remotely controlled by Reeve, the head of Shinra's Urban Development department, but we still can't get rid of him because he <i>helds Marlene (Barret's daughter) hostage</i> - I would be lying if I told you I was ok with this bit.

            After his betrayal is consumed, leading to Shinra getting a hold of the Keystone and beating the party to the Temple of the Ancients, he's <u>supposed</u> to redeem himself by sacrificing himself to let the party escape from the crumbling temple.

            His sacrifice is a <i>weird</i> scene, as you wouldn't expect it to be such an emotional moment given that, first and foremost, <i>it's a robot</i>, but he is also a Shinra spy - the whole fact it's played in such a dramatic way feels off.

            All that drama then leads to a new Cait Sith joining the party straight away, so what's the big deal?

            <i>Oh, you mean that we're going to permanently losing a <b>different</b> party member?</i>

            Let me take a step back: back in the day, protagonists tended to wear a thick layer of plot armor, and while big death scenes where not unheard of even if we just looked at the franchise, if you played this game without prior knowledge of what would happen, the whole Cait Sith "dying" and coming back would just convince you that Aerith would eventually come back as well.

            In turn, Aerith's permanent death struck even harder, because <i>back in a world where you don't know what will eventually happen</i>, meeting her in the City of the Ancients would be expected to be the moment when she re-joins the party.

            After the beginning of Disk 2, he (<i>also</i>) basically betrays Shinra and sets in motion the plan of rescuing Barret and Tifa from a broadcasted capital punishment, leading to a second half of the game where the tables are turned and he acts as a spy <i>for</i> the party.

            All in all I'll put it bluntly and say that I never liked him and I've never fully accepted the way both the party and Shinra accept his contribution to the story, but even masterpieces have their flaws, don't they?
        `)}
        <CustomImage
            alt="Cid"
            src={Cid}
            align="left"
        />
        {splitText(`
            <b>Cid</b>, according to the canon, is 32, and I think this section could just end here.

            Sadly, though, I need to write some more because the images in the section would end up being all stuck together :(

            As a character, Cid has a different kind of history with Shinra: in the past he was a pilot for them -proudly, its best one, according to himself- and that lead to him being selected as the first human to go to space.

            Sadly for him, though, one of the scientists in charge of checking that the rocket would be safe for the mission took too long and forced him to abort the launch - a launch that was never rescheduled.

            Over the course of the years, then, a town (aptly named Rocket Town) was built around the rocket, and that's where we meet him.

            Nowadays, every now and then, you'll find people discussing how something like Johnny Bravo or Pepé Le Pew would instantly be canceled given their problematic nature and how the current social climate wouldn't allow for such characters to exist - in my opinion the local Cid representation is a prime example of this: when we first meet him the impression we get of him is that he <i>really</i> likes to verbally abuse his significant other, only to discover some minutes later that said <i>significant other</i> Shera is actually the scientist that <s>prevented him from going to space</s> <i>SAVED HIS LIFE</i> years before.

            And while she was right all along, she still had to put up for years with his abusive behavior.

            At least they didn't add a layer of romanticism to their relationship, but I can't say I'm the biggest fan of this bit and I get why they decided to rewrite his character in Rebirth.

            Leaving this behind: he is basically a comic relief character in his own way thanks to his constant swearing and some of his antics (i.e.: falling asleep during a plot recap in the Ghost Square at the Gold Saucer), but at the same time the party trusts his leadership when both Cloud and Tifa temporarily leave.

            I just don't get why they put his canon age at 32 if they wanted to characterize him as an old geezer, though. Good grief.
        `)}
        <CustomImage
            alt="Yuffie"
            src={Yuffie}
            align="right"
        />
        {splitText(`
            <b>Yuffie</b> is the first of the two optional characters the player can recruit.

            She is a ninja from Wutai, a feudal-japanese inspired nation that was just defeated by Shinra, and that's pretty much it from her.

            As the only teenager in the party, and of course by being an optional extra, she mixes a wide mouth and an unbelievably thin amount of relevant things to say, so there's sadly not much to say about her except for the fact that she was supposed to have a slightly better impact before being demoted to an extra.

            You see, Wutai on its own represents tradition being engulfed and bought over by modernity, as the aftermath of its war with Shinra reducing the whole place to a tourist attraction.

            When the party visits Wutai for the first time after recruiting Yuffie, she will set up an ambush for them by some Shinra soldiers and flee with the party's materia, just to end up with her and Elena being kidnapped by Don Corneo and then saved by the party and the Turks teaming up against the former boss of Sector 5 - the important part though, plot-wise, is that while the player tries to get a hold of her we can witness her angsty relation with her father Godo, lord of Wutai, that she sees as a traitor for surrendering to Shinra.

            In the late game she can try to prove her worth by challenging the local five-story pagoda where the strongest warriors of Wutai reside - with the top level being surprising occupied by her father himself.

            After successfully defeating him, he will reveal her that their homeland surrender to the foreign megacorporation is something that he never wanted in the first place, but at the same time it's the only way for Wutai to <i>continue existing</i>.

            He then bids her farewell, prompting her to follow the party on their quest to save the world - and get hold of their materia after that.

            Because, you know, when surrendering is something you do out of survival, you're bound to think of a way to regain your independence somehow, or at least to get some sweet revenge.
        `)}
        <CustomImage
            alt="Vincent"
            src={Vincent}
            align="left"
        />
        {splitText(`
            <b>Vincent</b>, as the other optional character, plays a completely different role in the story.

            A former Turk made into a monster by Hojo's experiments, Vincent is a character with low impact on the story while bringing a lot of <i>flavor</i>.

            When (if) the party meets him for the first time, they'll find him sleeping in a coffin in the basement of Nibelheim's Shinra mansion, a self-imposed exile in order to atone for his past sins.

            Initially he will just share his <i>dislike</i> for Hojo, then add some cryptic bit about Sephiroth and a mysterious woman named Lucrecia, then join the party.

            Over the course of the game he won't have a proper arc, rather than with some sidequest we will just be able to discover more about his backstory via some flashbacks, should the party enter a secret cave where Lucracia still resides.

            Despite all of this <i>marginality</i>, Vincent instantly became a fan-favorite, leading to him having its own spinoff.

            Kudos to Tetsuya Nomura for understanding that a mysterious, brooding character that lurks in the shadows would become so popular anticipating by a handful of years a big wave of emo craze that sadly brought to us the likes of Tokio Hotel, My Chemical Romance, HIM and the likes.
            
            I know I might sound sarcastic, but I really mean it as a compliment - I even like Vincent as a character, don't get me wrong.
        `)}
        <CustomImage
            alt="Sephiroth"
            src={Sephiroth}
            align="right"
        />
        {splitText(`
            <b>Sephiroth</b> is <i>Sephiroth</i>.

            Final Fantasy as a franchise features a number of iconic characters and villains, but very few of them can compete with Sephiroth's popularity.

            Being born as the son of Hojo and Lucrecia and being infused with Jenova's cells before even being born, Sephiroth is technically human, but has been enhanced by alien DNA.

            His phenomenal skills make him breeze through the ranks of SOLDIER, becoming a war hero and an inspiration for many children <i>like Cloud</i>.

            One day then, during the supposedly routine mission to Nibelheim that led to the infamous incident, he discovers old documents about his own origins and, thinking that Jenova is an Ancient, jumps to the conclusion that he is above the whole human race and the true heir of the planet itself.

            After burning down Nibelheim and being confronted by Tifa, Zack and Cloud, he <i>supposedly</i> dies and fall into the Lifestream - his ties with Jenova, though, prevent him from dying and his supernatural abilities let his consciousness to linger on and influence other subjects infused with Jenova Cells - with Cloud among them.

            Over the span of the game, Sephiroth's first real appearance happens in the last act in Midgar, when he takes control of the Jenova corpse held there and then proceeds to free the captive party and assassinate the Shinra president.

            Most of the game is then experienced as the party chasing after him, not knowing that he is in fact manipulating them for its own agenda, up until the point where Cloud gives the Black Materia to his former body and the norther crater collapses.

            During the time skip after the facts in the northern crater, Sephiroth gets fully revived and succesfully summons Meteor, leading to the final act of the game where the party takes some side quests before facing him for the last time at the bottom of the crater itself.

            As already stated, Sephiroth is hands down the breakthrough villain of the franchise, as he mixes a tragic backstory, an eerie and unsettling presence, some serious manipulative skills and a damn cool appearance; some other beloved villains like Kefka and Ardyn fall short on some categories in the comparison, other like Seymour and Barthandelus are just inferior in every way.
        `)}

        <Bookmark id="FF7Cards">The cards</Bookmark>
        <YouTubeVideo videoId={"yAV1Lfkzrn8"} align="right" caption="FF7 appears to be popular in Denmark"/>
        {splitText(`
            Being arguably the most popular entry in the franchise, Final Fantasy 7 not only features its own thematic deck (just recently reprinted with a few altered cards and <i>a code for downloading the original videogame</i>), but also a Starter Kit - an extra couple of underpowered decks to celebrate the rivalry between Cloud and Sephiroth.

            <b>Brace yourselves, this is going to take forever.</b>

            We'll start by the cast of playable characters, then move on to the rest:
            Cloud gets two cards in the "base" set, with <a href="https://gatherer.wizards.com/FIN/en-us/10/cloud-midgar-mercenary" target="_blank" rel="noreferrer">Cloud, Midgar Mercenary</a> being the most valuable one and potentially seeing some constructed play, and <a href="https://gatherer.wizards.com/FIN/en-us/482/cloud-planets-champion" target="_blank" rel="noreferrer">Cloud, Planet's Champion</a> being the face of the RW deck in the Starter Kit.
            Both are Mythic rare, like the <i>third</i> <a href="https://gatherer.wizards.com/FCA/en-us/42/najeela-the-blade-blossom" target="_blank" rel="noreferrer">Cloud Strife</a>: a Through the Ages reprint of Najeela, the Blade-Blossom.

            <a href="https://gatherer.wizards.com/FIN/en-us/129/barret-wallace" target="_blank" rel="noreferrer">Barret Wallace</a>, on the other hand, is a not-that-good uncommon - 4/4 reach for 4 CMC is okay, but the extra ability doesn't really excite me.

            <a href="https://gatherer.wizards.com/FIN/en-us/206/tifa-lockhart" target="_blank" rel="noreferrer">Tifa Lockhart</a> packs a punch (pun intended): she's cheap enough to be playable in older formats while not being that good on her own, but her Landfall trigger seems abusable in a build around deck (she has been added to the MTGO Vintage Cube and seems playable there, even without being game braking).

            <a href="https://gatherer.wizards.com/FIN/en-us/4/aerith-gainsborough" target="_blank" rel="noreferrer">Aerith Gainsborough</a> is another underwhelming one: she's rare but she's basically a legendary, overpriced <a href="https://gatherer.wizards.com/M19/en-us/5/ajanis-pridemate" target="_blank" rel="noreferrer">Ajani's Pridemate</a> with a difficult to trigger extra ability.
            I mean, she's got lifelink, but 2/2 for 3 CMC is not much.

            <a href="https://gatherer.wizards.com/FIN/en-us/412/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timeless Artificer</a> gets his entry here as well, obviously.

            Red XIII and Cait Sith don't get an entry here, while the bonus characters both do: <a href="https://gatherer.wizards.com/FIN/en-us/125/vincent-valentine" target="_blank" rel="noreferrer">Vincent Valentine</a> seems to be a good limited rare, while <a href="https://gatherer.wizards.com/FCA/en-us/60/yuriko-the-tigers-shadow" target="_blank" rel="noreferrer">Yuffie Kisaragi</a> is a Through the Ages reprint of Yuriko, the Tiger's Shadow - a commander with a solid fanbase.

            Despite lacking a couple of main characters, the set features many NPCs:
            <a href="https://gatherer.wizards.com/FIN/en-us/45/zack-fair" target="_blank" rel="noreferrer">Zack Fair</a> as an uncommon can be considered a bit disrespectful, but the design is so story driven that I'll just let this pass.

            <a href="https://gatherer.wizards.com/FIN/en-us/238/rufus-shinra" target="_blank" rel="noreferrer">Rufus Shinra</a> and <a href="https://gatherer.wizards.com/FIN/en-us/113/reno-and-rude" target="_blank" rel="noreferrer">Reno and Rude</a> give Shinra some representation, even just as uncommons.

            (Ok, I guess <a href="https://gatherer.wizards.com/FIN/en-us/118/shinra-reinforcements" target="_blank" rel="noreferrer">Shinra Reinforcements</a> do as well, but come on...)

            <a href="https://gatherer.wizards.com/FIN/en-us/228/jenova-ancient-calamity" target="_blank" rel="noreferrer">Jenova, Ancient Calamity</a>, on the other hand is rare and seems quite strong - probably not a good fit for competitive constructed, but enough to be scary in limited.

            Obviously the Big Bad gets the same treatment as Cloud, with <a href="https://gatherer.wizards.com/FIN/en-us/115/sephiroth-fabled-soldier" target="_blank" rel="noreferrer">Sephiroth, Fabled SOLDIER</a> being a very strong card on its own, while <a href="https://gatherer.wizards.com/FIN/en-us/553/sephiroth-planets-heir" target="_blank" rel="noreferrer">Sephiroth, Planet's Heir</a> is an overcosted, constructed-unplayable mythic rare that stands as the face of a Starter Kit deck.

            The Through the Ages reprint is <a href="https://gatherer.wizards.com/FCA/en-us/49/atraxa-grand-unifier" target="_blank" rel="noreferrer">Sephiroth, the Savior</a> a first-rate card, as it sees actual competitive play even in Legacy.

            Even though they're not really characters, we have to mention three summons here:
            <a href="https://gatherer.wizards.com/FIN/en-us/35/summon-chocomog" target="_blank" rel="noreferrer">Summon: Choco/Mog</a> is the first summon materia we get in the game (by interacting with Choco Bill's chocobos in his farm, after leaving Midgar), but every time the player uses it it has a 1/16 chance of summoning <a href="https://gatherer.wizards.com/FIN/en-us/202/summon-fat-chocobo" target="_blank" rel="noreferrer">Summon: Fat Chocobo</a> instead.

            The <a href="https://gatherer.wizards.com/FIN/en-us/36/summon-knights-of-round" target="_blank" rel="noreferrer">Summon: Knights of Round</a>, instead, is the ultimate summon materia, and players retrieving it from its hidden location in a faraway island (note: you'll need a Gold Chocobo for that) will be rewarded with a spell that makes the rest of the game a complete joke.
        `)}
        <YouTubeVideo videoId={"qf09C7mHxxU"} align="right" caption="FiGhT oN!"/>
        {splitText(`
            <a href="https://gatherer.wizards.com/FIN/en-us/100/fight-on" target="_blank" rel="noreferrer">Fight On!</a> references <i>the boss theme</i> - this is the extent of the coverage this game deserves.
            Just... don't think too much about the flavor text, ok?

            Looking at enemies, <a href="https://gatherer.wizards.com/FIN/en-us/72/scorpion-sentinel" target="_blank" rel="noreferrer">Scorpion Sentinel</a> is the first boss fight of the game (infamous at the time due to a translating error that could confuse players about whether to attack or not while its tail was up), while <a href="https://gatherer.wizards.com/FIN/en-us/84/valkyrie-aerial-unit" target="_blank" rel="noreferrer">Valkyrie Aerial Unit</a> is another piece of machinery that Shinra throws at the party during the run from the Shinra Tower, at the end of the first "chapter".

            Speaking of boss fights, <a href="https://gatherer.wizards.com/FIN/en-us/183/diamond-weapon" target="_blank" rel="noreferrer">Diamond Weapon</a> is a late-game fight that -just for a bit of trivia- wasn't even in the original version of the game.

            <a href="https://gatherer.wizards.com/FIN/en-us/563/ultima-weapon" target="_blank" rel="noreferrer">Ultima Weapon</a>, on the other hand, does not refer to the optional boss of the same name, but to Cloud's <i>actual</i> final weapon.

            Other references to <i>equipments</i> include the iconic <a href="https://gatherer.wizards.com/FIN/en-us/255/buster-sword" target="_blank" rel="noreferrer">Buster Sword</a> aka Cloud's default equipment, a big slab of steel inherited from Zack, and <a href="https://gatherer.wizards.com/FIN/en-us/264/the-masamune" target="_blank" rel="noreferrer">The Masamune</a>, Sephiroth's oversized katana.

            Related but unrelated: for some reason they assigned <a href="https://gatherer.wizards.com/FIN/en-us/40/weapons-vendor" target="_blank" rel="noreferrer">Weapons Vendor</a> to FF7's universe.
            I guess he's the guy selling you batteries down in Sector 5, but given the amount of cards FF7 was assigned, I would have probably given this one to another entry in the franchise.

            <a href="https://gatherer.wizards.com/FIN/en-us/207/tifas-limit-break" target="_blank" rel="noreferrer">Tifa's Limit Break</a> and <a href="https://gatherer.wizards.com/FIN/en-us/126/vincents-limit-break" target="_blank" rel="noreferrer">Vincent's Limit Break</a> don't really count as weapons, but I feel like this is the right section to put them in anyway.

            Then, we have <a href="https://gatherer.wizards.com/FIN/en-us/140/haste-magic" target="_blank" rel="noreferrer">Haste Magic</a> and <a href="https://gatherer.wizards.com/FIN/en-us/53/ether" target="_blank" rel="noreferrer">Ether</a>, a magic spell and an item respectively that are staples of the whole franchise but that, for some reason, got stuck to FF7.

            Now, the former makes sense (see the illustration), but the fact that the latter's flavor text says it <i>Restores 20 MP</i> makes me mad, as they're supposed to be 100...

            Location-wise, we have:
            <a href="https://gatherer.wizards.com/FIN/en-us/286/midgar-city-of-mako" target="_blank" rel="noreferrer">Midgar, City of Mako</a> - the first location of the game, <a href="https://gatherer.wizards.com/FIN/en-us/280/gongaga-reactor-town" target="_blank" rel="noreferrer">Gongaga, Reactor Town</a>, hometown of the late Zack Fair, and <a href="https://gatherer.wizards.com/FIN/en-us/279/the-gold-saucer" target="_blank" rel="noreferrer">The Gold Saucer</a>.

            Our next stop is the <i>story moments</i> category, where we have:
            <a href="https://gatherer.wizards.com/FIN/en-us/5/aerith-rescue-mission" target="_blank" rel="noreferrer">Aerith Rescue Mission</a>, aka the reason the party storms the Shinra Building before running away from Midgar;
            <a href="https://gatherer.wizards.com/FIN/en-us/195/reach-the-horizon" target="_blank" rel="noreferrer">Reach the Horizon</a>, celebrating the party leaving Midgar and starting their real journey;
            <a href="https://gatherer.wizards.com/FIN/en-us/114/resentful-revelation" target="_blank" rel="noreferrer">Resentful Revelation</a>, depicting Sephiroth's discovery of his origins and the beginning of his descent into madness;
            <a href="https://gatherer.wizards.com/FIN/en-us/146/nibelheim-aflame" target="_blank" rel="noreferrer">Nibelheim Aflame</a> - the <i>grand finale</i> of the Nibelheim incident itself.

            We then have <a href="https://gatherer.wizards.com/FIN/en-us/116/sephiroths-intervention" target="_blank" rel="noreferrer">Sephiroth's Intervention</a> that needs no explanation whatsoever.

            <a href="https://gatherer.wizards.com/FCA/en-us/26/stroke-of-midnight" target="_blank" rel="noreferrer">Memories of Nibelheim</a>, printed as a Through the Ages reprint, comes up various times during the game, but I've kept that for last as it's the cornerstone on which Tifa and Cloud find a common ground and help our spiky-haired protagonist recover from its catatonic state.

            <a href="https://gatherer.wizards.com/FIN/en-us/52/eject" target="_blank" rel="noreferrer">Eject</a> is a fun one, and is a nod to the Midgar Zolom battle, a huge serpent that haunts the marshes right outside the Mythril Mines that was infamous for:`)}
        <ul>
            <li><p>being overpowered the first time you encounter it</p></li>
            <li><p>bearing the Beta Enemy Skill</p></li>
            <li><p>designed to be avoided by catching your first Chocobo</p></li>
        </ul>
        <p>Instead of causing a direct gameover, though, it is scripted to kick one party member out of the battle before leveling the rest, allowing the underleveled player to flee and approach the puzzle as intended.</p>
        <CustomImage
            alt="A cute chocobo portrait"
            src={Chocobo}
            align="left"
            maxHeight="256px"
        />
        {splitText(`
            Finally, as a last subcategory, we have a subset of cards related to chocobos, as Final Fantasy 7 features both a full-fledged chocobo catching and breeding system and a racing minigame where you can ride your best prospects.

            <a href="https://gatherer.wizards.com/FIN/en-us/201/sidequest-raise-a-chocobo" target="_blank" rel="noreferrer">Sidequest: Raise a Chocobo</a> references the whole breeding system that can give the player access to special breeds of chocobo able to traverse rivers, mountains or even the <i>whole ocean</<> - in this specific case, the card points out that breeding a blue and a green chocobo will give birth to a black one, able to traverse both rivers and mountains as per its parents' traits combined;

            <a href="https://gatherer.wizards.com/FIN/en-us/131/call-the-mountain-chocobo" target="_blank" rel="noreferrer">Call the Mountain Chocobo</a> depicts a green chocobo, correctly associating it to its ability of traversing mountainous terrain;

            <a href="https://gatherer.wizards.com/FIN/en-us/179/chocobo-racetrack" target="_blank" rel="noreferrer">Chocobo Racetrack</a>, a green uncommon that I would have loved to test in limited, references the Gold Saucer's chocobo racing minigame;

            `)}
            <p><a href="https://gatherer.wizards.com/FIN/en-us/210/traveling-chocobo" target="_blank" rel="noreferrer">Traveling Chocobo</a>, other than seeming a very commander-playable card mythic rare, does come in <a href="https://gatherer.wizards.com/FIN/en-us/551a/traveling-chocobo" target="_blank" rel="noreferrer">many</a>, <a href="https://gatherer.wizards.com/FIN/en-us/551b/traveling-chocobo" target="_blank" rel="noreferrer">many</a>, <a href="https://gatherer.wizards.com/FIN/en-us/551c/traveling-chocobo" target="_blank" rel="noreferrer"><b>many</b></a> <a href="https://gatherer.wizards.com/FIN/en-us/551d/traveling-chocobo" target="_blank" rel="noreferrer">different</a> <a href="https://gatherer.wizards.com/FIN/en-us/551e/traveling-chocobo" target="_blank" rel="noreferrer">colored</a> <a href="https://gatherer.wizards.com/FIN/ja-jp/551/traveling-chocobo" target="_blank" rel="noreferrer">variants</a>, so that we can be absolutely sure to squeeze collectors' pockets dry.</p>
        <Bookmark id="FF7ThemeDeck">The pre-constructed deck</Bookmark>
        {splitText(`
            The decklists for the Final Fantasy VII Commander deck, titled "Limit break", can be found <a href="https://magic.wizards.com/en/news/announcements/final-fantasy-commander-decklists#FFVII" target="_blank" rel="noreferrer">here</a>.

            It is a naya (green-white-red) deck focusing on equipments/creature strength.
        `)}
        <CustomImage
            alt="Cloud alternate art"
            align="right"
            src="https://gatherer-static.wizards.com/Cards/medium/DAC114E242B476F0E8B9AEC55A0B1ABA23C8D62F50DC8BAE2AB70D860E3B8E6C.webp"
        >
            <i>If only the card was as cool as this alternate art...</i>
        </CustomImage>
        {splitText(`
            As usual, we'll start from the cast:
            <ul>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/76/aerith-last-ancient" target="_blank" rel="noreferrer">Aerith, Last Ancient</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/79/barret-avalanche-leader" target="_blank" rel="noreferrer">Barret, Avalance Leader</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/2/cloud-ex-soldier" target="_blank" rel="noreferrer">Cloud, Ex-SOLDIER</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/6/tifa-martial-artist" target="_blank" rel="noreferrer">Tifa, Martial Artist</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/54/cait-sith-fortune-teller" target="_blank" rel="noreferrer">Cait Sith, Fortune Teller</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/13/cid-freeflier-pilot" target="_blank" rel="noreferrer">Cid, Freeflier Pilot</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/91/red-xiii-proud-warrior" target="_blank" rel="noreferrer">Red XIII, Proud Warrior</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/64/vincent-vengeful-atoner" target="_blank" rel="noreferrer">Vincent, Vengeful Atoner</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/65/yuffie-materia-hunter" target="_blank" rel="noreferrer">Yuffie, Materia Hunter</a></li>
            </ul>

            Then, some good old NPCs:
            <ul>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/53/avalanche-of-sector-7" target="_blank" rel="noreferrer">Avalanche of Sector 7</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/66/bugenhagen-wise-elder" target="_blank" rel="noreferrer">Bugenhagen, Wise Elder</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/18/elena-turk-recruit" target="_blank" rel="noreferrer">Elena, Turk Recruit</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/21/heidegger-shinra-executive" target="_blank" rel="noreferrer">Heidegger, Shinra Executive</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/69/professor-hojo" target="_blank" rel="noreferrer">Professor Hojo</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/92/sephiroth-fallen-hero" target="_blank" rel="noreferrer">Sephiroth, Fallen Hero</a></li>
            </ul>

            <a href="https://gatherer.wizards.com/FIC/en-us/61/summon-kujata" target="_blank" rel="noreferrer">Summon: Kujata</a> is actually more powerful here than in the actual videogame, given that it attack featured four different elements (one of them being non-elemental, FF7 is weird I know) and enemies that resisted -<i>or absorbed</i>- just one of them could invalidate its effect <i>or worse</i>.

            <a href="https://gatherer.wizards.com/FIC/en-us/72/summoning-materia" target="_blank" rel="noreferrer">Summoning Materia</a> is not really a summoning magic, but it's conceptually related.

            <a href="https://gatherer.wizards.com/FIC/en-us/98/conformer-shuriken" target="_blank" rel="noreferrer">Conformer Shuriken</a> and <a href="https://gatherer.wizards.com/FIC/en-us/100/wrecking-ball-arm" target="_blank" rel="noreferrer">Wrecking Ball Arm</a> are the other two equipments featured in this subset, and are strongly tied to the deck's theme of growing creatures' power.

            <a href="https://gatherer.wizards.com/FIC/en-us/14/clouds-limit-break" target="_blank" rel="noreferrer">Cloud's Limit Break</a> is a modal spell referencing Cloud's own limit skills - some flavorful choice, but nothing to write home about.

            <a href="https://gatherer.wizards.com/FIC/en-us/62/ultimate-magic-meteor" target="_blank" rel="noreferrer">Ultimate Magic: Meteor</a> and <a href="https://gatherer.wizards.com/FIC/en-us/32/ultimate-magic-holy" target="_blank" rel="noreferrer">Ultimate Magic: Holy</a> are the two spells that, in the end, decide the fate of the planet, after being summoned by Sephiroth and Aerith respectively.

            <a href="https://gatherer.wizards.com/FIC/en-us/22/helitrooper" target="_blank" rel="noreferrer">Helitrooper</a> is an enemy you'll find while climbing sector 7's pillar, some aerial enemy infantry that's undoubtedly very cheap compared to what we'd expect from Shinra's <a href="https://gatherer.wizards.com/FIC/en-us/25/soldier-military-program" target="_blank" rel="noreferrer">SOLDIER Military Program</a>, as Cloud points out to Barret after the first bombing mission. 

            <a href="https://gatherer.wizards.com/FIC/en-us/67/lifestreams-blessing" target="_blank" rel="noreferrer">Lifestream's Blessing</a> represents the final location, at the bottom of the northern crater, where the party faces Sephiroth for the last time.

            <a href="https://gatherer.wizards.com/FIC/en-us/236/clever-concealment" target="_blank" rel="noreferrer">Clever Concealment</a> seems a commander playable card, while also referencing one of our protagonist's best moments.
            
            <i>Dulcis in fundo</i>, we have: <a href="https://gatherer.wizards.com/FIC/en-us/253/secret-rendezvous" target="_blank" rel="noreferrer">Secret Rendezvous</a>, a reprint from Strixhaven with four alternate arts, one for which possible date Cloud could be invited to:
        `)}
        <CustomImage
            src="https://gatherer-static.wizards.com/Cards/medium/7DE5460769359C9EDFADC917219C1ED47A22D956341F3EA468C6C7442C310BC4.webp"
            alt="Aerith date"
            align="left"
        />
        <CustomImage
            src="https://gatherer-static.wizards.com/Cards/medium/538D3EDEB3B0419BA277FD123373BD8C5EF419E824E9E079EBB98C3A0A572DC9.webp"
            alt="Tifa date"
            align="right"
        />
        <CustomImage
            src="https://gatherer-static.wizards.com/Cards/medium/349AAD35CD9B59303117D4937CB6E423A89F3445348ADB3D6E5A78E990584E2D.webp"
            alt="Barret date"
            align="left"
        />
        <CustomImage
            src="https://gatherer-static.wizards.com/Cards/medium/25A28783813EEB946C37574B9332FCD7FAEAFDCC043C67DAED7443A3981D891F.webp"
            alt="Yuffie date"
            align="right"
        />
        </>
    )
}

export default FF7;