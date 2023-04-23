import Shuffler from "../../shuffler";

const question = {
    key: 'question04',
    content: `
    As we all know, work is not everything.
    Or at least that's what they say, I guess...

    What's your take on that?
    `,
    choices: [
        { text: "I would love to live in a world where people could lead some peaceful lives without the need of having jobs - but I don't, so I just try to find some job I like as I will end up spend a lot of time on that.", outcome: { meo: 10 } },
        { text: "I actually enjoy working, if I find myself with too much free time on my hands I usually end up studying on planning some side hustles.", outcome: { dav: 10 } },
        { text: "I work multiple jobs I hate in order to sustain myself and my hobbies, hoping one day to become an enterpreneur and finally work on something I like.", outcome: { fra: 10 } },
        { text: "I've got plenty of hobbies, my job is just the one that earns me money for the other ones. I can't envision myself working on something I don't enjoy, I'd probably start looking around for a new one.", outcome: { rob: 10 } },
    ]
}

export default Shuffler(question);
