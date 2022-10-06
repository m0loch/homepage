import React from 'react';
import charmeo from '../images/meo.gif';
import { Link } from "react-router-dom";

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
            <p> After the release of https://ddrop.it/ and the relative crunch, I've finally been able to take some time off work and come to <a href="https://en.wikipedia.org/wiki/Genoa" target="_blank" rel="noreferrer">Genoa</a> and meet my friends.</p>
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
];

export default posts;
