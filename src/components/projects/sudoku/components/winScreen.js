import React from 'react';
import { BaseDlgPanel, DlgActions, ActionButton } from '../../common/baseDlg';

export default function WinScreen(props) {

    return (
        <BaseDlgPanel>
            <h1 style={{ maxWidth: "80%", textAlign: "center" }}>Well done!</h1>

            <DlgActions>
                <ActionButton onClick={props.onReplay}>Play again</ActionButton>
                <ActionButton onClick={props.onNext}>On to the next level!</ActionButton>
            </DlgActions>
        </BaseDlgPanel>
    );
}
