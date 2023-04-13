import Shuffler from "../../shuffler";

const question02 = {
    key: 'question02',
    title: 'Time to fight stress',
    content: `
    You've been under real pressure lately, you feel like you need some well-earned gratification.

    What's your go-to comfort food?
    `,
    choices: [
        { text: "Chocolate. No, wait... candies. ...candies dipped in chocolate?", outcome: { meo: 10, next: 'profile' } },
        { text: "I'll have a bowl of ramen for dinner.", outcome: { dav: 10, next: 'profile' } },
        { text: "Does alcohol count as \"comfort food\"?", outcome: { fra: 10, next: 'profile' } },
        { text: "Time for Domino's, I guess.", outcome: { rob: 10, next: 'profile' } },
    ]
};

export default Shuffler(question02);
