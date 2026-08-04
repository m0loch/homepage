import { InstagramEmbed } from 'react-social-media-embed';

const post = {
    title: "What do you mean, it's been 10 years already?",
    date: new Date("2026-08-05"),
    smartContent: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url="https://www.instagram.com/p/DbkEzgmDpVw/" width={328} />
        </div>
    ),
    signature: `Feeling old
    Romeo`
};

export default post;