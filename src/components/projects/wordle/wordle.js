import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Grid } from "@mui/material";
import WordleContainer from './styledComponents/wordleContainer';
import WordleRow from './styledComponents/wordleRow';
import WordleTile from './styledComponents/wordleTile';
import Keyboard from './keyboard';
import ValidWords from './data/dictionary';
import Status from './status';
import WinScreen from '../common/winScreen';

const isDebug = false;

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomizeSolution() {
  const res = ValidWords[Math.floor(Math.random() * 2315)];

  if (isDebug) {
    console.log(res);
  }

  return res;
}

function NormalizeAttempt(value, result) {
  let retVal = [];

  while (value.length < 5) {
    value += ' ';
  }

  [...value].forEach((letter, index) => {
    if (!result) {
      retVal.push({ value: letter })
    } else {
      retVal.push({
        value: letter,
        correct: result[index] === index ? Status.Correct
          : result[index] >= 0 ? Status.Misplaced
            : Status.Wrong,
      })
    }
  });

  return retVal;
}

function Wordle() {
  const [solution, setSolution] = useState("");
  const [attempt, setAttempt] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [hints, setHints] = useState({});
  const [gameEnded, setGameEnded] = useState(false);

  const rowRefs = useRef([]);

  const updateHints = useCallback((result) => {

    const newHints = {...hints};

    result.forEach((value, index) => {
      if (value === -1 && !(attempt[index] in newHints)) {
        newHints[attempt[index]] = Status.Wrong;
      } else if (value === index) {
        newHints[attempt[index]] = Status.Correct;
      } else if (!(attempt[index] in newHints)) {
        newHints[attempt[index]] = Status.Misplaced;
      }
    });

    setTimeout(() => setHints(newHints), 1800);

  }, [attempt, hints, setHints]);

  const submitAttempt = useCallback(() => {
    if (!ValidWords.includes(attempt)) {
      // Give some feedback
      rowRefs.current[attempts.length].style.animation = "shake 750ms cubic-bezier(.36,.07,.19,.97) both";

      // (needed to be able to animate multiple times on the same row)
      setTimeout(() => rowRefs.current[attempts.length].style.animation = null, 750);
      return;
    }

    // Match attempt
    const result = [-1, -1, -1, -1, -1];

    // - check for exact spot
    for (let i = 0; i < 5; i++) {
      if (attempt[i] === solution[i]) {
        result[i] = i;
      }
    }

    // - check for misplaced letters
    for (let i = 0; i < 5; i++) {
      if (result[i] !== -1) {
        continue;
      }

      for (let k = 0; k < 5; k++) {
        if ((result[i] !== -1) || (result.includes(k))) {
          continue;
        }

        if (attempt[i] === solution[k]) {
          result[i] = k;
        }
      }
    }

    const updatedAttempts = [...attempts, NormalizeAttempt(attempt, result)];

    setAttempts(updatedAttempts);
    updateHints(result);

    if (attempt === solution) {
      setTimeout(() => setGameEnded({ win: true }), 1600);
    } else if (updatedAttempts.length === 6) {
      setTimeout(() => setGameEnded({ win: false }), 1600);
    }

    setAttempt("");
  }, [attempt, attempts, solution, updateHints]);

  const handleInput = useCallback((keypressed) => {
    if (gameEnded) {
      return;
    }

    if (keypressed === "BACKSPACE") {

      if (attempt.length > 0) {
        setAttempt(attempt.slice(0, -1));
      }

    } else if (keypressed === "ENTER") {

      if (attempt.length === 5) {
        submitAttempt();
      }

    } else if ((attempt.length < 5) && (alphabet.indexOf(keypressed) > -1)) {

      setAttempt(attempt + keypressed);

    }
  }, [attempt, gameEnded, setAttempt, submitAttempt]);

  const handleUserKeyPress = useCallback((event) => {
    if (attempts.length >= 6) {
      // This control is probably redundant, but we don't want people submit attempts forever
      return;
    }

    const keypressed = event.key.toUpperCase();
    handleInput(keypressed);
  }, [attempts, handleInput]);

  const newGame = () => {
    setSolution(randomizeSolution());
    setGameEnded(false);
    setAttempts([]);
    setHints({});
  }

  useEffect(() => {
    newGame();
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    }
  }, [handleUserKeyPress]);

  const rows = [...attempts, NormalizeAttempt(attempt)];
  while (rows.length < 6) {
    rows.push(new Array(5));
  }

  while (rows.length > 6) {
    rows.pop();
  }

  return (
    <WordleContainer>
      {gameEnded ? <WinScreen msg={gameEnded.win ? null : `The solution was '${solution}'`} onClick={newGame}></WinScreen> : null}
      <Grid>
        {
          rows.map((value, idx) =>
            <WordleRow
              key={idx} 
              ref={el => {
                rowRefs.current[idx] = el;
              }}
            >
              {([...value]).map((c, idx) =>
                <WordleTile
                  char={c}
                  idx={idx}
                  key={idx}
                  value={value}
                />
              )
              }
            </WordleRow>
          )
        }
      </Grid>
      <Keyboard inputCallback={handleInput} hints={hints}></Keyboard>
    </WordleContainer>
  );
}

export default Wordle;