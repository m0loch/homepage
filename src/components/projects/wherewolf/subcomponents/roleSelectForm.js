import { connect, useSelector } from 'react-redux';
import { wherewolfSetRoles } from '../../../../redux/actions';
import InitialState from '../../../../redux/initialState';

import { FormContainer, FormColumn, FormRow, FormSelector } from '../styledComponents/sharedComponents';
import SceneSubTitle from '../styledComponents/sceneSubTitle';

import roles from '../data/roles.json';

// Game logic - 'count' properties will be dynamic based on the number of players
const factions = [
    { name: 'Villagers', type: 'Town', count: 5, mandatory: 1 },
    { name: 'Werewolves', type: 'Werewolf', count: 2, mandatory: 1 },
    { name: 'Extras', type: 'Town', count: 3 },
];

// NICE TO HAVE: the disabled option should have a different color or style

function RoleSelectForm(props) {
    const SetRole = (faction, index, role) => {

        const roles = props.roles || InitialState.wherewolf.roles;
        roles[faction][index] = role;

        props.wherewolfSetRoles(roles);
    }

    // Flatten the roles to a simple array to check for duplicates
    // Uses useSelector to access the Redux state
    const takenRoles = useSelector(state =>
        Object.keys(state.wherewolf.roles).map(key => state.wherewolf.roles[key].flat()).flat().filter(role => role !== null)
    );

    return (
        <FormContainer>
            <FormRow>
            {factions.map((faction, index) => (
                <FormColumn key={index}>
                    <SceneSubTitle>{faction.name}</SceneSubTitle>
                    {[...Array(faction.count)].map((x, i) =>
                        {
                            const selectedRole = (i < props.roles[faction.name]?.length) ? (props.roles[faction.name][i] ?? "Select") : "Select";
                            return (
                            <FormSelector key={i}
                                defaultValue={selectedRole}
                                onChange={e => SetRole(faction.name, i, e.target.value)}
                            >
                                {faction.mandatory && (i < faction.mandatory) ? (
                                        <option value={faction.mandatory[i]}>
                                            {props.roles[faction.name][i]}
                                        </option>
                                    ) : (
                                    <>
                                        <option value="Select" disabled>--Select Role--</option>
                                        {roles.filter(role => role.faction === faction.type)
                                            .filter(role => !takenRoles.includes(role.name.eng) || role.name.eng === selectedRole)
                                            .map((role, j) => (
                                            <option key={j} value={role.name.eng}>
                                                {role.name.eng}
                                            </option>
                                        ))}
                                    </>
                                )}
                            </FormSelector>
                            );
                        }
                    )}
                </FormColumn>
            ))}
            </FormRow>
        </FormContainer>
    );
}

function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetRoles,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleSelectForm);
