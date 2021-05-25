import RulingsReducer from './rulings/reducers';

import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import localStorage from 'redux-persist/lib/storage'

const rulingsPersistConfig = {
  key: 'rulings',
  storage: localStorage,
  whitelist: ['rulings', 'rulingsVoted'],
};

const createRootReducer = combineReducers({
  rulings: persistReducer(rulingsPersistConfig, RulingsReducer),
});

export default createRootReducer;
