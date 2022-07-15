import React, { useState } from "react";
import { connect } from 'react-redux';
import { wordleSetDifficulty } from '../../../redux/actions';

import { Collapse, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import CollapseHeader from '../common/collapseHeader';

function WordlePreview(props) {

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
                <p>Wordle, a wordplay between "word" and <a href="https://en.wikipedia.org/wiki/Josh_Wardle">Wardle</a>, is a very simple game which went viral over the course of 2021, ending up being sold to teh New York Times for over a million dollars.</p>
                <br />
                <p>The objective consists in guessing a five-letter word using six guesses or less.</p>
                <br />
                <p>Every guess must be a valid word, and after each guess, the game hints at the correctness of the letters used and their relative position.</p>
            </Collapse>

            <CollapseHeader
                caption={"Realization"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                <p>The idea behind the game is simple and very effective, which makes the game very easy to plagiarize (I mean, there's a reason behind both the massive success of the original and the massive wave of clones it generated over the course of few months).</p>
                <br />
                <p>The engine itself was quite easy to rewrite (<i>that didn't stop myself from writing a bug related to the first letter of the word, mind you</i>), and the list of valid words / solutions was leaked a long time ago making that part trivial as well.</p>
                <p>Just so you know: every time you load the game a word gets selected from the original version's solution pool, that means that the word you're trying to guess will be or has already been a proper solution of the real game itself.</p>
                <br />
                <p>The most difficult part was animating the tile flips / coloring in an acceptable way, and it also forced me to basically rewrite the whole site because I had started seeing some weird interactions until I got rid of the stock CSS I was using at the time.</p>
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
                    onChange={ev => props.wordleSetDifficulty(ev.target.value)}
                >
                    <FormControlLabel value="0" control={<Radio />} label="Easy" />
                    <FormControlLabel value="1" control={<Radio />} label="Normal" />
                    <FormControlLabel value="2" control={<Radio  />} label="Hard" />
                </RadioGroup>
            </Collapse>
        </div>
    );
}

function mapStateToProps(state) {
    return { ...state.wordle };
  }
  
  const mapDispatchToProps = {
    wordleSetDifficulty,
  };

export default connect(mapStateToProps, mapDispatchToProps)(WordlePreview);