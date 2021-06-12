export var AuthActionType;
(function (AuthActionType) {
    AuthActionType["Login"] = "LOGIN";
    AuthActionType["SuccessLogin"] = "SUCCESS_LOGIN";
    AuthActionType["FailedLogin"] = "FAILED_LOGIN";
    AuthActionType["Signup"] = "SIGNUP";
    AuthActionType["SuccessSignup"] = "SUCCESS_SIGNUP";
    AuthActionType["FailedSignup"] = "FAILED_SIGNUP";
    AuthActionType["InvalidTokenSignup"] = "INVALID_TOKEN_SIGNUP";
})(AuthActionType || (AuthActionType = {}));
