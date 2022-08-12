import React, { useState } from "react";

import { Collapse } from "@mui/material";
import CollapseHeader from '../common/collapseHeader';
import { splitText } from "../../common/textFunctions";

function RunnerPreview(props) {
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
                    The first question is: "What is an endless runner?" followed by "What made you think you need to build your own?".

                    Let's tackle them one by one.

                    An endless runner is a very simple platform game when the only possible direction is FORWARD.
                    The only thing you can really expect from one is being forced to run (hence the name) trying to avoid all the obstacles as long as you can.

                    The idea of coming up with my own comes from the fact that I wanted to implement a simple PIXI.js game with an animated character and a tileset, but without having to think about the mechanics too much.
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Realization"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                {splitText(`
                    Like Mosaic, the game is uses a <a href="https://pixijs.com/">PIXI.js</a> canvas imported managed via <a href="https://www.npmjs.com/package/@inlet/react-pixi">@inlet/react-pixi</a>.

                    The character sprite and the backgrounds are both free tilesets retrieved from the internet (see Credits).
                `)}

            </Collapse>
            {/* <CollapseHeader
                caption={"Settings"}
                open={open[2]}
                onClick={() => handleStateChange(2)}
            />
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                <p><i>Placeholder for settings</i></p>
            </Collapse> */}
            <CollapseHeader
                caption={"Credits"}
                open={open[3]}
                onClick={() => handleStateChange(3)}
            />
            <Collapse in={open[3]} timeout="auto" unmountOnExit>
                <p>Map tiles taken from <a href="https://rottingpixels.itch.io/nature-platformer-tileset">itch.io</a></p>
                <p>Credits to <a href="https://twitter.com/PixelsRotting">Rotting Pixels</a></p>

                <p>Character taken from <a href="https://opengameart.org/content/classic-hero-and-baddies-pack">opengameart</a></p>
                <p>Credits to <a href="https://opengameart.org/users/grafxkid">GrafxKid</a></p>
            </Collapse>
        </div>
    );
}

export default RunnerPreview;