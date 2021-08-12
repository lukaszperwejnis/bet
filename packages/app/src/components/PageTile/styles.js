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
exports.Description = exports.Header = exports.StyledTile = void 0;
const styled_components_1 = __importStar(require('styled-components'));
const ui_components_1 = require('@bet/ui-components');
const _styles_1 = require('@styles');
exports.StyledTile = styled_components_1.default(ui_components_1.Tile)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  min-height: 300px;
  padding: ${_styles_1.config.spacing.big};
  font-family: ${_styles_1.config.fontFamily.primary};
  color: ${_styles_1.config.color.textColor};

  ${({ isLoading }) =>
    isLoading &&
    styled_components_1.css`
      &:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color: white;
        opacity: 0.8;
        z-index: 1;
      }
    `};
`;
exports.Header = styled_components_1.default.h3`
  font-size: ${_styles_1.config.fontSize.large};
  margin-top: 0;
`;
exports.Description = styled_components_1.default.div`
  width: 100%;
  text-align: center;
`;
