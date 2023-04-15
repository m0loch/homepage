import Shuffler from "../../shuffler";

const question = {
    key: 'question01',
    content: `
    You're ready to go home after a hard day of work.
    
    Suddenly you receive an email: it's your boss, desperately asking you to fix a bug he just discovered.
    `,
    choices: [
        { text: "I read the email trying to understand if it's something I can reschedule for the following day. Then I just cave in and see what I can do.", outcome: { meo: 10 } },
        { text: "There's no way this happening now! I go home as planned, but spend the commuting time investigating the matter, maybe spending a couple of extra hours to fix the issue after dinner.", outcome: { dav: 10 } },
        { text: "I work to live, not the other way around. If they want me to work overtime, they need to notice me beforehand.", outcome: { fra: 10 } },
        { text: "If it was any urgent, they would have just called me - I'll read this tomorrow", outcome: { rob: 10 } },
    ]
};

export default Shuffler(question);
