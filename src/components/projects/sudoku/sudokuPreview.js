import React, { useState } from "react";
import { connect } from 'react-redux';
import { sudokuSetLevel } from "../../../redux/actions";

import { Collapse } from "@mui/material";
import CollapseHeader from '../common/collapseHeader';
import { splitText } from "../../common/textFunctions";
import LevelSelect from "./components/levelSelect";
import LoadSudokuLevels from './utils/loadSudokuLevels';

function SudokuPreview(props) {

    const [open, setOpen] = useState([true, false, true]);

    const handleStateChange = (idx) => {
        const newState = [...open];
        newState[idx] = !open[idx];
        setOpen(newState);
    }

    const levelsList =  LoadSudokuLevels(props.folder);

    return (
        <div style={{ display: "inline-block" }}>
            <CollapseHeader
                caption={"Info"}
                open={open[0]}
                onClick={() => handleStateChange(0)}
            />
            <Collapse in={open[0]} timeout="auto" unmountOnExit>
                {splitText(`
                Come on, you know what a sudoku is...
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Realization"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                {splitText(`
                Temp
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Settings"}
                open={open[2]}
                onClick={() => handleStateChange(2)}
            />
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
            {/* TODO: save which sudokus have already been completed, add an icon to them */}
                <LevelSelect
                    levelsNumber = {levelsList.length}
                    level={props.level}
                    onSelect={idx => props.sudokuSetLevel({level: idx, ...levelsList[idx]})}
                />
            </Collapse>
        </div>
    );
}

function mapStateToProps(state) {
    return { ...state.sudoku };
  }
  
  const mapDispatchToProps = {
    sudokuSetLevel,
  };

export default connect(mapStateToProps, mapDispatchToProps)(SudokuPreview);