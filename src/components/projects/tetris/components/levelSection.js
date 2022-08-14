import React from 'react';
import { styled } from '@mui/system';
import SubSection from './subsection';
import { LinearProgress } from '@mui/material';


const StyledSection = styled(SubSection)(
    () => ({
        flexDirection: "column",
        alignItems: "center",
    })
);

const StyledContent = styled('p')(
    () => ({
        width: "80%",
        textAlign: "right",
    })
);

const StyledProgress = styled(LinearProgress)(
    ({ theme }) => ({
        width: "100%",
        height: "15px",
        borderRadius: "5px",
        backgroundColor: theme.palette.progress.dark,
    })
)

function LevelSection(props) {
    return (
        <StyledSection title="Level">
            <StyledContent>{props.level}</StyledContent>
            <StyledProgress variant="determinate" value={props.progress} color="progress"/>
        </StyledSection>
    );
}

export default LevelSection;
