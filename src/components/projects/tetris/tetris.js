import React, { Component } from 'react';

import TilesLineBreak from './components/tileslinebreak';
import PausePanel from './components/pausePanel';

import GameManager from './game/gameManager';
import BlocksFactory from './game/blocksFactory';

import { Box, Grid } from "@mui/material";

import GameGrid from './components/gameGrid';
import ScoreSection from './components/scoreSection';
import LevelSection from './components/levelSection';
import PreviewSection from './components/previewSection';
import LegendSection from './components/legendSection';
import Cell from './components/cell';
import GameContainer from './components/gameContainer';


class Tetris extends Component {
    constructor(props) {
        super(props);

        this.game = new GameManager(this);
        const board = this.game.getEmptyField(props.width, props.height);

        this.state = {
            height: 22,
            width: 10,
            started: false,
            level: 1,
            score: 0,
            levelProgress: 0,
            next: BlocksFactory.getEmpty(),
            board,
            ...props,
        }
    }

    render() {
        const tiles = [];
        this.state.board.forEach(row => row.forEach(value => tiles.push(<Cell key={tiles.length} color={value} />)));

        const preview = [];
        this.state.next.forEach(row => {
            row.forEach(value => preview.push(<Cell key={preview.length} color={value} />));
            preview.push(<TilesLineBreak key={preview.length} />);
        });

        return (
            <Box style={{ paddingTop: "20px" }}>
                <GameContainer>
                    {/* Left column */}
                    <Grid item xs={3}>
                        <ScoreSection>
                            {this.state.score}
                        </ScoreSection>
                        <LevelSection
                            level={this.state.level}
                            progress={this.state.levelProgress}
                        />
                    </Grid>

                    {/* Main column */}
                    <Grid item xs={6} align="center">
                        <GameGrid>
                            {tiles}
                            <PausePanel {...this.state} onTapCallback={this.game.togglePause} />
                        </GameGrid>
                    </Grid>

                    {/* Right column */}
                    <Grid item xs={3}>
                        <PreviewSection title="Next">
                            {preview}
                        </PreviewSection>
                        <LegendSection />
                    </Grid>
                </GameContainer>
            </Box>
        )
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyPressed);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyPressed);
    }

    onKeyPressed = (event) => {
        let handled = false;
        if (event.key !== undefined) {
            // Correct handling of the event
            switch (event.key) {
                case "ArrowLeft":
                    this.game.moveLeft();
                    handled = true;
                    break;

                case "ArrowRight":
                    this.game.moveRight();
                    handled = true;
                    break;

                case "ArrowDown":
                    this.game.dropPiece();
                    handled = true;
                    break;

                case "A":
                case "a":
                    this.game.rotateLeft();
                    handled = true;
                    break;

                case "S":
                case "s":
                    this.game.rotateRight();
                    handled = true;
                    break;

                case " ":
                    this.game.togglePause();
                    handled = true;
                    break;

                default:
                    break;
            }
        } else {
            // Deprecated handling, but needed on some browsers
            switch (event.keyCode) {
                case 37: // "ArrowLeft"
                    this.game.moveLeft();
                    handled = true;
                    break;

                case 39: // "ArrowRight"
                    this.game.moveRight();
                    handled = true;
                    break;

                case 40: // "ArrowDown"
                    this.game.dropPiece();
                    handled = true;
                    break;

                case 65: // A
                    this.game.rotateLeft();
                    handled = true;
                    break;

                case 83: // S
                    this.game.rotateRight();
                    handled = true;
                    break;

                case 32: // Space
                    this.game.togglePause();
                    handled = true;
                    break;

                default:
                    break;
            }
        }

        if (handled) {
            event.preventDefault();
        }
    }
}

export default Tetris;