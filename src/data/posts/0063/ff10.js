import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from '../../../components/posts/inlineSpoiler';
import CustomImage from "../../../components/posts/customImage";
import YouTubeVideo from '../../../components/posts/youtubeVideo';

import CoverArt from '../../../images/post-0063/ffx/logo.png';
import Tidus from '../../../images/post-0063/ffx/tidus.jpg';
import Yuna from '../../../images/post-0063/ffx/yuna.jpg';
import Auron from '../../../images/post-0063/ffx/auron.jpg';
import Wakka from '../../../images/post-0063/ffx/wakka.jpg';
import Lulu from '../../../images/post-0063/ffx/lulu.jpg';
import Kimahri from '../../../images/post-0063/ffx/kimahri.jpg';
import Rikku from '../../../images/post-0063/ffx/rikku.jpg';
import FFmovie from '../../../images/post-0063/ffx/ffmovie.jpg';
import Grid from '../../../images/post-0063/ffx/grid.jpg';
import Blitzball from '../../../images/post-0063/ffx/blitzball.jpg';
import Seymour from '../../../images/post-0063/ffx/seymour.jpg';
import AuronLiar from '../../../images/post-0063/ffx/auronliar.jpg';
import SeymourZaon from '../../../images/post-0063/ffx/seymourzaon.jpg';
import Foreshadowing from '../../../images/post-0063/ffx/foreshadowing.jpg';
import Yunalesca from '../../../images/post-0063/ffx/yunalesca.jpg';
import Sin from '../../../images/post-0063/ffx/sin.jpg';

function FF10() {
    return (
        <>
            <Bookmark id="FF10Nutshell">A bit of context</Bookmark>
            <CustomImage
                alt="Cover art for the original Final Fantasy X"
                src={CoverArt}
            />
            <p>Final Fantasy X is the epicenter of a lot of things that happen in and around the franchise in the first 2000s: at this point, the popularity of the series is at an all-time high, Square is on a rampage after also coming out with loads of successful other games, both in the JRPG sphere (like Chrono Trigger and Xenogears) and outside of it (like Parasite Eve), and they're even investing outside the videogame realm, having set up a movie studio from scratch that will soon, by this time, launch Final Fantasy: The Spirits Within<InlineSpoiler mask='*'><a href='https://tvtropes.org/pmwiki/pmwiki.php/Main/Foreshadowing' target="_blank" rel="noreferrer"><i>Foreshadowing</i></a></InlineSpoiler>.</p>
            <CustomImage
                alt="An ad for Final Fantasy: The Spirits Within taken from the game's manual"
                src={FFmovie}
                align="right"
            >
                <i>An ad for Final Fantasy: The Spirits Within taken from the game's manual</i>
            </CustomImage>
            <br/>
            {splitText(`
                It is also the first game in the series to be developed for the brand new PlayStation 2 and, after the triple successes of the PlayStation trilogy, expectations are sky high.

                From a thematic point of view, Final Fantasy IX is treated (for the surprise of no one) as an <i>outlier</i>, with the direction going back to Final Fantasy VIII's Yoshinori Kitase, who quickly brushed away whatever Final Fantasy IX was trying to do and moved once again forward, towards a more futuristic, less fantasy setting.

                Once again, the team wanted to push the technical boundaries of the genre, which will prove to be groundbreaking: this will be the first installment featuring a full 3D environment and the first one including voice acting - two features that come at a cost, though.

                Despite the extended storage capacity brought by the DVD format, going full 3D means creating lots of extra assets, which in turn forced the team to take some drastic measures in other areas: the presentation is breathtaking, but the game is suddenly way more linear than what players were accustomed to; the world map is gone in the way we knew it, and the mandatory airship stops being a vehicle, becoming an external hub that acts as fast travel between locations.
            `)}
            <YouTubeVideo videoId="zhYW3dY1hgM" caption="The OST immediately screams for modernity" align="left" />
            {splitText(`
                The voice acting, then, needs a specific mention: with it being a first attempt at implementing the feature, the team didn't really take <i>localization</i> into account, so the english-speaking cast had to work with models animated to the japanese audio and had to adapt.

                If you mix forced lines of dialogue, sometimes even sped up to match the lip movements, and a general stiffness in the models, the end result ends up being quite awkward at times.

                The process of adaptation and dubbing ended up being so convoluted that, while the game was released in Japan on July 19, 2001, it took an additional five months of work to have a release in North America, and that's still nothing compared to the <b>TEN</b> months needed for Europe (May 24, 2002), as we had to wait for the International version for that.
            `)}

            <Bookmark id="FF10Mechanics">The mechanics</Bookmark>
            {splitText(`
                Here we are, at the second installment of the "Mechanics" section, the place where we discuss what's in the game before diving into the plot.

                The last game we faced this way was, as you might remember, Final Fantasy VIII, a game where magic spells were a consumable commodity that worked better when hoarded rather than cast.

                Final Fantasy X is maybe less extreme in its changes, but some of the changes it introduces speak volumes about how the direction of the franchise is going to change in the future - we don't have a Materia/Junction system here, but we're not moving back to the more traditional approach of FFIX either.

                The biggest feature of the game is the Sphere Grid, an abstract, shared board with all the possible stats, abilities, and spells characters can learn, with personalized pins in different zones for each of them that let them follow their own growth path while leveling.
            `)}
            <CustomImage
                alt="The sphere grid"
                src={Grid}
                align="right"
            >
                <i>The Sphere Grid</i>
            </CustomImage>
            {splitText(`
                On one hand, this ensures that characters have their own archetype to follow, while letting players experience a certain degree of freedom in choosing what to prioritize while "growing", also providing them the occasional fork in the road; in the long run, though, this bears the exact same problem FF7 and FF8 had, as filling the grid will eventually have all the characters being masters of all trades, with differences between them still being present in the form of equipment, overdrives, and special abilities (Yuna will always be the summoner, blue magic is exclusive to Kimahri, etc.), but generally watered down.

                The combat is turn-based, but the ATB system is gone: now the turns are calculated in a static order, which is then presented to the player in a comfortable list on the side of the screen.

                The party is back to 3 members at a time, but now you can swap them in and out mid-battle.

                Moving on, I wanted to mention the big argument over FFX, before facing my inner demons: Triple Triad is gone and Tetra Master too, the sudden jump in technology brought to us Blitzball!
            `)}

            <CustomImage
                alt="Blitzball"
                src={Blitzball}
                align="left"
            >
                <i>Tidus performing a Jecht Shot during a Blitzball game</i>
            </CustomImage>
            <p>Blitzball -an underwater variant of water polo- is the ultimate Final Fantasy minigame, as not only does it take such an important role in the worldbuilding that almost the 30% of our party is composed of Blitzball players<InlineSpoiler mask="*">One could say the main antagonist is as well</InlineSpoiler>, not only do Blitzball games happen during the main storyline, but you can also build and manage your own team, recruit NPCs from all around Spira, and take part in leagues and tournaments. This is bonkers.</p>
            {splitText(`

                Some people, though, just don't like it, and I'm absolutely fine with that: I enjoyed it, but I <i>hate how the optional endgame content is structured, and Blitzball is part of that</i>.

                You see, back in the day achievements weren't a thing yet, and one could enjoy a game without being a compulsory completionist - or at least, normal people could; I've always had that kind of <i>anxiety</i>, and FFX, with all these side activities and optional bosses, really soured the experience for me.

                While I actually <i>do</i> love Blitzball, I hate with all my might the idea of not being able to obtain all the celestial weapons without dodging 200 consecutive lightning strikes in the Thunder Plains or obtaining a <i>negative</i> time in the chocobo race minigame - and please don't get me started about the arena or all the optional bosses.

                Up until this point, I've always been a fan of optional content, but this game literally broke me.
            `)}

            <Bookmark id="FF10Game">The game</Bookmark>
            {splitText(`
                Final Fantasy games are renowned for their mix between tragic plot points and lighthearted day-to-day moments, and of course FFX is not an exception - it takes a different spin on the balance, though.

                Despite ignoring FF9 on many aspects, its protagonist is more reminiscent of Zidane than Squall or Cloud, being cheerful and carefree despite the circumstances of the world he's suddenly been thrown into.

                But let's take it step by step:
                The game opens with a shot of the full party in what seems to be a cathartic moment, and Tidus -our narrator for most of the game- speaking directly to the player.

                <center><b><i>"Listen to my story. This may be our last chance."</i></b></center>
            `)}
                <YouTubeVideo videoId="6fp81GzKarQ" caption="To Zanarkand. Shivers." align="right" />
                <p>And this is his story, indeed - the prologue shows us Tidus, an up-and-coming Blitzball star in the minutes before taking part in the Jecht Cup, a tournament held in the futuristic city of Zanarkand (ironically titled "the city that never sleeps")<InlineSpoiler mask='*'><a href='https://tvtropes.org/pmwiki/pmwiki.php/Main/Foreshadowing' target="_blank" rel="noreferrer"><i><b>More</b> foreshadowing</i></a></InlineSpoiler> in memory of the best player of all time that disappeared 10 years before, which incidentally happens to be Tidus' father.</p>

            {splitText(`

                Such a match never takes place, though, as the city is suddenly attacked by Sin, an Eldritch Horror-like sea monster that suddenly appears and wreaks havoc on the city; Tidus follows his old friend Auron, who instructs him on how to escape, but this leads to Tidus being teleported to the land of Spira, without any clue as to what happened.

                Following <i>yet another</i> prologue sequence, where he's rescued and then used by a squad of Al Bheds for retrieving some underwater machine, Tidus learns that, in the new reality he's in, Sin is a constant threat to the world, and that the city of Zanarkand has been destroyed <i>1000 years in the past</i>.

                This is <i>also</i> the story of Yuna, young summoner and priest of Yevon, and her Pilgrimage to defeat Sin and bring the world back to peace.

                After their initial meeting, Tidus joins her and her guardians (Wakka, Lulu, and Kimahri) in their journey - a journey during which they will also recruit the mysterious Auron that we already met in prologue #1, and Rikku, the only Al Bhed that bothered to talk to Tidus in the common language during prologue #2.

                Let's hit that Pause button for a minute, though.
            `)}
            <YouTubeVideo videoId="XFpZU1GrB40" caption="The laughing part of this scene ended up being taken out of context, and ascended to meme status" align="left" />
            {splitText(`
                Despite my incessant ramblings on the sheer amount of prologues, I have to admit that it is functional for its purpose and main device: the game's major plot points are meant to be <i>coup de théâtre</i>s that work just because Tidus, acting as the player's proxy, lacks full knowledge and understanding of the world he's in, and the isekai-esque approach serves that purpose well.

                This can be infuriating at times (Auron, I'm looking at you), <i>especially</i> when nearing the end Tidus ends up knowing more about what will happen than the rest of the party, but chooses to keep things to himself, but <i>for the most part</i> (still looking at you, Auron), one can empathize with the characters' positions on the matter.

                Now, for the sake of brevity, I'll skip most of the plot to discuss some major spoilers, because they're interesting but not talked about enough, and some of them are not really explained that well in the game. <b>Feel free to consider this a spoiler alert, even though I don't play that game.</b>

                <h4>Aeons, Fayths, Pyreflies, Sin</h4>
                I'll cheat straight away and start with the fifth hidden keyword that ties everything together: <b>summoners</b>.

                In Spira, summoners are clerics of the Church of Yevon and have two main duties tied to their peculiar powers: the obvious one is to gain the powers of summoning Aeons, the other is to perform the Sending, a ritual that allows the souls of the dead to actually depart from the mortal realm.

                When humans (or demi-humans, like people from the Ronso or the Guado tribes) die, they leave behind a trail of pyreflies, a will-o'-the-wisp-like manifestation of their soul and memories; if not sent, those will eventually manifest a physical form: most of the time, fiends, but exceptionally strong-willed individuals might keep their soul together and "come back" as Unsent, basically ghosts maintaining an appearance of their body.
                This becomes a plot point <i>later</i>.

                The Sending gets rid of the pyreflies and ensures that deceased people move on, rather than haunt the mortal world in whichever form.
            `)}
                <YouTubeVideo videoId="RBeU7v-AdPk" caption="Yuna performing the Sending in Kilika" align="right" />
            {splitText(`
                Now, on the opposite of the spectrum of <i>dying</i>: people can also, through a specific ritual, become Fayths; this means they forfeit their flesh while their soul lives on in a statue - they're not living in a stricter sense, but they maintain a state of eternal slumber from which they can manifest their dreams.

                The Pilgrimage summoners undertake is a journey through Spira temples where they pray to the Fayths hidden in the local Cloysters of Trials in order to be granted by them the power to summon Aeons, powerful spirits that embody the Fayths' dreams.
            `)}

                <p>The very existence of Sin (and other beings<InlineSpoiler mask='*'><a href='https://tvtropes.org/pmwiki/pmwiki.php/Main/Foreshadowing' target="_blank" rel="noreferrer"><i><b>Even more</b> foreshadowing</i></a></InlineSpoiler>) follows the same rules, but more on that later.</p>
            {splitText(`

                <h4>The Machina War, and how religions are born</h4>

                As previously mentioned, when Tidus arrives in Spira he learns that Zanarkand has been destroyed one thousand years before; this happened following the Machina War, a conflict between Bevelle and Zanarkand that ended with the latter being destroyed.

                <i>And with the appearance of Sin</i>.

                The Church of Yevon's canon explains these facts in a simple way: Zanarkand was increasingly relying on Machina -a glorified term for "machinery", encompassing everything from conveyor belts to airships- and their sins led to both the world in the first place and the birth of Sin itself, a divine punishment for the sins of humanity.

                For this reason, the usage of Machina is forbidden in Spira, and the people known as Al Bhed are ostracized as infidels for their obsession in recovering ancient artifacts.
`)}
            <CustomImage
                alt="Seymour proposing to Yuna"
                src={SeymourZaon}
                align="left"
            />
            {splitText(`
                What <i>actually</i> happened, though, is that the leader of Zanarkand, high summoner Yu Yevon (not a coincidence), knowing that the war against Bevelle was lost, opted to morph the whole population of Zanarkand into Fayths, using them to manifest a dream version of the city -the one where Jecht and Tidus were born- and summon the ultimate weapon, Sin, to wreak havoc on the rest of the world.

                Few were spared from this fate, in particular his daughter Yunalesca (yes, Yuna is named after her), and her husband Zaon then faced Sin, with the latter sacrificing himself to become a Fayth and summon the final Aeon, but when that happened Yu Yevon took control and consumed it, also killing his own daughter in the process.

                Yunalesca's sacrifice proved not to be sufficient to stop Sin forever, as the horror came back after 10 years spent regenerating, but kickstarted the whole religion of Yevon.

                <h4>The meaning of the Pilgrimage</h4>

                Sin's comeback proved, in the eyes of Yevonites, that Sin was a punishment for their sins, and Yunalesca's sacrifice became a tradition: summoners would devote their lives to obtain the powers of the Aeons from the Cloysters and then reach the ruins of Zanarkand traversing Mt. Gagazet; the strongest would then defeat Sin and guarantee a period of peace (the Calm) to the people of Spira, who would in turn worship them as heroes and saints.
            `)}
            <CustomImage
                alt="Auron dropping bombs"
                src={Yunalesca}
                align="right"
            />
            {splitText(`
                What the people of Spira don't know, though, is the truth about Sin and the Pilgrimage itself: only summoners at the successful end of their journey would end up meeting with the unsent Yunalesca in Zanarkand, learning the truth just moments before being killed by her or Sin himself, or being consumed by Yu Yevon were they to defeat the abomination.

                The Church is fully aware of this, though, but they prosper in keeping the population in the dark - telling them that the only way to stop Sin is atonement, and prohibiting the usage of Machina to prevent them from obtaining the means to journey the world and discover the truth.

                While the Church's corruption becomes apparent in the late game when the player discovers that it's being led by the unsent Maester Mika, hints are scattered throughout the whole game, with Seymour openly saying the quiet part out loud with Wakka during Operation Mi'ihen, and the various inconsistencies on the veto on machinery that the party points out at various points.

                <h4>Breaking the cycle</h4>

                As we already know, Final Fantasy X is the story of Tidus, former Blitzball star turned guardian, and Yuna, a young girl that decides to become a summoner and sacrifice herself for the greater good, like her father Braska before her.

                It's a love story drowned in a world full of death and despair, a tragic story where we go from Tidus falling in love with Yuna, not knowing that, at the end of her Pilgrimage, she is going to die, and a final act where Yuna finds the strength to break the cycle and defeat Sin once and for all, losing Tidus in the process.

                Because, you know, the only way to defeat Sin once and for all is to defeat Yu Yevon - and doing so also means that Dream Zanarkand will cease to exist, taking Tidus with it, as he's just a product of the Zanarkand Fayths' dreams.

                I don't care how cheesy the writing can be at times, I don't care how cringy the voice acting manages to be at times, I don't even care about linearity or the excessive amount of post-game content, this is the kind of story that <b>breaks</b> me, and there's a reason why many consider this the pinnacle of the franchise.
            `)}
            <CustomImage
                alt="Foreshadowing"
                src={Foreshadowing}
            >
                <i>*Sniff*</i>
            </CustomImage>

            <Bookmark id="FF10Cast">The cast</Bookmark>
            <CustomImage
                alt="Tidus"
                src={Tidus}
                align="left"
                maxHeight="350px"
            />
            {splitText(`

                <b>Tidus</b>, the main character and narrator for the majority of the game, is the young prodigy of the Zanarkand Abes, the blitzball team where his father Jecht rose to fame before disappearing 10 years before the events of the game.

                As mentioned, the prologue starts on the evening of the Jecht Memorial Cup, with Sin attacking the city and setting all the events in motion.

                I'm not going to go through the whole plot again, but I always found it funny that the whole plot is basically a subversion of the isekai trope, with our hero trapped in another world - not knowing, in this case, that he was not transported one thousand years in the future, he just entered the <i>real</i> world, having always lived inside a dream.

                In the same misleading way, he gets presented as a cheerful, carefree guy that manages to stay positive no matter what, but during the course of the game -especially thanks to Yuna, who presents similar but completely antithetical traits- his real nature starts showing up.

                One of the two intertwined themes for him is his problematic relationship with his father Jecht, an abusive alcoholic that one day suddenly disappeared, leaving a resentful Tidus alone with his mother to deal with the trauma of growing up in the shadow of a figure he hated to begin with.

                Nearly 25% in, Tidus discovers that Sin is indeed Jecht, and over the course of the game he witnesses various testimonies of how Jecht was in fact a very decent person who just didn't have the tools to express his love for his son.

                Oddly enough, even after being forced to leave his career as the son of a famous blitzball player behind, he ends up being for Yuna what his father was for her father Braska, following in his footsteps once again.

                In the end, Tidus and the gang end up facing him and, despite Jecht being very sorry in validating his past wrongs, Tidus just can't do anything more to express his hatred for him, apparently managing to forgive him only after his departure from the mortal realm.

                But the <b>true</b> focus of the story is his relationship with Yuna: on one hand we're talking about the most basic love story ever, with the two falling in love with each other almost immediately, but developing a bond over slow, small steps - like him teaching her how to whistle, and her believing his stories of Zanarkand despite it being a completely illogical thing to do - up until the point where it blossoms into a full-blown romance; a romance that, as we know, is doomed from the start, as Yuna has already accepted to sacrifice her life for the greater good of Spira.

                Obviously he doesn't know that at the beginning, and the other characters are too afraid to tell him, so his discovery of the truth becomes a major and very emotional plot point.

                In the end he plays his Uno reverse card and manages to break the cycle - being the one that sacrifices his own life to save the other. <i>Sniff</i>.

                Trivia: his funny attitude and the localization troubles worked together in concocting some of the worst pop references ever seen in the series - I'm referring, in particular, to the lines "Don't worry, be happy" uttered by the guy, but also that time when he funnily misunderstands Macalania Temple for... macarena? Seriously?
            `)}
            <CustomImage
                alt="Yuna"
                src={Yuna}
                align="right"
                maxHeight="350px"
            />
            {splitText(`

                <b>Yuna</b> is, for lack of a better definition, the actual heroine of the game, and the love interest of the protagonist with whom we share all the perspective of the story.

                She's a cute, gentle girl that, much like Tidus (but in stark contrast on an emotional level), lives in the shadow of her father Braska, the summoner that, along with Auron and Jecht, defeated Sin 10 years before the events of the game, and whose path she follows by becoming a summoner herself.

                Being the heir of a recent streak of great female leads of the likes of Aerith, Rinoa, and Garnet, she's so central to the plot that, despite this being Tidus' story, one could easily say that the game is actually about her - and, in a way, it is.

                Other than being the glue that sticks the party together, other than being Tidus' love interest, Yuna is the character that calls all the shots in the plot: she's the one that sets the events in motion by deciding to become a summoner and undertake the Pilgrimage, she's the one that apparently accepts to marry Seymour just to face him on her own, she's the one that, in the end, breaks the cycle of Sin.

                But there's more to that.

                When we first meet her, she's this pretty, sweet, and clumsy girl that everybody wants to protect, and the player is led to believe she's frail.

                On the other hand, after the big reveal about the nature of the Pilgrimage, everything is reframed: behind all her innocence and sweetness, Yuna is a determined young girl willing to take the pain and suffering of Spira on her shoulders and sacrifice herself for the greater good.

                She doesn't need protection, she needs <i>support</i>, and despite all the cheesiness the voice acting brought to the table, this change of perspective is what levels her character up in being, in my opinion, the most well-written female lead of the franchise.

                Trivia:`)}
            <ul>
                <li>she's half Al Bhed, as her mother was Cid's sister - more on that in Rikku's entry;</li>
                <li>her popularity granted her the protagonist role in Final Fantasy X-2, Square's first attempt at a direct sequel;</li>
                <li>she was born with heterochromia, a condition where eyes are of different colors (in this case: green and light blue) - a small detail that bears no significance whatsoever though.</li>
            </ul>

            <CustomImage
                alt="Wakka"
                src={Wakka}
                align="left"
                maxHeight="350px"
            />
            {splitText(`

                <b>Wakka</b> is a good-hearted guy who spent almost all his life in Besaid focusing on his almost non-existent career as a blitzball player.
                
                He grew up with Lulu and Yuna, and is a bit of a narrow-minded simpleton that takes the teachings of the Church of Yevon at face value.

                He acts as a catalyst for letting Tidus in the party: he's the captain of the Besaid Aurochs and instantly recognizes Tidus as a talented blitzball player, so he takes him under his wing while forcibly recruiting him in his team for the last tournament he's going to play before retiring.

                Another reason for instantly liking Tidus is that he reminds him of his late brother Chappu - to the point he gifts him his sword; for the record, Chappu died while trying, among others, to defeat Sin using machina in a way totally similar to Operation Mi'ihen, and this trauma convinces him to retire from blitzball and become a full-time guardian for Yuna.
                But just after taking part in a last tournament.

                As a character he shares some positive traits with Zell from FF8 but is overall less endearing, even though his low baseline grants him a development arc based on him facing the hypocrisy of the Church and challenging his own prejudices, especially towards the Al Bhed.

                TRIVIA: he shares his English voice actor with Kimahri, and <a href="https://en.wikipedia.org/wiki/John_DiMaggio">Bender from Futurama</a>.
            `)}

            <CustomImage
                alt="Lulu"
                src={Lulu}
                align="right"
                maxHeight="350px"
            />
            {splitText(`

                <b>Lulu</b>, another Besaid native, is the black mage of the cast and gets introduced during a tutorial sequence on elemental weaknesses (see the entry for the Ice Flan card).
                
                As a character, she is the polar opposite of Wakka: she's calm, collected, and mature, and her coldness seems even menacing at times.

                She's also very pretty, but that's beside the point - I just wanted to point out how the character designs of the three female characters of the cast are aimed towards being appealing to different flavors of male thirst, something I never really appreciated, <i>but I digress</i>.

                Her yin-yang relationship with Wakka doesn't stop here, though: she lived the trauma of Chappu's passing in her own way, given that they were engaged, but her stronger roots in reality led her to a less delusional, more grounded rationalization of the event.

                Another important thing to remember is that she's the more experienced guardian of the starting group (before Auron joins, that is), as she had already previously been a guardian for Lady Ginnem, a summoner that died at the Cavern of the Stolen Fayth (an event she has yet to fully come to terms with), and for Father Zuke, a summoner that she and Wakka accompanied until reaching the Calm Lands where he just decided to call it quits.

                For some bizarre and inexplicable reason, she and Wakka end up marrying after the events of the game, and they have a son during the course of Final Fantasy X-2, even though she's WAY too cool for him. Love is blind.
            `)}

            <CustomImage
                alt="Kimahri"
                src={Kimahri}
                align="left"
                maxHeight="350px"
            />
            {splitText(`

                <b>Kimahri</b> is a warrior of the Ronso tribe - a race of muscular, horned anthropomorphic cats that live on Mt. Gagazet, and fits the non-human quota we've been accustomed to since FF6, with FF8 being the lone break we had.

                A proud warrior, years prior two members of his tribe broke his horn, causing him to leave his home in shame.

                After his departure, 10 years before the events of the game, he meets Auron, who entrusts him with Yuna's safety and leaves for Dream Zanarkand; from that moment on, he became Yuna's bodyguard and basically the first of her guardians.

                While imposing, he's a very quiet character that will have his spotlight kind of late in the plot; if you then mix this with his weird starting point in the Sphere Grid (that makes him a good backup for whatever duty you feel like he should lean towards, but always leaves his as the second-choice for the role), you end up with a character that <i>could</i> have been interesting, but lands as underdeveloped.

                Mechanically speaking, he's a mix of a dragoon and a blue mage - should we call him <b>Blue XIII</b>?

                Fun fact: he doesn't say a single word for the first half of the game... and then suddenly does. If you use the Scan ability on him, you'll learn that, and I quote: "<i>He speaks only to those he deems worthy.</i>". Nice touch.
            `)}

            <CustomImage
                alt="Auron"
                src={Auron}
                align="right"
                maxHeight="350px"
            />
            {splitText(`

                <b>Auron</b> is probably my least favorite character in the game.

                I mean: I do see what they were aiming for with him, yet I still feel entitled to dislike the execution here.

                Formerly a guardian of Braska during his Pilgrimage alongside Jecht, he's revered as a living legend by the people of Spira, and <b>while knowing all along</b> that he knows more than he lets on, there's nothing the player can do about that.

                In short, while he throws at you some bits of information, he spends most of his time with the party hiding things - for good reasons, one must say, given that in the end we discover he is an Unsent and has been dead all along.

                <b>Too bad mate, I understood that a year before your big reveal, now shut up and learn to use both arms, you lazy geezer.</b>
            `)}

            <p>Jokes aside: he has the role of the wise mentor and he's obviously based on a mix of the lazy samurai archetype with some Bruce Willis thrown in for good measure<InlineSpoiler mask="*">especially his role in The Sixth Sense, if you get what I mean</InlineSpoiler>, and he's <i>meant</i> to be cool... I'm just unable to like him, even though he's a fan favorite.</p>
            <br/>
            <p>Is he, by any chance, too similar in design to Hyo Amano from The Last Blade...?</p>

            <CustomImage
                alt="Rikku"
                src={Rikku}
                align="left"
                maxHeight="350px"
            />
            {splitText(`

                <b>Rikku</b>, despite being the first party member to encounter Tidus after his arrival on Spira, is actually the last one joining the team.

                She's Cid's daughter (and Brother's sister, a sentence so stupid that it gets amusing), which both makes her Yuna's younger cousin and an Al Bhed, a detail that causes some trouble with the likes of Wakka, for example.

                She's young, she's upbeat, she's cheerful - and wants to save Yuna from her destiny; basically, she's exactly what Selphie didn't manage to be, for me.

                While lacking a real character development of her own, she always acts amicably towards Tidus even before joining the party -following the Al Bhed's failure in kidnapping Yuna among the other summoners <i>for their good</i>- and she's the one that breaks the news to him about what the end of the Pilgrimage would entail for Yuna.

                So, not the deepest character, but an important one in her own right.

                From a gameplay standpoint, she mixes the thief and chemist classes (no pun intended) and starts the game by being an agile, quick attacker with specific advantages against machina (that can be instantly broken by her Steal ability).

                Other random trivia:`)}
            <ul>
                <li>in a game where the median age is so low that the old wise man is 35, Rikku is 15 ~ she's younger than Yuffie, <u>so keep your hormones in check, please</u>;</li>
                <li>along Tidus and Wakka, she's one of the few characters able to fight underwater;</li>
                <li>her Al Bhed heritage gives her spiral pupils - through which Auron recognizes her lineage without saying anything out loud and keeping Wakka in the dark.</li>
            </ul>
            <br/>
            <Bookmark id="FF10Cards">The cards</Bookmark>
                <p>For the regular set, the amount of characters is quite limited:</p>
                <p>the protagonist <a href="https://gatherer.wizards.com/FIN/en-us/246/tidus-blitzball-star" target="_blank" rel="noreferrer">Tidus, Blitzball Star</a>, which also features as <a href="https://gatherer.wizards.com/FCA/en-us/58/thrasios-triton-hero" target="_blank" rel="noreferrer">Tidus, Zanarkand Fayth</a><InlineSpoiler mask="*">Please: see my comment about Clive in the FF16 section</InlineSpoiler>, is really nothing to write home about, while <a href="https://gatherer.wizards.com/FIN/en-us/250/yuna-hope-of-spira" target="_blank" rel="noreferrer">Yuna, Hope of Spira</a> Yuna is a sensibly better mythic rare with some good enchantment/saga synergies, given her role as summoner.</p>
            {splitText(`

                On the antagonists' side we have <a href="https://gatherer.wizards.com/FIN/en-us/242/sin-spiras-punishment" target="_blank" rel="noreferrer">Sin, Spira's Punisher</a> - I wonder if his graveyard interacting mechanic is meant as a nod to his ability of bringing people back and forth between Spira and Zanarkand, if somebody does please let me know.

                On the side of the lesser evils (but still evil), we have <a href="https://gatherer.wizards.com/FIN/en-us/452/seymour-flux" target="_blank" rel="noreferrer">Seymour Flux</a>, boss version of the unsent that gained the power over the Church of Yevon trying to become the new Sin.

                For its "normal" form (we can't say "human", as he's half-guado), we have the Through the Ages card <a href="https://gatherer.wizards.com/FCA/en-us/55/kinnan-bonder-prodigy" target="_blank" rel="noreferrer">Seymour Guado</a> - a very strong Simic (blue-green) commander.

                Then we have <a href="https://gatherer.wizards.com/FIN/en-us/104/jecht-reluctant-guardian" target="_blank" rel="noreferrer">Jecht, Reluctant Guardian</a>, a card reminiscing of the late Tidus' father and the tragic end of his Pilgrimage with Braska.

                The current iteration of <a href="https://gatherer.wizards.com/FIN/en-us/415/cid-timeless-artificer" target="_blank" rel="noreferrer">Cid, Timeless Artificer</a> is the head of the Al Bhed (also see: <a href="https://gatherer.wizards.com/FIN/en-us/88/al-bhed-salvagers" target="_blank" rel="noreferrer">Al Bhed Salvagers</a>), father of Rikku and uncle of Yuna - quite an influential guy, huh?
            `)}
            <CustomImage
                alt="Seymour and Anima"
                src={Seymour}
                align="left"
            >
                <i>A family picture</i>
            </CustomImage>
                <p>In the summons category -or Aeons, as they're called in FFX- we have <a href="https://gatherer.wizards.com/FIN/en-us/78/summon-shiva" target="_blank" rel="noreferrer">Summon: Shiva</a> and <a href="https://gatherer.wizards.com/FIN/en-us/1/summon-bahamut" target="_blank" rel="noreferrer">Summon: Bahamut</a> that are some good, old favorites, along with <a href="https://gatherer.wizards.com/FIN/en-us/120/summon-anima" target="_blank" rel="noreferrer">Summon: Anima</a>, the dark spirit of Seymour's mother that also happens to be the dark-elemental Aeon of the game.</p>
                <br/>
                <p>I'll take a quick detour here to list a handful of cards linked to one of the most controversial minigames in the franchise: Blitzball<InlineSpoiler mask="*">Sorry I just <i>need</i> to link <a href="https://www.nuklearpower.com/2007/04/26/episode-838-no-air-down-there/" target="_blank" rel="noreferrer">this page</a> and <a href="https://www.nuklearpower.com/2007/04/28/episode-839-wide-world-of-sports/"target="_blank" rel="noreferrer">the following</a></InlineSpoiler>!</p>
            {splitText(`

                To start off, we have <a href="https://gatherer.wizards.com/FIN/en-us/254/blitzball" target="_blank" rel="noreferrer">Blitzball</a> -not as in the sport <i>per sé</i>, but as the ball used in this local <i>underwater polo</i> thing that everyone on Spira is so crazy about- which is an interesting card for a multiplayer Commander game: 3 CMC for a mana rock is a bit overcosted, but the ability of turning it into a Divination effect when someone else's commander deals damage to an opponent is relevant, sometimes.

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

                <a href="https://gatherer.wizards.com/FIN/en-us/76/stuck-in-summoners-sanctum" target="_blank" rel="noreferrer">Stuck in Summoner's Sanctum</a> refers to the ingenious idea the Al Bhed came up with to save summoners from their bleak destiny: <i>kidnap</i> them, thus preventing their Pilgrimage from being completed.
                Just your regular blue removal enchantment, nothing worth discussing here.
            `)}
            <CustomImage
                alt="Auron dropping bombs"
                src={AuronLiar}
                align="right"
            >
                <i>Auron sure talks a lot in this game</i>
            </CustomImage>
            {splitText(`

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
            <li><a href="https://gatherer.wizards.com/FIC/en-us/94/shelinda-yevon-acolyte" target="_blank" rel="noreferrer">Shelinda, Yevon Acolyte</a> is a naive but gentle cleric of Yevon - towards the end of the game, when Yevon's rank grow short in numbers, she has a step up in her career, let's say</li>
            <li>and, finally, we have the Big Boss himself: <a href="https://gatherer.wizards.com/FIC/en-us/95/sin-unending-cataclysm" target="_blank" rel="noreferrer">Sin, Unending Cataclysm</a> (ok, he's pretty underwhelming)</li>
            </ul>
            <CustomImage
                alt="Sin"
                src={Sin}
            >
                <i>The Unending Cataclysm itself</i>
            </CustomImage>

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
            `)}
                <YouTubeVideo videoId="e7kxvolSOsY" caption="Yuna's theme is also very reminiscent of Aerith's from FF7" align="right" />
            {splitText(`
                <a href="https://gatherer.wizards.com/FIC/en-us/74/yunas-decision" target="_blank" rel="noreferrer">Yuna's Decision</a> is an underwhelming card that speaks about some kind of decisions Yuna should take during the game BUT IT'S A LIE, there's no real decision to be made, come on!

                <a href="https://gatherer.wizards.com/FIC/en-us/75/yunas-whistle" target="_blank" rel="noreferrer">Yuna's Whistle</a> is kind of a cool card - and a nod to when Tidus teaches Yuna how to whistle during the story; I should add something about a certain cutscene in FFX-2 here, but luckily that's outside the scope of this post.
            `)}
        </>
    )
}

export default FF10;