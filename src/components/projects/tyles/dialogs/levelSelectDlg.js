import React from 'react';
import { BaseDlgPanel, DlgBackground, DlgActions, ActionButton } from '../../common/baseDlg';
import LevelSelect from '../components/levelSelect';

export default function LevelSelectDlg(props) {
    return (
        <>
            <DlgBackground onClick={props.onOK} />
            <BaseDlgPanel animationspeed={.1}>
                <LevelSelect {...props} />
                <DlgActions>
                    <ActionButton onClick={props.onOK}>Ok</ActionButton>
                </DlgActions>
            </BaseDlgPanel>
        </>
    );
}
