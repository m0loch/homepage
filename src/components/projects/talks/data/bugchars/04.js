import Shuffler from "../../shuffler";

const question = {
    key: 'question04',
    content: `
    `,
    choices: [
        { text: "", outcome: { meo: 10, next: 'profile' } },
        { text: "", outcome: { dav: 10, next: 'profile' } },
        { text: "", outcome: { fra: 10, next: 'profile' } },
        { text: "", outcome: { rob: 10, next: 'profile' } },
    ]
}

export default Shuffler(question);
