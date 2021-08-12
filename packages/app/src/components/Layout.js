'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Layout = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
const breakpoints_1 = require('../styles/breakpoints');
exports.Layout = styled_components_1.default.main`
  @media ${breakpoints_1.breakpoints.tabletOnly} {
    margin-left: 200px;
  }

  @media ${breakpoints_1.breakpoints.desktopUp} {
    margin-left: 275px;
  }
`;
