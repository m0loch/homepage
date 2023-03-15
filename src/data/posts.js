import React from 'react';
import charmeo from '../images/meo.gif';
import profanities from '../images/profanities.jpeg';
import { Link } from "react-router-dom";
import YouTubeVideo from '../components/posts/youtubeVideo';
import { splitText } from '../components/common/textFunctions';

const posts = [{
    key: 0,
    title: "And so, it begins",
    date: new Date("2022-03-26"),
    content: `
    This is the first blog post on my new homepage.

    I don't even remember the last time I had one (we're probably talking of the late 90s, just to give you an idea) but lately I felt like the need of a space of this kind.
    It's not like I lack the ways to keep contact with people or to basically rant as the grumpy old coot I am, it's just that since I've had this transition to the web development I need a space to experiment on, and I need it to be public in order to be forced to not just forget about it after a while.

    Well, this is all I have for you today.
    `,
    signature: `See you in the future
    Romeo`,
},
{
    key: 1,
    title: "Small update",
    date: new Date("2022-04-02"),
    content: `
    Really not much of an update, I just wanted to state a bit of my intentions for the future.

    I've published the Mosaic minigame in order to have a working online reference for PIXI.js, but I've yet to come up with a properly way to either choose the starting image or give credit to the author.
    To be completely honest that's not even a priority at the moment, given that this is a zero-traffic site and I'm not gaining any kind of profit for my theft.

    I want to point out that the FF7 remake based wallpaper used for that minigame has been taken from <a>https://syanart.com/</a>, head over there if you want to download the original piece of art or another other great ones.
    `,
    signature: `Romeo`,
},
{
    key: 2,
    title: "Wordle",
    date: new Date("2022-04-04"),
    content: `
    It's monday morning and I'm tired, and I'm expecting today to be quite a boring day.

    That's why I published yet another Wordle clone, even though I've yet to add working transitions (I'm having trouble with CSS delays, everything will probably just fall into place as soon as I find out what I'm doing wrong).

    In the meantime stay hydrated, and remember that by refreshing the page you'll be immediately in for another word, insteading of having to wait for a full day,
    `,
    signature: `Romeo`,
},
{
    key: 3,
    title: "Wordle (update)",
    date: new Date("2022-04-12"),
    content: `
    I spent a lot of time lately playing Yakuza: Like a Dragon and planning my trip to Paris (in order to attend the wedding of my good friend Diva with Alexis), so I'm sorry I didn't spend much time working on this site.

    Anyway, I'm publishing an updated version of Wordle with some quasi acceptable animations and a slightly better keyboard for mobile.
    Sadly I think I'll need to come up with something more <i>sophisticated</i> for the flipping animation, as the tiles change colour before the start of the animation and THAT SUCKS.
    `,
    signature: `More about that in the next update
    Romeo`,
},
{
    key: 4,
    title: "WHOOOPS",
    date: new Date("2022-05-09"),
    content: `
    Well, I spent last month playing Yakuza: LaD (really enjoying it, up until the last chapter) and trying to do my part in the realization of a small indie game I want to publish with the guys with whom I made <a href="https://m0loch666.itch.io/bugformer">Bugformer</a> some months ago.

    Today I realized that the Wordle clone is bugged *and* that by releasing the last edits I somehow managed to break the Fifteen's CSS.
    My bad for just reverting to standard CSS when material UI made @mui/styles legacy - I'll figure up something to have more control on what I'm doing, especially because this site is very small and I'm facing this kind of issues already.

    But, for the moment, goodbye Wordle clone.
    `,
    signature: "Romeo"
},
{
    key: 5,
    title: "Missing steam project update",
    date: new Date("2022-05-16"),
    content: `
    I wanted to post an update about the Steam project we're working on, but OBVIOUSLY when I set up the blog part of this mini-page I didn't come up with a way to actually include media in the posts.

    Well, life sucks, especially if you can only blame yourself for the things that are missing.

    We'll see if over the course of the week between working on my regular job AND the game I'll find time to fix this overlook.
    `,
    signature: `Lazymeo`
},
{
    key: 6,
    title: "Happy Republic Day",
    date: new Date("2022-06-02"),
    images: [charmeo],
    smartContent: (
        <>
            <p>First of all, let's celebrate once again that Italy's a republic instead of a <s>redacted</s> monarchy.</p>
            <br />
            <p>This is a tentative update with a new way to precompile posts, with <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Links</a> and other "smart" content.</p>
            <br />
            <p>I know this may sound ridicolous, but I went through all the effort just for the sake of adding this gif of myself:
                <br />
                <img alt="self-portraying gif" src={charmeo} style={{ display: "block", margin: "15px auto 0" }} />
            </p>
            <br />
            <p>The other big news I can bring is that I'm kind of stressed because lately things at work are being kind of heavy - not in a <i>bad</i> way, more like in a <i>they do actually require a ton of effort</i> one, but I still managed to play the full story of Inscryption in my spare time.</p>
            <br />
            <h3><b style={{ textAlign: "center", display: "block", margin: "auto" }}>PLAY INSCRYPTION.</b></h3>
        </>
    ),
    signature: `Happy Pride month averyone
    Romeo`
},
{
    key: 7,
    title: "So much work, so little to update",
    date: new Date("2022-06-13"),
    smartContent: (
        <>
            <p>Well, what do you want me to say?</p>
            <p>I spent the better part of last week transitioning away from plain CSS, rewriting everything to work with the <a href="https://mui.com/material-ui/guides/styled-engine/">@mui/styled-engine</a>.</p>
            <br />
            <p>Too bad that nobody's going to notice any difference, at least I've learned something that I might as well reuse in my actual working hours.</p>
            <br />
            <p><i>...too bad our main project is heavily based on makeStyles(), given that it still features MUI v4.</i></p>
        </>
    ),
    signature: "Romeo"
},
{
    key: 8,
    title: "Wordle is back!",
    date: new Date("2022-06-17"),
    content: `
    ... I mean, don't get me wrong - I know thet the Wordle hype out there is not what it was some months ago, yet after all this time I managed to reupload my revisioned version and finally I can sleep peacefully.

    The fun thing about it is that I've finally found the strength to go back to that in this period of massive work stress, with funny, moving deadlines and colleagues that either f* things up in the wrong moment or vanish into thin air without any apparent reason.

    But no worries, things could be worse, like that time I took down the production database after a simple misclick.
    Like, a couple of days ago?

    We're living some fun times, I've got to say.
    `,
    signature: `In serious need of some vacation
    Romeo`
},
{
    key: 9,
    title: "Vacations, vacations",
    date: new Date("2022-06-23"),
    smartContent: (
        <>
            <p> After the release of <a href="https://ddrop.it/">ddrop.it</a> and the relative crunch, I've finally been able to take some time off work and come to <a href="https://en.wikipedia.org/wiki/Genoa" target="_blank" rel="noreferrer">Genoa</a> and meet my friends.</p>
            <br />
            <p>We're planning to work a little on BugFormer in the next days but also to spend some time at the beach -which is something I don't get to do very often while living on the alps.</p>
            <br />
            <p>I've took advantage of this sudden free time and finally fixed the last two things that bothered me on Wordle, now I'd like to put some work on the <Link to="/projects">projects section</Link> and then maybe port a game that me and <a href="https://www.linkedin.com/in/davidejones88">Dav</a> released for iOS nearly a decade ago.</p>
        </>
    ),
    signature: "Romeo"
},
{
    key: 10,
    title: "Projects revamp",
    date: new Date("2022-07-04"),
    content: `
    I'm back from my short vacation -where we missed the chance to do <b>any</b> kind of work on BugFormer- and, to burn myself immediately out, I've started some revamp to the project section.

    The idea is to add some settings to each game to diversify the experience, and maybe (later down the line) save top scores and things like that.

    For the moment I've rewritten the "Possible followups" section (ngl, that title is crap), but I plan on tackling the other existing sections as well before coming up with a new game.
    `,
    signature: "Romeo"
},
{
    key: 11,
    title: "Settings",
    date: new Date("2022-07-10"),
    content: `
    I wanted to expand a little on the existing projects before starting to adding a new one, so now it's possible to play the Fifteen puzzle on a 3x3 board (which makes it not a 15 puzzle anymore, but I digress).

    In order to add the settings and make them work, though, I ended up having to import Redux in the project - and that's something I wanted to avoid, in order to try to keep the project <i>easy and relaxed</i>.

    Installing the redux and react-redux packages, as one can imagine, proved to be an easy task: you just need to install them using your packet manager of choice, import them, realize that you can't access the site anymore because the SSL support has broken, update everything, <a href="https://github.com/akveo/react-native-ui-kitten/issues/996">fix yet another bug that breaks random things</a>, go on with your work.
    
    <center><h4>BOOOOOOORING~</h4></center>
    `,
    signature: `Rant over
    Romeo`
},
{
    key: 12,
    title: "Settings (2)",
    date: new Date("2022-07-16"),
    content: `
    Update on the previous post:
    I've added Redux to the website and simple settings for each project.

    Now you should be able to change settings around (and the dark mode) and refresh the page without losing any edit (hooray...?).

    The next step is deciding what game I should develop now.

    Time to add some content!
    `,
    signature: `Romeo`
},
{
    key: 13,
    title: "I'm not dead",
    date: new Date("2022-08-12"),
    content: `
    Almost a month passed since the last update and I want to reassure the both of you that I'm not dead: I just had some health issues (laryngitis followed by COVID) and I PLAYED THE WHOLE HORIZON: FORBIDDEN WEST.

    In order to move things forward a little, I'm now publishing the bare-bones version of the endless runner I worked on a little before this whole situation, even if I'm not really liking it that much.

    I want to also publish a small Tetris clone in the next days, then fix some minor things I'm not really satisfied with (namely: the win popup and the UX of the Projects section).
    `,
    signature: `Romeo`
},
{
    key: 14,
    title: "Still not dead",
    date: new Date("2022-09-17"),
    content: `
    Yet another month without updates passed by.
    I'm not going to lie, I really lack the energies to keep up with the updates lately.
    Last month I've had health issues while also having to cover for other ill coworkers, and that made me too tired to actually code anything on my spare time.

    In the mean time I (finally) started playing Cyberpunk 2077, and I managed to play a bit of Across the Obelisk, which seem to have some good potential but I think I'll pause for a bit.
    `,
    signature: `Meo`
},
{
    key: 15,
    title: "Sad updates",
    date: new Date("2022-09-26"),
    content: `
    The good news is that I've finished Cyberpunk 2077 and I'm really happy having played it.
    In fact I'm kind of angry at myself for not being able to play it before, but I was really bitter with all the issues I faced in getting my preordered physical copy of the game for the PS4 and, after managing to put my hands on it only in late november 2020, discovering the game was just barely playable.

    Playing it on the PS5 was a great experience though, and the great atmosphere and storytelling made up for the occasional bug here and there (except for Dakota Smith's last gig not triggering on my savefile - that drives me nuts).
    I just resent not being able to unlock the secret ending on my spoiler-free run.

    "Why the title, then?" you may ask.
    Well, I thought I was fully prepared for the worst, but seeing the far-right win the italian elections really breaks my heart, that's why I'm ranting on my secret place on the internet at 3am instead of getting a good night of rest before yet another sad monday at work.
    `,
    signature: `:(`
},
{
    key: 16,
    title: "Rewrite everything",
    date: new Date("2022-10-15"),
    images: [profanities],
    smartContent: (
        <>
            <p>I'll be straightforward: coding Tetris was fun back in the day when I had some fun with Tetris 99 and I discovered the existence of <a href="https://harddrop.com">harddrop.com</a> which gave me pleny of insight to write my own version.</p>
            <br />
            <p>I then proceeded writing my own stand-alone React version without even checking all the marks on the TODO list and moved on as soon as I found something more interesting.</p>
            <br />
            <p>Integrating that inside the website proved to be more annoying than it should because, having written it with a React.Component object oriented approach while the rest of the site was properly built on high order components, I found myself having to deal with some strange behaviours and interactions when it came down adding the mobile controls.</p>
            <br />
            <p>That lead to some good old debugging:</p>
            <img alt="One day we'll have better integrated tweets, but today's not that day" src={profanities} style={{ display: "block", margin: "15px auto 0", maxWidth: "80%" }} />
            <br />
            <p>At the end of the day I basically started rewriting everything as an HOC and, to be truly honest, facing some interesting issues like the handling of the game loop via hooks, but that's taking an unreasonable amount of time that I don't really have at the moment.</p>
            <br />
            <p>And that's why I started Final Fantasy 7 Remake: Intergrade and preordered the remake of Crisis Core.</p>
        </>
    ),
    signature: `Romeo`
},
{
    key: 17,
    title: "Undisclosed news",
    date: new Date("2022-10-30"),
    smartContent: (
        <>
            <p>Long story short: rewriting Tetris proved to be much more difficult than expected and I should have scrapped and rewritten it from scratch rather than trying to adapt the code.</p>
            <br />
            <p>The real problem, though, consists in the fact that the pockets of time I can devote to this site are very slim because <b>things are happening</b>.</p>
            <br />
            <p>I hope to be able to come up with some real news in the near future.</p>
            <br />
            <p>In the meantime, do yourself a favor and go play <a href="https://tann.itch.io/slice-dice?ac=qfCyYFQF-tw">Slice & Dice</a></p>
        </>
    ),
    signature: `Romeo`
},
{
    key: 18,
    title: "Public service announcement",
    date: new Date("2022-11-26"),
    smartContent: (
        <>
            <p>So the big news is this: I've resigned from my position at <a href="https://ivemind.com/">Ivemind</a> and, starting January the 16th, I should be starting working for a bug, non videogame-related company on a videogame-related project.</p>
            <br />
            <p>I don't feel like disclosing much else about this at the moment, except for the fact that this means I'm moving back to Milan and that I'll have to reinstall Unity once again (hooray!!).</p>
            <br />
            <p>I also want to point out that the last two weeks have been crazy, one being on full vacation with my friends and the other seing me ill once again (I had high fever like three times in the last three months, my health's usually quite good) which really says something about my late level of stress.</p>
            <br />
            <p>While recovering I've started playing God of War (the 2018 one) but it's really not my favourite kind of game, but I needed something to do between earning my platinum on <a href="https://ffvii-remake-intergrade.square-enix-games.com/">FF7 Remake: Intergrade</a> and <a href="https://store.playstation.com/it-it/concept/10004142">the upcoming FF7 Crisis Core remake</a>.</p>
            <br />
            <YouTubeVideo videoId={"AiL7huRoyxM"} />
            <br />
            <p><b>PS:</b> I've stopped working on Tetris for the moment, I really lack the energy for it and rewriting from scratch something you've already programmed once is REALLY boring :p</p>
        </>
    ),
    signature: `Romeo`
},
{
    key: 19,
    title: "A quick... something",
    date: new Date("2022-11-29"),
    smartContent: (
        <>
            {splitText(`
            I'm quite tired lately - I'm still recovering from my recent illness - and I'm really BORED.
            I don't feel like playing God of War, I tried playing Transistor and Across the Obelisk but I just don't seem to be able to fall in love with anything at the moment.

            I remembered, though, how I liked <a href="https://www.choiceofgames.com/dragon">Choice of the Dragon</a> when I played it some 5-ish years ago, and wondered how difficult would it be to build a system for writing something like that of my own.

            Too bad I don't have the kind of inspiration of writing a story of my own at the moment, but under the Projects section you can find "Talks", a minimal effort at emulating that system.
            `)}
        </>
    ),
    signature: `Romeo`
},
{
    key: 20,
    title: "Merry Xmas!",
    date: new Date("2022-12-25"),
    smartContent: (
        <>
            {splitText(`
            I'll be quick
            I'll be direct
            I'll get straight to the point:

            God of War is a great game but I can't really get as engaged as I'd like.

            Luckily enough Crisis Core Reunion is exactly as good as I hoped and many manly tears were shed when today, 12 days after the release, I ended the main story.
            Minerva seems to be really overpowered though, so I'll need to come up with some good plan for that.
            After that one would expect to be near the platinum, but I've missed some minor things during the run (minor spoiler: <i>the biggest problem is a damn chest in Gongaga</i>) that end up having some impact on some apparently unrelated achievemnts.

            But... enough with that!
            `)}
            <p>I've got a gift for you: I've programmed and published my own version of Master Mind, you can find it under the <Link to="/projects">projects section</Link>.</p>

        </>
    ),
    signature: `HO HO HO
    Romeo`
},
{
    key: 21,
    title: "2023 is here!",
    date: new Date("2023-01-01"),
    smartContent: (
        <>
            <p>Just a quick, mandatory post to wish everyone a splendid 2023!</p>
            <br />
            <p>I'm two weeks away from starting my new job experience and I'm really excited, even though I've yet to find a place to stay in Milan...</p>
            <br />
            <p>In the meanwhile I'm re-developing Tyles, a puzzle game me and my good friend <a href="https://www.linkedin.com/in/davidejones88/">Davide</a> published for iOS some 5 years ago - just to keep myself busy while struggling for the last two weeks of my old job (PrestaShop I solemnly swear I won't miss you). </p>
            <br />
            <p>The game engine and the levels are already ok, it will be published as soon as I fix some collateral code, like the win screen, the levels' handling etc</p>
            <br />
            <p>Keep yourselves entertained with my Top songs from 2022 according to Spotify:</p>
            <br />
            <iframe title="2022 in a nutshell" style={{ borderRadius: "20px" }} src="https://open.spotify.com/embed/playlist/4FFADuQuY0R6ufPfvEpYBp?utm_source=generator" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </>
    ),
    signature: `Romeo`
},
{
    key: 22,
    title: "Tyles!",
    date: new Date("2023-01-06"),
    smartContent: (
        <>
            {splitText(`
            As promised, Tyles is up!
            I don't really know what I'll put together for the next updates as I'm kind of overwhelmed by both having to crunch through my last days at my current job, setting up my move to Milan and starting with my new experience on the next monday.
            I'm pretty excited but also very stressed and I managed to injure my left foot while visiting potential new homes.

            I guess that I'll probably try to polish some of the old projects as I feel that what I considered being "a little rough around the edges" and "good enough for now" deserves some more attentions.
            BUT THAT'S BOOOOOORING.

            Well, we'll see.
            `)}
        </>
    ),
    signature: `Romeo`
},
{
    key: 23,
    title: "Big news and updates!",
    date: new Date("2023-01-29"),
    smartContent: (
        <>
            <p>News time! As previously mentioned I moved back to Milan, after terminating my contract with <a href="https://ivemind.com/">Ivemind</a> and signing for <a href="https://www.sisal.it/">Sisal</a> as a Unity developer.</p>
            {splitText(`

            So, I'm back to being a professional game developer :)

            Needless to say I'm very excited but also very stressed out because, *as usual*, I neglected taking any kind of vacation between the two jobs and my first impact in the new team has consisted in doing lots of paperworks, attending online courses and being involved in the release of a new game.
            I won't delve any further in working matters or anything else, just know that I'm involved in developing games for mobile but *not* in any kind of betting.

            `)}
            <p>In the meantime I still managed to publish my own version of MineSweeper and you can already find it in the <Link to="/projects">projects section</Link>.</p>
        </>
    ),
    signature: 'Romeo'
},
{
    key: 24,
    title: "Minor update",
    date: new Date("2023-02-20"),
    smartContent: (
        <>
            {splitText(`
            Hi,
            here's Meo
            Tuning in just to say I've fixed the mobile version of Minesweeper.
            `)}
        </>
    ),
    signature: `Until next time
    Romeo`
},
{
    key: 25,
    title: "Let's brag a little bit",
    date: new Date("2023-03-11"),
    smartContent: (
        <>
            {splitText(`
            Hello there,
            as you may (or may not) have noticed I've basically stopped working on the website since changing my job.

            That's not something I'm too happy with, but I've started this little project as a sort of homework while I was working on something non-game related while still willing to do so.

            I can't say I'm 100% happy with how it turned out but I feel like I've learned my fair share of things while just having fun.

            Now the workload is much higher and I'm a lot more involved in things, which means that it's much more difficult for me to just turn the PC on after work and/or in the weekend and build something for myself.
            I hope to find a new balance because I'd love to fix some things here and there (i.e.: I feel like the runner is garbage, I'm not going to lie) but I won't make any promise.

            In the meanwhile you can go play the game we released!
            `)}
            <p>You can find it <a href="https://www.sisalfunclub.it/">here</a>, but be aware that you can play it only if you live in Italy...</p>
        </>
    ),
    signature: `Romeo`
},
];

export default posts;
