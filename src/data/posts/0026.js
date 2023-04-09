import { splitText } from '../../components/common/textFunctions';

const post = {
    title: "Happy birthday!",
    date: new Date("2023-03-26"),
    smartContent: <>
    {splitText(`
    Well, it seems like that this pet project of mine is one year old already.

    It's quite a weird feeling, as I've put it online but never spread the word about it, I think I should consider moving it on its own domain rather than keeping it on GitHub pages - but that'll mean doing a great deal of polishing and revamping the graphics altogether, as I think it's quite ugly.

    Oh well, it's not like I'm a web developer anymore, ain't I?
    `)}
    </>,
    signature: `See you before the next year
    Romeo`
};

export default post;