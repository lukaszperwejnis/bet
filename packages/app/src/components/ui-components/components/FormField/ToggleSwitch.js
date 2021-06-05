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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useField } from 'formik';
import { Wrapper, Error, Description } from './components';
import { ToggleSwitch as ToggleSwitchComponent } from '../ToggleSwitch/ToggleSwitch';
export const ToggleSwitch = (_a) => {
    var { label, description, valueToSet, errorMessage, wrapperClassName, name } = _a, props = __rest(_a, ["label", "description", "valueToSet", "errorMessage", "wrapperClassName", "name"]);
    const [field, meta] = useField(Object.assign({ name }, props));
    const hasError = errorMessage || (meta.touched && meta.error);
    const error = errorMessage || meta.error;
    return (_jsxs(Wrapper, Object.assign({ className: wrapperClassName }, { children: [_jsx(ToggleSwitchComponent, Object.assign({ id: field.name, label: label, name: field.name, value: valueToSet, onChange: field.onChange, onBlur: field.onBlur, checked: valueToSet === field.value }, props), void 0),
            _jsx(_Fragment, { children: hasError && error && _jsx(Error, Object.assign({ "data-error": field.name }, { children: error }), void 0) }, void 0),
            _jsx(_Fragment, { children: description && _jsx(Description, { children: description }, void 0) }, void 0)] }), void 0));
};
