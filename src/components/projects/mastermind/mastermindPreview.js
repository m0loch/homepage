import React, { useState } from "react";
import { connect } from 'react-redux';
import { mastermindSetDifficulty } from '../../../redux/actions';

import { Collapse, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import CollapseHeader from '../common/collapseHeader';
import { splitText } from '../../common/textFunctions';

function MastermindPreview(props) {

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
                    Master Mind (or Mastermind, or any combination whatsoever) is a simple game where two players face each other, one trying to come up with a difficult to break color pattern, the other having to guess it before runnig out of attempts.
                    After each attempt the "code keeper" will give a feedback to the cracker about how their last effort performed, signalling them with a black dot for every correct digit and a white one for every colour that has been placed in the wrong spot.

                    The number of attempts, digits and possible colours vary between versions and editions, and greatly impact the difficulty of the game itself.

                    This version is obviously meant for single players, as the code will just handle generating the code and giving the appropriate feedback.
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Realization"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                {splitText(`
                    This minigame took way more time than intended, as I started out setting it up with PIXI.js then pivoted after realizing that I needed some kind of popup to select the orbs' colours.
                    Initially I went for having them change colour every time they were tapped, but expecially on hard difficulties that proved to be quite annoying.

                    After trying to add some dialogs that tried to resemble decently the win screen, and at a later point evaluating the idea of having multiple PIXI.js canvases, I just pivoted to removing PIXI.js from the project altogether.

                    This version doesn't feature any asset, everything gets drawn and animated via CSS while the game logic is just plain JavaScript.
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Settings"}
                open={open[2]}
                onClick={() => handleStateChange(2)}
            />
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                <RadioGroup
                    value={props.difficulty}
                    name="mode-select"
                    onChange={ev => props.mastermindSetDifficulty(ev.target.value)}
                >
                    <FormControlLabel value="0" control={<Radio />} label="4 slots, 6 colors" />
                    <FormControlLabel value="1" control={<Radio />} label="6 slots, 8 colors" />
                </RadioGroup>
            </Collapse>
        </div>
    );
}

function mapStateToProps(state) {
    return { ...state.mastermind };
  }
  
  const mapDispatchToProps = {
    mastermindSetDifficulty,
  };

export default connect(mapStateToProps, mapDispatchToProps)(MastermindPreview);