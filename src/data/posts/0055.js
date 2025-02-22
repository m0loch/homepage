import { splitText } from '../../components/common/textFunctions';
import CustomImage from "../../components/posts/customImage";
import JumboCactuar from '../../images/post-0055/Jumbo-Cactuar-2.webp';

const post = {
    title: "Wat",
    date: new Date("2025-02-22"),
    smartContent: (
        <>
            <CustomImage
                alt="A huge succulent"
                src={JumboCactuar}
                align="center"
            >
                Guys... seriously?
            </CustomImage>
            {splitText(`

            I tried to avoid getting exposed to any info about this crossover, but unfortunately I've still got plenty of friends that want <del>to make me suffer</del> my opinion on the spoilers.

            I'll just leave the link here so you can form your own opinion, I'll chime in later.
            `)}
        </>
    ),
    signature: `Romeo`
};

export default post;