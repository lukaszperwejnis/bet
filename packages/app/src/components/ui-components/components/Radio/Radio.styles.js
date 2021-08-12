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
  exports.Inner =
  exports.Radio =
  exports.Wrapper =
  exports.RadioInput =
    void 0;
const styled_components_1 = __importStar(require('styled-components'));
const config_1 = require('../../../../styles/config');
exports.RadioInput = styled_components_1.default.input`
  position: absolute;
  left: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: visible;
`;
exports.RadioInput.defaultProps = {
  type: 'radio',
};
exports.Wrapper = styled_components_1.default.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    styled_components_1.css`
      opacity: ${config_1.config.opacity.disabled};
      cursor: not-allowed;
      ${exports.RadioInput} {
        cursor: not-allowed;
      }
    `}
`;
exports.Radio = styled_components_1.default.span`
  position: relative;
  font-size: ${config_1.config.fontSize.normal};
`;
exports.Inner = styled_components_1.default.span`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background: ${config_1.config.color.white};
  border: 1px solid ${config_1.config.color.secondary};

  ${(props) =>
    props.checked &&
    styled_components_1.css`
      &:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color: ${config_1.config.color.primary};
        border-radius: 50%;
      }

      &:after {
        position: absolute;
        width: 10px;
        height: 10px;
        left: 4px;
        top: 4px;
        border-radius: 100%;
        display: table;
        content: '';
        background-color: ${config_1.config.color.white};
      }
    `}
`;
exports.Label = styled_components_1.default.span`
  font-family: ${config_1.config.fontFamily.primary};
  color: ${config_1.config.color.textColor};
  margin-left: ${config_1.config.spacing.small};
  font-size: ${config_1.config.fontSize.small};
`;
