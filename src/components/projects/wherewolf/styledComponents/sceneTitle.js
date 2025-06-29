import { styled } from '@mui/system';

const StyledTitle = styled('h3')(
    ({ theme }) => ({
        display: "flex",
        color: theme.palette.primary.contrast,
        justifyContent: "center",
        width: "100%",
    })
);

function SceneTitle(props) {
    return (
        <StyledTitle>
            {props.children}
        </StyledTitle>
    );
}

export default SceneTitle;