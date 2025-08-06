import { connect } from 'react-redux';
import { splitText } from '../../../../common/textFunctions';
import { wherewolfSetCurrPhaseLog } from '../../../../../redux/actions';

import { FormContainer, FormColumn } from '../../styledComponents/sharedComponents';
import { GetPhaseStep } from '../../wherewolfPhases';

import { listToString } from '../../../../common/grammar';

function PhaseHandler(props) {

    return (
        <FormContainer>
            <FormColumn style={{ alignSelf: 'center' }}>
                <p><i>
                    {props.survivors ? `The survivors are ${props.survivors.length}: ${listToString(props.survivors)}` : 'No survivors'}
                </i></p>
                <br/>
                {props.currDayLog.map((action, index) => (
                    <div key={index}>
                        {splitText(action.text)}
                    </div>
                ))}
                {GetPhaseStep(props)}
            </FormColumn>
        </FormContainer>
    );
}

function mapStateToProps(state) {
    return { ...state.wherewolf };
}

const mapDispatchToProps = {
    wherewolfSetCurrPhaseLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhaseHandler);
