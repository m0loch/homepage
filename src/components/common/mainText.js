import { styled } from '@mui/system';

const MainText = styled('section')(
    ({ theme }) => ({
        [theme.breakpoints.up('md')]: {
            padding: "30px",
            marginBottom: "30px",
            width: "60%",
        }
    })
);
    
export default MainText;