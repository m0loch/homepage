import { useState } from 'react';
import { styled } from '@mui/system';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const StyledSwitch = styled('div')(
    ({ theme }) => ({
        width: "var(--logo-width)",
        height: "var(--logo-width)",
        borderRadius: "50%",
        backgroundColor: "var(--shadow)",
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
        visibility: "hidden",
        color: "var(--a-color)",

        [theme.breakpoints.down('md')]: {
            width: "var(--logo-size)",
            height: "var(--logo-size)",    
            position: "absolute",
            visibility: dark ? "inherit" : "hidden",
        }
    })
);

const StyledMoon = styled(DarkModeIcon, {
    shouldForwardProp: (prop) => prop !== 'dark'
})(
    ({ theme, dark }) => ({
        width: "var(--logo-width)",
        height: "var(--logo-width)",
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

function NightSwitch() {
    const [dark, setDark] = useState(false);

    return (
        <StyledSwitch onClick={() => {
                setDark(!dark);
                document.body.classList.toggle('dark');
            }
            }>
            <StyledFlicker dark={dark} />
            <StyledSun dark={dark} />
            <StyledMoon dark={dark} />
        </StyledSwitch>
    );
}

export default NightSwitch;