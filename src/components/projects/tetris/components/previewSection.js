import React from 'react';
import { styled } from '@mui/system';
import SubSection from './subsection';

const StyledSection = styled(SubSection)(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        border: `solid ${theme.palette.primary.contrast}`,
        borderRadius: "5px",
        height: `calc(4 * ${theme.components.tetris.cellSize})`,

        /* removes the gap between lines / columns */
        justifyContent: "center",
        alignContent: "center",
    })
);

function PreviewSection(props) {
    return (
        <StyledSection title="Next">
            {props.children}
        </StyledSection>
    );
}

export default PreviewSection;
