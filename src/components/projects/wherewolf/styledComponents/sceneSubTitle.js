import { styled } from '@mui/system';

const StyledTitle = styled('h3')(
    () => ({
        display: "flex",
        justifyContent: "center",
        width: "100%",
    })
);

function SceneSubTitle(props) {
    return (
        <StyledTitle>
            {props.children}
        </StyledTitle>
    );
}

export default SceneSubTitle;