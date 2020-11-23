import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {rootReducer} from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
