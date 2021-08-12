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
exports.Info =
  exports.Warning =
  exports.Error =
  exports.Success =
  exports.Container =
    void 0;
const styled_components_1 = __importStar(require('styled-components'));
const _structures_1 = require('@structures');
const Icon_1 = require('../Icon/Icon');
const config_1 = require('../../../../styles/config');
const iconMixin = `
    width: 30px;
    margin-right: ${config_1.config.spacing.normal};
`;
const messageTypeColorDictionary = {
  [_structures_1.Message.Type.Success]: config_1.config.color.success,
  [_structures_1.Message.Type.Error]: config_1.config.color.error,
  [_structures_1.Message.Type.Warning]: config_1.config.color.warning,
  [_structures_1.Message.Type.Info]: config_1.config.color.primary,
};
exports.Container = styled_components_1.default.div`
  display: flex;
  align-items: center;
  background-color: ${config_1.config.color.white};
  border-radius: 4px;
  padding: ${config_1.config.spacing.extraSmall} ${
  config_1.config.spacing.normal
};
  box-shadow: ${config_1.config.boxShadow};
  font-family: ${config_1.config.fontFamily.primary};
  font-size: ${config_1.config.fontSize.small};
  border: 1px solid;
  ${(props) => styled_components_1.css`
    border-color: ${messageTypeColorDictionary[props.type]};
    color: ${messageTypeColorDictionary[props.type]};
  `}
`;
exports.Success = styled_components_1.default(Icon_1.Icon)`
  &&& {
    color: ${config_1.config.color.success};
    ${iconMixin};
  }
`;
exports.Error = styled_components_1.default(Icon_1.Icon)`
  &&& {
    color: ${config_1.config.color.error};
    ${iconMixin};
  }
`;
exports.Warning = styled_components_1.default(Icon_1.Icon)`
  &&& {
    color: ${config_1.config.color.error};
    ${iconMixin};
  }
`;
exports.Info = styled_components_1.default(Icon_1.Icon)`
  &&& {
    color: ${config_1.config.color.primary};
    ${iconMixin};
  }
`;
