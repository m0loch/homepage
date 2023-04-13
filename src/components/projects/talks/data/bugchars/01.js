import Shuffler from "../../shuffler";

const question01 = {
    key: 'question01',
    title: 'Before you leave...',
    content: `
        You're ready to go home after a hard day of work.
        
        Suddenly you receive an email: it's your boss, desperately asking you to fix a bug he just discovered.
        `,
    choices: [
        { text: "I read the email trying to understand if it's something I can reschedule for the following day. Then I just cave in and see what I can do.", outcome: { meo: 10, next: 'question02' } },
        { text: "There's no way this happening now! I go home as planned, but spend the commuting time investigating the matter, maybe spending a couple of extra hours to fix the issue after dinner.", outcome: { dav: 10, next: 'question02' } },
        { text: "I work to live, not the other way around. If they want me to work overtime, they need to notice me beforehand.", outcome: { fra: 10, next: 'question02' } },
        { text: "If it was any urgent, they would have just called me - I'll read this tomorrow", outcome: { rob: 10, next: 'question02' } },
    ]
};

export default Shuffler(question01);
