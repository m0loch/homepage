import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';
import { mainSetDarkMode } from './redux/actions';

import { CssBaseline } from '@mui/material';

import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';

import games from './data/projects';
import posts from './data/posts';

import NavBar from './components/navbar';
import Main from './components/main';
import About from './components/about';
import ProjectsSection from './components/projectsSection';
import Fifteen from './components/projects/fifteen/fifteen';
import Mosaic from './components/projects/mosaic/mosaic';
import Wordle from './components/projects/wordle/wordle';
import Runner from './components/projects/runner/runner';
import Tetris from './components/projects/tetris/tetris';
import Talks from './components/projects/talks/talks';
import MasterMind from './components/projects/mastermind/mastermind';
import Tyles from './components/projects/tyles/tyles';
import Minesweeper from './components/projects/minesweeper/minesweeper';
import Solitaire from './components/projects/solitaire/solitaire';
import Simon from './components/projects/simon/simon';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Rpg from './components/projects/wiprpg/rpg';

function App(props) {
  const theme = createTheme(props.darkMode ? darkTheme : lightTheme);

  const switchDarkMode = () => {
    props.mainSetDarkMode(!props.darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <NavBar dark={props.darkMode} onDarkModeSwitch={switchDarkMode} />

      <Routes>

        {/* Projects */}
        <Route path="/projects/fifteen" element={<Fifteen {...props.fifteen} />} />
        <Route path="/projects/mosaic" element={<Mosaic {...props.mosaic} />} />
        <Route path="/projects/wordle" element={<Wordle {...props.wordle} />} />
        <Route path="/projects/runner" element={<Runner assetsFolder={`${process.env.PUBLIC_URL}/assets/runner`} />} />
        <Route path="/projects/tetris" element={<Tetris {...props.tetris} />} />
        <Route path="/projects/talks" element={<Talks {...props.talks} />} />
        <Route path="/projects/mastermind" element={<MasterMind {...props.mastermind} />} />
        <Route path="/projects/tyles" element={<Tyles levelsFolder={`${process.env.PUBLIC_URL}/assets/tyles/levels`} {...props.tyles} />} />
        <Route path="/projects/minesweeper" element={<Minesweeper {...props.minesweeper} />} />
        <Route path="/projects/solitaire" element={<Solitaire {...props.solitaire} assetsFolder={`${process.env.PUBLIC_URL}/assets/solitaire`} />} />
        <Route path="/projects/simon" element={<Simon {...props.simon} />} />
        <Route path="/projects/rpg" element={<Rpg assetsFolder={`${process.env.PUBLIC_URL}/assets/wiprpg`} />} />

        {/* Main sections */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsSection games={games} />} />
        <Route path="/" element={<Main posts={posts} />} />

      </Routes>
    </ThemeProvider>
  );
}

function mapStateToProps(state) {
  return { ...state };
}

const mapDispatchToProps = {
  mainSetDarkMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
