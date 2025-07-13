import DailyStandup from "./dayActions/dailyStandup";
import InnkeeperDayAction from "./dayActions/innkeeperDayAction";
import Votation from "./dayActions/votation";
import Trial from "./dayActions/trial";

export const daySteps = [
    {
        name: "Check for deaths",
        timing: "Always",
        component: <DailyStandup />,
    },
    {
        name: "Innkeeper",
        timing: "Always",
        component: <InnkeeperDayAction />,
    },
    {
        name: "Discussion",
        timing: "Always",
        component: <p><i>Discussion phase</i></p>,
    },
    {
        name: "Votation",
        timing: "Always",
        component: <Votation />,
    },
    {
        name: "Trial",
        timing: "Always",
        component: <Trial />,
    },
    {
        name: "Final votation",
        timing: "Always",
        component: <p><i>Final votation phase</i></p>,
    },
    {
        name: "End of Day",
        timing: "Always",
        component: <p><i>End of Day phase</i></p>,
    },
];
