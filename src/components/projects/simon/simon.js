import React, { useState, useRef } from 'react';

import { Container } from "@mui/material";
import SimonField from './styledComponents/simonField';
import SimonButton from './styledComponents/simonButton';
import WinScreen from '../common/winScreen';
import SimonScreen from './styledComponents/simonScreen';

const isDebug = true;

function Simon() {

  const [victory, setVictory] = useState(false);

  const buttonRefs = useRef([]);

  const newGame = () => {
    setVictory(false);
  }

  const registerAttempt = idx => {

    if (isDebug) {
      console.log(idx);
    }

    if (buttonRefs.current) {
      // animation
      buttonRefs.current[idx].style.animation = `lightup${idx} 750ms ease normal`;

      // + reset
      setTimeout(() => buttonRefs.current[idx].style.animation = null, 750);
    }

  }

  const tiles = [0, 1, 2, 3];
  return (
    <Container style={{ display: "flex" }}>
      <SimonField>
        {victory ? <WinScreen onClick={newGame} /> : null}
        {tiles.map((el, idx) => (
          <SimonButton
            key={idx}
            ref={el => buttonRefs.current[idx] = el}
            idx={idx}
            value={el}
            onClick={() => registerAttempt(idx)}
          />
        )
        )}
        <SimonScreen>
          START
        </SimonScreen>
      </SimonField>
    </Container>
  );
}

export default Simon;