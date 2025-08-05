import { useEffect } from 'react';
import { connect } from 'react-redux';
import { wherewolfSetCurrPhaseLog } from '../../../../../../../redux/actions';
import { splitText } from '../../../../../../common/textFunctions';
import { listToString } from '../../../../../../common/grammar';

function DailyStandup(props) {

    // Check if the previous night was the first
    const lastNightLog = props.logs.slice(-1)[0];
    const isFirstDay = lastNightLog.type === "First Night";

    // TODO: check win conditions

    const victims = lastNightLog.log.slice(-1)[0].kills;

    const actionText = isFirstDay ?
        `The first day begins` :
        victims.length > 0 ?
            `The day begins. Unfortunately, ${listToString(victims)} failed to show up.` :
            `Everybody show up, ready to investigate.`;

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
            {splitText(actionText + ` <i>(Players can open their eyes now)</i><br/><br/>`)}
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
