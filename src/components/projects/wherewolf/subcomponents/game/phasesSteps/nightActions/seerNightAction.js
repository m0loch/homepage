import { connect } from 'react-redux';
import { wherewolfSetCurrPhaseLog } from '../../../../../../../redux/actions';
import { FormRow, FormSelector } from '../../../../styledComponents/sharedComponents';

import roles from '../../../../data/roles.json';

function SeerNightAction(props) {

    // TODO: Check that Seer is present and ALIVE, if not set control as inactive and push empty log

    const SelectTarget = player => {
        const sensedRole = props.assignments[player];
        const fullRole = roles.find(role => role.name.eng === sensedRole);
        const isTainted = fullRole.isTainted;

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

                    {props.players.map((player, index) => (
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
