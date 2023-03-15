import { styled, keyframes } from '@mui/system';
import LongTappableBtn from './longTappableBtn';

const colors = [
    { main: "#FF0000", shadow: "#2E2E68E6" },
    { main: "#00FF00", shadow: "#682E2EE6" },
    { main: "#0000FF", shadow: "#2E2E68E6" },
    { main: "#FFFF00", shadow: "#68682EE6" },
    { main: "#303030", shadow: "#000000E6" },
    { main: "#EFEFEF", shadow: "#BFBCC0E6", shadowCorrection: "#FFFFFFEF" },
    { main: "#FF00FF", shadow: "#682E68E6" },
    { main: "#00FFFF", shadow: "#2E6868E6" },
]
const empty = { main: "#FFFFFF33", shadow: "#CECECE4D", shadowCorrection: "#00000000" }

const appearAnimation = keyframes`
    0%   { opacity: 0 },
    100% { opacity: 1 },
`;

const Orb = styled(LongTappableBtn,
    { shouldForwardProp: (prop) => prop !== 'value' },
    { shouldForwardProp: (prop) => prop !== 'hint' },
    { shouldForwardProp: (props) => props !== 'appearanceDelay' },
)(
    ({ theme, value, hint, appearanceDelay }) => {
        let valueColor;
        if (value === undefined) {
            valueColor = empty;
        } else {
            valueColor = colors[value];
        }
        return ({
            opacity: appearanceDelay ? 0 : 1,
            animation: `${appearAnimation} .5s ease-in ${appearanceDelay}s 1 normal forwards`,

            width: hint ? "12px" : "60px",
            height: hint ? "12px" :  "60px",
            borderRadius: "50%",
            backgroundColor: valueColor.main,
            boxShadow:
                `inset 4px 4px 4px ${valueColor.shadowCorrection ?? valueColor.main}, inset -4px -4px 4px ${valueColor.shadow}`,
            zIndex: 1,
            margin: "2px",
            [theme.breakpoints.down('md')]: {
                width: hint ? "6px" :  "30px",
                height: hint ? "6px" :  "30px",
            }
        })
    }
);

export default Orb;