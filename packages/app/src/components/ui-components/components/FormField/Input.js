"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const formik_1 = require("formik");
const components_1 = require("./components");
const Input_1 = require("../Input/Input");
const Input = (_a) => {
    var { label, description, errorMessage, wrapperClassName, labelClassName, name } = _a, props = __rest(_a, ["label", "description", "errorMessage", "wrapperClassName", "labelClassName", "name"]);
    const [field, meta] = formik_1.useField(Object.assign({ name }, props));
    const hasError = Boolean(errorMessage || (meta.touched && meta.error));
    const error = errorMessage || meta.error;
    return (jsx_runtime_1.jsxs(components_1.Wrapper, Object.assign({ className: wrapperClassName }, { children: [jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: label && (jsx_runtime_1.jsx(components_1.Label, Object.assign({ htmlFor: field.name, className: labelClassName }, { children: label }), void 0)) }, void 0),
            jsx_runtime_1.jsx(Input_1.Input, Object.assign({ id: field.name, name: field.name, value: field.value, onChange: field.onChange, onBlur: field.onBlur, isInvalid: hasError }, props), void 0),
            jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: hasError && error && jsx_runtime_1.jsx(components_1.Error, Object.assign({ "data-error": field.name }, { children: error }), void 0) }, void 0),
            jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: description && jsx_runtime_1.jsx(components_1.Description, { children: description }, void 0) }, void 0)] }), void 0));
};
exports.Input = Input;
