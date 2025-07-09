import MonkNightAction from "./nightActions/monkNightAction";
import SeerNightAction from "./nightActions/seerNightAction";

export const nightSteps = [
    {
        name: "Seer",
        timing: "Always",
        component: <SeerNightAction />,
    },
    {
        name: "Monk",
        timing: "First night",
        component: <MonkNightAction />,
    },
    {
        name: "Priest",
        timing: "First night",
        // TODO
    },
    { name: "Juliet", timing: "First night" },
    { name: "Medium", timing: "Regular nights" },
    { name: "Witch", timing: "Regular nights" },
    { name: "Werewolves", timing: "Always" },
    { name: "Healer", timing: "Regular nights" },
];
