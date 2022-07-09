import React from 'react';
import { Grid } from "@mui/material";
import { styled } from '@mui/system';

const StyledField = styled(Grid)(
    ({ theme }) => ({
        margin: "8px auto",
        borderRadius: "5px",
        backgroundColor: theme.palette.primary.main,
        touchAction: "pan-down",
        width: "40vw",

        [theme.breakpoints.down('md')]: {
            width: "80vw",
        }
    })
);

export default StyledField;