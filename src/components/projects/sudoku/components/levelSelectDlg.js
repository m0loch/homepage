import React from 'react';
import { BaseDlgPanel, DlgBackground, DlgActions, ActionButton } from '../../common/baseDlg';
import LoadSudokuLevels from '../utils/loadSudokuLevels';
import LevelSelect from './levelSelect';

export default function LevelSelectDlg(props) {
    const levelsList = LoadSudokuLevels(props.folder);

    return (props.open ?
        <>
            <DlgBackground onClick={props.onOK} />
            <BaseDlgPanel animationspeed={.1} style={{ 
                        top: "40%",
                        left: "30%",
                        height: "20%",
                        width: "40%",
             }}>
                <LevelSelect
                    levelsList={levelsList}
                    level={props.level}
                    doneLevels={props.doneLevels}
                    onSelect={idx => props.onSelect({level: idx, ...levelsList[idx]})}
                    style={{
                        width: "80%"
                    }}
                />
                <DlgActions>
                    <ActionButton onClick={props.onOK}>Ok</ActionButton>
                </DlgActions>
            </BaseDlgPanel>
        </> : null
    );
}
