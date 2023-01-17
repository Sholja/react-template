import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistCombineReducers } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import I18n, { i18nState } from 'redux-i18n';
import storage from 'redux-persist/lib/storage';
import { MemoryRouter } from 'react-router-dom';

import translations from '../core/translations';

const encryptor = encryptTransform({
  secretKey: 'secret-key',
});

const config = {
  key: 'root',
  // only these will be saved in persist state
  whitelist: [],
  // these will not be persisted
  blacklist: [],
  storage,
  transforms: [encryptor],
};

const reducer = persistCombineReducers(config, {
  i18nState,
  form: formReducer,
});

const mockStore = createStore(reducer);

const wrapComponent = (Component, props = {}) => (
  <MemoryRouter>
    <Provider store={mockStore}>
      <I18n translations={translations}>
        <Component {...props} />
      </I18n>
    </Provider>
  </MemoryRouter>
);

export default wrapComponent;
