import { splitText } from '../../components/common/textFunctions';
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';

const post = {
    title: "Frohe Ostern",
    date: new Date("2023-04-09"),
    smartContent: <>
    {splitText(`
    Hi,
    it's been almost a month since the last update and a few things happened in the meanwhile - enough to prevent me from actually work on this site, but since nobody actually checks it I guess nobody's going to complain :)

    While you weren't watching:`)}
    <ul>
        <li>been to Malta to celebrate the birthday of my friend <a href="https://www.instagram.com/divalavida"><InstagramIcon/>Diva</a></li>
        <li>casually met the vice-president and former captain of FC Internazionale</li>
        <li>torn a ligament in my right ankle (for the third time, actually)</li>
        <li>played <a href="https://store.steampowered.com/app/383870">Firewatch</a> and <a href="https://store.steampowered.com/app/1082430">Before your Eyes</a></li>
        <li>came up with a better way to handle data (i.e.: posts) rather than having massive json objects - I only tested it out on <Link to="/projects/talks">Talks</Link> though, while I plan to eventually implement it for other parts of the site as well</li>
    </ul>
    {splitText(`

    I'd love to put some work on this site but at the moment I'm having trouble handling my free time or lack thereof, and when I finally find some will to work I usually get stuck by the good, old option paralysis,
    `)}
    </>,
    signature: `Romeo`
};

export default post;