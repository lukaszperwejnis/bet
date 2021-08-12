'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Error = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
const _styles_1 = require('@styles');
exports.Error = styled_components_1.default.span`
  margin-top: ${_styles_1.config.spacing.extraSmall};
  font-size: ${_styles_1.config.fontSize.small};
  color: ${_styles_1.config.color.guardsmanRed};
  font-family: ${_styles_1.config.fontFamily.primary};
  letter-spacing: 0.2px;
  text-align: left;
`;
