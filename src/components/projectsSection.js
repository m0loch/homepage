import React from 'react';
import Square from './projectsSection/square';
import PopupSquare from './projectsSection/popup';
import { styled } from '@mui/system';
import { useState } from 'react';

const StyledSection = styled('div')(
    () => ({
        display: "flex",
        position: "relative",
        flexDirection: "column",
        flexGrow: 1,
    })
);

const StyledSquares = styled('section')(
    ({ theme }) => ({
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-start",
        margin: "auto",
        "&>*:nth-last-child(1)": {
            backgroundColor: theme.palette.primary.main,
        },
        "&>*:nth-last-child(1):nth-child(odd)": {
            [theme.breakpoints.up('md')]: {
                width: "100%",
            }
        }
    })
);

function ProjectsSection(props) {
    const [selected, SetSelected] = useState(null);

    return (
        <StyledSection>
            <PopupSquare
                selection={selected}
                onClick={() => SetSelected(null)}
            />
            <StyledSquares>
            {
                props.games?.map(item =>
                    <Square
                        {...item}
                        onClick={() => SetSelected(item)}
                    />
                )
            }
            </StyledSquares>
        </StyledSection>
    );
}

export default ProjectsSection;