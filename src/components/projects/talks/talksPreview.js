import React, { useState } from "react";
import { connect } from 'react-redux';
import { talksSelectStory } from '../../../redux/actions';

import { Collapse, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import CollapseHeader from '../common/collapseHeader';
import { splitText } from "../../common/textFunctions";

function TalksPreview(props) {
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
                I figured out, while developing other software, that I could use having a simple way to navigate a dialogue tree like the ones in the first Fallout games.

                I'll add here some minor experiments I'm going to throw together while thinking on some different applications, enjoy.
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Settings"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[0]} timeout="auto" unmountOnExit>
                <RadioGroup
                    value={props.selectedTalk}
                    name="mode-select"
                    onChange={ev => props.talksSelectStory(ev.target.value)}
                >
                    <FormControlLabel value="0" control={<Radio />} label="Example of the Dragon" />
                    <FormControlLabel value="1" control={<Radio />} label="BugFormer personality assessment" />
                </RadioGroup>
            </Collapse>

            <CollapseHeader
                caption={"Credits"}
                open={open[2]}
                onClick={() => handleStateChange(2)}
            />
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                {splitText(`
                <b>Example of the Dragon</b> is pretty much a direct rip-off of the start of <a href="https://www.choiceofgames.com/dragon">Choice of the Dragon</a> from <a href="https://www.choiceofgames.com/">Choice of Games LLC</a>.
                Go play the original, it's great.

                The profiles for the <b>BugFormer personality assessment</b> is based on the profiles for Meo, Dav, Fra and Rob, the four coders that will appear in BugFormer if we ever restart working on it.
                Those are in turn loosely based on the myself and my former colleagues Dav, Fra and Rob (duh) and should not be taken seriously for any reason at all.

                `)}

            </Collapse>
        </div>
    );
}

function mapStateToProps(state) {
    return { ...state.talks };
  }
  
  const mapDispatchToProps = {
    talksSelectStory,
  };

export default connect(mapStateToProps, mapDispatchToProps)(TalksPreview);