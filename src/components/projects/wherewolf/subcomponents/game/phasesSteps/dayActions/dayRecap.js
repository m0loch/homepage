import { useEffect } from 'react';
import { connect } from 'react-redux';
import { wherewolfSetCurrPhaseLog } from '../../../../../../../redux/actions';

function DayRecap(props) {

    // Retrieve the votecount from the last votation
    // Adjust votes to account for roles that tampered with the votecount
    // If two players have the same amount of votes, no one dies

    const fstVotes = props.currDayLog.find(log => log.type === "Trial")?.votes;

    let groupedVotes = {};
    Object.entries(fstVotes).forEach(([player, count]) => {
        if (!groupedVotes[count]) groupedVotes[count] = [];
        groupedVotes[count].push(player);
    });

    const sortedGroupedVotes = Object.entries(groupedVotes).sort((a, b) => Number(b[0]) - Number(a[0]));

    const mostVoted = sortedGroupedVotes[0][1];

    // TODO: jester death check and effects
    const killPerformed = mostVoted.length === 1;

    const msg = killPerformed
        ? `The angry mob gathers around ${mostVoted[0]}, who will be burned at the stake.`
        : `No one was sacrificed, as there was a tie between the following players: ${mostVoted.join(', ')}.`;

    useEffect(() => {
        props.wherewolfSetCurrPhaseLog({
            type: "Day Recap",
            text: msg,
            kills: killPerformed ? [mostVoted[0]] : [],
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

    return (
        <>
            <p>{msg}</p>
            <br/>
            <p>The day is over, everybody close their eyes...</p><br/>
        </>
    );
}

function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetCurrPhaseLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(DayRecap);
