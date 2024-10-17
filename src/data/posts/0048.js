import { splitText } from '../../components/common/textFunctions';
import YouTubeVideo from '../../components/posts/youtubeVideo';

const post = {
    title: "Big news",
    date: new Date("2024-10-17"),
    smartContent: (
        <>
            {splitText(`
            Unity 6 is out.

            I'm home with a fever.

            You do the math.
            `)}
            <YouTubeVideo videoId={"1SyqN3D6khI"}/>
            <br/>
            <p>Gone are the days spent looking at MacGyver and the A-Team - is this what being old is all about?</p>
        </>
    ),
    signature: `Romeo`
};

export default post;