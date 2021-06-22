"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = exports.intl = void 0;
const react_intl_1 = require("react-intl");
const pl_1 = require("../locales/pl");
exports.intl = react_intl_1.createIntl({
    locale: 'pl',
    messages: pl_1.pl,
}, react_intl_1.createIntlCache());
const translate = (id, values) => exports.intl.formatMessage({ id }, Object.assign({}, values));
exports.translate = translate;
