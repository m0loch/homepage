import { connect } from 'react-redux';
import { wherewolfSetRoles } from '../../../../../redux/actions';
import InitialState from '../../../../../redux/initialState';

import { FormContainer, FormColumn, FormRow, FormSelector } from '../../styledComponents/sharedComponents';
import SceneSubTitle from '../../styledComponents/sceneSubTitle';

import roles from '../../data/roles.json';

// Game logic - 'count' properties will be dynamic based on the number of players
const factions = [
    { name: 'Villagers', type: 'Town', mandatory: 1 },
    { name: 'Werewolves', type: 'Werewolf', mandatory: 1 },
    { name: 'Extras', type: 'Town' },
];

function RoleSelectForm(props) {
    const SetRole = (faction, index, role) => {

        const roles = props.roles || InitialState.wherewolf.roles;
        roles[faction][index] = role;

        props.wherewolfSetRoles(roles);
    }

    return (
        <FormContainer>
            <FormRow>
            {factions.map((faction, index) => (
                <FormColumn key={index}>
                    <SceneSubTitle>{faction.name}</SceneSubTitle>
                    {props.roles[faction.name].map((x, i) =>
                        {
                            const selectedRole = (i < props.roles[faction.name]?.length) ? (props.roles[faction.name][i] ?? "Select") : "Select";

                            return (
                            <FormSelector key={i}
                                value={selectedRole}
                                onChange={e => SetRole(faction.name, i, e.target.value)}
                            >
                                {faction.mandatory && (i < faction.mandatory) ? (
                                        <option value={faction.mandatory[i]}>
                                            {props.roles[faction.name][i]}
                                        </option>
                                    ) : (
                                    <>
                                        {selectedRole === "Select" ? <option value="Select" disabled>--Select Role--</option> : null}
                                        {roles
                                            .filter(role => faction.type === "Werewolf" ? role.faction === "Werewolf" : role.faction !== "Werewolf")
                                            .filter(role => (role.name.eng === selectedRole) || !props.takenRoles.includes(role.name.eng))
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
