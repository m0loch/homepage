import { useEffect } from 'react';
import { connect } from 'react-redux';
import { wherewolfSetCurrPhaseLog } from '../../../../../../../redux/actions';

function NightRecap(props) {

    const isFirstNight = props.logs.length < 2;

    // TODO: The young wolf could trigger a second kill
    const targets = [props.currDayLog.find(log => log.type === "Wherewolves")?.target].filter(item => !!item);

    // TODO: apply filter for checking these effects on:
    // - witch
    // - healer
    // - madman
    // - romeo
    // - hermit
    // - hunter
    // - traitor
    // - grandmother
    const kills = targets;

    // TODO: if the traitor was among the targets, message the facts that he should recognize the wolves

    const msg = kills.length > 0
        ? `The wolves kill ${kills.join(", ")}.`
        : `The night ends without anyone falling victim to the wolves.`;

    useEffect(() => {
        props.wherewolfSetCurrPhaseLog({
            type: "Night Recap",
            text: msg
        },
        kills);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

    return (
        <>
            {
            isFirstNight ? null :
            <>
              <p>{msg}</p>
              <br/>
              </>
            }
            <p>And thus, the night ends...</p><br/>
        </>
    );
}

function mapStateToProps(state) {
    return { ...state.wherewolf };
}

const mapDispatchToProps = {
    wherewolfSetCurrPhaseLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(NightRecap);
