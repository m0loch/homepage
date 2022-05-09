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
];

export default posts;
