"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordActionType = void 0;
var PasswordActionType;
(function (PasswordActionType) {
    PasswordActionType["StartReset"] = "START_RESET_PASSWORD";
    PasswordActionType["SuccessStartReset"] = "SUCCESS_START_RESET_PASSWORD";
    PasswordActionType["FailedStartReset"] = "FAILED_START_RESET_PASSWORD";
    PasswordActionType["Reset"] = "RESET_PASSWORD";
    PasswordActionType["SuccessReset"] = "SUCCESS_RESET_PASSWORD";
    PasswordActionType["FailedReset"] = "FAILED_RESET_PASSWORD";
    PasswordActionType["UpdatePassword"] = "UPDATE_PASSWORD";
    PasswordActionType["SuccessUpdatePassword"] = "SUCCESS_UPDATE_PASSWORD";
    PasswordActionType["FailedUpdatePassword"] = "FAILED_UPDATE_PASSWORD";
    PasswordActionType["InvalidTokenReset"] = "INVALID_TOKEN_RESET";
})(PasswordActionType = exports.PasswordActionType || (exports.PasswordActionType = {}));
