import React from 'react';
import { BaseDlgPanel, DlgBackground, DlgActions, ActionButton } from './baseDlg';

export default function HelpDlg(props) {
    return (
        <>
            <DlgBackground onClick={props.onOK} />
            <BaseDlgPanel animationSpeed={.1}>
                <p>PLACEHOLDER HELP</p>
                <DlgActions>
                    <ActionButton onClick={props.onOK}>Close</ActionButton>
                </DlgActions>
            </BaseDlgPanel>
        </>
    );
}
