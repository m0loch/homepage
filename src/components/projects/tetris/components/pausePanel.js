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

        textAlign: "center",
    })
);

const StyledTextBlock = styled('div')(
    () => ({
        marginTop: "50%",
        height: "30%",
        
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    })
);

const PanelTitle = styled('h1')(
    ({ theme }) => ({
        lineHeight: "revert",
        margin: 0,
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
        <StyledPanel onClick={props.onTapCallback}>
            {!props.started &&
                <StyledTextBlock>
                    <PanelTitle>TETRIS</PanelTitle>
                    <DesktopText>Press <kbd>Space</kbd> to start</DesktopText>
                    <MobileText>Tap to start</MobileText>
                </StyledTextBlock>}
            {props.paused && <PanelTitle>PAUSE</PanelTitle>}

            {props.gameOver &&
                <StyledTextBlock>
                    <PanelTitle>GAME OVER :(</PanelTitle>
                    <DesktopText>Press <kbd>Space</kbd> to try again</DesktopText>
                    <MobileText>Tap to try again</MobileText>
                </StyledTextBlock>}
        </StyledPanel>
    );
}

export default PausePanel;