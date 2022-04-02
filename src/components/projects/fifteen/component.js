import React, { useState, useEffect, useCallback, useRef } from 'react';

import './css/fifteen.css';

import { Grid, Container, Card } from "@mui/material";
import { moveLeft, moveRight, moveUp, moveDown, moveTile } from './movesHandler';

const swipeSensibilityRatio = 20;

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

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

    const swiperRef = useRef(null);

    const newGame = () => {
      setTransition(null);
      setTiles(getInitialConfiguration());
      setVictory(false);
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

    //////////////////////
    // Keyboard detection
    //////////////////////
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

    ///////////////////
    // Swipe detection
    ///////////////////
    const handleSwipe = useCallback(() => {
      const dX = touchendX - touchstartX;
      const dY = touchendY - touchstartY;

      if (Math.abs(dX) > Math.abs(dY)) {
        // Horizontal swipe
        if ((Math.abs(dX) > swipeSensibilityRatio) && (dX > 0)) {
          performMove(moveRight);
        } else {
          performMove(moveLeft);
        }
      } else {
        // Vertical swipe
        if ((Math.abs(dY) > swipeSensibilityRatio) && (dY > 0)) {
          performMove(moveDown);
        } else {
          performMove(moveUp);
        }
      }
    }, [performMove]);

    const detectTouchStart = useCallback((event) => {
      if (!victory) {
        event.preventDefault();
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
      }
    }, [victory]);

    const detectTouchEnd = useCallback((event) => {
      if (!victory) {
        event.preventDefault();
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;

        handleSwipe();
      }
    }, [handleSwipe, victory]);

    useEffect(() => {
      if (swiperRef && swiperRef.current) {
        swiperRef.current.addEventListener("touchstart", detectTouchStart);
        swiperRef.current.addEventListener("touchend", detectTouchEnd);
      }

      return () => {
        if (swiperRef && swiperRef.current) {
          swiperRef.current.removeEventListener("touchstart", detectTouchStart);
          // eslint-disable-next-line react-hooks/exhaustive-deps
          swiperRef.current.removeEventListener("touchend", detectTouchEnd);
        }
      };
    }, [detectTouchStart, detectTouchEnd]);

    ////////////////////////
    // Check for game's end
    ////////////////////////
    if (!victory && checkVictory(tiles)) {
      setVictory(true);
    }

    return (
      <Container className="container">
      <Grid container className="root mobile-norefresh" ref={swiperRef}>
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