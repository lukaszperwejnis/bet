'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.mapErrorToMessage =
  exports.createTemplate =
  exports.redirect =
  exports.translate =
  exports.intl =
  exports.history =
    void 0;
var history_1 = require('./history');
Object.defineProperty(exports, 'history', {
  enumerable: true,
  get: function () {
    return history_1.history;
  },
});
var intl_1 = require('./intl');
Object.defineProperty(exports, 'intl', {
  enumerable: true,
  get: function () {
    return intl_1.intl;
  },
});
Object.defineProperty(exports, 'translate', {
  enumerable: true,
  get: function () {
    return intl_1.translate;
  },
});
var redirect_1 = require('./redirect');
Object.defineProperty(exports, 'redirect', {
  enumerable: true,
  get: function () {
    return redirect_1.redirect;
  },
});
var createTemplate_1 = require('./createTemplate');
Object.defineProperty(exports, 'createTemplate', {
  enumerable: true,
  get: function () {
    return createTemplate_1.createTemplate;
  },
});
var mapErrorToMessage_1 = require('./mapErrorToMessage');
Object.defineProperty(exports, 'mapErrorToMessage', {
  enumerable: true,
  get: function () {
    return mapErrorToMessage_1.mapErrorToMessage;
  },
});
