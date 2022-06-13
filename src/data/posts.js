import charmeo from '../images/meo.gif';

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
];

export default posts;
