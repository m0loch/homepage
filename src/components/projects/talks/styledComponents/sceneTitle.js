import { styled } from '@mui/system';

const StyledTitle = styled('div')(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        paddingBottom: "1vw",
    })
);

function SceneTitle(props) {
    return (
        <StyledTitle>
            <h1>{props.children}</h1>
        </StyledTitle>
    );
}

export default SceneTitle;