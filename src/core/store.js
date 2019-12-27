import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../core/root-reducer';

const enhancers = composeWithDevTools(applyMiddleware(thunk));

export const configureStore = () => {
  let store = createStore(rootReducer, {}, enhancers);
  let persistor = persistStore(store);

  return { persistor, store };
};
