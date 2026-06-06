import { splitText } from '../../components/common/textFunctions';
import YouTubeVideo from '../../components/posts/youtubeVideo';

const post = {
    title: "The Final Revelation",
    date: new Date("2026-06-06"),
    smartContent: (
        <>
            <YouTubeVideo videoId="PH3ox5krci8" align="right" />
            {splitText(`
                As you may already know, the Summer Game Fest Live 2026 just ended and they announced Final Fantasy 7 Revelation.

                I have nothing more to say, here's the <a href="https://press.na.square-enix.com/FINAL-FANTASY-VII-REVELATION-ANNOUNCED-EXPERIENCE-THE-JOURNEYS-END-IN-" target="_blank" rel="noreferrer">press release announcement</a> from Square Enix, let's hold our breath until Spring 2027.

                We're almost there.

                I do have a few takeaways from these trailers, though:
                <ul>
                    <li>Highwind! Woo-hoo!</li>
                    <li>The trailers for Rebirth featured a lot of <i>weird</i> things, like the segway or <b>Zack as a playable character</b>, to tingle the curiosity of the fans... this time everything seems to be pretty adherent to the original plot, which doesn't mean they'll avoid shaking things up a bit, but the central message is that we'll be delivered what we expect.</li>
                    <li>Weapons! Cool!</li>
                    <li>Cid and Vincent are confirmed to be playable characters (phew!), and the latter's Limit Break seems to be more useful than the one from the OG, or at least more <i>playable</i>, if you prefer.</li>
                    <li>They're implementing <b>jobs?!?</b>
                </ul>
            `)}
            <YouTubeVideo videoId="5lP5C0smFJk" />
        </>
    ),
    signature: `Romeo`
};

export default post;