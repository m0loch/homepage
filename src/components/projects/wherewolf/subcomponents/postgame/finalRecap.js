import { connect } from 'react-redux';
import { splitText } from '../../../../common/textFunctions';
import { FormContainer, FormColumn } from '../../styledComponents/sharedComponents';

function FinalRecap(props) {

    let recapText = "Recap:<br/><br/>";

    recapText += `The winners are: ${props.winners.join(", ")}.<br/><br/>`;

    recapText += `The survivors were: ${props.survivors.join(", ")}.<br/><br/>`;

    // TODO: Recap roles
    // TODO: Recap when did players die and the cause of death
    // TODO: For each player, add when and how they used their powers

    return (
        <FormContainer>
            <FormColumn style={{ alignSelf: 'center' }}>
                <div>
                    {splitText(recapText)}
                </div>
            </FormColumn>
        </FormContainer>
    );
}

function mapStateToProps(state) {
    return { ...state.wherewolf };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalRecap);
