import { connect } from 'react-redux';
import { wherewolfSetPlayers } from '../../../../redux/actions';

import { FormContainer, FormColumn, FormRow, FormSelector } from '../styledComponents/sharedComponents';
import SceneSubTitle from '../styledComponents/sceneSubTitle';

import roles from '../data/roles.json';

// Game logic
const factions = [
    { name: 'Villagers', type: 'Town', count: 5, mandatory: ["The Seer"] }, // this will be dynamic based on the number of players
    { name: 'Werewolves', type: 'Werewolf', count: 2, mandatory: ["The Pack Leader"] },
    { name: 'Extras', type: 'Town', count: 3 },
];

function RoleSelectForm(props) {
    return (
        <FormContainer>
            <FormRow>
            {factions.map((faction, index) => (
                <FormColumn key={index}>
                    <SceneSubTitle>{faction.name}</SceneSubTitle>
                    {[...Array(faction.count)].map((x, i) =>
                        <FormSelector key={i}>
                            {faction.mandatory && (i < faction.mandatory.length) ? (
                                    <option value={faction.mandatory[i]}>
                                        {faction.mandatory[i]}
                                    </option>
                                ) : (
                                <>
                                    <option value={null} disabled>Select Role</option>
                                    {roles.filter(role => role.faction === faction.type)
                                        .map((role, j) => (
                                        <option key={j} value={role.name.eng}>
                                            {role.name.eng}
                                        </option>
                                    ))}
                                </>
                            )}
                        </FormSelector>
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
  wherewolfSetPlayers,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleSelectForm);
