import { useEffect } from 'react';
import { connect } from 'react-redux';
import { FormRow, FormSelector } from '../../../../styledComponents/sharedComponents';
import { wherewolfSetCurrPhaseLog } from '../../../../../../../redux/actions';

function WolvesNightAction(props) {

    // There must still be wolves, but we'll check anyway.

    // Wolves also have a rank, which goes like this:
    // 1. The Pack Leader
    // 2. The Rejected Wolf
    // 3. The Wolf of the Pack
    // 4. The Peasant (turned Wolf)
    // 5. The Young Wolf

    // The highest rank Wolf is the one that chooses the target for the attack.
    // If the highest rank wolf is The Young Wolf, there will be no attack.

    // The Lone Wolf - if we ever implement it - is not part of the pack and will act under its own rules.

    const wolves = props.survivors
        .map(player => { return { player, role: props.assignments[player] } })
        .filter(player => player.role.faction === 'Werewolf')
        .sort((a, b) => a.role.rank - b.role.rank);

    const highestRankedWolf = wolves[0];

    // If the Wolves can't kill, the log must be set to empty
    useEffect(() => {
        if (highestRankedWolf?.role.rank > 4) {
            props.wherewolfSetCurrPhaseLog({
                type: "Wherewolves",
                text: `The strongest Wolf (${highestRankedWolf.player}) is ${highestRankedWolf.role.name.eng} and can not perform a kill<br/><br/>`
            });
        }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

    const SelectTarget = player => {

        props.wherewolfSetCurrPhaseLog({
            type: "Wherewolves",
            target: player,
            text: `The strongest Wolf (${highestRankedWolf.player}) chooses ${player} as the next victim of the pack.<br/><br/>`
        });
    }

    return highestRankedWolf?.role.rank > 4 ? (
            <><p>{`The strongest Wolf (${highestRankedWolf?.player}) is ${highestRankedWolf?.role.name.eng} and can not perform a kill`}</p><br/></>
        ) : (
            <>
                <p>{`The strongest Wolf (${highestRankedWolf?.player}) chooses a victim`}</p>
                <FormRow style={{ justifyContent: 'center' }} >
                    <FormSelector
                        value={props.currPhaseLog?.target || 'default'}
                        onChange={e => SelectTarget(e.target.value)}
                    >
                        <option value="default" disabled>Select one</option>
                        {props.survivors.map((player, index) => <option key={index} value={player}>{player}</option>)}
                    </FormSelector>
                </FormRow>
            </>
        );
}

function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetCurrPhaseLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(WolvesNightAction);
