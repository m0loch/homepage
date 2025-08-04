import MonkNightAction from "./nightActions/monkNightAction";
import SeerNightAction from "./nightActions/seerNightAction";
import PriestNightAction from "./nightActions/priestNightAction";
import JulietNightAction from "./nightActions/julietNightAction";
import WolvesFirstNightAction from "./nightActions/wolvesFirstNightAction";
import WolvesNightAction from "./nightActions/wolvesNightAction";
import NightRecap from "./nightActions/nightRecap";

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
        timing: "Regular night",
    },
    {
        name: "Witch",
        timing: "Regular night",
    },
    {
        name: "WerewolvesRecognition",
        timing: "First night",
        component: <WolvesFirstNightAction />,
    },
    {
        name: "Werewolves",
        timing: "Regular night",
        component: <WolvesNightAction />,
    },
    {
        name: "Healer",
        timing: "Regular night",
    },
    {
        name: "End of Night",
        timing: "Always",
        component: <NightRecap />,
    }
];
