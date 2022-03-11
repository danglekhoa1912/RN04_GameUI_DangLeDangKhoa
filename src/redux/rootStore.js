import {combineReducers, createStore} from 'redux';
import dummyReducers from './reducers';

const rootReducers = combineReducers({dummyReducers});

const store = createStore(rootReducers);

export default store;
