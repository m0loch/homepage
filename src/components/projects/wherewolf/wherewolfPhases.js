import PlayerInsertForm from "./subcomponents/playerInsertForm";
import RoleAssignForm from "./subcomponents/roleAssignForm";
import RoleSelectForm from "./subcomponents/roleSelectForm";

const GamePhases = [
    {
        name: "PreGame",
        subphases: [
            { 
                name: "Player census",
                description: "Register every player (name or nickname) that will play the game.",
                content: <PlayerInsertForm />,
            },
            {
                name: "Roles selection",
                description: "Select which roles will be used in the game.\nThey will be assigned to the players later.",
                content: <RoleSelectForm />,
                validationClause: ({ roles }) => ![...roles.Villagers, ...roles.Werewolves, ...roles.Extras].some(item => item === null)
            },
            {
                name: "Roles assignment",
                description: "Assign the selected roles to the players.\nEach player will receive a role that they will play during the game.",
                content: <RoleAssignForm />,
            },
        ],
     },
    { 
        name: "Game",
        subphases: [
            { name: "Night" },
            { name: "Day" },
            { name: "Voting" },
        ],
    },
    {
        name: "End",
        subphases: [
            { name: "Recap" }
        ],
    },
];

export function GetPhaseName({ phase }) {
    if (phase < 0 || phase >= GamePhases.length) {
        return "Unknown Phase";
    }

    return GamePhases[phase].name;
}

export function GetSubphaseName({ phase, subphase }) {
    if (phase < 0 || phase >= GamePhases.length) {
        return "Unknown Subphase";
    }
    if (subphase < 0 || subphase >= GamePhases[phase].subphases.length) {
        return "Unknown Subphase";
    }
    return GamePhases[phase].subphases[subphase].name;
}

export function GetSubphaseDescription({ phase, subphase }) {
    return GamePhases[phase].subphases[subphase].description;
}

export function GetSubphaseContent({ phase, subphase }) {
    if (phase < 0 || phase >= GamePhases.length) {
        return "Unknown Phase";
    }
    if (subphase < 0 || subphase >= GamePhases[phase].subphases.length) {
        return "Unknown Subphase";
    }
    return GamePhases[phase].subphases[subphase].content || "";
}

export function ValidatePhase({ phase, subphase }, localState) {
    const subPhaseRef = GamePhases[phase].subphases[subphase];
    if (subPhaseRef?.validationClause) {
        return subPhaseRef.validationClause(localState);
    }

    // If no validation clause is defined, assume the phase is valid
    return true;
}

export function GetNextPhase({ phase, subphase }) {

    if (subphase < GamePhases[phase].subphases.length - 1) {
        return { phase, subphase: subphase + 1 };
    }

    if (phase < GamePhases.length - 1) {
        return { phase: phase + 1, subphase: 0 };
    }

    // Loop back to the start
    return { phase: 0, subphase: 0 };
}