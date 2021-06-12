"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var styled_components_1 = require("styled-components");
var styles_config_1 = require("../../styles/styles-config");
exports.Select = styled_components_1.default.select(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 34px;\n  border: 1px solid ", ";\n  font-size: ", ";\n  padding: 0 ", " 0 ", ";\n  color: ", ";\n  background-size: 12px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n  border-radius: 4px;\n  transition: opacity 0.25s ease-in-out;\n  background: ", "\n    url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%3D5170' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\")\n    no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  cursor: pointer;\n  ", ";\n"], ["\n  height: 34px;\n  border: 1px solid ", ";\n  font-size: ", ";\n  padding: 0 ", " 0 ", ";\n  color: ", ";\n  background-size: 12px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n  border-radius: 4px;\n  transition: opacity 0.25s ease-in-out;\n  background: ", "\n    url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%3D5170' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\")\n    no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  cursor: pointer;\n  ",
    ";\n"])), styles_config_1.stylesConfig.color.secondary, styles_config_1.stylesConfig.fontSize.normal, styles_config_1.stylesConfig.spacing.big, styles_config_1.stylesConfig.spacing.normal, styles_config_1.stylesConfig.color.textColor, styles_config_1.stylesConfig.color.white, function (_a) {
    var disabled = _a.disabled;
    return disabled && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      opacity: ", ";\n      cursor: not-allowed;\n    "], ["\n      opacity: ", ";\n      cursor: not-allowed;\n    "])), styles_config_1.stylesConfig.opacity.disabled);
});
var templateObject_1, templateObject_2;
