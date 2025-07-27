import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { wherewolfSetCanPerformNext, wherewolfSetCurrPhaseLog } from '../../../../../../../redux/actions';
import { FormContainer, FormRow, FormLabel, FormButton } from '../../../../styledComponents/sharedComponents';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Votation(props) {
    const [votes, setVotes] = useState({});

    const playerNumber = props.players?.length || 0;

    // Only run once when the component mounts to avoid skipping this phase
    useEffect(() => {
        props.wherewolfSetCanPerformNext(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const SetVotes = (player, value) => {
        const playerVotes = votes[player] || 0;
        const newVotes = { ...votes, [player]: Math.max(playerVotes + value, 0) };
        setVotes(newVotes);

        const totalVotes = Object.values(newVotes).reduce((accumulator, votes) => accumulator + votes, 0);
        props.wherewolfSetCanPerformNext(totalVotes === playerNumber);

        props.wherewolfSetCurrPhaseLog({
            type: "Votation",
            votes: newVotes,
        });
    }

    return (
        <FormContainer>
            <p>Players vote to eliminate a player.</p>
            <br/>
            <h3 style={{ alignSelf: "baseline" }}>Reminder:</h3>
            <ul>
                <li>each player needs to express their vote;</li>
                <li>players can vote for themselves;</li>
                <li>players can vote only once;</li>
                <li>the most voted players will get a chance to defend themselves before the second round of voting;</li>
                <li>some roles will tamper with the final numbers.</li>
            </ul>
            {props.players?.map((player, index) => (
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

function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetCurrPhaseLog,
  wherewolfSetCanPerformNext
};

export default connect(mapStateToProps, mapDispatchToProps)(Votation);
