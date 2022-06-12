import baseTheme from './baseTheme';

const lightTheme = baseTheme({
    palette: {
        mode: "light",
        background: {
            main: "#F0F0F0",
            card: "#FFFFFF",
        },
        link: "#028666",
        primary: {
            main: "#04FBBB",
            light: "#FFFFFF",
            contrast: "#028666",
        },
        secondary: {
            main: "#BFBCC0",
        },
    },
});

export default lightTheme;
  