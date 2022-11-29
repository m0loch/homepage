const Adventure = [
    {
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
    },
    {
        key: 'introSpared',
        title: 'INTRO SCENE - OUTCOME',
        content: `
        You laugh, as the pitiful human realizes there's no way for him to pose a threat to you.

        "Thou shalt go back to thy kingdom" -you say- "and warn everyone that nobody should ever try to harm my interests, lest they all want to perish to my wrath".

        The knight stands dazed, uncertain between facing an honourable death fighting the evil dragon that he was supposed to slain and obey your commands like a coward, surviving your wrath but losing all of his knightly privileges.

        "GO!" you roar, breaking his impasse and making him run away.

        Life is good.
        `,
        outcome: { next: 'ending' }
    },
    {
        key: 'introKilled',
        title: 'INTRO SCENE - OUTCOME',
        content: `
        The poor knight never stood a chance, and you end up eating his remains out of sheer boredom.

        As you contemplate your future, you hope that those pitiful humans are either going to stop harass you, or decide to send somebody actually able to pose a threat to your magnificence.

        A small army perhaps, or even some scholar of the arcane arts for a change.

        "I wonder" -you mutter yourself- "if I should let them figure out what happened by themselves, or if I should just enter their capital and explain them that I'm the rightful owner of this land".
        `,
        outcome: { next: 'ending' }
    },
    {
        key: 'ending',
        title: 'THE END',
        content: `
        Ok, that's all folks, I don't have a full story for you - I just needed some basics to see if everything worked.
        `,
    }
];

export default Adventure;