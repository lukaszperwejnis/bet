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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select as SelectComponent } from './Select.styles';
export const Select = (_a) => {
    var { placeholder, options, disabled } = _a, otherProps = __rest(_a, ["placeholder", "options", "disabled"]);
    return (_jsxs(SelectComponent, Object.assign({ disabled: disabled }, otherProps, { children: [placeholder && (_jsx("option", Object.assign({ value: "", disabled: true }, { children: placeholder }), void 0)),
            options.map((option) => (_jsx("option", Object.assign({ value: option.value }, { children: option.name }), option.value)))] }), void 0));
};
