import { splitText } from '../../components/common/textFunctions';
import { Link } from 'react-router-dom';
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

            I tried to avoid getting exposed to any info about this Final Fantasy - Magic: The Gathering crossover, but unfortunately I've still got plenty of friends that want <del>to make me suffer</del> my opinion on the spoilers.
            `)}

            <p>I'll just leave the link <Link to="https://www.magicspoiler.com/mtg-set/final-fantasy/">here</Link> so you can form your own opinion, I'll chime in later.</p>
            <br/>
        </>
    ),
    signature: `Romeo`
};

export default post;