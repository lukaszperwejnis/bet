'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.rootStore = void 0;
const redux_1 = require('redux');
const redux_logger_1 = __importDefault(require('redux-logger'));
const redux_saga_1 = __importDefault(require('redux-saga'));
const reducers_1 = require('./reducers');
const saga_1 = require('./saga');
const sagaMiddleware = redux_saga_1.default();
const middleware = [sagaMiddleware, redux_logger_1.default];
exports.rootStore = redux_1.createStore(
  reducers_1.rootReducer,
  redux_1.compose(redux_1.applyMiddleware(...middleware)),
);
sagaMiddleware.run(saga_1.rootSaga);
