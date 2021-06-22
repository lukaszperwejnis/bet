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
exports.Radio = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Radio_styles_1 = require("./Radio.styles");
const Radio = (_a) => {
    var { className, labelClassName, label, checked, disabled } = _a, otherProps = __rest(_a, ["className", "labelClassName", "label", "checked", "disabled"]);
    return (jsx_runtime_1.jsxs(Radio_styles_1.Wrapper, Object.assign({ disabled: Boolean(disabled) }, { children: [jsx_runtime_1.jsxs(Radio_styles_1.Radio, Object.assign({ className: className }, { children: [jsx_runtime_1.jsx(Radio_styles_1.RadioInput, Object.assign({ checked: checked, disabled: disabled }, otherProps), void 0),
                    jsx_runtime_1.jsx(Radio_styles_1.Inner, { checked: Boolean(checked) }, void 0)] }), void 0),
            jsx_runtime_1.jsx(Radio_styles_1.Label, Object.assign({ "data-radio-role": "label", className: labelClassName, checked: Boolean(checked) }, { children: label }), void 0)] }), void 0));
};
exports.Radio = Radio;
