import { styled } from '@mui/system';

const PixiContainer = styled('div')(
    () => ({
        position: "relative",
        margin: "auto",
        width: "100%",
        height: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
    })
);

export default PixiContainer;