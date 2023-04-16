import Shuffler from "../../shuffler";

const question = {
    key: 'question02',
    content: `
    You've been under real pressure lately, you feel like you need some well-earned gratification.

    What's your go-to comfort food?
    `,
    choices: [
        { text: "Chocolate. No, wait... candies. ...candies dipped in chocolate?", outcome: { meo: 10 } },
        { text: "I'll have a bowl of ramen for dinner.", outcome: { dav: 10 } },
        { text: "Does alcohol count as \"comfort food\"?", outcome: { fra: 10 } },
        { text: "Time for Domino's, I guess.", outcome: { rob: 10 } },
    ]
}

export default Shuffler(question);
