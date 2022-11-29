import { styled } from '@mui/system';

const StyledCanvas = styled('div')(
    () => ({
        width: "100%",
        padding: "1.5vw",
    })
);

function SceneContent(props) {
    return (
        <StyledCanvas>
            {props.children}
        </StyledCanvas>
    );
}

export default SceneContent;