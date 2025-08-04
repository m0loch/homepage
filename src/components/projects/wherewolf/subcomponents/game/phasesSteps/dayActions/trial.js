import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { wherewolfSetCanPerformNext, wherewolfSetCurrPhaseLog } from '../../../../../../../redux/actions';
import { FormContainer, FormRow, FormLabel, FormButton } from '../../../../styledComponents/sharedComponents';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// TODO: Rosemouth and The Attorney still need to be implemented
// TODO: Add list of players that can and need to vote

function Trial(props) {
    const [votes, setVotes] = useState({});

    // Only run once when the component mounts to avoid skipping this phase
    useEffect(() => {
        props.wherewolfSetCanPerformNext(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fstVotes = props.currDayLog.find(log => log.type === "Votation")?.votes;

    if (votes.length === 1) {
      wherewolfSetCanPerformNext(true);
      return (
        <>
          <p>{fstVotes[0].player} has been voted unanimously and will then be burnt at the stake.</p>
        </>
      )
    } else {
      let groupedVotes = {};
      Object.entries(fstVotes).forEach(([player, count]) => {
        if (!groupedVotes[count]) groupedVotes[count] = [];
        groupedVotes[count].push(player);
      });

      const sortedGroupedVotes = Object.entries(groupedVotes).sort((a, b) => Number(b[0]) - Number(a[0]));

      // If there's a tie in the first place, those players will be enough to have a trial,
      // otherwise we will include the second most voted players in the tie
      // + security check (the first vote could end in an unanimous vote)
      const possibleEliminations = (sortedGroupedVotes[0][1].length > 1 || sortedGroupedVotes.length === 1) ?
        sortedGroupedVotes[0][1] : [...sortedGroupedVotes[0][1], ...sortedGroupedVotes[1][1]];

      const voters = props.players?.length - possibleEliminations.length;

      const SetVotes = (player, value) => {
        const playerVotes = votes[player] || 0;
        const newVotes = { ...votes, [player]: Math.max(playerVotes + value, 0) };
        setVotes(newVotes);

        const totalVotes = Object.values(newVotes).reduce((accumulator, votes) => accumulator + votes, 0);
        props.wherewolfSetCanPerformNext(totalVotes === voters);

        props.wherewolfSetCurrPhaseLog({
            type: "Trial",
            votes: newVotes,
        });
      }

      return (
        <FormContainer>
          <h3>Trial phase</h3>
          <br/>
          <p><i>A ballot vote will now be held to find who to eliminate between the following (alphabetically ordered) players:</i></p>
          {possibleEliminations
            .sort((a, b) => a.localeCompare(b))
            .map((player, index) => (
              <FormRow key={index} style={{ flexDirection: 'row' }}>
                <FormLabel
                    type="text"
                    value={player}
                    readOnly
                />
                <div style={{ width: "100px", flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <FormButton onClick={ () => SetVotes(player, 1) }>
                        <AddIcon fontSize="small" />
                    </FormButton>
                    <p>{votes[player] || 0}</p>
                    <FormButton onClick={ () => SetVotes(player, -1) }>
                        <RemoveIcon fontSize="small" />
                    </FormButton>
                </div>
              </FormRow>
          ))}
        </FormContainer>
      );
    }
}

function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetCurrPhaseLog,
  wherewolfSetCanPerformNext
};

export default connect(mapStateToProps, mapDispatchToProps)(Trial);
