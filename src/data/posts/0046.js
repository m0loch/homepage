import { splitText } from '../../components/common/textFunctions';
import CustomImage from "../../components/posts/customImage";
import satisfaction from '../../images/post-0046/post46.png';

const post = {
    title: "Yet another placeholder",
    date: new Date("2024-09-07"),
    smartContent: (
        <>
            <CustomImage
                alt="Finally"
                src={satisfaction}
                align="right"
            >
                Well, at least I'm not dead
            </CustomImage>
            {splitText(`
            ...I know, I know, I promised I'd come up with a big FF7R post, but I've yet to publish anything relating to that.

            I've spent the last weeks embracing decompression - I've started a brand new run of NieR: Automata in the meanwhile - while trying to put some order in my thoughts, but there are A LOT of things to say about that game.
            Well, <i>also</i> about NieR: Automata, but I don't think I'll bother to do so.

            I'm not even sure that the proper way to tackle the issue is to come up with a single post rather than just breaking it up to smaller entries, in the meanwhile I've proceeded to download the screenshots from the PS5 and I feel like I need to take some more.
            Which means running the game again.
            Which could be <i>very stressful</i> for my psyche haha.
            `)}
        </>
    ),
    signature: `Stay tuned,
    Romeo`
};

export default post;