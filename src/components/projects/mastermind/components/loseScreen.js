import React from 'react';
import { styled, keyframes } from '@mui/system';
import Orb from './orb';

const appearAnimation = keyframes`
    0%   { opacity: 0 },
    100% { opacity: 1 },
`;

const delayedAppear = (delay) => {
    return `${appearAnimation} .5s ease-in ${delay}s 1 normal forwards`;
}

const StyledPanel = styled('div')(
    ({ theme }) => ({
        position: "fixed",
        top: "35%",
        left: "35%",
        zIndex: 10,
        height: "30%",
        width: "30%",
        backgroundColor: theme.palette.primary.main,
        border: "5px ridge",
        borderColor: theme.palette.primary.light,
        borderRadius: "5px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        opacity: 0,
        animation: delayedAppear(.5),

        [theme.breakpoints.down('md')]: {
            width: "80%",
            height: "16%",
            top: "42%",
            left: "10%",
        }
    })
);

const StyledOk = styled('h3')(
    ({ theme }) => ({
        maxWidth: "80%",
        textAlign: "center",
        opacity: 0,
        animation: delayedAppear(3.5),
    })
);

export default function LoseScreen(props) {
    return (
        <StyledPanel>
            <h1 style={{ maxWidth: "80%", textAlign: "center" }}>{"You lost :("}</h1>
            <div style={{ display: "flex", marginTop: "10px" }}>
                {props.solution.map((tile, y) =>
                    <Orb
                        key={y}
                        value={tile}
                        appearanceDelay={1.5 + (0.5 * y)}
                    />
                )}
            </div>
            <StyledOk
                onClick={props.onClick}
            >
                {"Play again?"}
            </StyledOk>
        </StyledPanel>
    );
}
