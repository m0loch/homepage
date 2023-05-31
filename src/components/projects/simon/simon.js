import React, { useEffect, useReducer, useRef } from 'react';

import { Container } from "@mui/material";
import SimonField from './styledComponents/simonField';
import SimonButton from './styledComponents/simonButton';
import SimonScreen from './styledComponents/simonScreen';
import StateReducer, { StateComponents } from './stateMachine';

const isDebug = false;
const lightDuration = 700;

const GenerateSolution = (level) => {
  const retVal = [];

  for (let i = 0; i < level; i++) {
    retVal.push(Math.floor(Math.random() * 4));
  }

  return retVal;
}

function Simon(props) {

  const [state, dispatch] = useReducer(StateReducer, { phase:'FirstLoad', reverseMode: props.reverseMode });
  const buttonRefs = useRef([]);

  const LightButton = idx => {

    // animation
    buttonRefs.current[idx].style.animation = `lightup${idx} ${lightDuration}ms ease normal`;

    // + reset
    setTimeout(() => buttonRefs.current[idx].style.animation = null, lightDuration);
}

const onPlayBtn = () => {
    dispatch({ type: 'Play', solution: GenerateSolution(props.level) });
  }

  const registerAttempt = idx => {
    if (state.phase === 'UserInput' && buttonRefs.current) {
      LightButton(idx);
      dispatch({ type: 'Button', value: idx });
    }
  }

  useEffect(() => {
    switch (state.phase) {
      case 'Countdown':
        setTimeout(() => dispatch({ type: 'Step' }), 1000);
        break;

      case 'Hint':
        setTimeout(() => {
          LightButton(state.solution[state.step]);
          setTimeout(() => dispatch({ type: 'Step' }), lightDuration + 50); // Fix consecutive hits...
        }, state.initialDelay ? 800 : 0);
        break;

      default:
        break;
    }
  }, [state]);

  if (isDebug) {
    console.log(state);
  }

  const tiles = [0, 1, 2, 3];
  return (
    <Container style={{ display: "flex" }}>
      <SimonField>
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
        <SimonScreen
          onClick={onPlayBtn}
        >
          {StateComponents(state)}
        </SimonScreen>
      </SimonField>
    </Container>
  );
}

export default Simon;