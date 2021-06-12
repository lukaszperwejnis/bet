"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
var styled_components_1 = require("styled-components");
var styles_config_1 = require("../../../styles/styles-config");
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: 0;\n  & + & {\n    margin-top: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: 0;\n  & + & {\n    margin-top: ", ";\n  }\n"])), styles_config_1.stylesConfig.spacing.normal);
var templateObject_1;
