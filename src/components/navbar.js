import React from 'react';
import { Link } from "react-router-dom";
import { styled } from '@mui/system';

import NightSwitch from './nightSwitch';
import img from '../images/logo.jpg';

const StyledLogo = styled(Link)(
    ({ theme }) => ({
        display: "flex",
        position: "relative",
        width: theme.components.logoWidthMobile,
        [theme.breakpoints.up('md')]: {
            width: theme.components.logoWidth,
        }
    })
);

const StyledLogoImg = styled('img')(
    ({ theme }) => ({
        borderRadius: "50%",
        boxSizing: "content-box",
        width: "100%",

        [theme.breakpoints.up('md')]: {
           border: `3px solid ${theme.palette.primary.light}`,
           position: "absolute",

            /* navbar's padding, plus half of navbar's height, minus half the image's height */
           top: `calc(20px + 20px - ${theme.components.logoWidth} / 2)`,
           width: `calc(${theme.components.logoWidth} - (2 * 3px))`,
           zIndex: 1,
        }
    })
);

const StyledNavbar = styled('div')(
    ({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      
        backgroundColor: theme.palette.primary.main,
    
        borderBottom: `3px solid ${theme.palette.primary.light}`,
        padding: "20px",
    
        zIndex: 11,

        [theme.breakpoints.down('md')]: {
            padding: "5px",
            maxHeight: "calc(8vh - 5px)",
        }
    })
);

const StyledNav = styled('nav')(
    () => ({
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-evenly",
    })
);

const StyledNavLink = styled(Link)(
    ({ theme }) => ({
        margin: "auto",
        textTransform: "uppercase",
        fontWeight: "700",
        color: theme.palette.primary.contrast,

        "&:hover": {
            color: theme.palette.primary.contrastText,
        },

        "&::before, &::after": {
            display: "block",
            content: '""',
            height: "5px",
            background: theme.palette.primary.contrastText,
            transform: "scale(0, 1)",
            transition: "transform ease-in-out 250ms",
        },

        "&::before": {
            top: "-6px",
        },

        "&:hover::after, &:hover::before": {
            transform: "scale(1,1)",
        }
    })
);

function NavBar(props) {
    return (
        <StyledNavbar>
            <StyledLogo to="/">
                <StyledLogoImg src={img} alt="logo" />
            </StyledLogo>

            <StyledNav>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/projects">Projects</StyledNavLink>
                <StyledNavLink to="/about">About</StyledNavLink>
            </StyledNav>

            <NightSwitch {...props} />
        </StyledNavbar>
    );
}

export default NavBar;