import React from 'react';
import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import YouTubeVideo from '../../../components/posts/youtubeVideo';
import InlineSpoiler from '../../../components/posts/inlineSpoiler';
import CustomImage from "../../../components/posts/customImage";

import cloudZack from '../../../images/post-0047/ch4/cloud-zack.jpg';
import multiverse from '../../../images/post-0047/ch4/multiverse.jpg';
import fullParty from '../../../images/post-0047/ch4/end-full-party.jpg';
import crazyCloud from '../../../images/post-0047/ch4/crazy-cloud.jpg';
import blackMateria from '../../../images/post-0047/ch4/black-materia.jpg';
import chadleyEnd from '../../../images/post-0047/ch4/chadley-end.jpg';

function Chapter4() {
    return (
        <>
            <Bookmark id="Multiverse">The elephant in the room</Bookmark>
            {splitText(`
            We talked about the gameplay, we discussed how characters and locations changed, it's about time we talked about <i>that other thing</i>.

            When Remake came out everybody started noticing the many differences it beared towards the original, and the world collectively discovered what happens when you give Tetsuya Nomura a project and full creative freedom - things stop making sense.

            It's not even a critic <i>per sé</i>, it's just that you can't expect him to just do his homework rather than try to add something of his own, and so we ended up with Sephiroth knowing more than he should, Whispers showing up out of nowhere and that finale where the party somehow defeats destiny itself.

            We accepted it and moved on, hoping that eventually everything would make sense.

            Now, I can't tell you it does now, but at least we can have a proper discussion about it.
            `)}
            <YouTubeVideo videoId="wctUzLtQfnk" caption="Every scene we care for this topic in a single video. Thanks PlayerKai Gaming." />

            <Bookmark id="Multiverse_1">General concepts</Bookmark>
            {splitText(`
            As Sephiroth reveals to Cloud during their private time in Chapter 14, every time there's a "decision" (both human or by chance), a new world is born.
            <u>Take a note of this, we'll need to come back to this point later.</u>

            We see new dimension fork from the "real world" a couple of times, with Zack surviving at the beginning and Cloud trying to deflect Sephiroth's blow in the end.

            But, as Sephiroth explains, these alternative worlds are short-lived and collapse back to the main timeline.

            So, these non-regular dimensions feature different versions of Stamp (why is that?), seem to be devoid of mako and, more importantly, present a big breach across the sky, <i>making it clear</i> that they're about to end.
            `)}
            <YouTubeVideo videoId={"6fp81GzKarQ"} caption="You know what I mean" align="left" />
            {splitText(`
            More importantly, these are not even parallel dimensions in the "canonical" idea, but more like collective lucid dreams of those who returned to the Lifestream.

            Marlene says that it's better if Aerith doesn't wake up, because when she does "a scary man he's gonna kill her".
            `)}
            <p>She then goes on: "Cloud tries to save her, but he doesn't make it in time<InlineSpoiler mask='*'>So, you also have the answer to the Next Big Question</InlineSpoiler>".</p>
            {splitText(`

            And now we have to talk about this little girl with the gift of precognition.

            <i><u><b>MY INTEPRETATION</b></u></i> is that this world has been created by Aerith - I'm not sure how consciously - when she lost her "memory of the future" at the end of Remake, and ended up hiding the White Materia there.

            By creating this dream world, she populated it with faces she recognized from the familiar world around her, and somehow ended up conjuring the souls of the recently deceased to it; this way, Marlene (and Elmyra, Kyrie, and for a brief moment Johnny as well) is not tied in any way to her real self, but she's rather a materializations of Aerith's mind, while Biggs and Zack <i>are</i> the real souls of the original characters that are still refusing to return to the Lifestream.

            When Marlene interacts with Zack, she's not the actual daughter of Dyne, but rather the idea of Marlene summoned from Aerith's mind.

            At no point in the game the <i>real</i> Marlene knows anything about the future of the world, but her simulacrum in this dream knows what Aerith knows (or rather: what she used to know before forgetting it at the end of Remake) and can then spill the beans to Zack.
            `)}
            <Bookmark id="Multiverse_2">Epileptic Trees<InlineSpoiler mask='*'><a href="https://tvtropes.org/pmwiki/pmwiki.php/Main/EpilepticTrees" target="_blank" rel="noreferrer">Definition from tvtropes</a></InlineSpoiler></Bookmark>
            <CustomImage
                alt="Sephiroth explaining the multiverse"
                src={multiverse}
                align="left"
            >
                Ok Cloud, it's time for you to learn about the <i>multiverse</i>
            </CustomImage>
            {splitText(`
            Go read your notes now: worlds can split and give birth to new ones.
            Over and over.

            And we also have proof that new worlds can branch at any given point: we see Zack creating a new split when he has to choose whether to search for Hojo in hopes to find a cure for Cloud or stopping Biggs from bombing reactor 6.

            Ironically, we watch him choose the first option, yet we see the consequences of the second - but I digress.

            Back to the main point:
            How many realities have been created?
            When?
            Could we even keep track of everything?

            We could try, people actually did (people online have narrowed it down to five concurrent universes based on how Stamp changes breed, for example), but I think that's futile.
            My point is that what happens in the side worlds is not important, we just need to understand the underlying mechanisms of everything and use the rules we can infer to really get what's happening in the main "timeline".
            `)}
            <CustomImage
                alt="Zack fighting alongside Cloud against Sephiroth"
                src={cloudZack}
                align="right"
            >
                Ok, it also serves the purpose of having him fight agains Sephiroth at the end of Chapter 14
            </CustomImage>
            {splitText(`
            Pretty much nothing of what happens in Zack world is really important, just consider the fact that he ultimately decides to go search for Hojo, <i>but we're shown the outcome of the other path when he tries to stop Biggs</i>.

            Zack's world, <i>the tales from the Lifestream</i>, are just there to breadcrumb the explanations we deserve in the third part, in my opinion.

            And finally, it is time for us to tackle the main topic.
            `)}

            <Bookmark id="That_Scene"><i>That</i> scene</Bookmark>
            {splitText(`

            At the beginning of Chapter 14, just after Zack chooses to go face Hojo creating yet another dimensional split, Aerith takes Cloud on a date in <i>Zack's world</i>.
            And she states clearly that we're visiting her dreamworld.
            It is an ominous date, and it ends with her giving Cloud the White Materia before shoving him back to reality, just as we see Sephiroth enter the church and presumably kill her.

            Marlene's prophecy is fulfilled, Aerith and Cloud woke up but the latter couldn't do his job of protecting her and the bad guy killed her.
            `)}
            <p>Back to <i>reality</i>, after a brief lesson from the bad guy himself about the Reunion<InlineSpoiler mask="*"><i>Yup, that's foreshadowing</i></InlineSpoiler> of worlds, Cloud proceeds to the City of the Ancients and finds Aerith praying to the Planet, trying to invoke the power of Holy.</p>
            <br/>
            <p>End then, <i>that</i>.</p>
            <br/>
            <YouTubeVideo videoId={"UPW8iPnvuE4"} />
            {splitText(`

            You know, Aerith's death was a pivotal point of the original game.

            Players back then weren't accustomed to the idea of having a central, playable character just dying for good.

            It had <i>consequences</i>.
            
            People would come up with the most incredible theories on how to save/revive her, but eventually people understood it couldn't be helped.
            
            It just took nearly 27 years.

            It's no wonder that, when the game became playable, everyone was on their toes waiting to see how this scene would play out.
            `)}
            <YouTubeVideo videoId={"jaoqJzYXJso"} align="right" caption={<><s>By the way: why can't they just upload the OST on Spotify?!?</s><br/>Aw come on, this is ridicolous</>} />

            {splitText(`
            On one hand, <i>everybody</i> knew Aerith is supposed to die, on the other they spent a lot of effort marketing Rebirth with the key sentence "The Unknown Journey Continues", so people had some kind of hope.

            They decided to go with the third option: a completely serious scene where she both dies and doesn't.

            <i>Hilarity ensues</i>.

            Did they want to take a risk?
            Did they just refuse to be predictable?
            Did they just tried to be too smart for their own good?

            I'm not against this choice, but I'll be honest and say that it confused me the first time around and that here I am, <i>months</i> after seeing it for the first time, writing a massive essay on my thoughts that nobody in their right mind would ever have any interest in reading.

            That's my way of coping.
            If you managed to read everything so far: I'm sorry I'm being so verbose.

            Let's move on.
            `)}

            <Bookmark id="Ending">The ending</Bookmark>
            <CustomImage
                alt="The full party after the final combat"
                src={fullParty}
            >
                Ok it seems like <i>everyone</i> is here
            </CustomImage>
            {splitText(`
            <u>She's dead.</u> Deal with it.

            That said: on my first playthrough I thought Cloud was just delusional and the way he kept seeing Aerith without realizing he was the only one was just an effect of his broken psyche.

            After re-analizing everything, I finally understood the point of the rift that Cloud -and only Cloud- see in the sky: he's suddenly operating in the reality he's sharing with the rest of the party, and in another one that will soon end.
            The reality where he managed to save her.
            `)}
            <CustomImage
                alt="Cloud after merciless killing some Shinra soldiers in Gongaga"
                src={crazyCloud}
                align="left"
            >
                "I feel fine"
            </CustomImage>
            {splitText(`
            On one hand it reinforces the psychosis that's tearing him apart, on the other we see that he's not just living a personal delusion, but a full-fledged alternate reality that has branched from the current mainline perfectly obeying the ruleset that has been estabilished over the course of the game.

            And this could lead to very interesting developments during the breakdown he's guaranteed to go through over the course of the next game.

            I just fear that we might end up discovering that the full entirety of the Remake Trilogy timeline is an alternate reality born in the Lifestream, but that would be too cliché to be true, <u><i>right</i></u>? 
            `)}

            <Bookmark id="Future">What's missing, and what I think will happen in part three</Bookmark>
            {splitText(`
            <u>Moving forward, these are my prediction for the third installment:</u>`)}
            <CustomImage
                alt="Cloud holding the Black Materia"
                src={blackMateria}
                align="right"
            >
                We already know how some things are going to play out
            </CustomImage>
            {splitText(`<ul>
                <li>Cid and Vincent will be playable characters (<i>DUH</i>);</li>
                <li>the Reunion will take place, Sephiroth's body will be resurrected, Cloud will finally break and then find his place in the world;</li>
                <li>Shinra will try to stop Sephiroth -possibly with the Huge Materia, possibly with the Sister Ray Cannon- but fail/get stopped, and then crumble;</li>
                <li>the party will need to visit Wutai, too much setup has been spent on having it go to war against Shinra for it to not happen.</li>
            </ul>

            <u>Things I'm <i>not that</i> sure about, on which I could very possibly be wrong:</u>
            <ul>
                <li>Cloud disappearing, only to be found again in Mideel - Tifa has already had a toned-down version of the Lifestream trip, things might change a little in the new game;</li>
                <li>Cid's background has completely changed, but it would be sad to see Rocket Town being completely cut off from the game;</li>
                <li>I expect some more delving into Ifalna, Aerith and Professor Gast's past in Icicle Inn, maybe with some direct recollection from Vincent, but at the same time I wouldn't be too surprised if Icicle Inn got scrapped completely;</li>
                <li>I envision the party being kept captive by Shinra in Junon, but I'm not sure Shinra planning to execute them is the best choice in 2024;</li>
                <li>the gameplay is going to change again, and this open world model would means that securing the Highwind would bring absolutely nothing to the table;</li>
                <li>I'm not sure we'll face Deepground, but I at least expect some hints being thrown around about Genesys' destiny, and maybe we'll also have Yuffie have her revenge on Nero (this could be a DLC).</li>
            </ul>
            `)}
            <CustomImage
                alt="The last appearance of Chadley in Rebirth"
                src={chadleyEnd}
                align="center"
            >
                Things that (sadly) are not happening: we managing to get rid of Chadley
            </CustomImage>
            {splitText(`

            Generally speaking, the idea that the third part of the trilogy could come out in 2028 is already driving me nuts.

            I expect it to be mostly similar to the original game, but with some obvious twists here and there in order to keep people guessing.

            I honestly can't wait.`)}
        </>
    )
}

export default Chapter4;