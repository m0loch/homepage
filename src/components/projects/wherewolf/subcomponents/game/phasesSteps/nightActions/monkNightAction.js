import { useEffect } from 'react';
import { connect } from 'react-redux';
import { wherewolfSetCurrPhaseLog } from '../../../../../../../redux/actions';
import { splitText } from '../../../../../../common/textFunctions';

function MonkNightAction(props) {

    const isMonkPresent = props.roles.Villagers.includes('The Monk');

    // NB: the .join('') clause is used to avoid unwanted commas in the resulting HTML
    const monkText = isMonkPresent ?
        `The Monk discovered that the following roles are not in the game:
        <ul>
            ${props.roles.Extras.map(item => `<li>${item}</li>`).join('')}
        </ul>
        ` :
        "There is no Monk in this game";

    useEffect(() => {
        props.wherewolfSetCurrPhaseLog({
            type: "Monk",
            text: monkText
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [monkText]);

    return (
        <>
            {splitText(monkText)}
        </>
    );
}

function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetCurrPhaseLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(MonkNightAction);
