import React from 'react';
import { styled } from '@mui/system';

const StyledPanel = styled('div')(
    ({ theme }) => ({
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrast,

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",

        textAlign: "center",
    })
);


const DesktopText = styled('p')(
    ({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            visibility: "hidden",
        }
    })
);

const MobileText = styled('p')(
    ({ theme }) => ({
        [theme.breakpoints.up('md')]: {
            visibility: "hidden",
        }
    })
);

function PausePanel(props) {

    if (props.started && !props.paused && !props.gameOver)
        return null;
    return (
        <StyledPanel>
            {!props.started &&
                <div>
                    <h1>TETRIS</h1>
                    <DesktopText>Press <kbd>Space</kbd> to start</DesktopText>
                    <MobileText>Tap to start</MobileText>
                </div>}
            {props.paused && <h1>PAUSE</h1>}

            {props.gameOver &&
                <div>
                    <h1>GAME OVER :(</h1>
                    <DesktopText>Press <kbd>Space</kbd> to try again</DesktopText>
                    <MobileText>Tap to try again</MobileText>
                </div>}
        </StyledPanel>
    );
}

export default PausePanel;