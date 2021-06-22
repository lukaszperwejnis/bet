"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submit = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const ui_components_1 = require("@bet/ui-components");
const _styles_1 = require("@styles");
exports.Submit = styled_components_1.default(ui_components_1.Button) `
  margin-top: ${_styles_1.config.spacing.huge};
  width: 100%;
`;
exports.Submit.defaultProps = {
    htmlType: 'submit',
};
