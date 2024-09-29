import React from 'react';
import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from "../../../components/posts/inlineSpoiler";
import CustomImage from "../../../components/posts/customImage";

import cloud from '../../../images/post-0047/ch2/cloud.jpg';
import barret from '../../../images/post-0047/ch2/barret.jpg';
import tifa from '../../../images/post-0047/ch2/tifa.jpg';
import aerith from '../../../images/post-0047/ch2/aerith.jpg';
import red_xiii from '../../../images/post-0047/ch2/red_xiii.jpg';
import yuffie from '../../../images/post-0047/ch2/yuffie.jpg';
import cait_sith from '../../../images/post-0047/ch2/cait_sith.jpg';
import zack from '../../../images/post-0047/ch2/zack.jpg';
import sephiroth from '../../../images/post-0047/ch2/sephiroth.jpg';
import cid from '../../../images/post-0047/ch2/cid.jpg';
import vincent from '../../../images/post-0047/ch2/vincent.jpg';

import unreliableCloud from '../../../images/post-0047/ch2/cloud-unreliable-1.jpg';
import unreliableCloud2 from '../../../images/post-0047/ch2/cloud-unreliable-2.jpg';
import homecoming from '../../../images/post-0047/ch2/cloud-homecoming.jpg';
import barret_date from '../../../images/post-0047/ch2/barret-date.jpg';
import barret_dyne from '../../../images/post-0047/ch2/barret-dyne.jpg';
import barret_dyne2 from '../../../images/post-0047/ch2/barret-dyne-2.jpg';
import tifa_junon from '../../../images/post-0047/ch2/tifa-junon.jpg';
import tifa_past from '../../../images/post-0047/ch2/tifa-past.jpg';
import aerith_prayer from '../../../images/post-0047/ch2/aerith-prayer.jpg';
import aerith_ending from '../../../images/post-0047/ch2/aerith-ending.jpg';
import red_back_home from '../../../images/post-0047/ch2/red-back-home.jpg';
import red_seto from '../../../images/post-0047/ch2/red-seto.jpg';
import yuffie_boat from '../../../images/post-0047/ch2/yuffie-boat.jpg';
import yuffie_materia from '../../../images/post-0047/ch2/yuffie-materia.jpg';
import cait_sacrifice from '../../../images/post-0047/ch2/cait-sacrifice.jpg';
import reeve from '../../../images/post-0047/ch2/reeve.jpg';
import tiny_bronco from '../../../images/post-0047/ch2/tiny-bronco.jpg';
import vincent_monster from '../../../images/post-0047/ch2/vincent-monster.jpg';
import zack_cloud from '../../../images/post-0047/ch2/zack-cloud.jpg';
import sephiroth_pose from '../../../images/post-0047/ch2/sephiroth-pose.jpg';

function Chapter2() {
    return (
        <>
            <Bookmark id="Cloud">Cloud Strife</Bookmark>
            <CustomImage
                alt="Cloud Strife"
                src={cloud}
            />
            {splitText(`
            Cloud comes back from Remake keeping his role as the party's jack of all trades (very fitting for a mercenary, of course), but with a couple of extra tricks up his sleeve - namely: while in Remake he was not that good against airborne enemies, his aerial game is now very good, and he also has a long range attack at his disposal.

            But.
            This is not what this section is about.

            Cloud is still the mail focus of the plot, he's the literal cornerstone of everything that has happened in the past and is happening in the present, and he is also our own <i>unreliable narrator</i>.

            This is a bit different from the original game, where his psychotic breaks were few and far between and the narration was more party-based, and it's A LOT stronger than it was in the Remake.
            `)}
            <CustomImage
                alt="Aerith and Tifa are not amused"
                src={unreliableCloud}
                align="left"
            >
                <i>"How dare you talk shit about Zack?!?"</i>
            </CustomImage>
            {splitText(`

            With some minor exceptions, the plot of Rebirth is either seen through his very eyes of with a specific focus on him and his deteriorating mental state.

            In the second chapter Tifa confronts him about the fact that his recollection of the Nibelheim facts is not... really on point, let's say - and we're confronted to multiple instances of here and Aerith discussing Cloud, that incident and the fact that our hero doesn't remember Zack at all.
            `)}
            <CustomImage
                alt="The world of Rebirth"
                src={unreliableCloud2}
                align="right"
            >
                (This never happened)
            </CustomImage>
            {splitText(`
            ...so we also witness Cloud ret-con his own memory and come up with a completely made up scenario where Zack died in the river when the bridge collapsed.

            And don't get me started on the multiple occasions where visions of Sephiroth pop up telling Cloud that Tifa is dead and he should be aware of that girl in our party claiming to be her.

            Or the multiple times times when he starts acting like Sephiroth, for that matter. 

            The actual end of Rebirth dances between the great multiverse plot point and his own mental breakdown - I'm talking both about the actual ending and <i>that scene</i>.

            But we'll talk about it later.
            `)}
            <CustomImage
                alt="Cloud losing his shit"
                src={homecoming}
                align="center"
            >
                <i>"It's not death. It's a homecoming."</i>
            </CustomImage>

            <Bookmark id="Barret">Barret Wallace</Bookmark>
            <CustomImage
                alt="Barret Wallace"
                src={barret}
            >
            </CustomImage>
            {splitText(`
            Barret is back and he's as angry as before!

            ...or is he?
            Mechanically he's pretty much the same character we used to play in Remake, focusing mainly in tanking damage and supporting the rest of the crew, so I'm not going to comment upon that.
            From a plot perspective, I don't like what they did to him.

            Please bear with me: in the original game he was a self-centered, constantly swearing caricature of a person of color as seen from a japanese writer trying to incorporate some stereotypes taken from Hollywood movies... but just below that first layer, he is first of all a damaged man that leads a group of ecoterrorists against Shinra while secretly pursuing his personal vendetta.
            His story is tragic and he is broken: his actions are always fueled by anger and passion, he refuses to bow down and wants to be the leader of the party, even when his close friends at Avalanche die in the Sector 7 incident he raises the stakes bouncing off any kind of personal responsibility but adding them to the stack of things that Shinra should pay for.

            No, I'm not saying that he doesn't care about them, I'm just pointing out the way his brain works.
            `)}
            <CustomImage
            alt="A date with Barret"
            src={barret_date}
            align="right"
            >
                He's still my best bud after all
            </CustomImage>
            {splitText(`
            Over the equivalent of the plot section covered by Rebirth, we see the original game's Barret having to cope with the fact that the party's leadership is given to Cloud, we bring him to Corel to re-live his trauma, and then we see him recollect himself in Cosmo Canyon swearing once again that Shinra's going to pay, and that that'll be a new start for Avalance.

            I believe that now is a good time as any to remind you all that, in <i>this</i> universe, Avalanche is not just made of Barret and his friends, but he is just the leader of a <i>splinter cell</i>(sic) of it.

            Also, the whole visit to Cosmo Canyon plays out completely different - but that's going to be discussed when talking about it.
            Above all, though, I <u>need</u> to point out how different the whole Corel segment is, and how it <u>stripped</u> value from the character of Barret. 

            In short:
            <ul>
            <li>the arrival in Corel is not identical, but similar enough;</li>
            <li>in the original we are lead to believe that Barret could be the culprit, while this time around we see Barret spotting the real perpetrator* (from his own point of view, in a game where we're often forced to see everything through Cloud's lenses);</li>
            <li>the party chooses to enter Corel's prison (in order to clear Barret's name) rather than getting thrown there with great prejudice... but whatever;</li>
            <li>this is also due to the fact that we arrive at the scene after the mess has already been cleaned up, rather than being caught by Dio;</li>
            <li>finally, we find Dyne, that has already been subjugated by a third party, then free him, then fight him, then he comes up with some superpowers, them Shinra jumps in and let him have his heroic moment dying while protecting Barret.</li>
            </ul>
            `)}
            <CustomImage
            alt="Meeting Dyne"
            src={barret_dyne}
            align="left"
            />
            {splitText(`
            This is outrageous, and robs Barret of a dramatic moment that let the character grow.
            The original Dyne is not just a crazy monster that succumbed to his own trauma and went full Joker, but he's first and foremost an actual reflection of Barret, and by facing him Barret also ends up facing his own self, the fact that while he managed to "do a better job" than Dyne in recovering, he mainly did so thanks to the responsabilities he took towards Marlene, while her <i>actual father</i> had to live all these years thinking she was dead.

            After their confrontation, the original Dyne decided to put an end to his own life because he didn't want her daughter's father to be a monster and realized that, from his point of view, that was his only way out; Barret can't do anything about this, he'll just have to bear the burden of this on top of everything else.
            `)}
            <CustomImage
            alt="Facing Dyne"
            src={barret_dyne2}
            align="right"
            />
            {splitText(`
            His friend, that was right all along about Shinra, is basically dead <i>again</i> and he could do nothing to save him <i>again</i>.
            It's sad, it's powerful... and it's probably a bit too much for Square Enix in 2024.

            Now please fight Palmer in the robofrog, it's wacky boss time!
            `)}

            <Bookmark id="Tifa">Tifa Lockhart</Bookmark>
            <CustomImage
                alt="Tifa Lockhart"
                src={tifa}
            >
            </CustomImage>
            {splitText(`
            We left Tifa being the best damage dealer in Remake and -guess what- she still is.
            She's great at avoiding attacks, she's got an outstanding phisical strength, her aerial play has been improved dramatically like Cloud's, her stagger manipulation is a game changer.
            "Phisical attacks are great, but in Rebirth magic is just broken" you might say - and you'll be right.
            Give her the ATK<->MATK attack and she suddenly rivals Aerith while still retaining all her pluses.
            
            Now, for the plot: if I had a lot of complaints about the "new" Barret, the rewriting done on Tifa is something I really appreciate.
            `)}
            <CustomImage
                alt="Tifa confessing"
                src={tifa_junon}
                align="right"
            >
                <i>Do you remember eMiLiO?!?</i>
            </CustomImage>
            {splitText(`
            In the original nobody ever challenges Cloud's recollection of the Nibelheim's facts in Kalm, and when we finally discover the truth Tifa just says that she knew he was wrong all along but she feared confronting him on that because <i>reasons</i>.
            Rebirth is a game with a completely different deliver though, which has let the writers to address the issue in a way that, while being way more complicated, manages to depict a different Tifa.

            As soon as chapter 2 starts she immediately confronts Cloud over his story's inconsistency, doubling down on Junon when she tries to test Cloud's memories of their younger days, and throughout the story while bonding with Aerith it's heavily implied that the two of them are constantly discussing what happened back in the day, the role of Zack, and what to make of Cloud's mental state.

            `)}
            <CustomImage
                alt="Tifa with a younger Cloud"
                src={tifa_past}
                align="left"
            />
            {splitText(`
            She's also always the first one to spot when Cloud starts acting weird, and her role as Cloud's mental ward is so prominent that Sephiroth tries to gaslight him multiple times on doubting her identity, ending up with him attacking her in Gongaga - in a scene that leads to what I expect to be a set up of the big "healing" scene that should come up in the third installment.

            I just don't get why Lara Croft's breast size could be normalized over the last 30 years while the FF fan base can't let us having a normal looking character but whatever...
            `)}
            <a href="https://www.thegamer.com/tifa-lockhart-italian-icon-senate-hentai-final-fantasy/"
                onClick={e => {e.preventDefault(); window.open('https://www.thegamer.com/tifa-lockhart-italian-icon-senate-hentai-final-fantasy/', "_blank", "noreferrer");}}>
                    But we're talking about a character so sexualized she found her way to the italian senate, so...
            </a>
            
            <Bookmark id="Aerith">Aerith Gainsborough</Bookmark>
            <CustomImage
                alt="Aerith Gainsborough"
                src={aerith}
            >
            </CustomImage>
            {splitText(`
            Aerith, the last character from Remake, but I dare say the most important of Rebirth.

            In combat she's by far the best spellcaster and while her basic combat is apparently lacking, her wards are utterly gamebreaking, so I won't delve too much on her combat prowess.

            `)}
            <CustomImage
                alt="THAT scene"
                src={aerith_prayer}
                align="left"
            >
                Yup. It's <i>that</i> scene.
            </CustomImage>
            {splitText(`
            From a narrative standpoint, she's in a difficult position, needing to be both the pivotal character that ends up sacrificing herself in order to save the world <i>and</i> kind of a sidelined character that lets everyone elsehave their own spotlight.
            We start the game by discovering that at the end of Remake the whispers took her memory of the future away.
            Wait, we <u>actually</u> start the game by controlling a dead character that saves her comatose body from Shinra in a different universe.

            My God, this game's plot is really something.
            `)}
            <CustomImage
                alt="And if I said I wasn't?"
                src={aerith_ending}
                align="right"
            >
            </CustomImage>
            {splitText(`
            Whatever, long story short her role has been greatly expanded - while in the original game she's basically a character on par with the others that at some point realizes that her being an ancient means she has extra duties and dies trying to save the world, this time around we live the same scenes <i>but at the same time</i> we know that her is a superior being, fragmented in the multiverse, representing the opposite of Sephiroth's power.
            `)}
            <p>All in all, she's dead as she was supposed to be, but at the same time she really isn't<InlineSpoiler mask='*'>Because, you know, she shows up for the final boss</InlineSpoiler>.</p>
            {splitText(`
            Even if we won't discover if the version of her we see at the ending is actually her ghost, an astral projection of her actual self from another universe or just the delusion of a broken mind.

            We <i>just</i> need to wait <i>some years</i>.
            `)}

            <Bookmark id="Red_XIII">Red XIII</Bookmark>
            <CustomImage
                alt="Red XIII"
                src={red_xiii}
            >
            </CustomImage>
            {splitText(`
            Red XIII is the first "new" character introduced by Rebirth, as his past iteration from Remake wasn't actually playable.
            
            Mechanically speaking he's a melee fighter that makes up for his lack of aerial prowess and long range options with some unique twists:
            <ul><li>his Vengeance mechanic favours good blocking, giving him a way to power up both his base attacks and regain small amounts of HP;</li>
            <li>Stardust Ray costs 2 ATB bars but takes care of small critters, builds a good amount of stagger and (kind of) stuns enemies for a bit, letting you dictate the tempo of the fight;</li>
            <li>he's very agile, his attacks are ok for closing in, he's got good dodging abilities, and by keeping square pushed you access his spinning attack that lets you dish out damage while still being constantly on the move;</li>
            </ul>
            `)}
            <CustomImage
            alt="Red XIII coming home"
            src={red_back_home}
            align="left"
            >
                <i>Yeah, go ahead and pet our mighty companion, that's not weird at all</i>
            </CustomImage>
            {splitText(`

            He's kind of a weird entry, as he's not a bad character by any means, but at the same time he doesn't bring anything really outstanding to the table, meaning that you're either a fan of him or he's going to quietly drop to the back ranks, waiting for his own story bits to shine.

            Now, this is just a matter of personal taste, but I'm not a big fan of how some of his best abilities are tied to his Vengeance gauge (i.e.: Supernatural Fervor) and while I remember how I thought "I have to try this with Reddie-boi" as soon as I found the Darkside materia, I never really bothered to do so.

            Rebirth puts him in a <i>thematically</i> weird spot as well: on one side I consider the return to Cosmo Canyon hilarious and overall a good way to take advantage of the different delivery this game can support when confronted to the original game, but on the other hand I feel like this new version of the cave of the Gi feels a little contrived, with the Seto reveal also ending up a bit rushed thanks to the impromptu trip to the island of the Gi.
            `)}
            <CustomImage
            alt="Seto"
            src={red_seto}
            align="right"
            >
                "Sorry dad, I've gotta go but I'll come back and visit I promise!"
            </CustomImage>
            {splitText(`
            To reiterate: I liked the choice of having two different voice actors for when he's wearing the wise warrior coat or his young puppy Nanaki persona and the whole "Bye guys, I'm home, have fun saving the world" stance he assumes at the start of his subplot, yet at the same time the game doesn't let you enjoy the big moment of him reuniting to his dad (or what's left of him, depending on your point of view) because COME ON, HERE'S SOME MORE EXTRA CONTENT.

            Letting the scene sink in a bit would have done wonders but whatever, this seems to be a recurring issue (Dyne anyone?), and it's a pity.
            `)}

            <Bookmark id="Yuffie">Yuffie Kisaragi</Bookmark>
            <CustomImage
                alt="Yuffie Kisaragi"
                src={yuffie}
            >
            </CustomImage>
            {splitText(`
            Another new character, but this time not really, since she already had her own DLC in remake.

            I won't spend too much time on her combat style: she's agile, she can throw her shuriken thus building up ATB while staying safe, she comes with built-in elemental attack support <b>and</b> she's part of a game breaking combo with Aerith.

            `)}
            <CustomImage
            alt="Yuffie in Junon"
            src={yuffie_boat}
            align="left"
            >
                I've never seen a character SO defined by their motion sickness, yet they put her on a boat in a pond for <i>plot</i>
            </CustomImage>
            {splitText(`
            She's also getting a lot of screen time that isn't supposed to be here, but that's something you have to take in account given that she was pushed to being a bonus character in the original game by budget/time constraints during development.

            So, be prepared to meet her in Junon and take Priscilla's place in getting attacked by the Bottomswell (and getting subjected to CPR), then see her having a cameo role during the parade, then popping up again during an originally non-existent scene in Costa del Sol, then joining the party.

            `)}
            <CustomImage
            alt="Yuffie collecting materia"
            src={yuffie_materia}
            align="right"
            />
            {splitText(`
            All in all I feel she's a well written character and shows a good chemistry with the other members of the party, but every time she has even an ounce of "relevance" in the plot, you just know that it's something that should not be part of the plot in the first place, like the scene in Nibelheim where you find a bunch of dead wutaian soldier.
            Let's see how the visit to Wutai pans out in part 3, the dynamics between the fallen nation and the world we managed to visit so far have been hyped up a lot.
            `)}

            <Bookmark id="Cait_Sith">Cait Sith</Bookmark>
            <CustomImage
                alt="Cait Sith"
                src={cait_sith}
            >
            </CustomImage>
            {splitText(`
            As the last playable character, here's the most peculiar one.
            Cait Sith is a pint-sized cat animatronic that can summon a big, stuffed moogle to fight at his side - this means that being proficient with the character goes through mastering both his mounted and unmounted stances, reworking one's brain to a different style of dodging and managing the ATB bar knowing that in order to have the full spectrum of skills available, you need to summon the moogle and either try to keep it alive or be prepared to summon a new one.

            `)}
            <CustomImage
            alt="Reeve among Scarlet and Hojo"
            src={reeve}
            align="left"
            >
                The man behind the cat
            </CustomImage>
            {splitText(`
            I'll be honest here: I tried to stay away from him as much as I could in the original game, I uninstalled Ever Crisis a week after he was added, and during Rebirth I used it just when the plot (or Chadley) forced me to do so.

            Oddly enough, compared to most other characters, his bits have been changed a bit, but not <i>that</i> much.

            `)}
            <CustomImage
            alt="Cait Sith sacrificing his body for the party"
            src={cait_sacrifice}
            align="right"
            />
            {splitText(`
            While in the original game he betrayed the party but managed to keep following it by kidnapping Marlene and blackmailing everyone, this time he just accepts the consequences of smuggling the keystone to the Turks and comes back later just in time for his not-so-heroic not-so-sacrifice.

            He also has a couple of extra moments where he's seen helping the party by just trolling Shinra and he's also the main protagonist of the worst dungeon of the whole game in my opinion (located in chapter 11, if you're wondering).

            All in all, I don't hate the character, but I can't be bothered using him either.
            `)}

            <Bookmark id="Cid">Cid Highwind</Bookmark>
            <CustomImage
                alt="Cid Highwind"
                src={cid}
            >
            </CustomImage>
            {splitText(`
            I'm going to briefly address Cid here as a member of the original cast, even though he's not a playable character (much like Red XIII in Remake).

            There's no way for me to state how much I hate the complete rewriting he's been through in this game.

            In the original game he was a Shinra employee that wanted to be the first man in space, then called off the launch of his rocket in order to save a scientist that was doing some late tests on said rocket oxygen's tanks, and witnessed his dreams shatter as Shinra stopped caring about space exploration in order to divert all the budget towards mako production.

            `)}
            <CustomImage
            alt="The party sees the Tiny Bronco for the first time"
            src={tiny_bronco}
            align="right"
            >
                This is the Tiny Bronco. It bears more charisma than its pilot.
            </CustomImage>
            {splitText(`
            He was a constantly swearing old man, a chain smoker, and a straight abuser towards Shera, the aforementioned scientist that basically saved his life by forfeiting her life to finish her job.
            I get that Rocket Town has been cut out of the story (for budget reasons or to keep the writing lean? I don't really know) and I <b>also</b> understand that we're talking about a character that's a bit too much too handle for the current standard of politically correctness (I'm not even complaining, I swear), but this new Cid doesn't even share the <i>same hair color</i> of the original.

            Now it's just a pilot.
            The party stumbles into him in Gongaga.
            He decides to enter the party because Ifalna -Aerith's mother- was pretty and he's sad in discovering she's dead.

            I'll just move on before I start screaming.
            `)}

            <Bookmark id="Vincent">Vincent Valentine</Bookmark>
            <CustomImage
                alt="Vincent Valentine"
                src={vincent}
            >
            </CustomImage>
            {splitText(`
            Another fan favourite, Vincent Valentine is back but he doesn't deserve to be a playable character yet.
            `)}
            <br/>
            <p>He's pretty much the same old self, <i>except</i> the fact that instead of choosing to spend his life in a coffin<InlineSpoiler mask='*'>I just recently discovered that if its section has six-sides it's called coffin, while caskets just have four and appears to be more box-like. I just HAD to share this with you, I KNOW you wanted to know</InlineSpoiler> waiting for the inevitable heat death of the universe while repenting for his sins, he is now spending his life in a coffin as a Shinra employee while guarding a lab.</p>
            {splitText(`

            Seriously, I couldn't make that up.
            `)}
            <CustomImage
            alt="Vincent as the Galian Beast"
            src={vincent_monster}
            align="left"
            >
                <i>"I'M SO ANGRY I JUST HAVE TO SHOW OFF MY COOL POWERS. RAWR."</i>
            </CustomImage>
            {splitText(`
            He also attacks the party because, after granting them access to the inner chambers even though they're presenting false credentials, he manages to both decide to <u>not</u> escort them (so... he trusted them...?) and then attack the party because they wandered off from where he told them they were allowed to go.

            Let's just pretend chapter 11 never happened, I beg you.
            `)}

            <Bookmark id="Zack">Zack Fair</Bookmark>
            <CustomImage
                alt="Zack Fair"
                src={zack}
            >
            </CustomImage>
            {splitText(`
            Oddly enough for a guy that's been dead for years, Zack is the first playable character we get to control in Rebirth.

            I'll be 100% honest with you: I don't consider Crisis Core a masterful piece of writing, but I still love Zack as a character and I seriously hoped they could come up with a good way to write him back into the story.

            And I'll be lying if I said I'm completely happy with the final result - luckily you can turn his scenes off in the second playthrough so you can avoid all those "scenes from the multiverse" where he takes care of Aerith's and Cloud's bodies while trying to make sense of the whole situation.

            <i>We'll have to discuss this eventually, for now let's just move on.</i>
            `)}
            <CustomImage
            alt="Zack fighting along Cloud"
            src={zack_cloud}
            align="right"
            />
            {splitText(`
            Anyhow, I'm happy I managed to play as him a little. Bonds of Friendship is tough but he's a cool character.

            If we just consider the main plot, I actually loved the subplot where Aerith and Tifa try to make sense of his destiny, and the bit where you meet his parents in Gongaga manages to be sad without getting trite (and I really loved the girls' reaction to Cloud stating the obvious).

            Let's hope everything pays off in the third act.
            `)}

            <Bookmark id="Sephiroth">Sephiroth</Bookmark>
            <CustomImage
                alt="Sephiroth"
                src={sephiroth}
            >
            </CustomImage>
            {splitText(`
            I'll try to keep this short: the writers decided to follow the same path they went down in Remake, so Sephiroth is basically <i>everywhere</i>, and I really don't want to discuss everything in this section as I feel like it would drag on forever.

            I'm happy they let me control him as a playable character, though.
            They also managed to give him enough depth to not make him feel like a rushed extra while at the same time conveying the idea that he's <i>way</i> stronger than any other character we're supposed to handle, with the result that (compared to Bonds of Friendship) the To Be a Hero fight is kind of easy.

            No complaints here.

            If we start talking about his role in the game, things get a bit hairy, for a number of reasons... but it's really an issue we can't avoid.

            During the section of the original game covered by Rebirth, Sephiroth is a lingering presence that permeates everything: sometimes he just haunts locations (see: the corpse of the Midgar Zolom in the grasslands' swamp) or briefly shows up just to run away (like on the cargo between Junon and Costa del Sol or in the Shinra Manor's basement), <i>but</i> Rebirth has to manage things differently.
            `)}
            <CustomImage
                alt="A dramatic shot of the One Winged Angel"
                src={sephiroth_pose}
                align="left"
            >
                We also couldn't let Jenova∙LIFE be the final boss
            </CustomImage>
            {splitText(`
            First of all, it had Remake before it setting a different standard: Sephiroth wasn't even supposed to show up during that section of the story, but he was pretty much everywhere anyway (mostly because they wanted the game to reach a proper conclusion if it bombed, but that's just my opinion), and you can't expect Rebirth to act differently - but this time around we <i>also</i> have the entire multiverse discourse to handle, and Sephiroth is central to that.
            
            So yeah, he's really coming in left, right and center, but you can't really expect anything different.
            `)}
        </>
    )
}

export default Chapter2;