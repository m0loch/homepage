import MonkNightAction from "./nightActions/monkNightAction";
import SeerNightAction from "./nightActions/seerNightAction";
import PriestNightAction from "./nightActions/priestNightAction";
import JulietNightAction from "./nightActions/julietNightAction";

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
        component: <PriestNightAction />,
    },
    {
        name: "Juliet",
        timing: "First night",
        component: <JulietNightAction/>
    },
    {
        name: "Medium",
        timing: "Regular nights",
    },
    {
        name: "Witch",
        timing: "Regular nights",
    },
    {
        name: "Werewolves",
        timing: "Always",
    },
    {
        name: "Healer",
        timing: "Regular nights",
    },
];
