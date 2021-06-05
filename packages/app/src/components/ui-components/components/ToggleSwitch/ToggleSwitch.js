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
import { CheckboxInput, Inner, Label, Root } from './ToggleSwitch.styles';
const fieldId = `switch__${Math.random()}`;
export const ToggleSwitch = (_a) => {
    var { className, labelClassName, id, label, disabled, value } = _a, props = __rest(_a, ["className", "labelClassName", "id", "label", "disabled", "value"]);
    return (_jsxs(Root, Object.assign({ className: className }, { children: [_jsx(CheckboxInput, Object.assign({ id: id || fieldId, disabled: disabled, value: value }, props), void 0),
            _jsx(Inner, { id: id || fieldId, disabled: disabled }, void 0),
            _jsx(Label, Object.assign({ className: labelClassName }, { children: label }), void 0)] }), void 0));
};
