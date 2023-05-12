import Shuffler from "../../shuffler";

const question = {
    key: 'question05',
    content: `
    The pandemic is over and now you'll free to enjoy some fresh air and move around.

    Or at least that's what your company told you when they said you need to start attending your office once again.

    Being forced to restart commuting, what's your choice?
    `,
    choices: [
        { text: "I usually move on foot or by bike, but I own a car for traveling longer distances.", outcome: { meo: 10 } },
        { text: "I enjoy using public transportations on a daily basis, that keeps me from the stress of driving and lets me read books, listen to podcasts and, in a more general way, choose what to do with my free time.", outcome: { dav: 10 } },
        { text: "It depends on various factors - I usually have to move by scooter / car on daily basis, but for longer travels I usually prefer taking a good old train, especially when travelling alone.", outcome: { fra: 10 } },
        { text: "I can't settle for having to conform to public transportations, I need to go to specific places when I feel like to rather than having to wait for buses, trains and the such. I'll just drive my car and be free.", outcome: { rob: 10 } },
    ]
}

export default Shuffler(question);
