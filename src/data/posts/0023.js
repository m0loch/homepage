import { splitText } from '../../components/common/textFunctions';
import { Link } from "react-router-dom";

const post = {
    title: "Big news and updates!",
    date: new Date("2023-01-29"),
    smartContent: (
        <>
            <p>News time! As previously mentioned I moved back to Milan, after terminating my contract with <a href="https://ivemind.com/">Ivemind</a> and signing for <a href="https://www.sisal.it/">Sisal</a> as a Unity developer.</p>
            {splitText(`

            So, I'm back to being a professional game developer :)

            Needless to say I'm very excited but also very stressed out because, *as usual*, I neglected taking any kind of vacation between the two jobs and my first impact in the new team has consisted in doing lots of paperworks, attending online courses and being involved in the release of a new game.
            I won't delve any further in working matters or anything else, just know that I'm involved in developing games for mobile but *not* in any kind of betting.

            `)}
            <p>In the meantime I still managed to publish my own version of MineSweeper and you can already find it in the <Link to="/projects">projects section</Link>.</p>
        </>
    ),
    signature: 'Romeo'
};

export default post;