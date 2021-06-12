"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Info = exports.Warning = exports.Error = exports.Success = exports.Container = void 0;
var styled_components_1 = require("styled-components");
var Icon_1 = require("../Icon/Icon");
var styles_config_1 = require("../../styles/styles-config");
var iconMixin = "\n    width: 30px;\n    margin-right: " + styles_config_1.stylesConfig.spacing.normal + ";\n";
var messageTypeColorDictionary = {
    success: styles_config_1.stylesConfig.color.success,
    error: styles_config_1.stylesConfig.color.error,
    warning: styles_config_1.stylesConfig.color.warning,
    info: styles_config_1.stylesConfig.color.primary,
};
exports.Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 4px;\n  padding: ", " ", ";\n  box-shadow: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  border: 1px solid;\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 4px;\n  padding: ", " ", ";\n  box-shadow: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  border: 1px solid;\n  ",
    "\n"])), styles_config_1.stylesConfig.color.white, styles_config_1.stylesConfig.spacing.extraSmall, styles_config_1.stylesConfig.spacing.normal, styles_config_1.stylesConfig.boxShadow, styles_config_1.stylesConfig.fontFamily.primary, styles_config_1.stylesConfig.fontSize.small, function (props) { return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-color: ", ";\n    color: ", ";\n  "], ["\n    border-color: ", ";\n    color: ", ";\n  "])), messageTypeColorDictionary[props.type], messageTypeColorDictionary[props.type]); });
exports.Success = styled_components_1.default(Icon_1.Icon)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &&& {\n    color: ", ";\n    ", ";\n  }\n"], ["\n  &&& {\n    color: ", ";\n    ", ";\n  }\n"])), styles_config_1.stylesConfig.color.success, iconMixin);
exports.Error = styled_components_1.default(Icon_1.Icon)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  &&& {\n    color: ", ";\n    ", ";\n  }\n"], ["\n  &&& {\n    color: ", ";\n    ", ";\n  }\n"])), styles_config_1.stylesConfig.color.error, iconMixin);
exports.Warning = styled_components_1.default(Icon_1.Icon)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  &&& {\n    color: ", ";\n    ", ";\n  }\n"], ["\n  &&& {\n    color: ", ";\n    ", ";\n  }\n"])), styles_config_1.stylesConfig.color.error, iconMixin);
exports.Info = styled_components_1.default(Icon_1.Icon)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  &&& {\n    color: ", ";\n    ", ";\n  }\n"], ["\n  &&& {\n    color: ", ";\n    ", ";\n  }\n"])), styles_config_1.stylesConfig.color.primary, iconMixin);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
