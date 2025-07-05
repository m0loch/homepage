import React, { useState } from "react";

import { Collapse } from "@mui/material";
import CollapseHeader from '../common/collapseHeader';
import { splitText } from "../../common/textFunctions";

function WerewolfPreview(props) {
    const [open, setOpen] = useState([true, true]);

    const handleStateChange = (idx) => {
        const newState = [...open];
        newState[idx] = !open[idx];
        setOpen(newState);
    }

    return (
        <div style={{ display: "inline-block" }}>

            <CollapseHeader
                caption={"Info"}
                open={open[0]}
                onClick={() => handleStateChange(0)}
            />
            <Collapse in={open[0]} timeout="auto" unmountOnExit>
                {splitText(`
                Wherewolf is a <a href="https://en.wikipedia.org/wiki/Social_deduction_game" target="_blank" rel="noreferrer">social deduction game</a> where players take on the roles of villagers or werewolves.

                There are many variants of the game since 1986 when Dimma Davidoff (Dimitri? Dmitriy? Let's just call him Дми́трий Давы́дов...) created <a href="https://www.servinglibrary.org/journal/2/the-original-mafia-rules" target="_blank" rel="noreferrer">the first version of Mafia</a>, from which many variants spawned over the years.

                The one I'll be focusing on is the one developed by <a href="https://boardgamegeek.com/boardgamedesigner/6263/christian-zoli" target="_blank" rel="noreferrer">Christian Zoli</a> that was published in the early 2010s and that has sadly been discontinued.

                This section is just a tool for the master to expedite the game setup during the summer parties I usually attend with my friends.

                I believe that it could easily be rendered generic for other variants, but I wanted to focus on my personal use case.
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Credits"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                <a href="https://www.linkedin.com/in/christian-zoli/" target="_blank" rel="noreferrer">Christian Zoli</a> for the original game design.
            </Collapse>
        </div>
    );
}

export default WerewolfPreview;