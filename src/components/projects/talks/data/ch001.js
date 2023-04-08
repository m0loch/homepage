const ch001 = {
        key: 'intro',
        title: 'INTRO SCENE',
        content: `
        The sun is high above the mountains, as you are awaken from your slumber.

        Emerging from the woods down the hills you see an heavily armored knight charging at you atop his horse.
        His face hidden by the helm as he readies his spear, he proudly shows the colors of the nearby kingdom - yet, he's still a man riding alone against the most formidable foe.

        There's no way this puny human can prove to be a worthy challenge all by himself.

        What are you going to do, mighty dragon?
        `,
        choices: [
            { text: "With a quick flap of my wings I'll get out of reach of its rudimental weapon.", outcome: { agility: 10, next: 'introSpared' } },
            { text: "I'll wait for him to come closer, incapacitating him with a well calibrated strike of my tail.", outcome: { finesse: 10, next: 'introSpared' } },
            { text: "He will pay for his insolence, I will tear his flesh apart with my very fangs and claws.", outcome: { strength: 10, next: 'introKilled' } },
            { text: "Disposing of him won't be a problem, I'll let my fiery breath do the talking.", outcome: { wisdom: 10, next: 'introKilled' } },
        ]
};

export default ch001;
