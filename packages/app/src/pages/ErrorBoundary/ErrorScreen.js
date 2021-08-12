'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ErrorScreen = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const styled_components_1 = __importDefault(require('styled-components'));
const components_1 = require('../../components');
const config_1 = require('../../styles/config');
const ErrorPage = styled_components_1.default(components_1.Page)`
  flex-direction: column;
`;
const ErrorCode = styled_components_1.default.h2`
  color: ${config_1.config.color.doveGrey};
  font-weight: ${config_1.config.fontWeight.bolder};
  font-size: 60px;
  margin-bottom: ${config_1.config.spacing.big};
  font-family: ${config_1.config.fontFamily.primary};
`;
const Title = styled_components_1.default.h3`
  font-weight: ${config_1.config.fontWeight.bold};
  margin-bottom: ${config_1.config.spacing.small};
  color: ${config_1.config.color.textColor};
  font-family: ${config_1.config.fontFamily.primary};
`;
const ErrorScreen = () =>
  jsx_runtime_1.jsxs(
    ErrorPage,
    Object.assign(
      { centered: true },
      {
        children: [
          jsx_runtime_1.jsx(ErrorCode, { children: '500' }, void 0),
          jsx_runtime_1.jsx(
            Title,
            { children: 'Oops, co\u015B posz\u0142o nie tak' },
            void 0,
          ),
        ],
      },
    ),
    void 0,
  );
exports.ErrorScreen = ErrorScreen;
