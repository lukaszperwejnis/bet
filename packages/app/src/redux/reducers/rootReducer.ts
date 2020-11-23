import {combineReducers} from 'redux';
import {messageReducer} from './message.reducer';

export const rootReducer = combineReducers({
    messages: messageReducer,
});
