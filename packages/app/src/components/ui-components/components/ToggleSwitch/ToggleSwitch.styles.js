'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Root = exports.Label = exports.Inner = exports.CheckboxInput = void 0;
const styled_components_1 = __importStar(require('styled-components'));
const config_1 = require('../../../../styles/config');
exports.CheckboxInput = styled_components_1.default.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;
exports.CheckboxInput.defaultProps = Object.freeze({
  type: 'checkbox',
});
exports.Inner = styled_components_1.default.label`
  &:before {
    position: absolute;
    content: '';
    top: 0;
    display: block;
    width: 35px;
    height: 16px;
    background: ${config_1.config.color.white};
    border: 1px solid ${config_1.config.color.secondary};
    border-radius: 100px;
    will-change: background-color, border-color;
    transition-property: background-color, border-color;
    transition-duration: 350ms;
  }

  &:after {
    content: '';
    position: absolute;
    background: ${config_1.config.color.secondary};
    border-radius: 100px;
    top: 3px;
    left: 4px;
    width: 12px;
    height: 12px;
    will-change: background-color, transform;
    transition-property: background-color, transform;
    transition-duration: 350ms;
  }

  ${({ disabled }) =>
    disabled &&
    styled_components_1.css`
      cursor: not-allowed;
      opacity: ${config_1.config.opacity.disabled};
    `};
`;
exports.Label = styled_components_1.default.span`
  font-size: ${config_1.config.fontSize.normal};
  font-family: ${config_1.config.fontFamily.primary};
  color: ${config_1.config.color.textColor};
  padding-left: 45px;
  cursor: pointer;
`;
exports.Root = styled_components_1.default.label`
  position: relative;
  display: flex;

  ${exports.CheckboxInput}:checked ~ ${exports.Inner}:before {
    background-color: ${config_1.config.color.primary};
    border-color: ${config_1.config.color.primary};
  }

  ${exports.CheckboxInput}:checked ~ ${exports.Inner}:after {
    background-color: ${config_1.config.color.white};
    transform: translateX(100%);
    left: 10px;
  }
`;
