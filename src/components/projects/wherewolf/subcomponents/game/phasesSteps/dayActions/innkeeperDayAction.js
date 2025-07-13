import { useEffect } from 'react';
import { connect } from 'react-redux';
import { wherewolfSetCurrPhaseLog } from '../../../../../../../redux/actions';
import { splitText } from '../../../../../../common/textFunctions';

function InnkeeperDayAction(props) {

    // TODO: check whether the Innkeeper is alive
    // NB: if the Bard is added to the game, it needs to be integrated here as well

    const isInnkeeperPresent = props.roles.Villagers.includes('The Innkeeper');
    const nightLogs = props.logs.slice(-1)[0].log;
    const hasSeerSucceeded = nightLogs.find(log => log.type === "Seer")?.success;

    const actionText = isInnkeeperPresent && hasSeerSucceeded ?
        `Rumours has it that last night the Seer discovered something important<br/><br/>` :
        `There are no rumours from the tavern<br/><br/>`;

    useEffect(() => {
        props.wherewolfSetCurrPhaseLog({
            type: "Innkeeper",
            text: actionText
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [actionText]);

    return (
        <div>
            {splitText(actionText)}
        </div>
    );
}

function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetCurrPhaseLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(InnkeeperDayAction);
