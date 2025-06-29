import { connect } from 'react-redux';
import { wherewolfSetPlayers } from '../../../../redux/actions';

import { FormContainer, FormRow, FormInput } from '../styledComponents/sharedComponents';

function RoleAssignForm(props) {

    return (
        <FormContainer>
            {props.players?.map((player, index) => (
                <FormRow key={index}>
                    <FormInput
                        type="text"
                        value={player}
                        readOnly
                    />
                </FormRow>
            ))}
        </FormContainer>
    );
}


function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetPlayers,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleAssignForm);
