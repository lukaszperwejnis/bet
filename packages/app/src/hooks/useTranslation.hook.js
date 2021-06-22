"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslation = void 0;
const react_intl_1 = require("react-intl");
function useTranslation() {
    const intl = react_intl_1.useIntl();
    return (id, values) => intl.formatMessage({ id }, Object.assign({}, values));
}
exports.useTranslation = useTranslation;
