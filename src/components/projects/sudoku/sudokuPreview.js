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

    const levelsList = LoadSudokuLevels(props.folder);

    return (
        <div style={{ display: "inline-block" }}>
            <CollapseHeader
                caption={"Info"}
                open={open[0]}
                onClick={() => handleStateChange(0)}
            />
            <Collapse in={open[0]} timeout="auto" unmountOnExit>
                <p>Sudoku, in case you lived on another planet, is a numeric puzzle game where the player needs to fill every cell of a table avoiding repeating the same nnumber in the same row, column and sector.</p>
                <br/>
                <p>Trivia: despite what people think, <a href="https://sudoku.com/how-to-play/where-was-sudoku-invented/" target="_blank" rel="noreferrer">it doesn't originate in Japan</a> (where it's commonly referred as <i>nanpure</i>), even though it's the first place where it really blew up during the 80s.</p>
            </Collapse>

            <CollapseHeader
                caption={"Realization"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                {splitText(`
                The game is entirely JavaScript based, as resorting to PIXI.js would have been overkill.

                For a moment I wanted to come up with a level generator, then I just decided to roll with some old sudokus I had sitting around the house.

                In order to accelerate things, I adapted the popup selector from Master Mind and the level selector from Tyles.
                `)}
            </Collapse>

            <CollapseHeader
                caption={"Settings"}
                open={open[2]}
                onClick={() => handleStateChange(2)}
            />
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                <LevelSelect
                    levelsList={levelsList}
                    level={props.level}
                    doneLevels={props.doneList}
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