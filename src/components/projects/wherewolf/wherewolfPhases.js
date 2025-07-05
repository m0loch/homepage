import InitialState from "../../../redux/initialState";
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
                onLeave: (localState) => {
                    const playerCount = localState.players.length;
                    const wolvesCount = Math.floor(playerCount * 0.25);
                    const villagersCount = playerCount - wolvesCount;

                    return {
                        roles: {
                            Villagers: [...InitialState.wherewolf.roles.Villagers, ...Array(villagersCount - 1).fill(null)],
                            Werewolves: [...InitialState.wherewolf.roles.Werewolves, ...Array(wolvesCount - 1).fill(null)],
                            Extras: Array(3).fill(null),
                        }
                    }
                }
            },
            {
                name: "Roles selection",
                description: "Select which roles will be used in the game.\nThey will be assigned to the players later.",
                content: <RoleSelectForm />,
                validationClause: ({ roles }) => ![...roles.Villagers, ...roles.Werewolves, ...roles.Extras].some(item => !item)
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

export function GetNextPhase({ phase, subphase }, localState) {
    const subPhaseRef = GamePhases[phase].subphases[subphase];

    let stateChange = {};
    if (subPhaseRef?.onLeave) {
        stateChange = subPhaseRef.onLeave(localState);
    }

    if (subphase < GamePhases[phase].subphases.length - 1) {
        return { ...stateChange, phase, subphase: subphase + 1 };
    }

    if (phase < GamePhases.length - 1) {
        return { ...stateChange, phase: phase + 1, subphase: 0 };
    }

    // Loop back to the start
    return { ...stateChange, phase: 0, subphase: 0 };
}