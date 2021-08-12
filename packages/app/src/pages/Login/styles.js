'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Error = exports.PasswordRestLink = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
const react_router_dom_1 = require('react-router-dom');
const _styles_1 = require('@styles');
const ui_components_1 = require('@bet/ui-components');
exports.PasswordRestLink = styled_components_1.default(react_router_dom_1.Link)`
  display: block;
  margin-top: ${_styles_1.config.spacing.large};
  text-decoration: none;
  font-family: ${_styles_1.config.fontFamily.primary};
  color: ${_styles_1.config.color.textColor};
  font-size: ${_styles_1.config.fontSize.normal};
`;
exports.Error = styled_components_1.default(
  ui_components_1.FormComponents.Error,
)`
  display: block;
  margin-top: ${_styles_1.config.spacing.large};
  font-size: ${_styles_1.config.fontSize.normal};
`;
