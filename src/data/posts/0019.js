import { splitText } from '../../components/common/textFunctions';

const post = {
    title: "A quick... something",
    date: new Date("2022-11-29"),
    smartContent: (
        <>
            {splitText(`
            I'm quite tired lately - I'm still recovering from my recent illness - and I'm really BORED.
            I don't feel like playing God of War, I tried playing Transistor and Across the Obelisk but I just don't seem to be able to fall in love with anything at the moment.

            I remembered, though, how I liked <a href="https://www.choiceofgames.com/dragon">Choice of the Dragon</a> when I played it some 5-ish years ago, and wondered how difficult would it be to build a system for writing something like that of my own.

            Too bad I don't have the kind of inspiration of writing a story of my own at the moment, but under the Projects section you can find "Talks", a minimal effort at emulating that system.
            `)}
        </>
    ),
    signature: `Romeo`
};

export default post;