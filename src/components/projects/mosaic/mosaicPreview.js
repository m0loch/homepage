import React, { useState } from "react";

import { Collapse } from "@mui/material";
import CollapseHeader from '../common/collapseHeader';
import { splitText } from "../../common/textFunctions";
import MosaicSettings from "./mosaicSettings";

function MosaicPreview() {

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
                    This is was meant to be a quick throwback to my former PIXI.js development days, but proved to be more interesting than I expected.

                    The game itself is nothing exceptional on its own, just an image that gets cut in different tiles and shuffled.
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Realization"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                {splitText(`
                    As mentioned in the description, the game itself just does some very basic texture handling using a <a href="https://pixijs.com/">PIXI.js</a> canvas.
                    
                    In order to embed it in a functional React component I also had to import <a href="https://www.npmjs.com/package/@inlet/react-pixi">@inlet/react-pixi</a>.
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Settings"}
                open={open[2]}
                onClick={() => handleStateChange(2)}
            />
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                <MosaicSettings />
            </Collapse>
        </div>
    );
}

export default MosaicPreview;