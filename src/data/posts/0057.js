import { splitText } from '../../components/common/textFunctions';
import YouTubeVideo from '../../components/posts/youtubeVideo';

const post = {
    title: <i>Breakdown, breakdown</i>,
    date: new Date("2025-04-06"),
    smartContent: (
        <>
            <YouTubeVideo videoId={"Ft-NL8zV3HQ"}
                caption={splitText(`

                    There is a wound that's always bleeding
                    there is a road I'm always walking
                    And I know
                    You'll never return to this place~
                `)}
            />

            {splitText(`
            <b>Disclaimer:</b>
            I'm not depressed or anything, I'm just going through a couple of <i>intricate</i> weeks and I wanted to put out this post as a way to remember what I was going through when I'm inevitably going to read this post again in the future.

            Yes I'm treating this like my personal diary, sorry not sorry the joke's on you.
            `)}
        </>
    ),
    signature: `Romeo`
};

export default post;