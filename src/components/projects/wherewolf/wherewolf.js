import { useEffect, useRef } from 'react';
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
    const divRefForScroll = useRef(null);

    // TODO: this is a start, but we can do better
    useEffect(() => {
        divRefForScroll.current.scrollIntoView({ behavior: 'smooth' });
    }, []);

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

            <NextButton
                variant="contained"
                onClick={() => PerformNext()}
                ref={divRefForScroll}
                disabled={!props.canPerformNext}
            >
                Next
            </NextButton>
            <br/><br/>
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