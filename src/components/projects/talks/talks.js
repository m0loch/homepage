import React, { useState } from 'react';
import ChoicesArea from './styledComponents/choicesArea';
import GameArea from './styledComponents/gameArea';
import NextButton from './styledComponents/nextButton';
import SceneTitle from './styledComponents/sceneTitle';
import SceneContent from './styledComponents/sceneContent';

import GetTalk from './adventure';
import { splitText } from '../../common/textFunctions';

function Talks(props) {

    const [gameState, setGameState] = useState({ selected: 0 });

    const Adventure = GetTalk(props.selectedTalk);
    const currEvent = Adventure[gameState.idx ?? 0];

    const PerformNext = (sel) => {
        let outcome;
        if (currEvent.choices) {
            outcome = currEvent.choices[sel].outcome;
        } else {
            outcome = currEvent.outcome;
        }

        let idx;
        if (outcome.next) {
            idx = Adventure.findIndex(item => item.key === outcome.next);
        } else {
            idx = gameState.idx ? gameState.idx + 1 : 1;
        }

        setGameState(prev => {
            const retVal = {...prev, idx, selected: 0};

            Object.entries(outcome).forEach(([key, value]) => {
                if (key !== 'next') {
                    if (retVal.hasOwnProperty(key)) {
                        retVal[key] += value;
                    } else {
                        retVal[key] = value;
                    }
                }
            });

            return retVal;
        });
    }

    return (
        <>
            <GameArea>
                {currEvent.title ? <SceneTitle>{currEvent.title}</SceneTitle> : null}

                <SceneContent>
                    {splitText(currEvent.content)}
                </SceneContent>
                {currEvent.choices ? (
                    <ChoicesArea selected={gameState.selected} setSelected={sel => setGameState({...gameState, selected: sel})}>
                        {currEvent.choices}
                    </ChoicesArea>
                ) : null}
            </GameArea>

            {currEvent.choices || currEvent.outcome ? (
                <NextButton variant="contained" onClick={() => PerformNext(gameState.selected)}>Next</NextButton>
            ) : null}
        </>
    );
}

export default Talks;