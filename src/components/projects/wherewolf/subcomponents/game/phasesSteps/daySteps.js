import DailyStandup from "./dayActions/dailyStandup";
import InnkeeperDayAction from "./dayActions/innkeeperDayAction";
import Votation from "./dayActions/votation";
import Trial from "./dayActions/trial";
import DayRecap from "./dayActions/dayRecap";

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
        name: "End of Day",
        timing: "Always",
        component: <DayRecap />,
    },
];
