import { connect } from 'react-redux';
import { wherewolfSetCurrPhaseLog } from '../../../../../../../redux/actions';
import { FormRow, FormSelector } from '../../../../styledComponents/sharedComponents';

function SeerNightAction(props) {

    // TODO: Check that Seer is present and ALIVE, if not set control as inactive and push empty log

    const SelectTarget = player => {
        const sensedRole = props.assignments[player];
        const isTainted = sensedRole.isTainted;

        props.wherewolfSetCurrPhaseLog({
            type: "Seer",
            target: player,
            success: isTainted,
            text: `The Seer investigated ${player} and discovered their aura to be ${isTainted ? "tainted" : "pure"}.<br/><br/>`
        });
    }

    return (
        <>
            <p>The Seer investigates a player</p>
            <FormRow style={{ justifyContent: 'center' }} >
                <FormSelector
                    value={props.currPhaseLog?.target || 'default'}
                    onChange={e => SelectTarget(e.target.value)}
                >
                    <option value="default" disabled>Select one</option>

                    {props.survivors?.map((player, index) => (
                        <option key={index} value={player}>{player}</option>
                    ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(SeerNightAction);
