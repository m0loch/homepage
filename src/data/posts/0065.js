import { splitText } from '../../components/common/textFunctions';

const post = {
    title: "Happy new year!",
    date: new Date("2026-01-02"),
    smartContent: (
        <>
            {splitText(`
                This will be fast: I'm breaking my own tradition and I have no playlist for you this year.

                I stopped using Spotify both for its bad AI related behavior and for <a href="https://www.euronews.com/culture/2025/09/19/massive-attack-pull-their-music-from-spotify-and-platforms-in-israel" target="_blank" rel="noreferrer">other reasons</a>, so... sorry not sorry, I guess ¯\\_(ツ)_/¯
            `)}
        </>
    ),
    signature: `Have a nice 2026,
    Romeo`
};

export default post;