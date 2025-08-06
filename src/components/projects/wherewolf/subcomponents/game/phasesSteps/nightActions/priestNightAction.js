import { useEffect } from 'react';
import { connect } from 'react-redux';
import { wherewolfSetCurrPhaseLog } from '../../../../../../../redux/actions';
import { splitText } from '../../../../../../common/textFunctions';

function PriestNightAction(props) {

    const isPriestPresent = props.roles.Villagers.includes('The Priest');
    const sinnerIdx = Object.values(props.assignments).findIndex(item => item === 'The Sinner');
    const isRosemouthPresent = props.roles.Villagers.includes('Rosemouth');

    const priestText = isPriestPresent ?
        `The Priest discovered that:
        <ul>
        <li>${sinnerIdx === -1 ? "The Sinner is not present in the game" : `${Object.keys(props.assignments).at(sinnerIdx)} is The Sinner` }</li>
        <li>Rosemouth is ${isRosemouthPresent ? "present" : "not present"} in the game</li>
        <ul>` :
        `There is no Priest in this game<br/><br/>`;

    useEffect(() => {
        props.wherewolfSetCurrPhaseLog({
            type: "Priest",
            text: priestText
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [priestText]);

    return (
        <div>
            {splitText(priestText)}
        </div>
    );
}

function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetCurrPhaseLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(PriestNightAction);
