import React, { useState } from "react";
import { Collapse, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import CollapseHeader from '../common/collapseHeader';

export default function FifteenPreview(props) {
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
                <p>The 15 puzzle is a simple mechanical game that was invented in the US in the late 19th century.</p>
                <br />
                <p>Many of us get confronted with it during our childhood because it's quite a simple game and very cheap to produce, making it very popular as an easter egg surprise, branded gadget, or just a simple toy to keep toddlers busy during long car trips.</p>
            </Collapse>

            <CollapseHeader
                caption={"Realization"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                <p>Coding game itself was quite an easy task, being it just a simple grid where only one tile can be manipulated at a time.</p>
                <p>Checking the win condition is trivial, but I found a couple of interesting points to tackle:</p>
                <ul>
                    <li>doing the tile sliding animations entirely via CSS;</li>
                    <li>generating a random yet solvable initial setup - check out the <a href="https://en.wikipedia.org/wiki/15_puzzle">Wikipedia entry</a> for more info.</li>
                </ul>
            </Collapse>

            <CollapseHeader
                caption={"Settings"}
                open={open[2]}
                onClick={() => handleStateChange(2)}
            />
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                <RadioGroup
                    defaultValue="4"
                    name="mode-select"
                    onChange={ev => props.onChange(ev.target.value)}
                >
                    <FormControlLabel value="3" control={<Radio color="primary" />} label="9 tiles" />
                    <FormControlLabel value="4" control={<Radio color="secondary" />} label="16 tiles" />
                </RadioGroup>
            </Collapse>
        </div>
    );
}