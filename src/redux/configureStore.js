import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import createRootReducer from './configureReducer';

const middlewares = [thunk];


export const store = createStore(
  createRootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
export const persistor = persistStore(store);