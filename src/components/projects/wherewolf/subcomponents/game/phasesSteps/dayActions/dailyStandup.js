import { useEffect } from 'react';
import { connect } from 'react-redux';
import { wherewolfSetCurrPhaseLog } from '../../../../../../../redux/actions';
import { splitText } from '../../../../../../common/textFunctions';

function DailyStandup(props) {

    // Check if the previous night was the first
    const isFirstDay = props.logs.slice(-1)[0].type === "First Night";

    // TODO: check if somebody died during the night (could be zero in case of protections, or even two if the Young Wolf died)
    // TODO: handle a list of deaths per day and a structure for survivors
    // TODO: check win conditions

    const actionText = isFirstDay ?
        `The first day begins` :
        `Everybody shows up`;

    useEffect(() => {
        props.wherewolfSetCurrPhaseLog({
            type: "Standup",
            text: actionText + "<br/><br/>"
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [actionText]);

    return (
        <div>
            {splitText(actionText + ` <i>(players can open their eyes)</i><br/><br/>`)}
        </div>
    );
}

function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetCurrPhaseLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyStandup);
