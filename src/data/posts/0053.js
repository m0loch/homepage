import { splitText } from '../../components/common/textFunctions';
import { Link } from 'react-router-dom';
import YouTubeVideo from '../../components/posts/youtubeVideo';

const post = {
    title: "Goodbye 2024~",
    date: new Date("2024-12-31"),
    smartContent: (
        <>
            <p>Following the <Link to="/posts/21">past</Link> <Link to="/posts/38">installments</Link>, here's my Spotify playlist for 2024:</p>
            <br/>
            <iframe title="2024 in a nutshell" style={{ borderRadius: "20px" }} src="https://open.spotify.com/embed/playlist/520dUurRrH7WOKqHUH3zmR?theme=0" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            {splitText(`
            

            It <i>is</i> quite odd, but since I’m hardly playing guitar anymore and often end up listening to various podcasts during my interminable train rides, I haven't been listening to much new music lately.

            Small and unrelated updates before the beginning of the new year:`)}
            <p>As mentioned in this <Link to="/posts/50">post</Link>, I thought that being able to link a single post would be a useful feature - well, I just implemented the feature.</p>
            {splitText(`
            I also never followed that same post up with my impressions of Like a Dragon: Infinite Wealth, which I consider a great game.
            Don't hold your breath, though - I probably won't bother go more in depth than that, just play it if you like turn based JRPGs while not hating the Yakuza series (and vice versa).

            Don't get me wrong: I liked it. But if I can find some time in the next weeks I'll probably be more inclined to write something about Final Fantasy 13 (yes, it just took me <i>15 years</i> since the release to actually play it). For now, though, I'm playing Triangle Strategy, sinced my brother gave it to me as a Christmas gift.

            Here's a trailer for those of you who don't appreciate tactical RPGs as much as you should:

            `)}
            <YouTubeVideo videoId={"7nhTJ-Evv_U"} />

        </>
    ),
    signature: `Have a nice 2025,
    Romeo`
};

export default post;