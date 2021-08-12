'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.URLS = void 0;
const config_1 = require('./config');
function getUrl(url) {
  return config_1.CONFIG.API_URL + url;
}
exports.URLS = {
  USER: {
    SIGNIN: getUrl('/signin'),
    SIGNUP: getUrl('/signup/mail-invitation'),
    START_RESET_PASSWORD: getUrl('/reset-password/start'),
    RESET_PASSWORD: getUrl('/reset-password'),
  },
  TOKENS: {
    REFRESH_TOKEN: getUrl('/verify/refresh/'),
    MAIL_INVITATION: getUrl('/verify/mail-invitation/'),
  },
  BET: {
    AVAILABLE: getUrl('/api/bets/available'),
    USER: getUrl('/api/bets/user'),
    CREATE: getUrl('/api/bets'),
  },
};
