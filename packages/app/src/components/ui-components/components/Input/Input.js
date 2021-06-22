"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const config_1 = require("../../../../styles/config");
exports.Input = styled_components_1.default.input `
  border: 1px solid ${config_1.config.color.secondary};
  border-radius: 4px;
  color: ${config_1.config.color.textColor};
  font-size: ${config_1.config.fontSize.normal};
  padding: 7px 12px;
  font-family: ${config_1.config.fontFamily.primary};
  outline: none;
  min-width: 0;
  transition: opacity 0.25s ease-in-out;
  ${(props) => props.isInvalid &&
    styled_components_1.css `
      border-color: ${config_1.config.color.guardsmanRed};
    `};
  ${(props) => props.disabled &&
    styled_components_1.css `
      opacity: ${config_1.config.opacity.disabled};
      background-color: transparent;
    `};
`;
exports.Input.defaultProps = {
    type: 'text',
};
