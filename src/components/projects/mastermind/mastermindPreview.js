import React, { useState } from "react";
import { connect } from 'react-redux';
import { mastermindSetDifficulty } from '../../../redux/actions';

import { Collapse , RadioGroup, Radio, FormControlLabel } from "@mui/material";
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
                TODO
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Realization"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                {splitText(`
                    TODO
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Settings"}
                open={open[2]}
                onClick={() => handleStateChange(2)}
            />
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                {splitText(`
                    TODO
                `)}
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