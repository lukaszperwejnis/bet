'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.pl = void 0;
const fields_1 = require('./fields');
const validation_1 = require('./validation');
const login_1 = require('./login');
const signup_1 = require('./signup');
const resetPassword_1 = require('./resetPassword');
const setPassword_1 = require('./setPassword');
const invalidToken_1 = require('./invalidToken');
const errors_1 = require('./errors');
exports.pl = Object.assign(
  Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign({}, fields_1.fields),
              validation_1.validation,
            ),
            login_1.login,
          ),
          signup_1.signup,
        ),
        resetPassword_1.resetPassword,
      ),
      setPassword_1.setPassword,
    ),
    invalidToken_1.invalidToken,
  ),
  errors_1.errors,
);
