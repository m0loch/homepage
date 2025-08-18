import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from "../../../components/posts/inlineSpoiler";
import CustomImage from "../../../components/posts/customImage";
import YouTubeVideo from '../../../components/posts/youtubeVideo';

import CoverArt from '../../../images/post-0063/ff6/cover.jpg';
import Cast from '../../../images/post-0063/ff6/cast.jpeg';
import Opening from '../../../images/post-0063/ff6/opening.png';
import Narshe from '../../../images/post-0063/ff6/narshe.png';
import FloatingContinent from '../../../images/post-0063/ff6/floating.png';
import Terra from '../../../images/post-0063/ff6/terra.jpeg';
import Locke from '../../../images/post-0063/ff6/locke.jpeg';
import Edgar from '../../../images/post-0063/ff6/edgar.jpeg';
import Sabin from '../../../images/post-0063/ff6/sabin.jpeg';
import Celes from '../../../images/post-0063/ff6/celes.jpeg';
import Shadow from '../../../images/post-0063/ff6/shadow.jpeg';
import Cyan from '../../../images/post-0063/ff6/cyan.jpeg';
import Gau from '../../../images/post-0063/ff6/gau.jpeg';
import Setzer from '../../../images/post-0063/ff6/setzer.jpeg';
import Strago from '../../../images/post-0063/ff6/strago.jpeg';
import Relm from '../../../images/post-0063/ff6/relm.jpeg';
import Mog from '../../../images/post-0063/ff6/mog.jpeg';
import Umaro from '../../../images/post-0063/ff6/umaro.jpeg';
import Gogo from '../../../images/post-0063/ff6/gogo.jpeg';
import Kefka from '../../../images/post-0063/ff6/kefka.jpeg';

function FF6() {
    return (
        <>
        <Bookmark id="FF6Nutshell">A bit of context</Bookmark>
        <CustomImage
            alt="Cover art for the original Final Fantasy VI"
            src={CoverArt}
        />
        {splitText(`
            Final Fantasy 5, for the first time in the series, managed to sell over 2 million copies, without even being localized in the west.
            That came after Final Fantasy 4, a successful game in his own right, managed to be the first game released on the Super Nintendo and effectively set the bar for the whole JRPG genre.
        `)}
        <CustomImage
            alt="The cast of Final Fantasy VI (most of, at least)"
            src={Cast}
            align="right"
        >
            <i>The cast of Final Fantasy VI (except for Umaro and Gogo), as imagined by Yoshitaka Amano</i>
        </CustomImage>
        {splitText(`
            Luckily enough, Square was able to maintain the momentum making Final Fantasy 6 the culmination of everything the series had built up to that point while, at the same time, taking a completely different direction under certain well-consolidated aspects of the series.

            If the first five games struggled finding their direction, having to balance between character development and customizability, FF6 answers by packing together a big cast of characters, each with their own story and motivations, while ditching any semblance of job system in favour of the one based on Magicites.
            If the series played with the idea of being fantasy but with a sprinkle of science fiction here and there, this new installment coats everything in a layer of steampunk, breaking the mold for everything that will come after it.

            The game came out in Japan on April 2nd 1994, closing the SNES era of the series, and featured an extensive cast of whopping 14 characters, each one defined by their own special ability and equipment pool, sometimes (see Gau, Gogo and Umaro) playing with a completely different set of rules.

            By the way, this is the last game where the character design is handled by Yoshitaka Amano, who will be replaced by Tetsuya Nomura starting from Final Fantasy 7.
        `)}

        <Bookmark id="FF6Game">The game</Bookmark>
        <p>Once again, and for the last time,the game takes a step back from its immediate predecessor and builds on the "opposite" branch of the series: if FF5 is a spiritual successor to FF3, FF6 is a closely tied to FF4 and FF2.</p>
        <br/>
        <CustomImage
            alt="Terra, Vicks and Wedge approaching Narshe"
            src={Opening}
            align="left"
        >
            <i>Terra, Vicks and Wedge approaching Narshe</i>
        </CustomImage>
        {splitText(`
            The introductory sequence makes us follow two soldiers of the Empire, Vicks and Wedge, that are sent to the snowy town of Narshe to investigate the presence of a frozen Esper while testing a new weapon: a mind-controlled Terra, our first <i>actual</i> playable character.

            Something goes wrong when she meets said Esper, and from that moment on the plot will focus on her struggle in running away from the Empire and joining the Returners, the organized resistance... until <i>things</i> happen.

            At this point one might think that Terra is the protagonist of the game - she's not. She is definitely central to the plot, but in contrast to FF4 where Cecil is always in the center of the action, FF6 alternates between various characters, having in some instances parallel storylines with different active parties.
        `)}
        <CustomImage
            alt="Resisting the Empire with Banon in Narshe"
            src={Narshe}
            align="right"
        >
            <i>Resisting the Empire with Banon in Narshe</i>
        </CustomImage>
        {splitText(`
            Final Fantasy 6 is a big story, featuring an extensive cast of characters where only a handful (i.e.: Gogo, Umaro... Mog?) are completely optional and detached from the main plot, and while maintaining some wacky elements here and there (hi there Ultros), it goes to some very dark places.

            As previously mentioned, the journey starts in Narshe where the inciting incident -Terra meeting the Esper and escaping the Empire's control- happens, prompting Locke, Edgar and, over time, the rest of the gang to consider her a weapon to be used by the rebellion against Emperor Gestahl.

            During this first part of the adventure, the party will form discover the real origins of Terra, the empire's plans to harvest the power of the Espers and will witness many traumatic events, like Kefka (the Emperor's right hand) poisoning the waters of Doma, killing Cyan's family and friends, or the betrayal of General Leo, an high official of the Empire with whom the Returners thought they could negotiate peace.
        `)}
        <CustomImage
            alt="The confrontation on the Floating Continent"
            src={FloatingContinent}
            align="left"
        >
            <i>The confrontation on the Floating Continent</i>
        </CustomImage>
        {splitText(`
            The plot will then reach its climax with the party reaching the Floating Continent to try to stop the Emperor from using the power of the Warring Triad and obtain supremacy over the world - just to witness Kefka betray him, ascend to godhood and cause the end of the world.

            The second half of the game opens with Celes being stuck with Cid on a deserted island and, after managing to leave in a way that I'm not going to discuss because it traumatized me back in the day, she will explore the post-apocalyptic world trying to reunite the rest of the party and stop Kefka's reign of terror.

            Now, as you can see, the game is <b>grim</b>, and most of the characters bear the scars of their past, being it a far away episode like Setzer's or Shadow's losses, or some actual genocide that happens before our very eyes like the Doma incident or Kefka, supposedly in prison, showing up during a peace treaty and killing General Leo and a large number of Espers.

            I will end this section talking about the magicite system: while every character has their own set of equipment and abilities that define them, eventually the player will get a hold of magicites, the crystallized remains of Espers that don't just allow the equipped character to summon them in battle, but will teach them spells and give them stat boosts - this kind of balance will define the next installments of the series, transitioning it to the "modern era".
        `)}

        <Bookmark id="FF6Cast">The cast</Bookmark>
        <p>As mentioned, the cast is made up of 14 characters that share the spotlight throughout the game, even if not equally for obvious reasons.</p>
        <br/>
        <CustomImage
            alt="Terra"
            src={Terra}
            align="left"
        />
        {splitText(`
            <b>Terra</b> is a young woman naturally gifted in magic, in a world where not only people aren't supposed to use it, but that has embraced technology after the War of the Magi caused all sorts of disasters 1000 before the events of the game.
            She's deployed to Narshe by the Empire that's mind controlling her, but when she meets the frozen Esper Tritoch she snaps out of it and becomes fugitive.

            The first part of the game revolves around the party forming up and bringing her to the Returners, but her character arc is completely focused on her struggle to find her place in the world, given that at first she just has no recollection of her past and, later on, she even learns she's just half-human.

            When Celes and the rest of the party find her in the World of Ruin, she has found her place in the town of Mobliz where only children managed to survive, thus finding meaning and purpose in protecting them.
        `)}
        <CustomImage
            alt="Locke"
            src={Locke}
            align="right"
        />
        {splitText(`
            <b>Locke</b> is a <s>thief</s> treasure hunter that works with the Returners. He sets the events in motion when he saves Terra from the Empire in Narshe, and for most of the game he is a driving force of the plot, also saving Celes from her prison in South Figaro.

            We then discover that he lives with his own trauma as his then girlfriend, Rachel, died by the hands of the Empire (so cute), and that he is paying an old man in Kohlingen to preserve her corpse in the hopes that one day he will be able to bring her back to life (<i>less cute</i>).

            He is a solid character but a bit creepy - it's no wonder that his character arc is just about learning to let the past go.

            It is strongly implied that, after the end of the game, he and Celes end up moving on from their traumas together, but I thing it's up to the player to believe what they want about it.
        `)}
        <CustomImage
            alt="Edgar"
            src={Edgar}
            align="left"
        />
        {splitText(`
            <b>Edgar</b> and <b>Sabin</b> are, respectively, the king of Figaro and his estranged twin brother: when the old king died, Edgar took his crown and started to secretly work with the Returners, while Sabin left for the mountains to train in martial arts under the tutelage of his master, Duncan.

            Despite being twins they are designed to be very different: Edgar is smart and resourceful, with his special skill being the Tools command in order to let players remember that he isn't just the king of Figaro that keeps the Empire at arms length with the sheer power of diplomacy, but also a skilled engineer and inventor.

            Sabin, on the other hand, i mostly defined by his phisical prowess, but he also shows wisdom and kindness.
        `)}
        <CustomImage
            alt="Sabin"
            src={Sabin}
            align="right"
        />
        {splitText(`
            They don't have a real arc like Terra, Celes or even Locke, but the centrality of Castle Figaro in the plot keeps them in the spotlight anyway, creating this weird situation where they don't have a proper character growth while being pretty much always at the center of the action.

            The closest thing we have is the discovery of what happened when their father passed away and their decision to choose who would take the throne by tossing a coin: in the beginning you would think that the apparently shallow Edgar won while a bitter Sabin reacted by self-exiling, but in the end we discover that Edgar rigged the coin toss in order to let his brother <i>win</i> and choose a life of freedom.

            In the end, they're both kind individuals that share a strong bond even though they have been separated for a decade. Wholesome.

            Also: Sabin can suplex a train.
        `)}
        <CustomImage
            alt="Celes"
            src={Celes}
            align="Left"
        />
        {splitText(`
            <b>Celes</b>, a formerly high-ranking general of the Empire, joins the party as the polar opposite of Terra: while the latter is a natural-born magic user, Celes has been infused with magic by the Empire (the same kind of experiment that drove Kefka crazy, but that's another story); while Terra learns Fire spells by just leveling up, Celes does the same with Ice magic.

            <i>While Terra's arc is all about the search of her own identity, Celes' struggle is about reconnect with her humanity after the martial training she's been through.</i>

            We find her in a prison cell in South Figaro and rescue her during Locke's undercover mission and, after that, they end up bonding <i>but only so much</i>, as she disregards even the idea of anything romantic between them - putting aside his own <i>problems</i>, I mean.

            All in all, she starts of as cold and distant, but ends up going through the Opera House scene and the whole thing with Cid on the island at the beginning of the World of Ruin, I consider this a proper character arc.
        `)}
        <CustomImage
            alt="Shadow"
            src={Shadow}
            align="right"
        />
        {splitText(`
            <b>Shadow</b> is a fan favorite: he's a silent, masked assassin for hire that, even when hired, has a random chance of leaving the party at the end of battles.

            Since he doesn't bond with people, the only way his past is revealed to the player is through some dreams that we can witness when taking a rest at inns, a past where his former self Clyde left behind his injured partner - another thief named Baram - unable to either save him or give him the coup de grâce he was asking for.

            It is heavily implied that, between that episode and when he decided to forfeit his old identity and become Shadow the blade for hire, he briefly moved to Thamasa where he found the time to father Relm with Strago's daughter. He never confirms this, though, as he <u>doesn't bond with people</u>.

            Despite his detached demeanor, though, he takes on Kefka head on the Floating Continent in order to buy the party some time to escape, to the point that if the player is not careful and leaves without waiting for him to catch up, he will just <i>not show up</i> in the World of Ruin...

            But don't worry, if you do wait for him you will be able to recruit him again and have a <i>different kind of bad ending</i> anyway. Some people just can't overcome their past.
        `)}
        <CustomImage
            alt="Cyan"
            src={Cyan}
            align="left"
        />
        {splitText(`
            <b>Cyan</b> is an old fashioned samurai from Castle Doma. Sabin encounters him after the poisoning of his castle by Kefka and he joins the party to get his revenge against the Empire.

            Despite his tragic backstory, he is not characterized as brooding or angsty, he is instead a middle-aged goofball that's wiser than most of the party while being completely non-proficient with anything technological.

            We meet him again in the World of Ruin while he is secretly exchanging letters with Lola, a girl from Maranda, impersonating her dead boyfriend in order to keep her spirits up - not the best of ideas, to be honest.

            If the party stops in Doma during the events of the World of Ruin while having him in the party, a subquest will be triggered and he'll be able to have some proper closure with his past, as his hastened farewell during the Phantom Train scene was lackluster to say the least.
        `)}
        <CustomImage
            alt="Gau"
            src={Gau}
            align="right"
        />
        {splitText(`
            <b>Gau</b> has been raised by the beasts of the Veldt after he has been abandoned there in his infancy, rendering him the local version of Tarzan/Mowgli.

            He is by far the most unusual character of the "main cast", given that he has access to limited equipment and that his fighting style is based on the Rage command that, once used, will have him mimic the abilities of a monster he has previously studied and incorporated in his repertoire.

            Expanding the list of available Rages means taking him to the Veldt and have him use the Leap command, causing him to leave the party for a small amount of battles while he "studies" the monster in question.

            Leaving his weird mechanics aside, Gau's broken english doesn't prevent his humanity from shining through, as he is shown in various scenes to be kind-hearted, fun-loving and, when needed, also empathetic to his mates' struggles.

            During the World of Ruin, after finding him again in the Veldt, Sabin correctly identifies an old man leaving in a secluded hut as Gau's father and teaches him some manners in order to reunite them - this goes wrong on so many levels that I don't even know where to start, but as infuriating the whole episode is, it is a golden example of how innocent and pure Gau is.
        `)}
        <CustomImage
            alt="Setzer"
            src={Setzer}
            align="left"
        />
        {splitText(`
            <b>Setzer</b> is a weird one. He is a gambler and a womanizer, and the only redeeming quality he has in its first interactions with the party is that <i>he owns an airship</i>.

            After getting in touch with him by having Celes impersonate an opera singer he's trying to kidnap, we learn that he never got over the death of his rival and romantic interest Daryl, who died in an airship accident long ago.

            After his airship is destroyed during the half-time apocalypse, he sinks into despair... until Celes beats some sense into him and he joins the party again with a "new" airship, the Falcon (technically: Daryl's airship that he repaired and kept for years as a memento).

            Don't get me wrong, Setzer is a charming character, I feel like I'm one of the few people that actually consider him an insufferable jerk. But I guess that's still entertainment, isn't it?
        `)}
        <CustomImage
            alt="Strago"
            src={Strago}
            align="right"
        />
        <p><b>Strago</b> and <b>Relm</b> are a grandfather-granddaughter duo that live in the town of Thamasa, where humans can use magic and try to keep it a secret from the rest of the world.</p>
        <br/>
        <p>Mechanically, Strago is a blue mage that can learn monster abilities by using the Lore command, while Relm is an artist that can use her Sketch command to draw monsters and use their abilities in battle<InlineSpoiler mask='*'>...and cause lots of bugs, but I digress</InlineSpoiler>.</p>
        <br/>
        <p>In the World of Ruin, Relm just ends up working as an artist for some random noble, while Strago, thinking his granddaughter is lost, ends up in a cult and snaps out of it only if he is approached by a party having Relm in its ranks.</p>
        <CustomImage
            alt="Relm"
            src={Relm}
            align="left"
        />
        {splitText(`

            They're a fun duo, even if a bit cartoonish at times.

            In particular, one would expect their dynamic to be centered around Strago being a wise old man protecting a childish granddaughter, bur their dynamic is ofter reversed, with Strago acting out and Relm being measured in every circumstance.

            This whole backstory reaches its climax in a missable scene in the World of Ruin where Strago discovers that Gungho, another inhabitant of Thamasa, got gravely injured while hunting for Hidon, a legendary monster with whom Strago developed a Moby Dick-esque obsession from his monster hunting days.

            After defeating Hidon we witness Strago finally closing his own character arc - and then discover that Gungho was never injured: he just put up an act, following a request from Relm, in order to help Strago muster the courage to actually put an end to his obsession once and for all.
        `)}
        <CustomImage
            alt="Mog"
            src={Mog}
            align="right"
        />
        {splitText(`
            <b>Mog</b> is... a Moogle.

            The party encounters him for the first time in Narshe during the "tutorial" part of the game, when he and other moogles help Terra and Locke escape from the Empire's soldiers, but the player will have the chance of recruiting him only after returning to Narshe later in the game.

            And when I say "have the chance to" I mean it: while the first time you encounter him with just Terra and Locke he will fight alongside your party, you can just never recruit him for the rest of the game, making him <i>almost</i> optional...?

            Your mileage may vary, I guess.

            Anyway, he is the only moogle that can speak the human language, a skill he's been taught by the Esper Ramuh when, in his dreams, he instructed him to join the party.

            Fun fact: for some reason, even though he's basically a comic relief character, the marketing campaign in the west focused heavily on him. Go figure.
        `)}
        <CustomImage
            alt="Umaro"
            src={Umaro}
            align="left"
        />
        {splitText(`
            <b>Umaro</b> is a yeti living in the mountains above Narshe that can be recruited by Mog.

            You know your character arc is doomed when you are an optional character that can only be recruited by another optional character, don't you?

            He is so optional that the final dungeon is designed to be tackled with three parties, and while 3 times 4 (the maximum number of characters per party), Umaro is the 13th entry of this section - you do the math.

            Jokes aside, he is an experimental character that with a big gimmick: he's basically a berserker and the player has basically no control over him, his equipment is very limited but he has a couple of custom relics just for him: the Rage Ring will let him throw <i>other party members</i> at enemies, while the Blizzard Orb will let him use Snowstorm, an ice-based magic attack that deals damage to all enemies (too bad his magic stats are abysmal).
        `)}
        <CustomImage
            alt="Gogo"
            src={Gogo}
            align="right"
        />
        {splitText(`
            <b>Gogo</b> is a mimic living inside a sandworm in a desert.
            
            Well, "optional character", right?

            Some of the considerations we made for Umaro apply here as well, but while the former's gimmick is acting on his own, Gogo is the most feasible of characters being able to "equip" skills from other characters.

            Sadly, though, his stats are nothing to write home about, so it's difficult to justify having an inferior second version of a character when you can just put the original in your party.

            All in all, using Gogo can be fun, but I think that the only real reason to put him in the game is to reference the Mimic class from FF5, which <i>can</i> be seen as a good idea until you realize that here in the west nobody that played this game when it came out had had the chance to play FF5 - unless they knew japanese and had some japanese hardware at their disposal, of course.
        `)}
        <CustomImage
            alt="Kefka"
            src={Kefka}
            align="left"
        />
        {splitText(`
            And then, we have the big antagonist: <b>Kefka</b>
            
            At the beginning of the game he's one of the top generals of the Empire among Celes and General Leo, and the game makes it very clear that he's a psycopath.

            He is abusive towards his subordinates, needlessly cruel whenever he can, and his general character design built around the jester/evil clown trope is explicitly meant to unsettle the player.

            With the game progressing we discover that he got his powers from the experiments that the Empire conducted on Espers, and that he lost his mind when infused with magic powers - still the Emperor ends up trusting him more than anyone else, going as far as to fake jailing him in order to let him betray General Leo during a fake peace treaty with the Returners.

            His betrayal of Emperor Gestahl is almost <i>karmic</i>, and even though Kefka himself appears almost too cheesy at times, he is the first great villain of the series and we can see in him the blueprint of various future antagonists like Sephiroth or Ardyn.

            But <i>why</i> is he so beloved? He is not really a complex character, nor is his design particularly original or anything: he is effective because unlike the previous villains he is involved with the party for the full duration of the game, allowing the player to know him, familiarize with him and, ultimately, be relieved in seeing him go down in the end.

            This was something that was already addressed in FF5, with Exdeath being a very generic villain that built up some interaction with the party during the course of the game and managed to still be more memorable than the likes of Zemus and the eleventh hour switch seen in FF4, and while nowadays we can easily recognize when some work of art is lacking in building up a proper villain, this is a huge stepping stone for the series.
        `)}

        <Bookmark id="FF6Cards">The cards</Bookmark>
        {splitText(`
            The first thing we have to mention here is this is the first game of the series that deserved his own thematic deck, so this section is actually split in two as you might have already noticed.

            As a consequence, even though the full set of playable characters is 14, not everyone was awarded is own card in the base set - but we are already accustomed to this, ain't we?

            Still, I find that having only <a href="https://gatherer.wizards.com/FIN/en-us/245/terra-magical-adept" target="_blank" rel="noreferrer">Terra, Magical Adept</a>, <a href="https://gatherer.wizards.com/FIN/en-us/234/locke-cole" target="_blank" rel="noreferrer">Locke Cole</a>, <a href="https://gatherer.wizards.com/FIN/en-us/51/edgar-king-of-figaro" target="_blank" rel="noreferrer">Edgar, King of Figaro</a> and <a href="https://gatherer.wizards.com/FIN/en-us/54/gogo-master-of-mimicry" target="_blank" rel="noreferrer">Gogo, Master of Mimicry</a> is a bit lacking.
            The inclusion of Gogo, in particular, is almost offensive to me, <i>even though I'm building a deck around him</i>, but let's not mix principles and mechanics.

            Terra also gets another card in the form of a reprint: <a href="https://gatherer.wizards.com/FCA/en-us/5/urza-lord-high-artificer" target="_blank" rel="noreferrer">Terra Brandford</a>, and since she's also referenced in <a href="https://gatherer.wizards.com/FIN/en-us/185/esper-origins" target="_blank" rel="noreferrer">Esper Origins</a> and that she's the face of the Commander precon deck I can safely say that she's one of the most beloved characters in the series, at least according to Wizards of the Coast.

            On the opposite side of the spectrum, the main antagonist Kefka confirms his popularity by having such a monster of a card designed around him: <a href="https://gatherer.wizards.com/FIN/en-us/231/kefka-court-mage" target="_blank" rel="noreferrer">Kefka, Court Mage</a>, while also making his own appearance in the Commander deck and having his own reprint as <a href="https://gatherer.wizards.com/FCA/en-us/14/purphoros-god-of-the-forge" target="_blank" rel="noreferrer">Kefka Palazzo</a>.

            Add in this reprint: <a href="https://gatherer.wizards.com/FCA/en-us/7/bolass-citadel" target="_blank" rel="noreferrer">Kefka's Tower</a> as well as <a href="https://gatherer.wizards.com/FIN/en-us/143/laughing-mad" target="_blank" rel="noreferrer">Laughing Mad</a> -referencing to the eerie laugh that ofter accompanies Kefka's appearances throughout the game- and <a href="https://gatherer.wizards.com/FIN/en-us/144/light-of-judgment" target="_blank" rel="noreferrer">Light of Judgment</a> that refers to the powers he gets after the events of the Floating Continent and we have a good measure of his impact in the series.
            Oh, we also have <a href="https://gatherer.wizards.com/FIN/en-us/111/poison-the-waters" target="_blank" rel="noreferrer">Poison the Waters</a>...

            Other notable appearances include:<ul>
            <li><a href="https://gatherer.wizards.com/FIN/en-us/411/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timeless Artificer</a> as the Empire's top scientist, the one who Celes become a magic user in the first place and saves her after the events on the floating continent, but also the same person that enabled Kefka's rise to power (among other things like creating Magitek armors...);</li>
            <li><a href="https://gatherer.wizards.com/FIN/en-us/83/ultros-obnoxious-octopus" target="_blank" rel="noreferrer">Ultros, Obnoxious Octopus</a> - a recurring comic relief villain that <i>also</i> let me win a draft but I guess nobody cares about this;</li>
            <li><a href="https://gatherer.wizards.com/FIN/en-us/161/summon-esper-ramuh" target="_blank" rel="noreferrer">Summon: Esper Ramuh</a> that, while being an Esper, does actually have a presence in the game;</li>
            <li><a href="https://gatherer.wizards.com/FIN/en-us/110/phantom-train" target="_blank" rel="noreferrer">Phantom Train</a> maybe should be considered a story beat rather than a character, but since you can <a href="https://gatherer.wizards.com/FIN/en-us/164/suplex" target="_blank" rel="noreferrer">Suplex</a> it we'll consider it anyway.</li>
            </ul>

            Speaking of story beats, I consider <a href="https://gatherer.wizards.com/FIN/en-us/68/retrieve-the-esper" target="_blank" rel="noreferrer">Retrieve the Esper</a> a reference to the first, introductory mission, and the same goes for <a href="https://gatherer.wizards.com/FCA/en-us/47/natures-claim" target="_blank" rel="noreferrer">Search for the Frozen Esper</a> (which, after having seen it in real life, wins my personal "ugliest card ever" award).
        `)}<YouTubeVideo videoId={"kdot7vHzmZg"} align="right" caption='Did you say "Opera Love Song"?' />
            {splitText(`
            The other entries for this categories are <a href="https://gatherer.wizards.com/FIN/en-us/27/moogles-valor" target="_blank" rel="noreferrer">Moogle's Valor</a>, referencing how a pack of moogles helped out Terra and Locke in Narshe, <a href="https://gatherer.wizards.com/FIN/en-us/75/stolen-uniform" target="_blank" rel="noreferrer">Stolen Uniform</a> as a nod to Locke's solo mission in South Figaro, and <a href="https://gatherer.wizards.com/FIN/en-us/147/opera-love-song" target="_blank" rel="noreferrer">Opera Love Song</a> which is pretty self-explanatory as it's probably the most famous moment of the whole game.

            <a href="https://gatherer.wizards.com/FIN/en-us/67/relms-sketching" target="_blank" rel="noreferrer">Relm's Sketching</a>, on the other hand, is more a reference to her abilities rather than to a specific event in the game. Unless you ended up corrupting your savefile using her sketch command, but that would be a stretch..

            Now, for some minor references!
            <a href="https://gatherer.wizards.com/FIN/en-us/9/battle-menu" target="_blank" rel="noreferrer">Battle Menu</a> is an entry that is difficult to tie to just FF6, but as we already mentioned in previous entries the designers just <i>had</i> to (by the way: is that Phunbaba...?).

            The <a href="https://gatherer.wizards.com/FIN/en-us/24/magitek-armor" target="_blank" rel="noreferrer">Magitek Armor</a> is an iconic weapon (or armor, if you will) and totally deserves to be celebrated with its own card.

            The <a href="https://gatherer.wizards.com/FIN/en-us/177/cactuar" target="_blank" rel="noreferrer">Cactuar</a> card celebrates the first appearance of the iconic cactus-like monster, and the idea of it bouncing back to the owner's hand every other turn is a nice reference to their in-game tendency of running away from battles.

            The <a href="https://gatherer.wizards.com/FIN/en-us/141/hill-gigas" target="_blank" rel="noreferrer">Hill Gigas</a>, on the other hand, is just a kind-of-anonymous and generic monster that, in my opinion, could just have been a reprint of the classic Hill Giant, a vanilla 3/3 for 3R.

            The <a href="https://gatherer.wizards.com/FIN/en-us/29/phoenix-down" target="_blank" rel="noreferrer">Phoenix Down</a> is a recurring item in the franchise, the fact that they decided to have it tied to FF6 in particular can either be a nod to Rachel's substory or to the fact that in the original localization they mistranslated it as <i>Fenix Down</i>, but I guess we'll never know.

            Two in-game locations are mentioned in the Town subset: the fever-dream capital of the Empire, <a href="https://gatherer.wizards.com/FIN/en-us/291/vector-imperial-capital" target="_blank" rel="noreferrer">Vector, Imperial Capital</a>, and <a href="https://gatherer.wizards.com/FIN/en-us/284/jidoor-aristocratic-capital" target="_blank" rel="noreferrer">Jidoor, Aristocratic Capital</a>, home of the Opera House, the Auction House and the art gallery where Relm works in the World of Ruin.
        `)}
        <Bookmark id="FF6ThemeDeck">The pre-constructed deck</Bookmark>
        {splitText(`
            The Commander deck for Final Fantasy VI is called <i>Revival Trance</i> and is centered around self-mill and reanimation - you can find the full decklist <a href="https://magic.wizards.com/en/news/announcements/final-fantasy-commander-decklists#FFVI" target="_blank" rel="noreferrer">here</a>.

            Discussing <i>every</i> card in the deck would be too much, so I will just focus on the most relevant ones.

            The whole cast of characters is represented in the following cards, going with the same order as above:
            <ul>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/4/terra-herald-of-hope" target="_blank" rel="noreferrer">Terra, Herald of Hope</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/87/locke-treasure-hunter" target="_blank" rel="noreferrer">Locke, Treasure Hunter</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/80/edgar-master-machinist" target="_blank" rel="noreferrer">Edgar, Master Machinist</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/57/sabin-master-monk" target="_blank" rel="noreferrer">Sabin, Master Monk</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/1/celes-rune-knight" target="_blank" rel="noreferrer">Celes, Rune Knight</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/50/shadow-mysterious-assassin" target="_blank" rel="noreferrer">Shadow, Mysterious Assassin</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/16/cyan-vengeful-samurai" target="_blank" rel="noreferrer">Cyan, Vengeful Samurai</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/55/gau-feral-youth" target="_blank" rel="noreferrer">Gau, Feral Youth</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/93/setzer-wandering-gambler" target="_blank" rel="noreferrer">Setzer, Wandering Gambler</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/59/strago-and-relm" target="_blank" rel="noreferrer">Strago and Relm</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/89/mog-moogle-warrior" target="_blank" rel="noreferrer">Mog, Moogle Warrior</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/63/umaro-raging-yeti" target="_blank" rel="noreferrer">Umaro, Raging Yeti</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/56/gogo-mysterious-mime" target="_blank" rel="noreferrer">Gogo, Mysterious Mime</a></li>
            </ul>
        `)}<YouTubeVideo videoId={"jm1a-DwLExU"} align="right" caption='"Dancing Mad" is a great reference' />
            {splitText(`
            In the same vein, some major NPCs get their own cards as well:
            <ul>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/78/banon-the-returners-leader" target="_blank" rel="noreferrer">Banon, the Returners' Leader</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/20/general-leo-cristophe" target="_blank" rel="noreferrer">General Leo Cristophe</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/84/kefka-dancing-mad" target="_blank" rel="noreferrer">Kefka, Dancing Mad</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/51/siegfried-famed-swordsman" target="_blank" rel="noreferrer">Siegfried, Famed Swordsman</a></li>
            <li><a href="https://gatherer.wizards.com/FIC/en-us/47/interceptor-shadows-hound" target="_blank" rel="noreferrer">Interceptor, Shadow's Hound</a></li>
            </ul>

            <a href="https://gatherer.wizards.com/FIC/en-us/60/summon-esper-valigarmanda" target="_blank" rel="noreferrer">Summon: Esper Valigarmanda</a> is a reference to the first Esper that the player will encounter, when Vicks, Wedge and Terra reach Narshe in the prologue - only, it was originally called <i>Tritoch</i>.

            <a href="https://gatherer.wizards.com/FIC/en-us/15/coin-of-fate" target="_blank" rel="noreferrer">Coin of Fate</a> is maybe the only instance of the Monarch mechanic I'll ever approve, given its reference to how Edgar and Sabin settled their local succession issue.

            <a href="https://gatherer.wizards.com/FIC/en-us/49/rejoin-the-fight" target="_blank" rel="noreferrer">Rejoin the Fight</a> closes Terra's narrative arc, when she finds again the will to fight after meeting her again in the World of Ruin.

            <a href="https://gatherer.wizards.com/FIC/en-us/43/espers-to-magicite" target="_blank" rel="noreferrer">Espers to Magicite</a> is how Kefka exploits the Espers' powers - another solid card, if you ask me.

            The idea of having a card for <a href="https://gatherer.wizards.com/FIC/en-us/58/snort" target="_blank" rel="noreferrer">Snort</a> without a card for Chupon (or Typhoon, whatever version of the localization rocks your boat) is weird imho, but we can live with it.

            <a href="https://gatherer.wizards.com/FIC/en-us/45/the-falcon-airship-restored" target="_blank" rel="noreferrer">The Falcon, Airship Restored</a>, being the airship originally owned by Daryl that Setzer repairs, features the mandatory mechanic that lets us recur it from the graveyard.

            In a game where we have witnessed <a href="https://gatherer.wizards.com/2X2/en-us/413/emrakul-the-aeons-torn" target="_blank" rel="noreferrer">15/15 eldritch horrors</a>, the idea that a 5/5 like <a href="https://gatherer.wizards.com/FIC/en-us/99/the-warring-triad" target="_blank" rel="noreferrer">The Warring Triad</a> bears the power to destroy the world is a bit preposterous, but we should look at it as a not-so-efficient mana rock that can't get too big for three mana, don't we?
        `)}
        </>
    )
}

export default FF6;