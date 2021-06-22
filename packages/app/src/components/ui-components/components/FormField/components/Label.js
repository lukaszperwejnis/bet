"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const _styles_1 = require("@styles");
exports.Label = styled_components_1.default.label `
  margin-bottom: ${_styles_1.config.spacing.small};
  font-size: ${_styles_1.config.fontSize.normal};
  color: ${_styles_1.config.color.textColor};
  font-weight: ${_styles_1.config.fontWeight.bold};
  font-family: ${_styles_1.config.fontFamily.primary};
  letter-spacing: 0.2px;
`;
