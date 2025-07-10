import { useEffect } from 'react';
import { connect } from 'react-redux';
import { FormRow, FormSelector } from '../../../../styledComponents/sharedComponents';
import { wherewolfSetCurrPhaseLog } from '../../../../../../../redux/actions';

function JulietNightAction(props) {

    const julietIdx = Object.values(props.assignments).findIndex(item => item === 'Juliet');

    // IF Juliet is not present, the log must be set to empty
    useEffect(() => {
        if (julietIdx === -1) {
            props.wherewolfSetCurrPhaseLog({
                type: "Juliet",
                text: `There is no Juliet in this game<br/><br/>`
            });
        }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [julietIdx]);

    const SelectTarget = player => {

        props.wherewolfSetCurrPhaseLog({
            type: "Juliet",
            target: player,
            text: `Juliet meets ${player} and they end up falling in love.<br/><br/>`
        });
    }

    return julietIdx === -1 ? (
        <><p>There is no Juliet in this game</p><br/></>
    ) : (
        <>
            <p>Juliet chooses her lover</p>
            <FormRow style={{ justifyContent: 'center' }} >
                <FormSelector
                    value={props.currPhaseLog?.target || 'default'}
                    onChange={e => SelectTarget(e.target.value)}
                >
                    <option value="default" disabled>Select one</option>

                    {props.players.map((player, index) => {
                        return (Object.keys(props.assignments).at(julietIdx) === player) ? 
                        null : 
                        (<option key={index} value={player}>{player}</option>)
                    })}
                </FormSelector>
            </FormRow>
        </>
    );
}

function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetCurrPhaseLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(JulietNightAction);
