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
exports.ToggleSwitch = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ToggleSwitch_styles_1 = require("./ToggleSwitch.styles");
const fieldId = `switch__${Math.random()}`;
const ToggleSwitch = (_a) => {
    var { className, labelClassName, id, label, disabled, value } = _a, props = __rest(_a, ["className", "labelClassName", "id", "label", "disabled", "value"]);
    return (jsx_runtime_1.jsxs(ToggleSwitch_styles_1.Root, Object.assign({ className: className }, { children: [jsx_runtime_1.jsx(ToggleSwitch_styles_1.CheckboxInput, Object.assign({ id: id || fieldId, disabled: disabled, value: value }, props), void 0),
            jsx_runtime_1.jsx(ToggleSwitch_styles_1.Inner, { id: id || fieldId, disabled: disabled }, void 0),
            jsx_runtime_1.jsx(ToggleSwitch_styles_1.Label, Object.assign({ className: labelClassName }, { children: label }), void 0)] }), void 0));
};
exports.ToggleSwitch = ToggleSwitch;
