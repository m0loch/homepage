import { styled } from '@mui/system';

const TextSection = styled('section')(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "30px",    
    })
);
    
export default TextSection;