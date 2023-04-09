const post = {
    title: "So much work, so little to update",
    date: new Date("2022-06-13"),
    smartContent: (
        <>
            <p>Well, what do you want me to say?</p>
            <p>I spent the better part of last week transitioning away from plain CSS, rewriting everything to work with the <a href="https://mui.com/material-ui/guides/styled-engine/">@mui/styled-engine</a>.</p>
            <br />
            <p>Too bad that nobody's going to notice any difference, at least I've learned something that I might as well reuse in my actual working hours.</p>
            <br />
            <p><i>...too bad our main project is heavily based on makeStyles(), given that it still features MUI v4.</i></p>
        </>
    ),
    signature: "Romeo"
};

export default post;