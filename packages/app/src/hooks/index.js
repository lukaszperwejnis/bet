'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.useAuth = exports.useTranslation = exports.useRouter = void 0;
var useRouter_hook_1 = require('./useRouter.hook');
Object.defineProperty(exports, 'useRouter', {
  enumerable: true,
  get: function () {
    return useRouter_hook_1.useRouter;
  },
});
var useTranslation_hook_1 = require('./useTranslation.hook');
Object.defineProperty(exports, 'useTranslation', {
  enumerable: true,
  get: function () {
    return useTranslation_hook_1.useTranslation;
  },
});
var useAuth_hook_1 = require('./useAuth.hook');
Object.defineProperty(exports, 'useAuth', {
  enumerable: true,
  get: function () {
    return useAuth_hook_1.useAuth;
  },
});
