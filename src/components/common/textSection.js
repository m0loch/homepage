import { styled } from '@mui/system';

const TextSection = styled('section')(
    () => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "30px",
    })
);
    
export default TextSection;