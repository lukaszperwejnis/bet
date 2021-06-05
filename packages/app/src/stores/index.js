import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { rootSaga } from './saga';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];
export const rootStore = createStore(rootReducer, compose(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);
