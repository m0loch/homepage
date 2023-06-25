import React from 'react';
import { Button } from "@mui/material";
import { styled, keyframes } from '@mui/system';

const appearAnimation = keyframes`
    0%   { opacity: 0 },
    100% { opacity: 1 },
`;

const disappearAnimation = keyframes`
0%   { opacity: 1 },
100% { opacity: 0 },
`;

const ClickBlocker = styled('div', {
    shouldForwardProp: (prop) => prop !== 'mode'
})(
    ({ mode }) => ({
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9,
        height: "100%",
        width: "100%",

        // Make panel clickable or not, based on the current state
        pointerEvents: mode === 'active' ? 'initial' : 'none',
    })
);

const StyledPanel = styled('div', {
    shouldForwardProp: (prop) => prop !== 'mode'
})(
    ({ theme, mode }) => {

        const appearance = { opacity: 0 };
        if (mode === 'active') {
            appearance.opacity = 1;
            appearance.animation = `${appearAnimation} .5s ease-in 0s 1`;
        } else if (mode === 'hiding') {
            appearance.animation = `${disappearAnimation} .5s ease-in 0s 1`;
        }

        return {
            position: "absolute",
            top: "17.5%",
            left: "17.5%",
            zIndex: 10,
            height: "65%",
            width: "65%",
            backgroundColor: theme.palette.background.menu,
            border: "5px ridge",
            borderColor: theme.palette.primary.light,
            borderRadius: "5px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            ...appearance,
        }
    }
);

const StyledMenuButton = styled(Button)(
    () => ({
        margin: "8px auto",
        fontSize: "3vmin",
    })
);

export function MenuButton(props) {
    return (
        <StyledMenuButton
            variant="contained"
            size="large"
            {...props}
        >
            {props.children}
        </StyledMenuButton>
    );
}

export default function RpgMenu(props) {
    const mode = props.state.state === props.activeState ? 'active'
        : (props.state.prevState === props.activeState ? 'hiding'
            : 'hidden');

    return (
        <ClickBlocker mode={mode}>
            <StyledPanel mode={mode} onClick={props.onClick}>
                {props.children}
            </StyledPanel>
        </ClickBlocker>
    );
}
