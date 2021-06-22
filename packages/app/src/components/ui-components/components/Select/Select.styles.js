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
exports.Select = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const config_1 = require("../../../../styles/config");
exports.Select = styled_components_1.default.select `
  height: 34px;
  border: 1px solid ${config_1.config.color.secondary};
  font-size: ${config_1.config.fontSize.normal};
  padding: 0 ${config_1.config.spacing.big} 0 ${config_1.config.spacing.normal};
  color: ${config_1.config.color.textColor};
  background-size: 12px;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  border-radius: 4px;
  transition: opacity 0.25s ease-in-out;
  background: ${config_1.config.color.white}
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%3D5170' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 0.75rem center;
  background-size: 8px 10px;
  cursor: pointer;
  ${({ disabled }) => disabled &&
    styled_components_1.css `
      opacity: ${config_1.config.opacity.disabled};
      cursor: not-allowed;
    `};
`;
