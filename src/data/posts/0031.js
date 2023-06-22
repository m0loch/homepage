import { useState } from "react";
import { Collapse } from "@mui/material";
import CollapseHeader from "../../components/projects/common/collapseHeader";
import { styled } from '@mui/system';

import { splitText } from '../../components/common/textFunctions';
import YouTubeVideo from '../../components/posts/youtubeVideo';

import screenshot from '../../images/brokenrunner.png';

const StyledHeader = styled(CollapseHeader)(
    ({ theme }) => ({
        color: theme.palette.primary.contrast,
        fontSize: '1.33rem',
    })
);

const StyledSpoiler = styled(Collapse)(
    ({ theme }) => ({
        color: theme.palette.primary.contrast,
        backgroundColor: theme.palette.background.card,
        padding: '10px',
        border: '3px inset white',
        borderRadius: '5px',
    })
);

function StatefulPost(props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {splitText(`
                With the advent of the summer my health dropped off, and I've basicaclly spent half of June without being able to do any kind of sport.
                Add Inter losing to Manchester City in the Champions League final and you can understand how annoying the last weeks managed to turn out...

                In order to keep myself invested in something I started working on a new project, but somehow the icons I was putting in my test scene weren't behaving properly.
                I tried scanning some online resources to see what was up and ended up deciding for migrating to a newer version of PIXI.js.

                As I tend to do I overdid things a little, so I ended up migrating the whole site to React 18 and PIXI.js 7.2.4, which led to a wide spectrum of collateral problems like fixing older projects in order to behave properly.
            `)}

            <StyledHeader
                caption={"(the problems)"}
                open={open}
                onClick={() => setOpen(!open)}
            />
            <StyledSpoiler in={open} timeout="auto" unmountOnExit>
                <p>The first issue that came with the migration towards React 18 was the incompatibility with the Material UI libraries, which meant I had to reinstall them with the following parameter:</p>
                <br/>
                <code>npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps</code>
                <br/><br/>
                <p>Then I discovered that the <a href="https://www.npmjs.com/package/@inlet/react-pixi">@inlet/react-pixi</a> package has been deprecated, with the new <a href="https://pixijs.io/pixi-react">@pixi/react</a> package that needs to be used in its place.</p>
                <br/>
                {splitText(`
                After reinstalling everything, I finally started facing the <i>real</i> problems, having three projects that needed to be migrated.
                
                The whole activity broke up in the following steps:
                `)}
                <ul>
                    <li>the old PIXI.Loader has been deprecated in favor of the new PIXI.Assets handler - the porting here is pretty straightforward;</li>
                    <li>both Mosaic and Solitaire rely heavily on dragging: previously the onDrag event was handled by the card/tile that was being dragged around, with the new version it caused problems when the delta between two successive positions was too high; I needed to refactor things in order to have the event handled by the Stage itself;</li>
                    <li>the Endless runner, is totally broken, with visual artifacts and broken antialiasing
                    <br/><img alt="broken-runner" src={props.img} style={{ display: "block", margin: "15px auto 0", maxWidth: "80%" }} /><br/>
                    ... so I just decided to shut it off for the time being, one day I'll fix it and maybe make it more fun.</li>
                </ul>
                </StyledSpoiler>

            <br />
            {splitText(`
                On the flip side, I'm really excited because I'll soon be able to play Final Fantasy 16, which promises to be HUGE.

                Here's a trailer, if you somehow didn't get the memo:
            `)}
            <YouTubeVideo videoId={"iaJ4VVFGIa8"} />
        </>
    );
}

const post = {
    title: "Summer crazyness",
    date: new Date("2023-06-22"),
    images: [screenshot],
    smartContent: <StatefulPost img={screenshot}/>,
    signature: `Romeo`
};

export default post;