import baseTheme from './baseTheme';

const darkTheme = baseTheme({
    palette: {
        mode: "dark",
        background: {
            main: "#393939",
            card: "#465E85",
            opaque: "#202020C0",
        },
        link: "#FFFF00",
        primary: {
            main: "#4A3A84",
            contrast: "#FFFF00",
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
        }
    },
});

export default darkTheme;
