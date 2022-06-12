import baseTheme from './baseTheme';

const darkTheme = baseTheme({
    palette: {
        mode: "dark",
        background: {
            main: "#393939",
            card: "#465E85",
        },
        link: "#FFFF00",
        primary: {
            main: "#4A3A84",
            contrast: "#FFFF00",
        },
        secondary: {
            main: "#6f6f6f",
        },
    },
});

export default darkTheme;
