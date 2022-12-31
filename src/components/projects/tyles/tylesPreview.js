import React, { useState } from "react";
import { connect } from 'react-redux';
import { tylesSetLevel } from '../../../redux/actions';

import { Collapse /*, RadioGroup, Radio, FormControlLabel*/ } from "@mui/material";
import CollapseHeader from '../common/collapseHeader';
import { splitText } from "../../common/textFunctions";

function TylesPreview(props) {

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
                    This is Tyles, a simple puzzle game initially released by yours truly and his good friend <a href="https://www.linkedin.com/in/davidejones88/">Davide</a> for the Apple Store.
                    Each level's objective consists of clearing all the tiles by tapping on them.
                    Tapping on a tile will flip it and its adjacent ones, and while progressing through the 120 levels you will meet different tiles with peculiar behaviours.
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Realization"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                {splitText(`
                    Originally developed in <a href="https://www.cocos.com/">Cocos2d</a> and released on the Apple Store.
                    Some time later we discovered that somebody copied it, plagiaring even the single levels.
                    To be completely honest we weren't exactly pleased, but the fact that somebody thought that our idea was worth stealing made us a little proud at least.

                    Anyway, this version is entirely built in plain React.js and features the original levels - props to Davide for letting me use them.
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Settings"}
                open={open[2]}
                onClick={() => handleStateChange(2)}
            />
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                <span>TODO: add level selector</span>
                {/* <RadioGroup
                    value={props.size}
                    name="mode-select"
                    onChange={ev => props.fifteenSetSize(ev.target.value)}
                >
                    <FormControlLabel value="3" control={<Radio />} label="9 tiles" />
                    <FormControlLabel value="4" control={<Radio />} label="16 tiles" />
                </RadioGroup> */}
            </Collapse>
        </div>
    );
}

function mapStateToProps(state) {
    return { ...state.tyles };
}

const mapDispatchToProps = {
    tylesSetLevel,
};

export default connect(mapStateToProps, mapDispatchToProps)(TylesPreview);