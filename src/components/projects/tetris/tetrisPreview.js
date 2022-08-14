import React, { useState } from "react";

import { Collapse } from "@mui/material";
import CollapseHeader from '../common/collapseHeader';
import { splitText } from "../../common/textFunctions";

function TetrisPreview(props) {
    const [open, setOpen] = useState([true, false, true, false]);

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

                `)}
            </Collapse>

            <CollapseHeader
                caption={"Realization"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                {splitText(`
                `)}

            </Collapse>
            <CollapseHeader
                caption={"Settings"}
                open={open[2]}
                onClick={() => handleStateChange(2)}
            />
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                <p><i>Placeholder for settings</i></p>
            </Collapse>
            <CollapseHeader
                caption={"Credits"}
                open={open[3]}
                onClick={() => handleStateChange(3)}
            />
            <Collapse in={open[3]} timeout="auto" unmountOnExit>
                <p>PLACEHOLDER: Just a link to the wiki, I guess</p>
            </Collapse>
        </div>
    );
}

export default TetrisPreview;