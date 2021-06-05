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
import { Label, Wrapper, Error, Description } from './components';
import { Input as InputComponent } from '../Input/Input';
export const Input = (_a) => {
    var { label, description, errorMessage, wrapperClassName, labelClassName, name } = _a, props = __rest(_a, ["label", "description", "errorMessage", "wrapperClassName", "labelClassName", "name"]);
    const [field, meta] = useField(Object.assign({ name }, props));
    const hasError = Boolean(errorMessage || (meta.touched && meta.error));
    const error = errorMessage || meta.error;
    return (_jsxs(Wrapper, Object.assign({ className: wrapperClassName }, { children: [_jsx(_Fragment, { children: label && (_jsx(Label, Object.assign({ htmlFor: field.name, className: labelClassName }, { children: label }), void 0)) }, void 0),
            _jsx(InputComponent, Object.assign({ id: field.name, name: field.name, value: field.value, onChange: field.onChange, onBlur: field.onBlur, isInvalid: hasError }, props), void 0),
            _jsx(_Fragment, { children: hasError && error && _jsx(Error, Object.assign({ "data-error": field.name }, { children: error }), void 0) }, void 0),
            _jsx(_Fragment, { children: description && _jsx(Description, { children: description }, void 0) }, void 0)] }), void 0));
};
