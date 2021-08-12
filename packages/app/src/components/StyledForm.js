'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.StyledForm = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
const formik_1 = require('formik');
exports.StyledForm = styled_components_1.default(formik_1.Form)`
  width: 100%;
  text-align: left;
`;
