import { splitText } from '../../components/common/textFunctions';
import YouTubeVideo from '../../components/posts/youtubeVideo';

const post = {
    title: "Final Fantasy 7 updates",
    date: new Date("2024-02-18"),
    smartContent: (
        <>
            {splitText(`
                As promised yesterday, I wanted to talk a bit about another game I've been playing in the last months, namely <b>Final Fantasy Ever Crisis</b> (you can get it on <a href="https://store.steampowered.com/app/2484110/FINAL_FANTASY_VII_EVER_CRISIS/">Steam</a>, <a href="https://play.google.com/store/apps/details?id=com.square_enix.android_googleplay.ff7ecww">Google Play</a> or <a href="https://apps.apple.com/no/app/final-fantasy-vii-ever-crisis/id1536905430">Apple Store</a>).

                This is the first gacha I've ever played and, to be completely honest, I was completely fine with that.
        
                It is completely free and you can expect to enjoy much of the content without spending any kind of money, but at the same time it's built with every <a href="https://en.wikipedia.org/wiki/Operant_conditioning_chamber">Skinner Box</a> mechanism you can think of.
                Compared to what I was expecting, though, there's basically no ad (watching an advertisement nets you 50 blue gems/day, which is basically nothing - and you can't even see more than two per day), while it obviously feature a huge variety of potential In-App Purchases; I say "obviously" because, contrary to popular belief, advertisements are not a big source of revenue for mobile games, <a href="https://www.forbes.com/sites/insertcoin/2014/03/01/why-its-scary-when-0-15-mobile-gamers-bring-in-50-of-the-revenue/">whales</a> are (<i>I know, I know, that article is turning 10 this year, but it stands the test of time nonetheless</i>).

                The gameplay loop is pretty simple: you've got a main menus that let you manage your characters, craft your materias/weapons and keep track of the materials needed for that.
                The quest system, coupled with the uncessant stream of special events, gives you a constant flow of battles for your team to face.

                The battle system is cool, but gets boring after a short while and the astounding graphics can only do so much to keep it interesting.

                There's a downer though, and I'll be blunt about it: I started playing in the hopes of being able of consuming the First Soldier campaign content, but the story chapters are released very slowly in general and that side of the story doesn't seem to be very interesting so far.

                Generally speaking it's a very cool mobile game, with a lot of effort and competent design aimed at keeping the player engaged over a long period of time, but it pales in comparison to <i>actual</i> games, if you know what I mean...

                But, of course, the only thing we really care about is the release of Final Fantasy 7 Rebirth in eleven days from now:
            `)}
            <YouTubeVideo videoId={"Q56cRDseTGQ"} />
        </>
    ),
    signature: `See you in the near future,
    Romeo`
};

export default post;