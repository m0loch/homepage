const question01 = {
        key: 'question01',
        title: 'QUESTION #1',
        content: `
        This is the first question
        `,
        choices: [
            { text: "Risposta da Meo", outcome: { meo: 10, next: 'question02' } },
            { text: "Risposta da Dav", outcome: { dav: 10, next: 'question02' } },
            { text: "Risposta da Fra", outcome: { fra: 10, next: 'question02' } },
            { text: "Risposta da Rob", outcome: { rob: 10, next: 'question02' } },
        ]
};

export default question01;
