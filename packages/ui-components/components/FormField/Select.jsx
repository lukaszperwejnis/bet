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
var formik_1 = require("formik");
var components_1 = require("./components");
var Select_1 = require("../Select/Select");
var Select = function (_a) {
    var label = _a.label, description = _a.description, errorMessage = _a.errorMessage, wrapperClassName = _a.wrapperClassName, labelClassName = _a.labelClassName, props = __rest(_a, ["label", "description", "errorMessage", "wrapperClassName", "labelClassName"]);
    var _b = formik_1.useField(props), field = _b[0], meta = _b[1];
    var hasError = errorMessage || (meta.touched && meta.error);
    var error = errorMessage || meta.error;
    return (<components_1.Wrapper className={wrapperClassName}>
      {label && (<components_1.Label htmlFor={field.name} className={labelClassName}>
          {label}
        </components_1.Label>)}
      <Select_1.Select id={field.name} name={field.name} value={field.value} onChange={field.onChange} onBlur={field.onBlur} {...props}/>
      {hasError && <components_1.Error>{error}</components_1.Error>}
      {description && <components_1.Description>{description}</components_1.Description>}
    </components_1.Wrapper>);
};
exports.Select = Select;
