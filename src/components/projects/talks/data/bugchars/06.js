import Shuffler from "../../shuffler";

const question = {
    key: 'question06',
    content: `
    You've got a bunch of days off and you're friends come up with a proposal you didn't expect.
    It might be parachuting, travel to a foreign country or get wasted on booze - anything really, the caveat is that it's something you're not accustomed to and never tried out, and they know well enough.

    When confronted with the fact that's not something you've ever tried out, they candidly answer "Yeah, that's exactly the point: trying something new!"

    How do you feel about it?
    `,
    choices: [
        { text: "While curious about everything, I usually try to stay in the warmth of my comfort zone.", outcome: { meo: 10 } },
        { text: "I'm not very open to new experiences, I feel like I know myself well enough to know what I enjoy and what I don't.", outcome: { dav: 10 } },
        { text: "LET'S TRY ALL THE THINGS. How am I supposed to know if something's fun if I don't experience it first hand?", outcome: { fra: 10 } },
        { text: "While keeping inside some boundaries, I like to try new experiences, as long as I'm in control of everything.", outcome: { rob: 10 } },
    ]
}

export default Shuffler(question);
