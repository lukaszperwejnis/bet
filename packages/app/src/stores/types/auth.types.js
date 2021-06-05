export var AuthActionType;
(function (AuthActionType) {
    AuthActionType["Login"] = "LOGIN";
    AuthActionType["SuccessLogin"] = "SUCCESS_LOGIN";
    AuthActionType["FailedLogin"] = "FAILED_LOGIN";
    AuthActionType["PasswordReset"] = "PASSWORD_RESET";
    AuthActionType["SuccessPasswordReset"] = "SUCCESS_PASSWORD_RESET";
    AuthActionType["FailedPasswordReset"] = "FAILED_PASSWORD_RESET";
})(AuthActionType || (AuthActionType = {}));
