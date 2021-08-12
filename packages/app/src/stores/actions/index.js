'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.failedReset =
  exports.successReset =
  exports.reset =
  exports.failedStartReset =
  exports.successStartReset =
  exports.startReset =
  exports.failedSignup =
  exports.successSignup =
  exports.signup =
  exports.failedLogin =
  exports.successLogin =
  exports.login =
    void 0;
var auth_actions_1 = require('./auth.actions');
Object.defineProperty(exports, 'login', {
  enumerable: true,
  get: function () {
    return auth_actions_1.login;
  },
});
Object.defineProperty(exports, 'successLogin', {
  enumerable: true,
  get: function () {
    return auth_actions_1.successLogin;
  },
});
Object.defineProperty(exports, 'failedLogin', {
  enumerable: true,
  get: function () {
    return auth_actions_1.failedLogin;
  },
});
Object.defineProperty(exports, 'signup', {
  enumerable: true,
  get: function () {
    return auth_actions_1.signup;
  },
});
Object.defineProperty(exports, 'successSignup', {
  enumerable: true,
  get: function () {
    return auth_actions_1.successSignup;
  },
});
Object.defineProperty(exports, 'failedSignup', {
  enumerable: true,
  get: function () {
    return auth_actions_1.failedSignup;
  },
});
var password_actions_1 = require('./password.actions');
Object.defineProperty(exports, 'startReset', {
  enumerable: true,
  get: function () {
    return password_actions_1.startReset;
  },
});
Object.defineProperty(exports, 'successStartReset', {
  enumerable: true,
  get: function () {
    return password_actions_1.successStartReset;
  },
});
Object.defineProperty(exports, 'failedStartReset', {
  enumerable: true,
  get: function () {
    return password_actions_1.failedStartReset;
  },
});
Object.defineProperty(exports, 'reset', {
  enumerable: true,
  get: function () {
    return password_actions_1.reset;
  },
});
Object.defineProperty(exports, 'successReset', {
  enumerable: true,
  get: function () {
    return password_actions_1.successReset;
  },
});
Object.defineProperty(exports, 'failedReset', {
  enumerable: true,
  get: function () {
    return password_actions_1.failedReset;
  },
});
