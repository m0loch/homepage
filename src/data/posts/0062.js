import { splitText } from '../../components/common/textFunctions';
import YouTubeVideo from '../../components/posts/youtubeVideo';
import CustomImage from "../../components/posts/customImage";
import CassetteBeasts from "../../images/post-0062/cassette_beasts.png";

const post = {
    title: "Small summer update",
    date: new Date("2025-07-09"),
    smartContent: (
        <>
            {splitText(`Hey there!
            A few things happened in the last months that I basically neglected to mention here, but given that this is basically my journal I think I'll just mention them without much detail for now - if I feel like going back to them I'll do that in due time.

            So, let's start!
            <h3>A brief talk about Indie games</h3>
            During the spring I had the time to play <a href="https://store.steampowered.com/app/1321440/Cassette_Beasts/" target="_blank" rel="noreferrer">Cassette Beasts</a> and its DLC.
            `)}
            <iframe title="Banger OST" style={{ borderRadius: "20px" }} src="https://open.spotify.com/embed/album/2d1MozX0uidsoqDqKhN96q?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <figcaption style={{ justifySelf: "center", textAlign: "center" }}><i>Banger.</i></figcaption>

            {splitText(`
            I didn't expect it to be much more than a mildly original spin on the Pokémon concept, but I was pleasantly surprised both by its spirit and its execution.

            At some point I wanted to write a post about what Cassette Beasts does right that Pokémon never managed to deliver, maybe I'll do so in the future, but now it's not the time.

            For the moment I'll just brag about the platinum I achieved.`)}

            <CustomImage
                src={CassetteBeasts}
                alt="Achievable achievements"
                align="center"
            />
            {splitText(`From a game published by <a href="https://www.rawfury.com/" target="_blank" rel="noreferrer">Raw Fury</a>, to another: I just started playing <a href="https://store.steampowered.com/app/1569580/Blue_Prince/" target="_blank" rel="noreferrer">Blue Prince</a> and I can see why everybody is talking about it like it's the new Balatro, I've yet to get a full grip of it.

            I believe I'll come back to this after a few more hours of play.

            <h3>Why do we always end up talking about Final Fantasy?</h3>
            I wanted to write something about the imminent Final Fantasy 9 remake that was announced last monday - except that it wasn't.
            `)}
            <YouTubeVideo videoId={"EQ-GU9KBxJE"} align="right" caption="We received a celebratory video though..." />

            {splitText(`
            I mean, it's not like I really expected it, but I heard a rumor that correctly pointed out 07/07/2025 as a good date for the announcement given the <i>25th anniversary of the original release</i> (feel old yet? I do) I kind of <i>wanted</i> to believe it.

            I just ended up realizing, instead, that back in the day we could live the dream of having a mainline Final Fantasy game almost every year, nowadays things are a bit more complex (FF15 will turn 10 next year, <i>FEEL. OLD. YET?</i>).

            As others pointed out though, <a href="https://www.square-enix-games.com/en_EU/news/final-fantasy-tactics-ivalice-chronicles-developer-messages" target="_blank" rel="noreferrer">Final Fantasy Tactics: Ivalice Chronicles</a> is coming out at the end of September and the idea of not having two concurrent re-releases makes a lot of sense.
            We'll see if we <i>ever</i> get a remake of FF9.

            Moving on: yesterday evening I finished a run on <a href="https://store.steampowered.com/app/239120/Final_Fantasy_III_3D_Remake/" target="_blank" rel="noreferrer">Final Fantasy 3</a> but I won't write a post about it - maybe I'll post a bigger post speaking of all the old Final Fantasy from a more "historical" perspective.

            Let's just say that back in the day I played a fan translated version of it on a NES emulator and I enjoyed it much more than the way cuter remake.
            That speaks more about me and my grumpiness than about the game, though.

            <h3>Magic: The Gathering - FINAL FANTASY expansion</h3>`)}<CustomImage
                src="https://www.cardtrader.com/uploads/blueprints/image/332082/show_cloud-midgar-mercenary-magic-the-gathering-final-fantasy.jpg"
                alt="Cloud, Midgar Mercenary"
                align="right"
            />
            {splitText(`
            The <i>other</i> meatier post I wanted to write without actually writing it focused heavily on the new Final Fantasy expansion for Magic: The Gathering that recently came out.

            I don't want to just scratch the surface of it, but at the same time reviewing everything is way above the amount of time I'm able to put into this.

            Just to give you an idea on the sheere volume of cards involved, if we just focus on the <a href="https://gatherer.wizards.com/sets/FIN" target="_blank" rel="noreferrer">main set</a> there are 673 cards.
            
            I would love to write something about them but OH MY GOD DO YOU REALIZE HOW MANY CARDS ARE THOSE?

            I'll publish something, <i>eventually</i>, but please don't hold your breath.
            `)}


        </>
    ),
    signature: `Romeo`
};

export default post;