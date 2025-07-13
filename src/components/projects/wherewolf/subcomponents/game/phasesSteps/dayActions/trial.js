import { connect } from 'react-redux';
import { wherewolfSetCanPerformNext, wherewolfSetCurrPhaseLog } from '../../../../../../../redux/actions';

function Trial(props) {

    const actionText = "TODO: Trial phase";

    return (
        <p>{actionText}</p>
    );
}

function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetCurrPhaseLog,
  wherewolfSetCanPerformNext
};

export default connect(mapStateToProps, mapDispatchToProps)(Trial);
