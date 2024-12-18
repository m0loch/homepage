import React from 'react';
import { styled } from '@mui/system';
import { BaseDlgPanel, DlgActions, ActionButton } from '../../common/baseDlg';

const ReportVoice = styled('div')(
    () => ({
        display: "flex",
        width: "80%",
        justifyContent: "space-between",
    })
);

const calculateRating = (par) => {
    switch (true) {
        case par === 0:
            return 'S';

        case par < 3:
            return 'A';

        case par < 5:
            return 'B';

        default:
            return 'C';
    }
}

export default function TylesWinScreen(props) {

    const rating = calculateRating(props.moves - props.minMoves);

    return (
        <BaseDlgPanel>
            <h1 style={{ maxWidth: "80%", textAlign: "center" }}>Well done!</h1>
            <ReportVoice><p>Optimal number of moves for this stage:</p> <p>{props.minMoves}</p></ReportVoice>
            <ReportVoice><p>Your moves:</p> <p>{props.moves}</p></ReportVoice>
            <ReportVoice><p>RANK:</p> <p>{rating}</p></ReportVoice>

            <DlgActions>
                <ActionButton onClick={props.onReplay}>Play again</ActionButton>
                <ActionButton onClick={props.onNext}>On to the next level!</ActionButton>
            </DlgActions>
        </BaseDlgPanel>
    );
}
