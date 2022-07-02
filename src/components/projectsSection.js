import Square from './square';
import PopupSquare from './popupSquare';
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
    () => ({
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-start",
        margin: "auto",
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