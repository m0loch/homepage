import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SettingsReducer from './redux/reducer';

const store = createStore(SettingsReducer);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <App />
        </Provider>
      </StyledEngineProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
