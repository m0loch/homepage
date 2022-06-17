import { styled, keyframes } from '@mui/system';

const appearAnimation = keyframes`
    0%   { opacity: 0 },
    100% { opacity: 1 },
`;

const StyledPanel = styled('div')(
    ({ theme }) => ({
        position: "fixed",
        top: "35%",
        left: "35%",
        zIndex: 1,
        height: "30%",
        width: "30%",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "5px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        opacity: 0,
        animation: `${appearAnimation} .5s ease-in .5s 1 normal forwards`,

        [theme.breakpoints.down('md')]: {
            width: "80%",
            height: "16%",
            top: "42%",
            left: "10%",
        }
    })
);

export default function WinScreen(props) {
    const msg = props.msg ?? "VICTORY";

    return (
        <StyledPanel onClick={props.onClick}>
            <h1 style={{ maxWidth: "80%", textAlign: "center" }}>{msg}</h1>
        </StyledPanel>
    );
}
