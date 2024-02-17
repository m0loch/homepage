import { splitText } from '../../components/common/textFunctions';
import angrycat from '../../images/angry-cat-AI.png';

const post = {
    title: "Living on Hard Mode",
    date: new Date("2023-10-13"),
    smartContent: (
        <>
            <img alt="anger" src={angrycat} style={{ display: "block", margin: "25px 25px 0", float: "right", maxWidth: "30%" }} />
            {splitText(`
                Things: difficult.
                Had no time to do anything.
                Even less time to care about site.

                Long story short: at the moment I still work in Milan, but lack any kind of stable housing there.
                Commuting from the mountains is hell.
                The whole Milan housing situation is a nightmare and people can't really understand how messed up it actually is, but I really can't spare the mental energies to even just rant about it.

                I spend my free time by either traveling or watching soccer.
                
                Now: things I actually find the time to do:
                <ul>
                <li>I'm trying to understand the world of AI generated images (with little results as you can see);</li>
                <li>I curse Unity's announced licensing changes - but who doesn't, nowadays - that caused my work schedule to be messed up multiple times, just because my company had trouble understanding how they wanted to get paid</li>
                <li>I've been involved in the start of a brand new project... on Roblox.</li>
                </ul>

                As a last thought: wednesday should be a big day, I hope to find the time to do some coverage :)

                <i>PS: image created with <a href="https://tensor.art/">tensor.art</a></i>
            `)}
        </>
    ),
    signature: `Romeo`
};

export default post;