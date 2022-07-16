import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import SettingsReducer from './redux/reducer';

const persistConfig = {
  key: 'main-root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, SettingsReducer);

const store = createStore(persistedReducer, applyMiddleware());

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </StyledEngineProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
