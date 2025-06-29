import { styled } from '@mui/system';

const StyledCanvas = styled('div')(
    () => ({
        width: "100%",
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