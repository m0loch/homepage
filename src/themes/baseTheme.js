const baseTheme = (theme) => {
    return {
        ...theme,
        typography: {
            fontFamily: ['Ubuntu', 'sans-serif'].join(','),
        },
        components: {
            logoWidth: "clamp(10px, 10vw, 100px)",
            logoWidthMobile: "6vmin",
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        transition: "0.3s",
                        backgroundColor: theme.palette.background.main,
                    },
                    h1: {
                        fontSize: "60px",
                        lineHeight: "70px",
                        fontWeight: 300,
                        margin: "10px 0",
                    },
                    h2: {
                        fontSize: "40px",
                        lineHeight: "40px",
                        fontWeight: 300,
                    },
                    p: {
                        fontSize: "20px",
                        margin: 0,
                    },
                    "legend, ul li": {
                        fontSize: "20px",
                        margin: 0,
                    },
                    a: {
                        fontSize: "20px",
                        fontWeight: "200",
                        textDecoration: "none",
                        color: theme.palette.link,
                    },
                    "p a": {
                        textDecoration: "underline",
                    },
                    ul: {
                        listStyleType: "circle",
                    },
                    kbd: {
                        backgroundColor: "#eee",
                        borderRadius: "3px",
                        border: "1px solid #b4b4b4",
                        boxShadow: "0 1px 1px rgba(0, 0, 0, .2), 0 2px 0 0 rgba(255, 255, 255, .7) inset",
                        color: "#333",
                        display: "inline-block",
                        fontSize: ".85em",
                        fontWeight: "700",
                        lineHeight: 1,
                        padding: "2px 4px",
                        whiteSpace: "nowrap",
                    },
                    // Radio
                    "span.MuiFormControlLabel-label": {
                        fontSize: "20px",
                    },
                    "span.MuiRadio-root.Mui-checked": {
                        color: theme.palette.primary.contrast,
                    },
                    // /Radio
                    "@media only screen and (max-width: 899px)": {
                        h1: {
                            fontSize: "8vmin",
                        },
                        h2: {
                            fontSize: "6vmin",
                        },
                        p: {
                            fontSize: "5vmin",
                        },
                        "a, legend, li": {
                            fontSize: "5vmin",
                        },
                        "span.MuiFormControlLabel-label": {
                            fontSize: "5vmin",
                        },
                    }
                }
            },
            tetris: {
                cellSize: "30px",
                cellSizeMobile: "2vw",
            },
        },
    }
};

export default baseTheme;