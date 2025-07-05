import { connect } from 'react-redux';
import { wherewolfSetAssignments } from '../../../../redux/actions';

import { FormContainer, FormRow, FormSelector, FormLabel, FormButton } from '../styledComponents/sharedComponents';

function RoleAssignForm(props) {

    const AssignRole = (player, role) => {
        const assignments = props.assignments || {};
        assignments[player] = role;

        props.wherewolfSetAssignments(assignments);
    }

    const RandomizeRoles = () => {
        const assignments = props.assignments || {};

        // Get unassigned roles and players
        const unassignedRoles = [...props.roles.Villagers, ...props.roles.Werewolves].filter(role => !Object.values(props.assignments).includes(role));
        const unassignedPlayers = props.players.filter(player => !props.assignments[player] || props.assignments[player] === 'Random');

        // Randomly assign spare roles to unassigned players
        while (unassignedPlayers.length > 0) {
            const player = unassignedPlayers.pop();
            const role = unassignedRoles.splice(Math.floor(Math.random() * unassignedRoles.length), 1)[0];

            assignments[player] = role;
        }

        props.wherewolfSetAssignments(assignments);
    }

    return (
        <FormContainer>
            {props.players?.map((player, index) => (
                <FormRow key={index}>
                    <FormLabel
                        type="text"
                        value={player}
                        readOnly
                    />
                    <FormSelector
                        key={index}
                        value={props.assignments?.[player] || 'Random'}
                        onChange={e => AssignRole(player, e.target.value)}
                    >
                        <option value="Random">--Random--</option>
                        {props.roles.Villagers
                            .filter(role => role === props.assignments?.[player] || !Object.values(props.assignments).includes(role))
                            .map((role, i) => (
                                <option key={i} value={role}>
                                    {role}
                                </option>
                            ))}
                        {props.roles.Werewolves
                            .filter(role => role === props.assignments?.[player] || !Object.values(props.assignments).includes(role))
                            .map((role, i) => (
                            <option key={i} value={role}>
                                {role}
                            </option>
                        ))}
                    </FormSelector>
                </FormRow>
            ))}
            <br/>
            <FormButton style={{ width: "unset" }} onClick={RandomizeRoles}>Randomize</FormButton>
            <br/>
        </FormContainer>
    );
}


function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetAssignments,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleAssignForm);
