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
exports.Button = exports.ColorType = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
var ColorType;
(function (ColorType) {
    ColorType["Primary"] = "primary";
    ColorType["Secondary"] = "secondary";
    ColorType["Error"] = "error";
    ColorType["Warning"] = "warning";
    ColorType["Success"] = "success";
    ColorType["Empty"] = "empty";
})(ColorType = exports.ColorType || (exports.ColorType = {}));
const Button = (_a) => {
    var { type = ColorType.Primary, htmlType = 'button' } = _a, otherProps = __rest(_a, ["type", "htmlType"]);
    return (jsx_runtime_1.jsx(styles_1.StyledButton, Object.assign({ type: htmlType, colorType: type }, otherProps), void 0));
};
exports.Button = Button;
