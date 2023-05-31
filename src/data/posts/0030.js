import { splitText } from '../../components/common/textFunctions';

const post = {
    title: "Simon says...",
    date: new Date("2023-06-01"),
    smartContent: <>
        {splitText(`
            Hi!
            Just a quick post to celebrate the fact I'm uploading yet another minigame.

            This time it's the turn of Simon, a classic device really popular during the 80s and the 90s.

            That said, I seriously need *more* vacations, luckily enough I should be able to take a week off towards the end of the month.
        `)}
    </>,
    signature: `Romeo`
};

export default post;