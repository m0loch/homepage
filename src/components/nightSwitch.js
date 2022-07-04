import { styled } from '@mui/system';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const StyledSwitch = styled('div')(
    ({ theme }) => ({
        width: theme.components.logoWidthMobile,
        height: theme.components.logoWidthMobile,
        borderRadius: "50%",
        backgroundColor: theme.palette.primary.dark,
        position: "relative",

        [theme.breakpoints.up('md')]: {
            width: "80px",
            height: "40px",
            borderRadius: "20px",
        }
    })
);

const StyledFlicker = styled('div', {
    shouldForwardProp: (prop) => prop !== 'dark' 
})(
    ({ theme, dark }) => ({
        [theme.breakpoints.up('md')]: {
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            position: "absolute",
            top: "5px",
            left: "5px",
            boxShadow:
                "inset 4px 4px 4px #FFFFFF, inset -4px -4px 4px #BFBCC0E6",
            transition: "0.3s",
            zIndex: 1,

            ...(dark && {
                [theme.breakpoints.up('md')]: {
                    transform: "translateX(40px)",
                }
            })
        }
    })
);

const StyledSun = styled(LightModeIcon, {
    shouldForwardProp: (prop) => prop !== 'dark' 
})(
    ({ theme, dark }) => ({
        width: theme.components.logoWidth,
        height: theme.components.logoWidth,
        visibility: "hidden",
        color: theme.palette.primary.contrast,

        [theme.breakpoints.down('md')]: {
            width: theme.components.logoWidthMobile,
            height: theme.components.logoWidthMobile,
            position: "absolute",
            visibility: dark ? "inherit" : "hidden",
        }
    })
);

const StyledMoon = styled(DarkModeIcon, {
    shouldForwardProp: (prop) => prop !== 'dark'
})(
    ({ theme, dark }) => ({
        width: theme.components.logoWidthMobile,
        height: theme.components.logoWidthMobile,
        transform: "scaleX(-1)",
        position: "absolute",
        color: "#FFFFFF",
        visibility: dark ? "hidden" : "inherit",

        [theme.breakpoints.up('md')]: {
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "5px",
            left: "45px",
            visibility: "inherit",
        }
    })
);

function NightSwitch(props) {
    return (
        <StyledSwitch onClick={() => {
                props.onDarkModeSwitch();
                document.body.classList.toggle('dark');
            }
            }>
            <StyledFlicker dark={props.dark} />
            <StyledSun dark={props.dark} />
            <StyledMoon dark={props.dark} />
        </StyledSwitch>
    );
}

export default NightSwitch;