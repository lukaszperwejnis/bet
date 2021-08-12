'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.passwordService =
  exports.localStorageService =
  exports.authService =
  exports.betService =
  exports.userService =
  exports.tokenService =
    void 0;
var token_service_1 = require('./token.service');
Object.defineProperty(exports, 'tokenService', {
  enumerable: true,
  get: function () {
    return token_service_1.tokenService;
  },
});
var app_service_1 = require('./app.service');
Object.defineProperty(exports, 'userService', {
  enumerable: true,
  get: function () {
    return app_service_1.userService;
  },
});
var bet_service_1 = require('./bet.service');
Object.defineProperty(exports, 'betService', {
  enumerable: true,
  get: function () {
    return bet_service_1.betService;
  },
});
var auth_service_1 = require('./auth.service');
Object.defineProperty(exports, 'authService', {
  enumerable: true,
  get: function () {
    return auth_service_1.authService;
  },
});
var localStorage_service_1 = require('./localStorage.service');
Object.defineProperty(exports, 'localStorageService', {
  enumerable: true,
  get: function () {
    return localStorage_service_1.localStorageService;
  },
});
var password_service_1 = require('./password.service');
Object.defineProperty(exports, 'passwordService', {
  enumerable: true,
  get: function () {
    return password_service_1.passwordService;
  },
});
