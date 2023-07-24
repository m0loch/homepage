import baseTheme from './baseTheme';

const darkTheme = baseTheme({
    palette: {
        mode: "dark",
        background: {
            main: "#393939",
            card: "#465E85",
            opaque: "#202020C0",
            menu: "#465E85F0",
        },
        link: "#FFFF00",
        primary: {
            main: "#4A3A84",
            light: "#6E619C",
            contrast: "#FFFF00",
            textBorder: "#000000",
        },
        secondary: {
            main: "#6f6f6f",
        },
        progress: {
            main: "#FFFF00",
            dark: "#465E85",
        },
        wordle: {
            text: "#FFFFFF",
            correct: "#04844A",
            misplaced: "#848400",
            wrong: "#232B42",
        },
        masterMind: {
            selected: "#6E619C",
        }
    },
});

export default darkTheme;
