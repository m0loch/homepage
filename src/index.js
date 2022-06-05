import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
