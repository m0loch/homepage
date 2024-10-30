import baseTheme from './baseTheme';

const lightTheme = baseTheme({
    palette: {
        mode: "light",
        background: {
            main: "#F0F0F0",
            card: "#FFFFFF",
            opaque: "#303030C0",
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
        progress: {
            main: "#028666",
            dark: "#C0C0C0",
        },
        wordle: {
            text: "#028666",
            correct: "#04FBBB",
            misplaced: "#FFFF00",
            wrong: "#C0C0C0",
        },
        masterMind: {
            selected: "#02866680",
        },
        sudoku: {
            lightbg: "#04FBBB40",
            darkbg: "#FFFFFF",
            value: "#028666",
            base: "#0044BF",
        },
    },
});

export default lightTheme;
  