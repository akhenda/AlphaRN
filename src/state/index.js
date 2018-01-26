import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import DebugConfig from 'src/config/debug';
import reducers from './reducers';


/* ------------- Redux Persist Configuration ------------- */
const persistConfig = {
  key: 'root',
  storage,
  debug: __DEV__,
  whitelist: ['app', 'auth'],
  stateReconciler: autoMergeLevel2,
};
const reducer = persistReducer(persistConfig, reducers);

/* ------------- Redux Configuration ------------- */
const middleware = [];
const enhancers = [];

/* ------------- Redux Thunk Middleware ------------- */
middleware.push(thunk);

/* ------------- Redux Logger Middleware ------------- */
if (DebugConfig.useReduxLogger) {
  const { logger } = require('redux-logger');

  middleware.push(logger);
}

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middleware));

// if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
const createAppropriateStore = DebugConfig.useReactotron ? console.tron.createStore : createStore;
export const store = createAppropriateStore(reducer, compose(...enhancers));
export const persistor = persistStore(store);
