import { connect } from 'react-redux';
import { wherewolfSetRoles } from '../../../../../redux/actions';

import { FormContainer } from '../../styledComponents/sharedComponents';
import { splitText } from '../../../../common/textFunctions';

import { GetPhaseStep } from '../../wherewolfPhases';

function NighttimeHandler(props) {

    return (
        <FormContainer>
            {splitText(`
            Temmporary text
            `)}
            <p>Nighttime handler</p>
            <p>Phase: {props.phase}</p>
            <p>Subphase: {props.subphase}</p>
            <p>Phase Step: {GetPhaseStep(props)}</p>
        </FormContainer>
    );
}

function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetRoles,
};

export default connect(mapStateToProps, mapDispatchToProps)(NighttimeHandler);
