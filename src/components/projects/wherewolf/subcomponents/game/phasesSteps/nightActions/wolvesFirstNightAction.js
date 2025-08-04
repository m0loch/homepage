import { useEffect } from 'react';
import { connect } from 'react-redux';
import { wherewolfSetCurrPhaseLog } from '../../../../../../../redux/actions';
import { splitText } from '../../../../../../common/textFunctions';

function WolvesFirstNightAction(props) {

  const text = `<p>Wolves open their eyes and recognize each other.</p>
    <p>The traitor - if present, raises his hand in order to be identified.</p>
    <br/>`;


  useEffect(() => {
    props.wherewolfSetCurrPhaseLog({
      type: "Wherewolves",
      text: text
    });
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [text]);

  return (
    <>
      <div>
        {splitText(text)}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetCurrPhaseLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(WolvesFirstNightAction);
