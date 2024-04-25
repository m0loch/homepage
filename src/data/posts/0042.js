import { splitText } from '../../components/common/textFunctions';
import YouTubeVideo from '../../components/posts/youtubeVideo';
import { ReactComponent as InterIcon } from '../../images/inter20.svg';

const post = {
    title: "Liberation Day - 2024 edition",
    date: new Date("2024-04-25"),
    smartContent: <>
    {splitText(`
    Despite the fact that I'm once again posting on this day, I swear it's just a coincidence and I'm not going to get political with this post - while, mind you, Italy still has to deal with a shitty government that meddles in everything to propel forward a fascist agenda.

    But let's start with a random non-sequitur:
    `)}
    <YouTubeVideo videoId={"5HQQo4XmqBE"} caption="Why YouTube instead of Spotify? I wanted to try adding a caption ^^;" />
    {splitText(`

    <b>And now, for some "actual" content</b>
    I've just finished Final Fantasy 7: Rebirth and I now need to elaborate everything - I overall liked it, but I can totally relate to people who don't.
    <ul>
    <li>While on one hand Square Enix managed to avoid some of the traps they fell into with Final Fantasy 16 (<i>speaking of which, I'll play those DLCs sooner or later....</i>), some boss fights really feel like a drag, and yes I'm speaking of pretty much the entire Chapter 14.</li>

    <li>They changed the story a bit, but nothing too outrageous and/or that I didn't expect, but some things really leave you with a bitter taste.</li>

    <li>SOMEBODY PLEASE PROMOTE A LAW AGAINST MANDATORY MINIGAMES - if I wanted to play a minigame collection with some plot here and there I would have played Like a Dragon: Infinite Wealth (<i>speaking of which: I'll do that too, eventually</i>).</li>
    </ul>

    I <i>think</i> I really enjoyed the game, but I need some time to understand how much of it is actual enjoyment and how much is coping.
    I'll need some days to actually grasp my feelings about everything, maybe I will come up with another big post like for FF16, maybe not, who knows?

    Oh, and by the way, something else big happened lately:
    `)}
    <center>
        <a href="https://www.inter.it">
            <InterIcon style={{
                width: "30vmin",
                height: "30vmin",
                display: "inline-block"
            }}/>
        </a>
    </center>
    </>,
    signature: `Peace,
    Romeo`
};

export default post;