import { styled } from '@mui/system';
import { splitText } from '../../../common/textFunctions';

const StyledText = styled('div')(
    () => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingBottom: "1vw",
    })
);

function SceneDescription(props) {
    return (
        <StyledText>
            {splitText(props.children)}
        </StyledText>
    );
}

export default SceneDescription;