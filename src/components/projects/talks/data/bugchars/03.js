import Shuffler from "../../shuffler";

const question = {
    key: 'question03',
    content: `
    You're bored and tired, and don't feel like doing anything that could require any kind of effort like, you know, working on either your main job or any personal project.
    Or leaving home to do some exercise.
    Or just leaving home to breathe some fresh air.
    Or do anything at all, basically.

    It's time to open your favourite store and buy a new game - but what should you buy...?
    `,
    choices: [
        { text: "I need to fall in love with the game, either for its well-crafted story or its abstute mechanics, so I often and up playing RPGs or roguelikes.", outcome: { meo: 10 } },
        { text: "When I play a game I want it to either be the best experience possible, or to be small and quirky - I play them with the intent of achieve a platinum trophy, so the gameplay needs to be contained or comfortable.", outcome: { dav: 10 } },
        { text: "I don't mind playing either AAA or indie titles, I just want them to be original and good looking. I want to be in awe.", outcome: { fra: 10 } },
        { text: "I can enjoy many genres of videogames, but they need to be challenging and skill-rewarding (no luck, please). Bonus points if they let me unleash said skill on unfortunate human opponents.", outcome: { rob: 10 } },
    ]
}

export default Shuffler(question);
