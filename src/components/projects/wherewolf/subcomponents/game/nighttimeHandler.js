import { connect } from 'react-redux';
import { wherewolfSetCurrPhaseLog } from '../../../../../redux/actions';

import { FormContainer, FormColumn } from '../../styledComponents/sharedComponents';
import { GetPhaseStep } from '../../wherewolfPhases';

function NighttimeHandler(props) {

    return (
        <FormContainer>
            <FormColumn style={{ alignSelf: 'center' }}>
                {props.currDayLog.map((action, index) => (
                    <div key={index}>
                        <p>
                            {action.text}
                        </p>
                        <br/>
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

export default connect(mapStateToProps, mapDispatchToProps)(NighttimeHandler);
