import CustomImage from "../../components/posts/customImage";
import Bahamut from '../../images/post-0061/bahamut.png';

const post = {
    title: "How to win a Final Fantasy MTG draft",
    date: new Date("2025-06-21"),
    smartContent: (
        <>
            <CustomImage
                src={Bahamut}
                alt="Summon: Bahamut"
                align="center"
            >
                <i>Nothing to add, your honor.</i>
            </CustomImage>
        </>
    ),
    signature: `Romeo`
};

export default post;