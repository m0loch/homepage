import { Link } from 'react-router-dom';
import YouTubeVideo from '../../components/posts/youtubeVideo';

const post = {
    title: "WHOA",
    date: new Date("2025-03-26"),
    smartContent: (
        <>
            <p>Okay guys I've waited 26 years for a sequel to <Link to="https://en.wikipedia.org/wiki/Garou:_Mark_of_the_Wolves">Garou: Mark of the Wolves</Link> Garou like every other person, but <i>this</i> is a bit too much</p>
            <br/>
            <YouTubeVideo videoId={"8-ABEy2ZFbU"} />
        </>
    ),
    signature: `Dazed and confused,
    Romeo`
};

export default post;