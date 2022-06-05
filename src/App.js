import './css/App.css';
import './css/components.css';

import { useState } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import { CssBaseline } from '@mui/material';

import games from './data/projects';
import posts from './data/posts';

import NavBar from './components/navbar';
import Main from './components/main';
import About from './components/about';
import Square from './components/square';
import FollowUps from './components/projects/followUps';
import Fifteen from './components/projects/fifteen/fifteen';
import Mosaic from './components/projects/mosaic/mosaic';
import Wordle from './components/projects/wordle/wordle';

import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const baseTheme = {
    typography: {
      fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
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
            // color: var(--a-color);
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
  };

  const lightTheme = {
    palette: {
      mode: "light",
      primary: {
        main: "#04FBBB",
        light: "#FFFFFF",
        contrast: "#028666",
      },
      secondary: {
        main: "#BFBCC0",
      },
    },
  };

  const darkTheme = {
    palette: {
      mode: "dark",
      primary: {
        main: "#4A3A84",
        contrast: "#FFFF00",
      },
      secondary: {
        main: "#6f6f6f",
      },
    },
  };

  const theme = createTheme({...(darkMode ? darkTheme : lightTheme), ...baseTheme});

  const switchDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <NavBar dark={darkMode} onDarkModeSwitch={switchDarkMode} />

      <Routes>

        {/* Projects */}
        <Route path="/projects/fifteen" element={<Fifteen/>} />
        <Route path="/projects/mosaic" element={<Mosaic img='/assets/mosaic/ff7remake.jpg' rows={5} cols={10}/>} />
        <Route path="/projects/wordle" element={<Wordle/>} />
        <Route path="/projects/next" element={<FollowUps/>} />

        {/* Main sections  */}
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={
          <section className="sub-section">
            {
              games.map(item =>
                <Square
                  {...item}
                />
            )}
          </section>
          } />
        <Route path="/" element={<Main posts={posts}/>} />

      </Routes>
    </ThemeProvider>
  );
}

export default App;
