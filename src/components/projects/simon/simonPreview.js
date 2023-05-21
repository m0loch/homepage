import React, { useState } from "react";

import { Collapse } from "@mui/material";
import CollapseHeader from '../common/collapseHeader';
import { splitText } from "../../common/textFunctions";

function SimonPreview(props) {

    const [open, setOpen] = useState([true, false, true]);

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
                Under construction
                `)}
            </Collapse>

            {/* TODO:
                radio -> 8 14 20 32
                checkbox -> reverse */}

        </div>
    );
}

export default SimonPreview;