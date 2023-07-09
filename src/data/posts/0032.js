import { splitText } from '../../components/common/textFunctions';
import ff16clive from '../../images/ff16-clive.webp';

const post = {
    title: "Final Fantasy 16 and other news",
    date: new Date("2023-07-09"),
    smartContent: (
        <>
            {splitText(`
                Before getting to the heart of the matter, a warning:
                I had to cut off the Tetris minigame as I've found out that it suffered the move to React 18 and it's not working anymore.

                I didn't just fix it because I'm having more fun working on a project that will probably never see the light of day - a mini-rpg I'm trying to put together just for the sake of studying the various systems.
                It's one of the things I've always wanted to do since I was a child, and after playing FF16 from an analytical point of view I've started pouring my time on it, which means I've got no time to fix any kind of issue I see on this site.

                <b>If</b> things keep going I'll start writing some kind of dev diary, in order to share something even if the product doesn't reach its final form, but for now I wanted to talk about something else.
                `)}

                <img alt="Young Clive Rosfield" src={ff16clive} style={{ display: "block", margin: "25px 25px 0", float: "left", maxWidth: "30%" }} />

                {splitText(`

                I just finished Final Fantasy 16!
                ...and now it's time to face the aftermath.

                I found the plot and its writing to be really enjoyable, while at the same time I've never been able to fall in love with the gameplay.
                It's partly because it's an action RPG rather than a good old turn-based one, partly it's non-existent difficulty that made it boring at times.
                Mostly the latter I'd say, having found FF7 Remake much more enjoyable.

                I still think it's a great game and I'm happy of my overall experience with it, but I think I'll need some time to digest everything.

                Maybe in the next days I'll post something about my impressions on both the technical side and the plot.

                <i>PS: image taken from <a href="https://finalfantasy.fandom.com/wiki/Clive_Rosfield">the final fantasy wiki on fandom</a></i>
            `)}
        </>
    ),
    signature: `Romeo`
};

export default post;