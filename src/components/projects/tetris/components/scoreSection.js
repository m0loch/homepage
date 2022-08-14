import React from 'react';
import { styled } from '@mui/system';
import SubSection from './subsection';

const StyledContent = styled('p')(
    () => ({
        width: "80%",
        textAlign: "right",
    })
);

function ScoreSection(props) {
    return (
        <SubSection title="Score">
            <StyledContent>
                {props.children}
            </StyledContent>
        </SubSection>
    );
}

export default ScoreSection;
