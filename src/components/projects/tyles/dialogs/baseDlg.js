import { styled, keyframes } from '@mui/system';
import { Button, Card, CardContent } from "@mui/material";

const appearAnimation = keyframes`
    0%   { opacity: 0 },
    100% { opacity: 1 },
`;

export const BaseDlgPanel = styled(Card)(
    ({ theme, animationSpeed = .5 }) => ({
        position: "fixed",
        top: "25%",
        left: "30%",
        zIndex: 10,
        height: "50%",
        width: "40%",
        backgroundColor: theme.palette.primary.main,
        border: "5px ridge",
        borderColor: theme.palette.primary.light,
        borderRadius: "5px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",

        opacity: 0,
        animation: `${appearAnimation} ${animationSpeed}s ease-in ${animationSpeed}s 1 normal forwards`,

        [theme.breakpoints.down('md')]: {
            width: "80%",
            height: "16%",
            top: "42%",
            left: "10%",
        }
    })
);

export const DlgBackground = styled('div')(
    ({ theme }) => ({
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 9,
        overflow: "hidden",
        backgroundColor: theme.palette.background.opaque,
    })
);

export const DlgContent = styled(CardContent)(
    () => ({
        display: "flex",
        flexDirection: "column",
        margin: "0",
        flexGrow: 1,
        overflowY: "auto",
    })
)

export const DlgActions = styled('div')(
    () => ({
        display: "flex",
        width: "80%",
        justifyContent: "space-around",
    })
);

export const ActionButton = styled(Button)(
    ({ theme }) => ({
        backgroundColor: theme.palette.background.card,
        color: theme.palette.primary.contrast,
        '&:hover': {
            backgroundColor: theme.palette.background.opaque,
        }
    })
);