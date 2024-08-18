import { splitText } from '../../components/common/textFunctions';

const post = {
    title: "It is done.",
    date: new Date("2024-07-22"),
    smartContent: (
        <>
            {splitText(`
            I proudly announce that today, August 19th 2024, I obtained the platinum trophy for Final Fantasy 7 Rebirth.

            This will have consequences.

            But I have A LOT to write about, it WILL take time and effort.
            `)}
        </>
    ),
    signature: `Romeo`
};

export default post;