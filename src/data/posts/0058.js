import { splitText } from '../../components/common/textFunctions';
import YouTubeVideo from '../../components/posts/youtubeVideo';
import CustomImage from "../../components/posts/customImage";
import AngryPope from '../../images/post-0058/angry-pope.png';


const post = {
    title: "Freedom, 80 years later",
    date: new Date("2025-04-25"),
    smartContent: (
        <>
            <YouTubeVideo videoId={"oecZmlLXqXk"} align={"right"}/>
            {splitText(`Hi there, this is going to be a little weird, but bear with me.

            Or not, it's freedom we're discussing today, so it would be hypocritical from me to try to boss you around.

            If you don't live under a rock and share a resemblance of my interests, you should know that yesterday Clair Obscur: Expedition 33 (see the trailer on the right) has been released.

            I don't really know where to start: the mechanics of the game seem to be interesting, the visuals are stunning, and this is the first project of <a href="https://www.sandfall.co/" target="_blank">a brand new french game studio</a>.

            ...but I can't really say anything about the game at the moment, since my copy has not been delivered yet :D

            Now that I've done what everybody expected me to, let's talk about something more important - be grateul that I'm not trying to mix the game's plot with what I'm really going to talk about: freedom.

            I live in Italy and the 25th of April is a very important date, as it marks the end of fascism and the beginning of the modern age.`)}
            <CustomImage
                src={AngryPope}
                alt="You don't mess with this man's mom"
                align="left"
            >You don't mess with this man's mom</CustomImage>
            {splitText(`
            Now, imagine my disappontment in discovering that, following the death of the late Pope Francis, our dear Prime Minister decided that this year's celebrations should be <i>sober</i>...

            It's not like I had anything against the man himself (even though I'm an atheist and he had some <i><a href="https://www.msn.com/en-us/news/world/pope-francis-uses-anti-gay-f-slur-while-refusing-to-let-gay-men-join-the-priesthood/ar-BB1o6t84?apiversion=v2&noservercache=1&domshim=1&renderwebcomponents=1&wcseo=1&batchservertelemetry=1&noservertelemetry=1">questionable</a> and <a href="https://www.vaticannews.va/en/pope/news/2025-03/pope-francis-pilgrimage-italy-movement-life-abortion.html">outdated</a></i> positions, let's say...), but I think that using his death as a way to tone down what should be the most important celebration of the year is yet another filthy move from a neofascist government that should be reminded daily how things ended <i>that time</i>.

            To be honest, I'm just really upset.
            And angry at the fact that this should be a day of celebration.
            `)}
        </>
    ),
    signature: `Romeo`
};

export default post;