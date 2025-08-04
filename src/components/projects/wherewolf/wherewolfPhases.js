import InitialState from "../../../redux/initialState";
import PlayerInsertForm from "./subcomponents/pregame/playerInsertForm";
import RoleAssignForm from "./subcomponents/pregame/roleAssignForm";
import RoleSelectForm from "./subcomponents/pregame/roleSelectForm";

import PhaseHandler from "./subcomponents/game/phaseHandler";
import { daySteps } from "./subcomponents/game/phasesSteps/daySteps";
import { nightSteps } from "./subcomponents/game/phasesSteps/nightSteps";

const GamePhases = [
    {
        name: "PreGame",
        subphases: [
            { 
                name: "Player census",
                description: "Register every player (name or nickname) that will play the game.",
                content: <PlayerInsertForm />,
                validationClause: ({ players }) => players.length >= 6,
                onLeave: localState => {
                    const playerCount = localState.players.length;
                    const wolvesCount = Math.floor(playerCount * 0.25);
                    const villagersCount = playerCount - wolvesCount;

                    return {
                        roles: {
                            Villagers: [...InitialState.wherewolf.roles.Villagers, ...Array(villagersCount - 1).fill(null)],
                            Werewolves: [...InitialState.wherewolf.roles.Werewolves, ...Array(wolvesCount - 1).fill(null)],
                            Extras: Array(3).fill(null),
                        },
                        assignments: [],
                    }
                }
            },
            {
                name: "Roles selection",
                description: "Select which roles will be used in the game.\nThey will be assigned to the players later.",
                content: <RoleSelectForm />,
                validationClause: ({ roles }) => ![...roles.Villagers, ...roles.Werewolves, ...roles.Extras].some(item => !item),
            },
            {
                name: "Roles assignment",
                description: "Assign roles to players.\nYou can assign roles manually or randomize them.",
                content: <RoleAssignForm />,
                validationClause: ({ players, assignments }) => !players.some(player => !assignments[player] || assignments[player] === 'Random'),
                onLeave: () => {
                    // After ther roles are assigned, the game will effectively start - time to reset the logs
                    return { logs: [] }
                }
            },
        ],
     },
    { 
        name: "Game",
        subphases: [
            { 
                name: "Night",
                content: <PhaseHandler />,
                overrideNext: localState => {
                    const isFirstNight = localState.logs?.length < 2;

                    const correctedNightSteps = nightSteps
                        .filter(step => step.timing !== (isFirstNight ? "Regular nights" : "First night"));

                    const idx = correctedNightSteps.findIndex(item => item.name === nightSteps[localState.phaseStep]?.name);

                    if (idx < correctedNightSteps.length - 1) {
                        const next = correctedNightSteps[idx + 1];
                        const nextIdx = nightSteps.findIndex(item => item.name === next.name);

                        // Pushes the current phase log in the day log and resets it
                        return { phaseStep: nextIdx, currDayLog: [...(localState.currDayLog || []), localState.currPhaseLog], currPhaseLog: {} };
                    }

                    // Move to the following subphase (day)
                    return {
                        subphase: localState.subphase + 1,
                        logs: [...(localState.logs || []), {
                            type: isFirstNight ? "First Night" : "Night",
                            log: localState.currDayLog
                        }],
                        currDayLog: [],
                        currPhaseLog: {},
                        phaseStep: 0
                    };
                },
                getContent: stepIdx => {
                    const step = nightSteps[stepIdx];

                    if (!step) {
                        return "Unknown Night Step";
                    } else if (step.component) {
                        return step.component;
                    }
                    return step.name;
                },
            },
            {
                name: "Day",
                content: <PhaseHandler />,
                overrideNext: localState => {

                    if (localState.phaseStep < daySteps.length - 1) {
                        // Pushes the current phase log in the day log and resets it
                        return { phaseStep: localState.phaseStep + 1, currDayLog: [...(localState.currDayLog || []), localState.currPhaseLog], currPhaseLog: {} };
                    }

                    // Move to the previous subphase (night)
                    return {
                        subphase: localState.subphase - 1,
                        logs: [...(localState.logs || []), {
                            type: "Day",
                            log: localState.currDayLog,
                        }],
                        currDayLog: [],
                        currPhaseLog: {},
                        phaseStep: 0
                    };
                },
                getContent: stepIdx => {
                    const step = daySteps[stepIdx];

                    if (!step) {
                        return "Unknown Day";
                    } else if (step.component) {
                        return step.component;
                    }
                    return step.name;
                },
            },
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

// Only for the actual game phases (day/night)
export function GetPhaseStep({ phase, subphase, phaseStep }) {
    if (phase !== 1) {
        return "Game phases only";
    }
    if (subphase < 0 || subphase >= GamePhases[phase].subphases.length) {
        return "Unknown Subphase";
    }

    const subPhaseRef = GamePhases[phase].subphases[subphase];
    if (subPhaseRef.getContent) {
        return subPhaseRef.getContent(phaseStep) || "Unknown Step";
    }

    return "Something went wrong";
}

// Validates the current phase and subphase before moving to the next one
// Needs a way to give feedback to the user if the validation fails
export function ValidatePhase(localState) {
    const phase = localState.phase ?? 0;
    const subphase = localState.subphase ?? 0;

    const subPhaseRef = GamePhases[phase].subphases[subphase];
    if (subPhaseRef?.validationClause) {
        return subPhaseRef.validationClause(localState);
    }

    // If no validation clause is defined, assume the phase is valid
    return true;
}

export function GetNextPhase(localState) {
    const phase = localState.phase ?? 0;
    const subphase = localState.subphase ?? 0;

    const subPhaseRef = GamePhases[phase].subphases[subphase];

    let stateChange = {};
    if (subPhaseRef?.onLeave) {
        stateChange = subPhaseRef.onLeave(localState);
    }

    // Needed to loop days and check win conditions
    if (subPhaseRef?.overrideNext) {
        const nextStep = subPhaseRef.overrideNext(localState);
        if (nextStep) {
            return { ...stateChange, phase, subphase, ...nextStep };
        }
    }
    
    if (subphase < GamePhases[phase].subphases.length - 1) {
        return { ...stateChange, phase, subphase: subphase + 1, phaseStep: 0 };
    }

    if (phase < GamePhases.length - 1) {
        return { ...stateChange, phase: phase + 1, subphase: 0, phaseStep: 0 };
    }

    // Loop back to the start
    return { ...stateChange, phase: 0, subphase: 0, phaseStep: 0 };
}