"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
const redux_1 = require("redux");
const message_reducer_1 = require("./message.reducer");
const auth_reducer_1 = require("./auth.reducer");
const password_reducer_1 = require("./password.reducer");
exports.rootReducer = redux_1.combineReducers({
    auth: auth_reducer_1.authReducer,
    messages: message_reducer_1.messageReducer,
    password: password_reducer_1.passwordReducer,
});
