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
        wordle: {
            text: "#028666",
            correct: "#04FBBB",
            misplaced: "#FFFF00",
            wrong: "#C0C0C0",
        }
    },
});

export default lightTheme;
  