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
exports.Label =
  exports.Wrapper =
  exports.Inner =
  exports.CheckboxInput =
    void 0;
const styled_components_1 = __importStar(require('styled-components'));
const config_1 = require('../../../../styles/config');
const mixins_1 = require('../../../../styles/mixins');
exports.CheckboxInput = styled_components_1.default.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;
exports.CheckboxInput.defaultProps = {
  type: 'checkbox',
};
exports.Inner = styled_components_1.default.label`
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    width: 16px;
    height: 16px;
    background-color: ${config_1.config.color.white};
    border: 1px solid ${config_1.config.color.secondary};
    user-select: none;
    border-radius: 2px;
    pointer-events: all;
    transition-property: background-image, background-color, border-color,
      box-shadow;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.27, 0.01, 0.38, 1.06);
  }

  ${exports.CheckboxInput}:checked ~ &:before {
    background-image: none;
    background-color: ${config_1.config.color.primary};
    color: ${config_1.config.color.white};
    border-color: transparent;
    box-shadow: none;
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    left: 6px;
    width: 5px;
    height: 11px;
    opacity: 0;
    transform: rotate(45deg) scale(0);
    border-right: 2px solid ${config_1.config.color.white};
    border-bottom: 2px solid ${config_1.config.color.white};
    transition: transform 0.25s cubic-bezier(0.27, 0.01, 0.38, 1.06);
    background-size: 50% 50%;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  ${exports.CheckboxInput}:checked ~ &:after {
    opacity: 1;
    -webkit-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    background-image: none;
  }
`;
exports.Wrapper = styled_components_1.default.label`
  position: relative;
  display: flex;
  height: 18px;
  transition: opacity 0.25s ease-in-out;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    styled_components_1.css`
      opacity: ${config_1.config.opacity.disabled};
      cursor: not-allowed;
      ${exports.Inner} {
        cursor: not-allowed;
      }
    `}

  & + & {
    margin-top: ${config_1.config.spacing.small};
  }
`;
exports.Label = styled_components_1.default.span`
  font-family: ${config_1.config.fontFamily.primary};
  color: ${config_1.config.color.textColor};
  font-size: ${config_1.config.fontSize.normal};
  ${mixins_1.truncate}
`;
