import { Button, Input } from "@mui/material";
import { styled } from '@mui/system';

const InputInternal = styled(Input)(
    () => ({
        fontSize: "20px",
        width: "100%"
    })
)

const ButtonInternal = styled(Button)(
    ({ theme }) => ({
        display: "flex",
        justifySelf: "center",
        margin: "8px auto",
        fontSize: "20px",
        textDecoration: "none",
        color: theme.palette.link,
        whiteSpace: "nowrap",

        "&:hover": {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.background.card,
        },
    })
);

const post = {
    title: "Deep link test - take #2",
    date: new Date("2024-03-14"),
    smartContent: 
    <>
        <p>And so, once again I end up using this page for testing purposes...</p><br/>
        <p>Hi Hichem ;)</p><br/>
        <InputInternal id="testLink" defaultValue="instagram://user?username=sisalfunclub"/>
        <br/>
        <ButtonInternal onClick={() => { window.open(document.getElementById('testLink').value, '_blank'); }}>Trigger deep link</ButtonInternal>
        <br/>
        <p>In the future I'll set up a standalone page in order to avoid having to find these posts among the others, for now just bear with me.</p>
    </>,
    signature: `One day I'll post something new, I swear
    Romeo`
};

export default post;
