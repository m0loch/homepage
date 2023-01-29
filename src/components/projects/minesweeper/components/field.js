import { styled } from '@mui/system';

const Field = styled('div')(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        borderRadius: "5px",
        backgroundColor: theme.palette.primary.main,
        touchAction: "pan-down",
    })
);

export default Field;