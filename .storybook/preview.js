import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistCombineReducers } from 'redux-persist';
import I18n, { i18nState } from 'redux-i18n';
import storage from 'redux-persist/lib/storage';

import translations from '../src/core/translations';

import '../src/common/styles/app.scss';

const config = {
  key: 'root',
  whitelist: [],
  storage,
  transforms: [],
};

const baseReducer = {
  i18nState,
  form: formReducer,
};

const reducer = persistCombineReducers(config, baseReducer);

const mockStore = createStore(reducer);

export const decorators = [
  (Story) => (
    <Provider store={mockStore}>
      <I18n translations={translations}>
        <Story />
      </I18n>
    </Provider>
  ),
];

export const parameters = {
  viewport: {
    style: {
      width: '350px',
    },
  },
};
