import React, { useState } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

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

import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme(darkMode ? darkTheme : lightTheme);

  const switchDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme/>
      <NavBar dark={darkMode} onDarkModeSwitch={switchDarkMode} />

      <Routes>

        {/* Projects */}
        <Route path="/projects/fifteen" element={<Fifteen/>} />
        <Route path="/projects/mosaic" element={<Mosaic img='/assets/mosaic/ff7remake.jpg' rows={5} cols={10}/>} />
        <Route path="/projects/wordle" element={<Wordle/>} />

        {/* Main sections  */}
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<ProjectsSection games={games} />} />
        <Route path="/" element={<Main posts={posts}/>} />

      </Routes>
    </ThemeProvider>
  );
}

export default App;
