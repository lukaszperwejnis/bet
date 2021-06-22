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
var formik_1 = require("formik");
var components_1 = require("./components/index");
var ToggleSwitch_1 = require("../ToggleSwitch/ToggleSwitch");
var ToggleSwitch = function (_a) {
    var label = _a.label, description = _a.description, valueToSet = _a.valueToSet, errorMessage = _a.errorMessage, wrapperClassName = _a.wrapperClassName, props = __rest(_a, ["label", "description", "valueToSet", "errorMessage", "wrapperClassName"]);
    var _b = formik_1.useField(props), field = _b[0], meta = _b[1];
    var hasError = errorMessage || (meta.touched && meta.error);
    var error = errorMessage || meta.error;
    return (<components_1.Wrapper className={wrapperClassName}>
      <ToggleSwitch_1.ToggleSwitch id={field.name} label={label} name={field.name} value={valueToSet} onChange={field.onChange} onBlur={field.onBlur} checked={valueToSet === field.value} {...props}/>
      {hasError && <components_1.Error data-error={field.name}>{error}</components_1.Error>}
      {description && <components_1.Description>{description}</components_1.Description>}
    </components_1.Wrapper>);
};
exports.ToggleSwitch = ToggleSwitch;
