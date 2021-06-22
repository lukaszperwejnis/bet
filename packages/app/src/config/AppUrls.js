"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUrls = void 0;
const _utils_1 = require("@utils");
exports.AppUrls = {
    LOGIN: _utils_1.createTemplate('/login'),
    MAIL_INVITATION_SIGNUP: _utils_1.createTemplate('/mail-invitation-signup'),
    INVALID_MAIL_INVITATION_SIGNUP_TOKEN: _utils_1.createTemplate('/invalid-signup-token'),
    RESET_PASSWORD: _utils_1.createTemplate('/reset-password'),
    SET_PASSWORD: _utils_1.createTemplate('/set-password'),
    DASHBOARD: _utils_1.createTemplate('/dashboard'),
};
