import React, { useState } from 'react';
import ChoicesArea from './styledComponents/choicesArea';
import GameArea from './styledComponents/gameArea';
import NextButton from './styledComponents/nextButton';
import SceneTitle from './styledComponents/sceneTitle';
import SceneContent from './styledComponents/sceneContent';

import GetTalk from './adventure';
import { splitText } from '../../common/textFunctions';

function Talks(props) {

    const [gameState, setGameState] = useState({});
    const [selected, setSelected] = useState(0);

    const Adventure = GetTalk(props.selectedTalk);
    const idx = Adventure.findIndex(item => item.key === gameState.event);
    const currEvent = Adventure[idx > 0 ? idx : 0];

    const PerformNext = (idx) => {
        let outcome;
        if (currEvent.choices) {
            outcome = currEvent.choices[idx].outcome;
        } else {
            outcome = currEvent.outcome;
        }

        setGameState(prev => {
            const retVal = {...prev, event: outcome.next};

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
                <SceneTitle>{currEvent.title}</SceneTitle>

                <SceneContent>
                    {splitText(currEvent.content)}
                </SceneContent>
                {currEvent.choices ? (
                    <ChoicesArea selected={selected} setSelected={setSelected}>
                        {currEvent.choices}
                    </ChoicesArea>
                ) : null}
            </GameArea>

            {currEvent.choices || currEvent.outcome ? (
                <NextButton variant="contained" onClick={() => PerformNext(selected)}>Next</NextButton>
            ) : null}
        </>
    );
}

export default Talks;