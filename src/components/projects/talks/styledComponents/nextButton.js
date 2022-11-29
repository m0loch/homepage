import { Button } from '@mui/material';
import { styled } from '@mui/system';

const NextButton  = styled(Button)(
    ({ theme }) => ({
        margin: "8px auto",
        fontSize: "3vmin",

        width: "80vw",
    })
);

export default NextButton;