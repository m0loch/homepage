import React, { useState } from "react";
import { connect } from 'react-redux';
import { minesweeperSetDifficulty } from '../../../redux/actions';

import { Collapse, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import CollapseHeader from '../common/collapseHeader';

function MinesweeperPreview(props) {

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
                <p>
                    Minesweeper is a game popularized by Microsoft by putting it in its Microsoft Windows releases since 1990.
                    <br />
                    The idea is pretty easy: your duty is to find all the mines that have been placed in a minefield without stepping on them - that's done by clicking on <i>every other</i> cell.
                    <br />
                    When a cell is clicked you'll either discover how many adjacent (horizontally, vertically and diagonally) cells contain a mine, or get blown up to a straight game over if you're out of luck.
                </p><br />
                    <p>As a minor aid, you'll be given the possibility to mark unclicked cells with flags or question marks.
                </p>
            </Collapse>

            <CollapseHeader
                caption={"Realization"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                <p>This game has been fully developed in React.js reutilizing most of the interface developed for Tyles.</p>
                <br />
                <p>Writing the feedback to the mines is a pretty trivial task, and the only thing to remember is to avoid randomizing the mines' placement before the first move, that should be guaranteed to be safe.</p>
                <br />
                <p>The next developments should be letting the player choose the field's size and the amount of mines to be placed, and maybe come up with a more sophisticated randomizer if I feel like the current one is too basic.</p>
            </Collapse>
            <CollapseHeader
                caption={"Difficulty level"}
                open={open[2]}
                onClick={() => handleStateChange(2)}
            />
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                <RadioGroup
                    value={props.difficulty}
                    name="mode-select"
                    onChange={ev => props.minesweeperSetDifficulty(ev.target.value)}
                >
                    <FormControlLabel value="0" control={<Radio />} label="Easy" />
                    <FormControlLabel value="1" control={<Radio />} label="Normal" />
                    <FormControlLabel value="2" control={<Radio />} label="Hard" />
                </RadioGroup>
            </Collapse>
            <CollapseHeader
                caption={"Credits"}
                open={open[3]}
                onClick={() => handleStateChange(3)}
            />
            <Collapse in={open[3]} timeout="auto" unmountOnExit>
                <p>Icons took from the <a href="https://mui.com/material-ui/material-icons/">Material UI library</a> where not differently specified.</p>
                <br />
                <p>Bomb icon taken from <a href="https://www.veryicon.com/icons/object/material-design-icons-1/bomb-15.html">VeryIcon.com</a>.</p>
                <p>Defused bomb icon taken from <a href="https://www.veryicon.com/icons/object/material-design-icons-1/bomb-off.html">VeryIcon.com</a>.</p>
                <p>Credits to their author <i>zuozuozuozuozuo</i></p>
                <br />
                <p>Explosion icon taken from <a href="https://www.veryicon.com/icons/miscellaneous/framework7/burst-2.html">VeryIcon.com</a> as well.</p>
                <p>Credits to its author <i>tal007</i></p>
            </Collapse>
        </div>
    );
}

function mapStateToProps(state) {
    return { ...state.minesweeper };
}

const mapDispatchToProps = {
    minesweeperSetDifficulty,
};

export default connect(mapStateToProps, mapDispatchToProps)(MinesweeperPreview
);