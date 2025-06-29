import React, { useState } from "react";

import { Collapse } from "@mui/material";
import CollapseHeader from '../common/collapseHeader';
import { splitText } from "../../common/textFunctions";

function WerewolfPreview(props) {
    const [open, setOpen] = useState([true, true, true]);

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
                blah
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Settings"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[0]} timeout="auto" unmountOnExit>
            aaaa

            </Collapse>

            <CollapseHeader
                caption={"Credits"}
                open={open[2]}
                onClick={() => handleStateChange(2)}
            />
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                {splitText(`


                The game is based on the original concept by Dimitri de Vries, who created the first version of the game in 1986. The game was later adapted by other developers and has since become a popular party game.
                The game is also known as "Mafia" in some regions, and has been adapted into various formats, including board games and video games. The game has been played by millions of people worldwide and has become a staple of social gatherings and parties.

                The variant this is based on blahblah vedi il manuale Christian Zoli
                `)}
            </Collapse>
        </div>
    );
}

export default WerewolfPreview;