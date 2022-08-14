import React from 'react';
import { styled } from '@mui/system';

const StyledFieldset = styled('fieldset')(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        border: `solid ${theme.palette.primary.contrast}`,
        borderRadius: "5px",
        maxWidth: "100%",
    })
);

const StyledLegend = styled('legend')(
    ({ theme }) => ({
        padding: "0px 10px",
        [theme.breakpoints.down('md')]: {
            fontSize: "4vmin",
        }
    })
)

function Subsection(props) {
    return (
        <StyledFieldset {...props} >
            <StyledLegend>{props.title}</StyledLegend>
            {props.children}
        </StyledFieldset>
    );
}

export default Subsection;