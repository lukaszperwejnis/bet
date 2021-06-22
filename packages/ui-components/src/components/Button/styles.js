"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButton = void 0;
var styled_components_1 = require("styled-components");
var polished_1 = require("polished");
var styles_1 = require("../../styles/index");
exports.StyledButton = styled_components_1.default.button(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  border: none;\n  border-radius: 4px;\n  color: ", ";\n  font-size: ", ";\n  padding: ", ";\n  transition-property: background-color, border, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: cubic-bezier(0.27, 0.01, 0.38, 1.06);\n  will-change: background-color, border, color, opacity;\n  font-family: ", ";\n  cursor: pointer;\n\n  &:active,\n  &:focus {\n    outline: none;\n  }\n\n  @media ", " {\n    font-size: ", ";\n  }\n\n  ", ";\n\n  ", ";\n\n  ", ";\n  ", ";\n\n  ", ";\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"], ["\n  border: none;\n  border-radius: 4px;\n  color: ", ";\n  font-size: ", ";\n  padding: ", ";\n  transition-property: background-color, border, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: cubic-bezier(0.27, 0.01, 0.38, 1.06);\n  will-change: background-color, border, color, opacity;\n  font-family: ", ";\n  cursor: pointer;\n\n  &:active,\n  &:focus {\n    outline: none;\n  }\n\n  @media ", " {\n    font-size: ", ";\n  }\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n  ",
    ";\n\n  ",
    ";\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n"])), styles_1.config.color.white, styles_1.config.fontSize.small, styles_1.config.spacing.small, styles_1.config.fontFamily.primary, styles_1.breakpoints.tabletUp, styles_1.config.fontSize.normal, function (_a) {
    var disabled = _a.disabled;
    return disabled && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      opacity: ", ";\n      cursor: auto;\n    "], ["\n      opacity: ", ";\n      cursor: auto;\n    "])), styles_1.config.opacity.disabled);
}, function (_a) {
    var colorType = _a.colorType;
    return colorType === "primary" && styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "])), styles_1.config.color.primary, polished_1.lighten(0.1, styles_1.config.color.primary));
}, function (_a) {
    var colorType = _a.colorType, isHollow = _a.isHollow;
    return colorType === "primary" &&
        isHollow && styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      color: ", ";\n      border-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      color: ", ";\n      border-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "])), styles_1.config.color.primary, styles_1.config.color.primary, styles_1.config.color.primary);
}, function (_a) {
    var colorType = _a.colorType;
    return colorType === "secondary" && styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      color: ", ";\n      background-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      color: ", ";\n      background-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "])), styles_1.config.color.textColor, styles_1.config.color.secondary, polished_1.darken(0.1, styles_1.config.color.secondary));
}, function (_a) {
    var colorType = _a.colorType, isHollow = _a.isHollow;
    return colorType === "secondary" &&
        isHollow && styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      color: ", ";\n      border-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      color: ", ";\n      border-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "])), styles_1.config.color.secondary, styles_1.config.color.secondary, styles_1.config.color.secondary);
}, function (_a) {
    var colorType = _a.colorType;
    return colorType === "error" && styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      background-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "])), styles_1.config.color.guardsmanRed, polished_1.lighten(0.1, styles_1.config.color.guardsmanRed));
}, function (_a) {
    var colorType = _a.colorType, isHollow = _a.isHollow;
    return colorType === "error" &&
        isHollow && styled_components_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      color: ", ";\n      border-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      color: ", ";\n      border-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "])), styles_1.config.color.guardsmanRed, styles_1.config.color.guardsmanRed, styles_1.config.color.guardsmanRed);
}, function (_a) {
    var colorType = _a.colorType;
    return colorType === "warning" && styled_components_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      background-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "])), styles_1.config.color.warning, polished_1.lighten(0.1, styles_1.config.color.warning));
}, function (_a) {
    var colorType = _a.colorType, isHollow = _a.isHollow;
    return colorType === "warning" &&
        isHollow && styled_components_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      color: ", ";\n      border-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      color: ", ";\n      border-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "])), styles_1.config.color.warning, styles_1.config.color.warning, styles_1.config.color.warning);
}, function (_a) {
    var colorType = _a.colorType;
    return colorType === "success" && styled_components_1.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      background-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "])), styles_1.config.color.success, polished_1.lighten(0.1, styles_1.config.color.success));
}, function (_a) {
    var colorType = _a.colorType, isHollow = _a.isHollow;
    return colorType === "success" &&
        isHollow && styled_components_1.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      color: ", ";\n      border-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      color: ", ";\n      border-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "])), styles_1.config.color.success, styles_1.config.color.success, styles_1.config.color.success);
}, function (_a) {
    var colorType = _a.colorType;
    return colorType === "empty" && styled_components_1.css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      margin: 0;\n      background: none;\n      padding: 0;\n      min-width: auto;\n\n      &:hover {\n        background: none;\n        opacity: 0.7;\n      }\n    "], ["\n      margin: 0;\n      background: none;\n      padding: 0;\n      min-width: auto;\n\n      &:hover {\n        background: none;\n        opacity: 0.7;\n      }\n    "])));
}, function (_a) {
    var isHollow = _a.isHollow;
    return isHollow && styled_components_1.css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      background-color: ", ";\n      border: 1px solid;\n      &:hover {\n        color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      border: 1px solid;\n      &:hover {\n        color: ", ";\n      }\n    "])), styles_1.config.color.white, styles_1.config.color.white);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
