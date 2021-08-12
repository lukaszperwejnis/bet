'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.URLS = void 0;
const createTemplate_1 = require('./createTemplate');
exports.URLS = {
  LOGIN: createTemplate_1.createTemplate('/login'),
  MAIL_INVITATION_SIGNUP: createTemplate_1.createTemplate(
    '/mail-invitation-signup',
  ),
  INVALID_MAIL_INVITATION_SIGNUP_TOKEN: createTemplate_1.createTemplate(
    '/invalid-signup-token',
  ),
  RESET_PASSWORD: createTemplate_1.createTemplate('/reset-password'),
  SET_PASSWORD: createTemplate_1.createTemplate('/set-password'),
  DASHBOARD: createTemplate_1.createTemplate('/dashboard'),
};
