import { splitText } from '../../components/common/textFunctions';

const post = {
    title: "Minor update",
    date: new Date("2023-02-20"),
    smartContent: (
        <>
            {splitText(`
            Hi,
            here's Meo
            Tuning in just to say I've fixed the mobile version of Minesweeper.
            `)}
        </>
    ),
    signature: `Until next time
    Romeo`
};

export default post;