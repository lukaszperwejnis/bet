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
import { jsx as _jsx } from "react/jsx-runtime";
import { useField } from 'formik';
import { Wrapper } from './components';
import { Checkbox as CheckboxComponent } from '../Checkbox/Checkbox';
export const Checkbox = (_a) => {
    var { label, checked, wrapperClassName, name } = _a, props = __rest(_a, ["label", "checked", "wrapperClassName", "name"]);
    const [field] = useField(Object.assign({ name }, props));
    return (_jsx(Wrapper, Object.assign({ className: wrapperClassName }, { children: _jsx(CheckboxComponent, Object.assign({ id: field.name, label: label, name: field.name, value: field.value, onChange: field.onChange, onBlur: field.onBlur, checked: checked }, props), void 0) }), void 0));
};
