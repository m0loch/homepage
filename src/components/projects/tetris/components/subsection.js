import React from 'react';
import { styled } from '@mui/system';

const StyledFieldset = styled('fieldset')(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        border: `solid ${theme.palette.primary.contrast}`,
        borderRadius: "5px",
    })
);

const StyledLegend = styled('legend')(
    () => ({
        padding: "0px 10px",
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