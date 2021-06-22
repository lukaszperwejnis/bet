"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidTokenReset = exports.failedReset = exports.successReset = exports.reset = exports.failedStartReset = exports.successStartReset = exports.startReset = void 0;
const types_1 = require("@stores/types");
const startReset = (payload) => ({
    type: types_1.PasswordActionType.StartReset,
    payload,
});
exports.startReset = startReset;
const successStartReset = () => ({
    type: types_1.PasswordActionType.SuccessStartReset,
    payload: null,
});
exports.successStartReset = successStartReset;
const failedStartReset = (payload) => ({
    type: types_1.PasswordActionType.FailedStartReset,
    payload,
});
exports.failedStartReset = failedStartReset;
const reset = (payload) => ({
    type: types_1.PasswordActionType.Reset,
    payload,
});
exports.reset = reset;
const successReset = () => ({
    type: types_1.PasswordActionType.SuccessReset,
    payload: null,
});
exports.successReset = successReset;
const failedReset = (payload) => ({
    type: types_1.PasswordActionType.FailedReset,
    payload,
});
exports.failedReset = failedReset;
const invalidTokenReset = () => ({
    type: types_1.PasswordActionType.InvalidTokenReset,
    payload: true,
});
exports.invalidTokenReset = invalidTokenReset;
