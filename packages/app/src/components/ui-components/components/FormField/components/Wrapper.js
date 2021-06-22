"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const _styles_1 = require("@styles");
exports.Wrapper = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  & + & {
    margin-top: ${_styles_1.config.spacing.normal};
  }
`;
