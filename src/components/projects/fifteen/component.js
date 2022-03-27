import React, { useState, useEffect, useCallback } from 'react';

import './css/fifteen.css';

import { Grid, Container, Card } from "@mui/material";
import { moveLeft, moveRight, moveUp, moveDown, moveTile } from './movesHandler';

function getInitialConfiguration() {
  const shuffleBag = [];
  for (let i = 1; i <= 15; i++) {
    shuffleBag.push(i);
  }

  const result = [];
  let parity = true;

  for (; shuffleBag.length > 2;) {
    // takes a number out of the shuffle bag and inserts it at the end
    let num = shuffleBag.splice(Math.floor(Math.random() * shuffleBag.length), 1)[0];
    result.push(num);

    // parity check - needed to keep the configuration in the domain of solvability
    // eslint-disable-next-line
    shuffleBag.forEach(item => {
      if (num > item) {
          parity = !parity;
      }
    });
  }

  // adds the last two numbers taking the parity into account
  result.push(shuffleBag.splice(parity ? 0 : 1, 1)[0]);
  result.push(shuffleBag[0]);
  result.push(0);

  return result;
}

function WinScreen(props) {
  return(
      <div className="winpanel" onClick={props.onClick} >
          <h1>VICTORY</h1>
      </div>
  );
}

function Fifteen() {
    const [tiles, setTiles] = useState(getInitialConfiguration());
    const [victory, setVictory] = useState(false);
    const [transition, setTransition] = useState(null);

    const newGame = () => {
      setVictory(false);
      setTiles(getInitialConfiguration());
    }

    const checkVictory = (tiles) => {
      return tiles.findIndex((el, idx) => (idx + 1) % 16 !== el) === -1;
    }

    const performMove = useCallback((callback, payload) => {
      if (!victory) {
        const move = callback(tiles, payload);
        setTiles(move.tiles);
        setTransition({
          dir: move.dir,
          idx: move.idx,
        });
      }
    }, [tiles, victory]);

    const handleUserKeyPress = useCallback((event) => {
        switch (event.key) {
          case 'A':
          case 'a':
          case 'ArrowLeft':
            performMove(moveLeft);
            return;
  
          case 'D':
          case 'd':
          case 'ArrowRight':
            performMove(moveRight);
            return;
  
          case 'W':
          case 'w':
          case 'ArrowUp':
            performMove(moveUp);
            return;

          case 'S':
          case 's':
          case 'ArrowDown':
            performMove(moveDown);
            return;
  
          default:
            return;
        }      
    }, [performMove]);

    useEffect(() => {
      window.addEventListener("keydown", handleUserKeyPress);
      return () => {
        window.removeEventListener("keydown", handleUserKeyPress);
      };
    }, [handleUserKeyPress]);


    if (!victory && checkVictory(tiles)) {
      setVictory(true);
    }

    return (
      <Container className="container">
      <Grid container className="root">
        {victory ? <WinScreen onClick={newGame}></WinScreen> : null }
        {tiles.map((el, idx) => {
          return (<Grid container item
                    xs={3} className={`${el === 0 ? "hole" : ""} tileEmbed`} key={el}
                    onClick={() => performMove(moveTile, idx)}>
              <Card className={`tile ${transition?.idx === idx ? `transition${transition.dir}` : ""}`} >
                <p className="value" value={el}>{el}</p>
              </Card>
            </Grid>)
        })}
      </Grid>
      </Container>
    );
}

export default Fifteen;