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

const PanelTitle = styled('h1')(
    ({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            fontSize: "5vmin",
        }
    })
);

const DesktopText = styled('p')(
    ({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            display: "none",
        }
    })
);

const MobileText = styled('p')(
    ({ theme }) => ({
        fontSize: "3vmin",

        [theme.breakpoints.up('md')]: {
            display: "none",
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
                    <PanelTitle>TETRIS</PanelTitle>
                    <DesktopText>Press <kbd>Space</kbd> to start</DesktopText>
                    <MobileText>Tap to start</MobileText>
                </div>}
            {props.paused && <PanelTitle>PAUSE</PanelTitle>}

            {props.gameOver &&
                <div>
                    <PanelTitle>GAME OVER :(</PanelTitle>
                    <DesktopText>Press <kbd>Space</kbd> to try again</DesktopText>
                    <MobileText>Tap to try again</MobileText>
                </div>}
        </StyledPanel>
    );
}

export default PausePanel;