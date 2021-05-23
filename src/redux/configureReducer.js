import RulingsReducer from './rulings/reducers';

import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rulingsPersistConfig = {
  key: 'rulings',
  storage,
  whitelist: ['rulings', 'rulingVoted'],
};

const createRootReducer = combineReducers({
  rulings: persistReducer(rulingsPersistConfig, RulingsReducer),
});

export default createRootReducer;
