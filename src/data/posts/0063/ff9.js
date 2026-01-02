import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from "../../../components/posts/inlineSpoiler";
import CustomImage from "../../../components/posts/customImage";
import YouTubeVideo from '../../../components/posts/youtubeVideo';

import CoverArt from '../../../images/post-0063/ff9/logo.png';
import Zidane from '../../../images/post-0063/ff9/zidane.jpg';
import Vivi from '../../../images/post-0063/ff9/vivi.jpg';
import Garnet from '../../../images/post-0063/ff9/garnet.jpg';
import Steiner from '../../../images/post-0063/ff9/steiner.jpg';
import Freya from '../../../images/post-0063/ff9/freya.jpg';
import Quina from '../../../images/post-0063/ff9/quina.jpg';
import Eiko from '../../../images/post-0063/ff9/eiko.jpg';
import Amarant from '../../../images/post-0063/ff9/amarant.jpg';
import KidnappingScene from '../../../images/post-0063/ff9/kidnapping_scene.jpg';
import Brahne from '../../../images/post-0063/ff9/brahne.jpg';
import Haircut from '../../../images/post-0063/ff9/haircut.jpg';

function FF9() {
    return (
        <>
            <Bookmark id="FF9Nutshell">A bit of context</Bookmark>
            <CustomImage
                alt="Cover art for the original Final Fantasy IX"
                src={CoverArt}
            />
            {splitText(`

                As mentioned in the previous entry, Sakaguchi followed the development of FF8 as an executive producer, leaving the direction in the hands of Yoshinori Kitase.

                The direction the team went to, though, wasn't exactly <i>well received</i> by him that, in turn, decided the early beginning of project Final Fantasy IX, a game wildly rooted in the traditions of the series.

                We will never know whether the idea behind it was to steer away from the direction the franchise was taking with FF8, or if it was just meant to be a tribute to early chapters of the series - what we <i>do</i> know has many fans considering it their favorite entry.

                But what are we talking about, <i>exactly</i>, when we say that FF9 went in a different direction compared to FF8?`)}
                <YouTubeVideo videoId={"VdxC7FqoNQw"} align="right" />
                <ul>
                    <li>Thematically, the game featured a higher "philosophical" level for its themes, being them love, death, loneliness or identity.</li>
                    <li>The character models went 100% back to their super-deformed, chibi originals, going against not only FF8 but also FF7 that featured human-shaped characters in combat and (most) FMVs.</li>
                    <li>The active party went back to 4 active members at once, like in pre-FF7 entries.</li>
                    <li>Gone are the junctions, the weapon crafting, the magic drawing and even your regular paycheck: everything went back to more traditional systems.</li>
                </ul>
            {splitText(`
                <b>Some</b> things were <i>kind of</i> kept, like FF9 implementing its own spin on Triple Triad (called Tetra Master and being WAAAY worse) or its own idea on chocobo minigames - but if you look at it from the perspective of a fan that had been trained on how the series was constantly improving and reinventing itself, the end result is dramatically oriented towards the tradition.

                Even so, the result is brilliant, in particular if you consider that the game went through a development cycle lasting only a couple of years and that it was released at the very end of the PlayStation 1's life, on 07/07/2000.
            `)}
            <Bookmark id="FF9Game">The game</Bookmark>
            {splitText(`
                The hard change of direction is really evident in the first story beats as well, as the epic and right-in-the-action introduction sequence we've come to expect over the years have been replaced by a first chapter that, while getting the ball rolling, is more lighthearted with a cartoonish vibe.
            `)}
            <CustomImage
                alt="The kidnapping scene, not going as planned"
                src={KidnappingScene}
                align="left"
                maxHeight="350px"
            >
                Cute dress, princess
            </CustomImage>
            {splitText(`
                Just summing it up: Zidane -being part of Tantalus, a traveling theater troupe also specialized in <i>shady side activities</i>- is tasked with kidnapping princess Garnet of Alexandria during their performance of <b>I Want to Be Your Canary</b>; during his endeavor, said princess <i>asks</i> him to kidnap her and, after a couple of bizarre events they manage to escape the city together on board of the Prima Vista, crash-landing in the neighboring Evil Forest.

                After a <i>lengthy</i> regrouping, the party is now comprised of Zidane, Garnet,  Vivi -a young black mage that just wanted to see the play- and Steiner, captain of the Knights of Pluto that couldn't stop the princess from fleeing, but won't let her get in trouble anyway.

                They then travel towards Lindblum, with Garnet adopting the new identity of Dagger to avoid being recognized, and on their way there they discover a production facility where black mages are being manufactured for Alexandria and face the first Black Waltzes, prompting the first interactions between Vivi and some people of his kind.

                Once in Lindblum then, they meet the local regent (uncle) Cid and discover that the whole kidnapping plan was orchestrated by him, wanting to protect Garnet from her mother - as, you see, after the death of the king, Queen Brahne started acting in a strange way, prompting worries about a possible war.

                From here on the actual plot starts and, for the sake of brevity, I'll just discuss things in broad strokes, without a real timeline or structure.
            `)}
            <CustomImage
                alt="Brahne"
                src={Brahne}
                align="right"
                maxHeight="350px"
            >
                The fact she's basically the daughter of Kefka and the Queen of Hearts from Alice in Wonderland doesn't help her case, tbh.
            </CustomImage>
            {splitText(`
                The first thing I want to address is the fact that, at this point of the game, it is hinted that the big boss of the story is none other than Queen Brahne, but she's <i>at least in some parts</i> being manipulated by Kuja, a powerful sorcerer that supplies her with the Black Mages and a way to use eidolons - the summoned entities of this game.

                Kuja, in turn, is a puppet working for Garland (<i>nice nod to FF1 there</i>), a mysterious figure from another world that created him in the same way he then created the Black Mages; Garland's role is to override the soul cycle of Gaia (the world where FF9 is set) with the souls of his origin world, Terra, that has been destroyed aeons prior.

                To accelerate the process, at some point he created Kuja and sent him on Gaia to wreak havoc -something he does with great success, as testified by the early demise of Madain Sari, for example- but, like for the Black Mages he creates, Kuja's lifespan is also limited, but when a Garland creates a successor for him, he sabotages his creator's plans by smuggling this new Genome to Gaia - and that's Zidane's origin story.

                FF9 central theme is identity, and many characters go through personal arcs that make them question who they are and what their purpose in life is - we already mentioned Zidane and Vivi, but Garnet's origins are also unexpected, as she's not the biological heir to Alexandria's royal family: she was adopted for her resemblance to the original princess, died of illness in her youth.

                Other characters like Steiner and Freya face different dilemmas, but everyone ends up going through some kind of identity crisis - except for Quina I'd say, but players would have trouble identifying with them anyway.

                Heck, even Kuja goes through a similar process, and we're talking of the final boss of the game!
                (I mean, if we don't consider Necron, a random very final boss the player has to face for no apparent reason... I guess it's a <i>tribute</i> to FF3's Cloud of Darkness?)
            `)}
            <CustomImage
                alt="A short-haired Garnet"
                src={Haircut}
            >
                I thought that Kuja deserved to have a picture here, but this image is just too cute
            </CustomImage>
            <Bookmark id="FF9Cast">The cast</Bookmark>
            <CustomImage
                alt="Zidane"
                src={Zidane}
                align="left"
                maxHeight="350px"
            />
                <p><b>Zidane</b> (or <b>Gidan</b>, in the italian localization)<InlineSpoiler mask="*">The original japanese name is ジタン, so both are acceptable translations</InlineSpoiler> is a young thief working for the Tantalus Theater Troupe, a group of traveling actors that are also secretly thieves for hire.</p>
            {splitText(`

                The game opens with him being tasked with kidnapping the princess of Alexandria, Garnet Til Alexandros 17th, during one of the troupe's performances of <b>I Want to Be Your Canary</b> for the local royalty.

                In strong contrast with the tormented protagonists of FF7 and FF8, Zidane is cheerful and outgoing, and while he does have his dark moments, he puts the well-being of others before his own without hesitation.

                (He's also a bit of a womanizer, though - it is mainly played for laughs, but some of his antics wouldn't land as well if the game was to be released today.)

                His other distinctive feature is his prehensile tail, a feature that I always considered as a tribute to Son Goku from Akira Toriyama's Dragon Ball, but that caused some stir among fans and even developers as he was originally designed to feature feline characteristics (you know, like a <i>cat burglar</i>), but it translated in Steiner calling him a monkey in various stages of the game.

                The parallel to Goku doesn't stop there: he's actually not a human, but a <s>Saiyan</s> Genome sent to planet <s>earth</s> Gaia as a tool to to "conquer" it, but was adopted by a wise-while-abusive father figure that raised him into a kind person.

                Later he also ends up facing his "brother" Kuja, and this whole parallel is starting to feel a little too obvious without even discussing his Trance that is strongly reminiscent of a Super Saiyan transformation.

                All in all, he is a very likable protagonist, and I'm sure that most of the fans that consider FF9 their favorite entry do so <i>also</i> because of him and his dynamics with the strong core of the cast.
            `)}
            <CustomImage
                alt="Vivi"
                src={Vivi}
                align="right"
                maxHeight="350px"
            />
            {splitText(`
                <b>Vivi</b> is, and I don't care if anyone disagrees, the best character in Final Fantasy IX and quite possibly one of the best characters in the entire franchise.

                We meet him at the very beginning of the game, a child-like figure dressed in traditional black mage attire that just wants to get into the theater to see Tantalus' performance.

                Our first impression of him is that of a lost little kid, shy and introverted, but later we will discover he is actually a manufactured weapon of destruction, a disposable soldier created by Kuja to wreck havoc on Gaia.

                The dissonance between his pure innocence and his destructive abilities is wonderfully crafted, and the soreness that permeates his arc of self-discovery is outstanding.

                I don't consider this game as my favorite, but I consider Vivi's story-long arc as the peak of Final Fantasy storytelling: he's just so pure-hearted and relatable, and the whole trajectory he goes through by discovering the other, evil black mages thus questioning his own nature (and being ostracized by people thinking he's an invader as well), then finding a village of "awakened" black mages only to immediately learn that they're all doomed from the beginning to live just a year is just heartbreaking.

                His struggles with identity and mortality are so relatable that you just can't help but feel for him, and the ending -one of the best endings in the franchise, I'm not going to lie- both concludes his arc in the best way possible while hitting you in the face like a truck.
            `)}
            <CustomImage
                alt="Steiner"
                src={Steiner}
                align="left"
                maxHeight="350px"
            />
            {splitText(`
                <b>Steiner</b>, captain of the Knights of Pluto, is a very strange character.

                He represents both sides of chivalry: he's loyal, fearless and honorable, but he is also stubborn and obtuse to a comical degree - to the point that he <i>actually</i> is the comic relief quota of the game, and we're talking about a game featuring a giant, humanoid talking frog that eats monsters to learn new abilities...

                But he's more than just the local clown: he manages to be very strict about his code of honor and duties -antagonizing Zidane in a very open way- but at the same time he bonds with Vivi in a way that shows how kind and caring he actually is.

                As another example: he's not protecting Garnet just because it's his duty, he truly cares about her and her well-being.

                His character arc is also very significant: at the beginning of the game he's pictured as a enthusiastic, yet incompetent knight willing to jump every ethical hoop in order to follow his orders, but as the story progresses he faces the consequences of Queen Brahne's actions and, when the circumstances end up being too blunt for him to ignore, he accepts to question his alliances and, while remaining completely loyal to Garnet and his own code of honor, he takes a leap of faith and decides to trust Zidane more than his own kingdom.

                He's a lovely character, trust the ruthless General Beatrix on this one.
            `)}
            <CustomImage
                alt="Garnet"
                src={Garnet}
                align="right"
                maxHeight="350px"
            />
            {splitText(`
                <b>Dagger / Garnet</b> is the princess of Alexandria and one of the main protagonists of FF9 - under many aspects, we could say that she is <i>the</i> real protagonist of the game.

                While on one hand we have Zidane being the lovely protagonist that carries the story forward with his actions, on the other we have princess Garnet Til Alexandros 17th carrying the emotional burden of the plot.

                In a game focused on identity and self discovery, Garnet is by far the character that undergoes the most significant growth: she starts off as the princess of Alexandria that <i>asks</i> to be kidnapped in order to leave the city -which is a very cute idea, for a game that <i>appears</i> to be lighthearted and cartoonish- and takes up another identity (Dagger) to be able to freely travel the world in her journey.

                Over the course of the game the 16 years old princess learns to fit in with the rest of society, solves her dilemma about her mother's actions and also discovers the truth about her real origins: she's actually a summoner (originally called Sarah) from Madain Sari, that was adopted by Alexandria's royal family to sub in for the original princess that died of illness as a baby.

                All these facts make her grow from a confused and naive teenager to a sweet, caring and strong-willed young woman, fit to rule Alexandria after the events of the game.
            `)}
            <CustomImage
                alt="Freya"
                src={Freya}
                align="left"
                maxHeight="350px"
            />
                <p>Hailing from Burmecia, <b>Freya</b><InlineSpoiler mask="*">warning: the spelling may vary</InlineSpoiler> is another duty-bound knight like Steiner and Beatrix, with the only two slight difference that she's a dragoon and she's not human, as her home kingdom is populated by anthropomorphic rats.</p>
                <br/>
            {splitText(`
                She is a competent warrior and good-spirited character, even though she's roaming the world in search for Sir Fratley, a fellow dragoon and her lover, that left Burmecia five years prior to the beginning of the game to investigate the political turmoil that could lead to war, and is rumored to be dead.

                If you've yet to understand how this game's writing works, let me break it down for you: Freya is a very relatable character that tries her best, while the plot does its best to crush her soul at every possible occasion.

                The party will eventually meet with Sir Fratley, only to have her enthusiasm destroyed by the revelation that he has completely lost his memory and doesn't remember her at all - hence her quote "<i>To be forgotten is worse than death</i>".

                Despite all the hardships she has to endure, even failing in protecting Burmecia and Cleyra from invasion and destruction from Alexandria, she carries on without losing hope, making her final scene with a still amnesiac Fratley well deserved; while he has lost his memory, they can still move on and start anew, together.
            `)}
            <CustomImage
                alt="Quina"
                src={Quina}
                align="right"
                maxHeight="350px"
            />
            {splitText(`
                <b>Quina</b> is the <i>other</i> comic relief of the game, a genderless, anthropomorphic frog-like blue mage completely obsessed with food (if you're asking: yes, she learns skills by <i>eating monsters</i>) and this weird penchant for leaving the party without any forewarning.

                In their defense, though, they're just representing what the Qu tribe is all about: eating, learning new recipes and cooking.

                There is really not much to say about them, as their quest is just one about discovering the world and learning new dishes, yet they still prove to be trustworthy allies and friends to the rest of the cast, with particular emphasis on their bond with Vivi (with whom later will "get married"), but their scene helping Eiko cook dinner in Madain Sari is maybe their sweetest moment.

                A final bit of trivia about the localization before moving on: they're meant to be genderless, and the english script goes <u>many</u> extra miles to use "s/he" as the pronoun of choice - yet, in the italian localization, Quina is just female - even though female only mechanics doesn't work for them.

                Localization is hard, folks.
            `)}
            <CustomImage
                alt="Eiko"
                src={Eiko}
                align="left"
                maxHeight="350px"
            />
            {splitText(`
                <b>Eiko</b> is yet another strange character to tackle: she's basically a child like Vivi), but also the last summoner of her tribe like Rydia from FF4 - not the most original concept, so far.

                She's kind of a brat, following the path of Yuffie and Selphie before her, but it's terribly well-balanced by her traumatic backstory.

                The party meets her while she's stealing food in Conde Petie and then follow her to her home in Madain Sari, a settlement once inhabited by a tribe of summoners wiped out by Kuja years prior the events of the game -the same place Garnet and her biological mother were from- and she's the only survivor, as her grandfather passed away before the events of the game, leaving her alone with the local moogles.

                Once there, she will have the party stay for dinner and cook for them, and while this might sound suspicious, as it is pretty evident that she has developed an instant crush on Zidane... and then she prays to her grandfather that everything goes well, as she doesn't want to be alone anymore.

                When I first witnessed that scene, something inside me broke.

                Progressing in the game she doesn't really get big moments and, mechanically speaking, she ends up being kind of a Garnet doppelgänger, but she finds her chemistry in the party, bonding particularly well with Garnet given their common ancestry, but also helping the love stories between Zidane and Garnet (and Steiner and Beatrix) to blossom.

                If only all secondary characters were written this well...
            `)}
            <CustomImage
                alt="Amarant"
                src={Amarant}
                align="right"
                maxHeight="350px"
            />
            {splitText(`
                <b>Amarant</b> is one of my least favorite characters in the whole brand, and this is seriously saying something when you consider how any other character in this game, even minor ones, can land flat but shows some amount of depth.

                He suffers, in my opinion, from two major problems...
                <h4>He's late</h4>
                The most mundane of the two problems is the fact that he joins the party pretty late in the game compared to the others, which means that while the other characters already show some dynamics between each other, Amarant feels like an extra - and the fact that the player, at this time, has already come up with a pretty solid party composition doesn't help him getting play time.
                <h4>He's <i>lame</i></h4>
                This is something I already mentioned while talking about FF8, but the late 90s/early 2000s were a time when edginess started to be popular and mainstream, and I'm under the impression that Amarant ended up impersonating all the worst aspects of that trend.

                Also, like Seifer in FF8, his role in the game is to be a foil to the protagonist, so while Zidane is cheerful, outgoing and selfless, Amarant makes a point of being a lone wolf.

                This all culminates in the Ipsen's Castle episode, where he tries to prove that he own his own will do a better job than the others playing as a team - only to fail miserably and be saved by Zidane, accepting to change his point of view.

                After that episode, Amarant stops having a relevant role in the story, and every time he actually does something, you just feel like the writers are trying to shoehorn him in, to kindly remind you that he's still there.

                Unmemorable.
            `)}
            <Bookmark id="FF9Cards">The cards</Bookmark>
            {splitText(`
                Let's start once again with the main characters:
                <a href="https://gatherer.wizards.com/FIN/en-us/251/zidane-tantalus-thief" target="_blank" rel="noreferrer">Zidane, Tantalus Thief</a> is not really that much of a card, while on the other hand the Through the Ages reprint (<a href="https://gatherer.wizards.com/FCA/en-us/43/ragavan-nimble-pilferer" target="_blank" rel="noreferrer">Zidane Tribal</a>) is pretty nuts.
            `)}
            <YouTubeVideo videoId={"VD-mWqnyQCM"} align="right" caption={<i>A testimony of <a href="https://gatherer.wizards.com/FIN/en-us/248/vivi-ornitier" target="_blank" rel="noreferrer" style={{ fontSize: "1rem" }}>Vivi Ornitier</a>'s power over standard</i>} />
            {splitText(`
                <a href="https://gatherer.wizards.com/FIN/en-us/248/vivi-ornitier" target="_blank" rel="noreferrer">Vivi Ornitier</a> takes the cake as one of the strongest cards -probably THE strongest card- in the set, warping the entire Standard format around it and ending up being banned.

                <a href="https://gatherer.wizards.com/FIN/en-us/222/garnet-princess-of-alexandria" target="_blank" rel="noreferrer">Garnet, Princess of Alexandria</a> is yet another unremarkable uncommon like the previous entry from Zidane (it might seem some play in saga-based EDH decks, though?), and like Zidane before her, her Through the Ages reprint is way better: <a href="https://gatherer.wizards.com/FCA/en-us/24/loran-of-the-third-path" target="_blank" rel="noreferrer">Garnet Til Alexandros 17th</a>.
                Okay, we're not talking about a 1 drop that warped modern, but it's still a commander staple.

                <a href="https://gatherer.wizards.com/FIN/en-us/3/adelbert-steiner" target="_blank" rel="noreferrer">Adelbert Steiner</a> and <a href="https://gatherer.wizards.com/FIN/en-us/138/freya-crescent" target="_blank" rel="noreferrer">Freya Crescent</a> are both low-costed, aggressive creatures with equipments synergies - nothing flashy but definitely playable, at least in limited.

                <a href="https://gatherer.wizards.com/FIN/en-us/194/quina-qu-gourmet" target="_blank" rel="noreferrer">Quina, Qu Gourmet</a> is a fine creature on its own.
                I don't see it seeing any kind of constructed play whatsoever, but some decks could want to run it for the extra value it can provide - remember: she'll generate frogs even when <i>noncreature</i> tokens enter the battlefield, even Treasures, Blood tokens, Clues etc.

                Switching to the NPCs, <a href="https://gatherer.wizards.com/FIN/en-us/149/queen-brahne" target="_blank" rel="noreferrer">Queen Brahne</a> has way more potential than it deserves, luckily enough it's just a little too overcosted to be actually good (at 2 CMC she would be constructed playable, I believe).

                Her prized general <a href="https://gatherer.wizards.com/FIN/en-us/426/beatrix-loyal-general" target="_blank" rel="noreferrer">Beatrix, Loyal General</a> suffers a way worse fate, as she's <b>way</b> overcosted and neither her stats or her abilities justify a 6 mana expenditure.

                Royalty-wise, let's move away from Alexandria to Lindblum and its ruler <a href="https://gatherer.wizards.com/FIN/en-us/414/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timeless Artificer</a>. I sooo hoped they would print its Oglop form, but its stats would have been unjustifiable at that point...
            `)}
                <p>We then have <a href="https://gatherer.wizards.com/FIN/en-us/34/stiltzkin-moogle-merchant" target="_blank" rel="noreferrer">Stiltzkin, Moogle Merchant</a>, a <b>weird</b> card that inspired some unorthodox, non-competitive decks in <a href="https://www.youtube.com/watch?v=MQn6DuFytzQ" target="_blank" rel="noreferrer">multiple</a> <a href="https://www.youtube.com/watch?v=hDa7Z5Pb-24" target="_blank" rel="noreferrer">formats</a> - and a nod to our favorite wandering merchant in the game.</p><br/>
            {splitText(`
                <a href="https://gatherer.wizards.com/FIN/en-us/215/choco-seeker-of-paradise" target="_blank" rel="noreferrer">Choco, Seeker of Paradise</a> is another card that caused some commotion when spoiled, I feel like every player has a friend that theorized building a bird tribal deck around it at some point (I did, <i>ça va sans dire</i>).
                `)}
            <YouTubeVideo videoId={"d4AQ7kRcn_A"} align="left" caption={<i>Yes, I'm breaking the usual format for <a href="https://gatherer.wizards.com/FCA/en-us/8/dark-ritual" target="_blank" rel="noreferrer" style={{ fontSize: "1rem" }}>Darkness of Eternity</a></i>}/>
            {splitText(`
                Finally, we get to the villains: even though I consider him an unmemorable character, <a href="https://gatherer.wizards.com/FIN/en-us/232/kuja-genome-sorcerer" target="_blank" rel="noreferrer">Kuja, Genome Sorcerer</a> seems to be a great card in limited but, as many cards in this set, would benefit in costing 1 less mana.

                His reprint, <a href="https://gatherer.wizards.com/FCA/en-us/52/inalla-archmage-ritualist" target="_blank" rel="noreferrer">Kuja, Mage Manufacturer</a>, is a not-really-competitive-while-still-beloved grixis commander with strong Wizard synergy - lore-wise, it makes sense.

                We will treat <a href="https://gatherer.wizards.com/FIN/en-us/214/black-waltz-no-3" target="_blank" rel="noreferrer">Black Waltz No. 3</a> as a villain even though we're just talking about a (recurring) minor boss - it's a good limited uncommon, very synergic with the BR Wizards archetype, and that's pretty much it.

                In the equipment department, we have the legendary <a href="https://gatherer.wizards.com/FIN/en-us/257/excalibur-ii" target="_blank" rel="noreferrer">Excalibur II</a> - a weapon so difficult to obtain in the original game that I never even bothered trying.
                It's Magic counterpart is... lackluster. It's cheap, but does literally nothing on its own, and lifegain-based strategies in constructed are not lacking slow payoffs.

                <a href="https://gatherer.wizards.com/FIN/en-us/13/crystal-fragments" target="_blank" rel="noreferrer">Crystal Fragments</a> is the other equipment from FF9, and it's more interesting as an experiment on mechanics than an actually interesting card: we already had <a href="https://gatherer.wizards.com/V17/en-us/8/elbrus-the-binding-blade" target="_blank" rel="noreferrer">equipment</a> that could morph into creatures, but I believe we won't be seeing much equipment turning into enchantment creatures with a countdown in the future.
                It's still an ok pick in limited, by the way.

                In the spell department, we have a nice, modal removal in <a href="https://gatherer.wizards.com/FIN/en-us/136/fire-magic" target="_blank" rel="noreferrer">Fire Magic</a>, and <a href="https://gatherer.wizards.com/FIN/en-us/74/sleep-magic" target="_blank" rel="noreferrer">Sleep Magic</a> which, in a limited environment, qualifies as premium removal in blue.

                Opening the world map, we then visit <a href="https://gatherer.wizards.com/FIN/en-us/290/treno-dark-city" target="_blank" rel="noreferrer">Treno, Dark City</a> and <a href="https://gatherer.wizards.com/FIN/en-us/285/lindblum-industrial-regency" target="_blank" rel="noreferrer">Lindblum, Industrial Regency</a>.

                I'm inclined to consider <a href="https://gatherer.wizards.com/FIN/en-us/64/the-prima-vista" target="_blank" rel="noreferrer">The Prima Vista</a> as a location as well, but this then forces the question about <a href="https://gatherer.wizards.com/FIN/en-us/47/cargo-ship" target="_blank" rel="noreferrer">Cargo Ship</a> - let's consider them both as just vehicles and move on.

                Tied to the Prima Vista, we open the storyline chapter with <a href="https://gatherer.wizards.com/FIN/en-us/171/airship-crash" target="_blank" rel="noreferrer">Airship Crash</a>, as a memento of that time - right after the prologue - when the Tantalus crew crashes it in the forest out of Alexandria.
                `)}
            <YouTubeVideo videoId={"eqw0yS7W06U"} align="right" caption={<i>Yes, I'm breaking the usual format <b>again</b> for <a href="https://gatherer.wizards.com/FCA/en-us/44/youre-not-alone" target="_blank" rel="noreferrer" style={{ fontSize: "1rem" }}>You're Not Alone</a></i>}/>
            {splitText(`
                The prologue which mainly features Zidane trying to kidnap Garnet which, as <a href="https://gatherer.wizards.com/FIN/en-us/167/unexpected-request" target="_blank" rel="noreferrer">Unexpected Request</a> implies, is not going to put up any resistance.

                I don't know whether to consider <a href="https://gatherer.wizards.com/FIN/en-us/93/cornered-by-black-mages" target="_blank" rel="noreferrer">Cornered by Black Mages</a> a proper story beat, but we'll include it here anyway and move on.

                Finally, we end with <a href="https://gatherer.wizards.com/FIN/en-us/130/blazing-bomb" target="_blank" rel="noreferrer">Blazing Bomb</a> a recurring enemy from the series that, for once, makes an appearance during the initial kidnapping of Garnet, thus deserving a card of its own.
                I believe it's a playable card in a spell-based limited deck, otherwise stay away from it.
            `)}
        </>
    )
}

export default FF9;