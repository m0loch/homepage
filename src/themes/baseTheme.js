const baseTheme = (theme) => {
    return {
        ...theme,
        typography: {
            fontFamily: ['Ubuntu', 'sans-serif'].join(','),
        },
        components: {
            logoWidth: "clamp(10px, 10vw, 100px)",
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
                        margin: "50px 0 10px 0",
                    },
                    "p, legend, ul li": {
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
                    "@media only screen and (max-width: 899px)": {
                        h1: {
                            fontSize: "8vmin",
                        },
                        h2: {
                            fontSize: "6vmin",
                        },
                        "a, p, legend, li": {
                            fontSize: "5vmin",
                        },
                    }
                }
            },
        },
    }
};

export default baseTheme;