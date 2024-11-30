import { splitText } from '../../components/common/textFunctions';

const post = {
    title: "Infinite wealth",
    date: new Date("2024-11-30"),
    smartContent: (
        <>
            {splitText(`
            As anticipated in the previous post (<i>boy, one day I'll seriously need to add links to other posts</i>), I spent the last month playing Like a Dragon: Infinite Wealth.

            I'll add my impressions later, but I've got to say that it's a really good game as long as you know what you're getting into.

            I'm not going to go for the platinum though: after just finishing the base playthrough I'm having many thoughts, most of them are positive, but on the other hand I have this feeling that it's accomplished everything I wanted it to, and that investing more time in it would just mean wasting time.

            I need to think a bit and understand this feeling.
            `)}
        </>
    ),
    signature: `Romeo`
};

export default post;