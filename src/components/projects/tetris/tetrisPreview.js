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
                    <b>NB: THE GAME ISN'T PLAYABLE ON MOBILE AT THE MOMENT</b>
                    An old classic, you've spent either most of your life under a rock or you just know Tetris and its rules.

                    I had an old implementation of the game lying around on my hard drive and, while not being absolutely perfect, while talking with a friend (HI LAURA) I figured out I could just publish it.
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Realization"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                {splitText(`
                The game mechanics have been realized in plain javascript, while the graphics are realized via Material UI components and the <a href="https://mui.com/system/styled/">styled()</a> lybrary.
                
                The specifics for the game mechanics have been taken directly from <a href="https://harddrop.com/wiki/Tetris_Guideline">the Tetris wiki</a> and I've tried to adhere to them the best I could.

                There are still a few things missing, though:
                <ul>
                    <li>The Hold piece mechanic</li>
                    <li>Up key should perform a hard drop</li>
                    <li>Ghost piece mechanic</li>
                    <li>The rotations should respect <a href="https://harddrop.com/wiki/SRS">the SRS system</a></li>
                    <li><a href="https://harddrop.com/wiki/DAS">Delayed auto-shift</a></li>
                    <li>The Next section  should show the next 3 pieces</li>
                </ul>

                Maybe I'll fix these missing pieces in the future, but at the moment I'll probably should focus on the mobile controls...
                `)}

            </Collapse>
            <CollapseHeader
                caption={"Settings"}
                open={open[2]}
                onClick={() => handleStateChange(2)}
            />
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                <p><i>[No settings at the moment]</i></p>
            </Collapse>
            <CollapseHeader
                caption={"Credits"}
                open={open[3]}
                onClick={() => handleStateChange(3)}
            />
            <Collapse in={open[3]} timeout="auto" unmountOnExit>
                <p>First of all: if you're a fan of the game you <b>have</b> to check out <a href="https://harddrop.com/wiki/Tetris_Wiki">this wiki</a>.</p>
                <br/>
                <p>I also have to thank you the guys at gaming.stackexchange.com for <a href="https://gaming.stackexchange.com/questions/13057/tetris-difficulty">this question</a> on which I based the difficulty system.</p>
            </Collapse>
        </div>
    );
}

export default TetrisPreview;