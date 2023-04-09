import { splitText } from '../../components/common/textFunctions';
import { Link } from "react-router-dom";

const post = {
    title: "Merry Xmas!",
    date: new Date("2022-12-25"),
    smartContent: (
        <>
            {splitText(`
            I'll be quick
            I'll be direct
            I'll get straight to the point:

            God of War is a great game but I can't really get as engaged as I'd like.

            Luckily enough Crisis Core Reunion is exactly as good as I hoped and many manly tears were shed when today, 12 days after the release, I ended the main story.
            Minerva seems to be really overpowered though, so I'll need to come up with some good plan for that.
            After that one would expect to be near the platinum, but I've missed some minor things during the run (minor spoiler: <i>the biggest problem is a damn chest in Gongaga</i>) that end up having some impact on some apparently unrelated achievemnts.

            But... enough with that!
            `)}
            <p>I've got a gift for you: I've programmed and published my own version of Master Mind, you can find it under the <Link to="/projects">projects section</Link>.</p>

        </>
    ),
    signature: `HO HO HO
    Romeo`
};

export default post;