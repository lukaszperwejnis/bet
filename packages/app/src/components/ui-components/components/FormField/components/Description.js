'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Description = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
const _styles_1 = require('@styles');
exports.Description = styled_components_1.default.span`
  color: ${_styles_1.config.color.textColor};
  font-size: ${_styles_1.config.fontSize.small};
  margin: ${_styles_1.config.spacing.small} 0;
  font-family: ${_styles_1.config.fontFamily.primary};
  letter-spacing: 0.2px;
`;
