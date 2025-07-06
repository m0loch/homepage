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
    const phaseName = GetPhaseName(props);
    const subphaseName = GetSubphaseName(props);
    const subphaseDescription = GetSubphaseDescription(props);
    const subphaseContent = GetSubphaseContent(props);

    const PerformNext = () => {
        if (ValidatePhase(props)) {
            props.wherewolfSetGamePhase(GetNextPhase(props));
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