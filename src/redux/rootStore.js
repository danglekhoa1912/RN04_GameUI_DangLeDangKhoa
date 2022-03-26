import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import GameReducer from './reducers/GameReducer';

const rootReducers = combineReducers({GameReducer});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
