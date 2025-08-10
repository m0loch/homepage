import { connect } from 'react-redux';
import { wherewolfSetAssignments } from '../../../../../redux/actions';

import { FormContainer, FormRow, FormSelector, FormLabel, FormButton } from '../../styledComponents/sharedComponents';

import roles from '../../data/roles.json';

function CheckRoleInAssignments(assignments, role) {
    return Object.values(assignments).some(item => item.name.eng === role);
}

function RoleAssignForm(props) {

    const AssignRole = (player, role) => {
        const assignments = props.assignments || {};
        assignments[player] = roles.find(r => r.name.eng === role);

        props.wherewolfSetAssignments(assignments);
    }

    const RandomizeRoles = () => {
        // TODO: double check that it doesnt't duplicate roles when selecting some then randomizing
        // TODO: check that 'Random' doesn't break everything
        const assignments = props.assignments || {};

        // Get unassigned roles and players
        const unassignedRoles = [...props.roles.Villagers, ...props.roles.Werewolves]
            .filter(role => !CheckRoleInAssignments(props.assignments, role));
        const unassignedPlayers = props.players.filter(player => !props.assignments[player] || props.assignments[player] === 'Random');

        // Randomly assign spare roles to unassigned players
        while (unassignedPlayers.length > 0) {
            const player = unassignedPlayers.pop();
            const role = unassignedRoles.splice(Math.floor(Math.random() * unassignedRoles.length), 1)[0];

            assignments[player] = roles.find(r => r.name.eng === role);
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
                        value={props.assignments?.[player]?.name?.eng || 'Random'}
                        onChange={e => AssignRole(player, e.target.value)}
                    >
                        <option value="Random">--Random--</option>
                        {props.roles.Villagers
                            .filter(role => role === props.assignments?.[player]?.name?.eng || !CheckRoleInAssignments(props.assignments, role))
                            .map((role, i) => (
                                <option key={i} value={role}>
                                    {role}
                                </option>
                            ))}
                        {props.roles.Werewolves
                            .filter(role => role === props.assignments?.[player]?.name?.eng || !CheckRoleInAssignments(props.assignments, role))
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
