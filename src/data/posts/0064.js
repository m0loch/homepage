import { splitText } from '../../components/common/textFunctions';
import { Link } from 'react-router-dom';
import YouTubeVideo from '../../components/posts/youtubeVideo';

const post = {
    title: <i>Celebration</i>,
    date: new Date("2025-12-12"),
    smartContent: (
        <>
            <p>As you should know, The Game Awards 2025 happened and Clair Obscure: Expedition 33 won <i>everything</i>.</p>
            <br/>
            <p>Exactly as I <Link to="/posts/59">predicted</Link>, one could add.</p>
            <br/>
            <YouTubeVideo videoId={"n7jhOvCjMHk"}
                caption={"I wanted Ben Starr to win, but I can't really complain about this outcome."}
            />
            {splitText(`

                I won't be as bold as saying that I discovered this game or anything, but I don't remember being this hyped for a game in recent times.

                Experiencing it from day 1, see the meme growing and then looking at how it sweeped the this year's Game Awards was something truly special, I wonder if this kind of success is going to have any lasting impact on an industry that seems to be faililng at addressing its own problems.

                The only issue I have with this year's edition is that I feel like Silksong needed some recognition too, Team Cherry deserved to be awarded <i>something</i> for how they managed to take their time and come up with such an incredibly polished product.
            `)}
        </>
    ),
    signature: `Romeo`
};

export default post;