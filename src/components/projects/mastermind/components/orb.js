import { styled } from '@mui/system';

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
const empty = { main: "#FFFFFF84", shadow: "#CECECE", shadowCorrection: "#00000000" }

const Orb = styled('div',
    { shouldForwardProp: (prop) => prop !== 'value' }
)(
    ({ theme, value }) => {
        let valueColor;
        if (value === undefined) {
            valueColor = empty;
        } else {
            valueColor = colors[value];
        }
        return ({
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: valueColor.main,
            boxShadow:
                `inset 4px 4px 4px ${valueColor.shadowCorrection ?? valueColor.main}, inset -4px -4px 4px ${valueColor.shadow}`,
            zIndex: 1,
            margin: "2px",
            [theme.breakpoints.down('md')]: {
                width: "30px",
                height: "30px",
            }
        })
    }
);

export default Orb;