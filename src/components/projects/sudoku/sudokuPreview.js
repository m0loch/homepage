import React, { useState } from "react";
import { connect } from 'react-redux';

import { Collapse /*, RadioGroup, Radio, FormControlLabel*/ } from "@mui/material";
import CollapseHeader from '../common/collapseHeader';

function SudokuPreview(props) {

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
                <p>Come on, you know what a sudoku is...</p>
            </Collapse>

            {/* <CollapseHeader
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
                    value={props.size}
                    name="mode-select"
                    onChange={ev => props.SudokuSetSize(ev.target.value)}
                >
                    <FormControlLabel value="3" control={<Radio />} label="9 tiles" />
                    <FormControlLabel value="4" control={<Radio />} label="16 tiles" />
                </RadioGroup>
            </Collapse> */}
        </div>
    );
}

// function mapStateToProps(state) {
//     return { ...state.Sudoku };
//   }
  
//   const mapDispatchToProps = {
//     SudokuSetSize,
//   };

export default /*connect(mapStateToProps, mapDispatchToProps)(*/SudokuPreview/*)*/;