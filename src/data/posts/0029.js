import { splitText } from '../../components/common/textFunctions';

const post = {
    title: "Minor update (2)",
    date: new Date("2023-05-14"),
    smartContent: <>
        {splitText(`
            Hello there,
            I'm updating this even though there's nothing major going on just for the sake of saying that something (even minor) is going on.

            I've played a bit around with the talks project coming up with a different result page recognizing the most voted option - or well, whose profile most matches the given answers, and added support for double clicking cards to the top piles in Solitaire, which is quite an important quality of life improvement.

            While there's still a lot of work to be done on the former project in order to have something vaguely interesting, the latter just features a stupid bug that I've yet to properly track: sometimes a card that should go to the discard pile ends up in a different pile on its own.
            I don't know if I'll ever care enough to fix it, but whatever.

            Meanwhile I'm doing some research on a different project that will probably never see the light of day, but I swear I'll find the inspiration to add something quick or do some substantial rework on already existing things instead of focusing on some side project that would need something like a full year of work before being presentable.
        `)}
    </>,
    signature: `See you
    Romeo`
};

export default post;