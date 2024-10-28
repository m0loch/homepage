import { splitText } from '../../components/common/textFunctions';
import YouTubeVideo from '../../components/posts/youtubeVideo';

const post = {
    title: "Indie RPG time",
    date: new Date("2024-10-28"),
    smartContent: (
        <>
            <p>While juggling other things (i.e. the start of the new season of <a href="https://www.sisalfunclub.it/">SFC</a>) I found out the time to play Sea of Stars.</p>
            <br/>
            <YouTubeVideo videoId={"8VJ8Zm648C8"} align={"right"}/>
            {splitText(`
            Well, to 100% it, actually.

            Did I enjoy it?
            <i>Yes.</i>
            Am I one year late to the party as usual?
            <i>Also yes.</i>
            Do I consider it a masterpiece?
            ...nope.

            I really loved the art style, the combat system, the puzzle designs... well, a <b>lot</b> of the design choices.
            It's like playing an updated version of Chrono Trigger, and that is meant to be a huge compliment.

            I just disliked a couple of things: the Ancient Crypt and the <i>writing</i>.

            The Ancient Crypt is kind of a cute idea on its own: it's a location where backers of the original Kickstarter campaign can find their own monument, and while I don't think that it is a cardinal sin or a unique idea on its own, it just felt to be a bit too on the nose, a bit too meta.

            The writing, on the other hand, is a more complex matter: everything feels tremendously <i>cute</i>, but it lacked depth in my opinion.
            Characters feel quite shallow, and the only real growth I felt was when Headmaster Moraine decided to step down from his position - everything else felt a bit too cheap, a bit stale, a bit... <i><a href="https://tvtropes.org/pmwiki/pmwiki.php/Main/InJoke">Klee'shaë</a></i>.

            I'll avoid spoilers and keep myself vague, but no plot twist ever lands as a real plot twist, and while cute the character of Garl is treated as the only relevant one throughout the entirety of the game.
            
            I'll sum it up by saying that, in order to reach the best ending, the player needs to perform some extra feats and gets rewarded by obtaining <i>literally</i> more Garl.

            Ok ok, time to move on with Like a Dragon: Infinite Wealth :)
            `)}
        </>
    ),
    signature: `Romeo`
};

export default post;