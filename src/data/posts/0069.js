import { Link } from 'react-router-dom';
import YouTubeVideo from '../../components/posts/youtubeVideo';
import CustomImage from "../../components/posts/customImage";

import FinalShowdown from '../../images/post-0069/final-showdown.jpg';
import FFCollectors from '../../images/post-0069/ff-collectors.jpg';

const post = {
    title: "Last days of summer",
    date: new Date("2026-09-03"),
    smartContent: (
        <>
            <p>As you may imagine, I'm playing the New Game+ of Final Fantasy XV to finish <Link to="/posts/0063">that</Link> interminable post.</p>
            <br/>
            <p>In the meanwhile, my big deadline at work went by <i>almost</i> without big issues, so I've randomly decided to take a couple of days off this week and the next one.</p>
            <br/>
            <YouTubeVideo videoId="N99VdWs-OfE" align="right" />
            <p>I swear the days I've chosen are completely random (like my sudden idea of growing a moustache - a short-lived one, luckily), but it happened to coincide with Sony's State of Play event where they announced Final Fantasy 7 Revelation's release date.</p>
            <br/>
            <p>Feel free to tell my boss I'm going to take a week off (or maybe a couple) starting from the 8th of April, 2027.</p>
            <br/>
            <p>Now, for the <i>"fun fact"</i> (mandatory air quotes): while Sony announced they will discontunue the production of physical games starting January 2028, Square is making me buy this one by adding YET ANOTHER Through the Ages reprint in physical preorders.</p>

            <CustomImage
                alt="The Through the Ages reprint of Final Showdown"
                src={FinalShowdown}
            >
                <i>Please, make this nightmare end...</i>
            </CustomImage>
            <br/>
            <p>Now, I would love to also brag about buying the super-uber deluxe collectors edition of the game, but the logistics are not on my side: the price tag is steep, and it seems like that Square's distribution is limited to Japan.</p>
            <CustomImage
                alt="The Collectors Edition of Final Fantasy 7 Revelation"
                src={FFCollectors}
                align="center"
            />

            <br/>
            <YouTubeVideo videoId="BJl6QvjFpsA" align="right" />
            <p>But DON'T WORRY, they have found a different way to assault my wallet anyway: Final Fantasy Resonance has also been announced for release on October 22, 2026.</p>
            <br/>
            <p>I've OBVIOUSLY already preordered it for the PlayStation 5, in the meantime you can try it out on Steam <a href="https://store.steampowered.com/app/3259780/FINAL_FANTASY_RESONANCE/">here</a>.</p>
            <br/>
            <p>Demos are also available for both versions of the Nintendo Switch, but I don't think that linking them here would make any sense.</p>
        </>
    ),
    signature: `Have fun!
    Romeo`
};

export default post;
