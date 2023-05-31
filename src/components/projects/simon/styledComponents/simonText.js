import { styled } from '@mui/system';

const SimonText = styled('p')(
    ({ theme }) => ({
        fontSize: "100px",
        [theme.breakpoints.down('lg')]: {
            fontSize: "8vw"
        }
    })
)

export default SimonText;