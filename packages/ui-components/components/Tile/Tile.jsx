"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
var styled_components_1 = require("styled-components");
var styles_config_1 = require("../../styles/styles-config");
exports.Tile = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  background-color: ", ";\n  padding: ", ";\n  box-shadow: ", ";\n  ", "\n"], ["\n  position: relative;\n  overflow: hidden;\n  background-color: ", ";\n  padding: ", ";\n  box-shadow: ", ";\n  ",
    "\n"])), styles_config_1.stylesConfig.color.white, styles_config_1.stylesConfig.spacing.small, styles_config_1.stylesConfig.boxShadow, function (props) {
    return props.isRound && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border-radius: 10px;\n    "], ["\n      border-radius: 10px;\n    "])));
});
var templateObject_1, templateObject_2;
