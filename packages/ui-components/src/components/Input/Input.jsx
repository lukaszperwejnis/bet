"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var styled_components_1 = require("styled-components");
var styles_config_1 = require("../../styles/styles-config");
exports.Input = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  border-radius: 4px;\n  color: ", ";\n  font-size: ", ";\n  padding: 7px 12px;\n  font-family: ", ";\n  outline: none;\n  min-width: 0;\n  transition: opacity 0.25s ease-in-out;\n  ", ";\n  ", ";\n"], ["\n  border: 1px solid ", ";\n  border-radius: 4px;\n  color: ", ";\n  font-size: ", ";\n  padding: 7px 12px;\n  font-family: ", ";\n  outline: none;\n  min-width: 0;\n  transition: opacity 0.25s ease-in-out;\n  ",
    ";\n  ",
    ";\n"])), styles_config_1.stylesConfig.color.secondary, styles_config_1.stylesConfig.color.textColor, styles_config_1.stylesConfig.fontSize.normal, styles_config_1.stylesConfig.fontFamily.primary, function (props) {
    return props.isInvalid && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border-color: ", ";\n    "], ["\n      border-color: ", ";\n    "])), styles_config_1.stylesConfig.color.guardsmanRed);
}, function (props) {
    return props.disabled && styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      opacity: ", ";\n      background-color: transparent;\n    "], ["\n      opacity: ", ";\n      background-color: transparent;\n    "])), styles_config_1.stylesConfig.opacity.disabled);
});
exports.Input.defaultProps = {
    type: "text",
};
var templateObject_1, templateObject_2, templateObject_3;
