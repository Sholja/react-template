import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import I18n from 'redux-i18n';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { configureStore } from './core/store';
import App from './App';
import initilizeHttpClient from './core/axios-config';
import { translations } from './core/translations';

initilizeHttpClient();

export const { persistor, store } = configureStore();

ReactDOM.render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <I18n translations={translations}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18n>
    </Provider>
  </PersistGate>,
  document.getElementById('root'),
);
