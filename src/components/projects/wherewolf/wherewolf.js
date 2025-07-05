import { connect } from 'react-redux';
import { wherewolfSetGamePhase } from '../../../redux/actions';

import SceneTitle from './styledComponents/sceneTitle';
import SceneSubTitle from './styledComponents/sceneSubTitle';
import SceneDescription from './styledComponents/sceneDescription';
import SceneContent from './styledComponents/sceneContent';
import NextButton from './styledComponents/nextButton';

import { 
    GetPhaseName,
    GetSubphaseName,
    GetSubphaseDescription,
    GetSubphaseContent,
    GetNextPhase,
    ValidatePhase
} from './wherewolfPhases';

function Wherewolf(props) {

    const gamephase = { 
        phase: props.phase ?? 0,
        subphase: props.subphase ?? 0
    };

    const phaseName = GetPhaseName(gamephase);
    const subphaseName = GetSubphaseName(gamephase);
    const subphaseDescription = GetSubphaseDescription(gamephase);
    const subphaseContent = GetSubphaseContent(gamephase);

    const PerformNext = () => {
        if (ValidatePhase(gamephase, props)) {
            props.wherewolfSetGamePhase(GetNextPhase(gamephase));
        }
    }

    return (
        <>
            <SceneTitle>{phaseName}</SceneTitle>

            <SceneContent>
                <SceneSubTitle>{subphaseName}</SceneSubTitle>
                {subphaseDescription ? <SceneDescription>{subphaseDescription}</SceneDescription> : null}
                {subphaseContent}
            </SceneContent>

            <NextButton variant="contained" onClick={() => PerformNext()}>Next</NextButton>
        </>
    );
}

function mapStateToProps(state) {
  return { ...state.wherewolf };
}

const mapDispatchToProps = {
  wherewolfSetGamePhase,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wherewolf);