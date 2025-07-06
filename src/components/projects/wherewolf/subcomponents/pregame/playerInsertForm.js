import { useState } from 'react';
import { connect } from 'react-redux';
import { wherewolfSetPlayers } from '../../../../../redux/actions';

import { FormInput, FormButton, FormRow, FormContainer } from '../../styledComponents/sharedComponents';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function PlayerInsertForm(props) {
    const [newPlayerName, setNewPlayerName] = useState('');

    const AddPlayer = () => {
        if (newPlayerName.trim() !== '') {
            const newPlayers = props.players || [];
            newPlayers.push(newPlayerName);
            props.wherewolfSetPlayers(newPlayers);
            setNewPlayerName('');
        }
    }

    const RemovePlayer = (index) => {
        const newPlayers = props.players.filter((_, i) => i !== index);
        props.wherewolfSetPlayers(newPlayers);
    }

    return (
        <FormContainer>
            {props.players?.map((player, index) => (
                <FormRow key={index}>
                    <FormInput
                        type="text"
                        value={player}
                        readOnly
                    />
                    <FormButton onClick={ () => RemovePlayer(index) }>
                        <RemoveIcon fontSize="small" />
                    </FormButton>
                    <br/>
                </FormRow>
            ))}

            {/* Insert new row */}
            <FormRow>
                <FormInput
                    type="text"
                    value={newPlayerName}
                    onChange={(e) => setNewPlayerName(e.target.value)}
                    placeholder='Enter player name'
                />
                <FormButton onClick={ AddPlayer }><AddIcon fontSize="small" /></FormButton>
            </FormRow>
        </FormContainer>
    );
}

function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetPlayers,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInsertForm);
