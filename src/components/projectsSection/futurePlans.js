import { splitText } from '../../components/common/textFunctions';

export default function FuturePlans() {
    return (
        <>
            {splitText(`
            <h4>Coming up next:</h4>
            <p>
            Well, well, well...

            Over time this pet project of mine has went from being a playground where I implemented some random games just for the sake of it, to what is basically a blog.

            I don't know what I'll do next but I don't have much interest in adding minigames at the moment.

            Sorry not sorry, I guess?
            `)}
        </>
    );
}