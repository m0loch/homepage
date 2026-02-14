import { splitText } from '../../components/common/textFunctions';
import CustomImage from '../../components/posts/customImage';
import YouTubeVideo from '../../components/posts/youtubeVideo';
import Mewgenics from '../../images/post-0066/mewgenics.png';

const post = {
    title: "Valentine's day",
    date: new Date("2026-02-14"),
    smartContent: (
        <>
            <YouTubeVideo videoId="LDWJn3IwiaM" align="right" />
            {splitText(`
                In a moment reminiscent of a cheap horror movie, the Lega Serie A decided to ruin my day by scheduling a match between Inter and Juventus on Valentine's day.

                But, don't get me wrong, I'm not here to complain about football or even talk about love or anything, I'm just posting a quickie to share with you my joy for Edmund McMillen's last work: Mewgenics!

                It all started with a simple tweet, and now all my regular schedule is ruined - tough luck.

                Well I'm going to San Siro, catch you later!
            `)}

            <CustomImage src={Mewgenics} alt="Mewgenics" />
        </>
    ),
    signature: `Meow`
};

export default post;