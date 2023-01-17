import React from 'react';
import I18n from 'redux-i18n';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './core/store';
import App from './App';
import initilizeHttpClient from './core/axios-config';
import translations from './core/translations';

initilizeHttpClient();

export const { persistor, store } = configureStore();

const AppWrapper = () => (
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <I18n translations={translations}>
        <App />
      </I18n>
    </Provider>
  </PersistGate>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppWrapper />);
