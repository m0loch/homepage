import React, { useState } from "react";
import { connect } from 'react-redux';
import { simonSelectLevel, simonSetReverse } from '../../../redux/actions';

import { Collapse, RadioGroup, Radio, FormControlLabel, Checkbox } from "@mui/material";
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
                An iconic game first commercialized in 1978, Simon is a simple game of memory where the player needs to memorize and input a short sequence of colours.

                The game features different difficulty settings and the reverse mode, where the player needs to input the colors he gets hinted from last to first.
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Realization"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[1]} timeout="auto" unmountOnExit>

                {splitText(`
                The logic behind the game is pretty basic - the only interesting detail here is the fact I've implemented the finite state machine handling the game state via the useReducer hook.

                Graphics and animations are fully done via CSS, nothing worth mentioning here either.
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Settings"}
                open={open[2]}
                onClick={() => handleStateChange(2)}
            />
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                <RadioGroup
                    value={props.level}
                    name="mode-select"
                    onChange={ev => props.simonSelectLevel(ev.target.value)}
                >
                    <FormControlLabel value="8" control={<Radio />} label="8" />
                    <FormControlLabel value="14" control={<Radio />} label="14" />
                    <FormControlLabel value="20" control={<Radio />} label="20" />
                    <FormControlLabel value="32" control={<Radio />} label="32" />
                </RadioGroup>
                <FormControlLabel control={
                    <Checkbox
                        checked={props.reverseMode}
                        onClick={ev => props.simonSetReverse(ev.target.checked)}
                    />
                } label="Reverse mode" />
            </Collapse>

        </div>
    );
}

function mapStateToProps(state) {
    return { ...state.simon };
}

const mapDispatchToProps = {
    simonSelectLevel,
    simonSetReverse
};

export default connect(mapStateToProps, mapDispatchToProps)(SimonPreview);
