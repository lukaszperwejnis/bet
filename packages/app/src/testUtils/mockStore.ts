import createSagaMiddleware from 'redux-saga';
import configureMockStore from 'redux-mock-store';
import { StoreType } from '@stores/types';
import { rootSaga, watchLogin, watchSignup } from '@stores/saga';
import { all, fork } from 'redux-saga/effects';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);

const initialState: StoreType = {
  auth: {
    error: '',
    isLoading: false,
    currentUser: null,
    hasInvalidToken: false,
  },
  messages: [],
  password: {
    error: '',
    isLoading: false,
    isSuccess: false,
    hasInvalidToken: false,
  },
};

const store = mockStore(initialState);

// function* rootSaga() {
//   yield all([fork(watchLogin), fork(watchSignup)]);
// }
// sagaMiddleware.run(rootSaga);

export default store;
