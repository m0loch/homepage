import React from "react";
import SimonText from './styledComponents/simonText';

// States
export const StateComponents = state => {
    switch (state.phase) {
        case 'FirstLoad':
            return <SimonText>START</SimonText>;
        case 'Countdown':
            return <SimonText>{state.step > 0 ? state.step : 'GO!'}</SimonText>;
        case 'Hint':
            return <SimonText>{state.step + 1}</SimonText>;
        case 'UserInput':
            return <SimonText>{state.step + 1}</SimonText>;
        case 'Error':
            return <SimonText>X_x</SimonText>;
        case 'Victory':
            return <SimonText>^_^</SimonText>;
        default:
            break;
    }
}

export default function StateReducer(state, action) {
    switch (state.phase) {
        case 'FirstLoad':
        case 'Error':
        case 'Victory':
            if (action.type === 'Play') return { ...state, solution: action.solution, phase: 'Countdown', step: 3 };
            break;
        case 'Countdown':
            if (action.type === 'Step') {
                if (state.step > 0) {
                    return { ...state, step: state.step - 1};
                } else {
                    return { ...state, phase: 'Hint', step: 0, level: 0 };
                }
            }
            break;
        case 'Hint':
            if (action.type === 'Step') {
                if (state.step < state.level) {
                    return { ...state, initialDelay: false, step: state.step + 1};
                } else {
                    return { ...state, phase: 'UserInput', step : 0 };
                }
            }
            break;
        case 'UserInput':
            if (action.type === 'Button') {
                if (action.value !== state.solution[state.step]) {
                    return { ...state, phase: 'Error' }
                }

                // Right attempt: next step, next level or victory?
                if (state.step < state.level) {
                    return { ...state, step: state.step + 1 };
                } else if (state.level < (state.solution.length - 1))  {
                    return { ...state, phase: 'Hint', initialDelay: true, step: 0, level: state.level + 1 };
                } else {
                    return { ...state, phase: 'Victory' };
                }
            }
            break;
        default:
            break;
    }
    return state;
}
