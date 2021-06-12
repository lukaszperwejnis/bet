"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.Inner = exports.Radio = exports.Wrapper = exports.RadioInput = void 0;
var styled_components_1 = require("styled-components");
var styles_config_1 = require("../../styles/styles-config");
exports.RadioInput = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  overflow: visible;\n"], ["\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  overflow: visible;\n"])));
exports.RadioInput.defaultProps = {
    type: "radio",
};
exports.Wrapper = styled_components_1.default.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  ",
    "\n"])), function (props) {
    return props.disabled && styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      opacity: ", ";\n      cursor: not-allowed;\n      ", " {\n        cursor: not-allowed;\n      }\n    "], ["\n      opacity: ", ";\n      cursor: not-allowed;\n      ", " {\n        cursor: not-allowed;\n      }\n    "])), styles_config_1.stylesConfig.opacity.disabled, exports.RadioInput);
});
exports.Radio = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  font-size: ", ";\n"], ["\n  position: relative;\n  font-size: ", ";\n"])), styles_config_1.stylesConfig.fontSize.normal);
exports.Inner = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 18px;\n  height: 18px;\n  border-radius: 100%;\n  background: ", ";\n  border: 1px solid ", ";\n\n  ", "\n"], ["\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 18px;\n  height: 18px;\n  border-radius: 100%;\n  background: ", ";\n  border: 1px solid ", ";\n\n  ",
    "\n"])), styles_config_1.stylesConfig.color.white, styles_config_1.stylesConfig.color.secondary, function (props) {
    return props.checked && styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      &:before {\n        position: absolute;\n        content: \"\";\n        width: 100%;\n        height: 100%;\n        background-color: ", ";\n        border-radius: 50%;\n      }\n\n      &:after {\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        left: 4px;\n        top: 4px;\n        border-radius: 100%;\n        display: table;\n        content: \"\";\n        background-color: ", ";\n      }\n    "], ["\n      &:before {\n        position: absolute;\n        content: \"\";\n        width: 100%;\n        height: 100%;\n        background-color: ", ";\n        border-radius: 50%;\n      }\n\n      &:after {\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        left: 4px;\n        top: 4px;\n        border-radius: 100%;\n        display: table;\n        content: \"\";\n        background-color: ", ";\n      }\n    "])), styles_config_1.stylesConfig.color.primary, styles_config_1.stylesConfig.color.white);
});
exports.Label = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  margin-left: ", ";\n  font-size: ", ";\n"], ["\n  font-family: ", ";\n  color: ", ";\n  margin-left: ", ";\n  font-size: ", ";\n"])), styles_config_1.stylesConfig.fontFamily.primary, styles_config_1.stylesConfig.color.textColor, styles_config_1.stylesConfig.spacing.small, styles_config_1.stylesConfig.fontSize.small);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
