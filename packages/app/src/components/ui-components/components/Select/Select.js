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
exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Select_styles_1 = require("./Select.styles");
const Select = (_a) => {
    var { placeholder, options, disabled } = _a, otherProps = __rest(_a, ["placeholder", "options", "disabled"]);
    return (jsx_runtime_1.jsxs(Select_styles_1.Select, Object.assign({ disabled: disabled }, otherProps, { children: [placeholder && (jsx_runtime_1.jsx("option", Object.assign({ value: "", disabled: true }, { children: placeholder }), void 0)),
            options.map((option) => (jsx_runtime_1.jsx("option", Object.assign({ value: option.value }, { children: option.name }), option.value)))] }), void 0));
};
exports.Select = Select;
