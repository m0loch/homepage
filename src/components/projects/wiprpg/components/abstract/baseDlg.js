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
    shouldForwardProp: (prop) => !['mode', 'fullScreen'].includes(prop),
})(
    ({ theme, mode, fullScreen }) => {

        const appearance = { opacity: 0 };
        if (mode === 'active') {
            appearance.opacity = 1;
            appearance.animation = `${appearAnimation} .5s ease-in 0s 1`;
        } else if (mode === 'hiding') {
            appearance.animation = `${disappearAnimation} .5s ease-in 0s 1`;
        }

        return {
            position: "absolute",
            top: fullScreen ? "5%" : "17.5%",
            left: fullScreen ? "5%" : "17.5%",
            zIndex: 10,
            height: fullScreen ? "90%" : "65%",
            width: fullScreen ? "90%" : "65%",
            backgroundColor: theme.palette.background.menu,
            border: "5px ridge",
            borderColor: theme.palette.primary.light,
            borderRadius: "5px",

            display: "flex",
            flexDirection: fullScreen ? "column" : "inherit",
            alignItems: "center",
            justifyContent: "center",

            ...appearance,
        }
    }
);

export default function BaseDlg(props) {
    return (
        <ClickBlocker mode={props.mode}>
            <StyledPanel mode={props.mode} fullScreen={props.fullScreen} onClick={props.onClick}>
                {props.children}
            </StyledPanel>
        </ClickBlocker>
    );
}
