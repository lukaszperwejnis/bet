"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamWrapper = exports.Wrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Wrapper = styled_components_1.default.div `
  & + & {
    margin-top: 15px;
  }
`;
exports.TeamWrapper = styled_components_1.default.div `
  & + & {
    margin-top: 5px;
  }
`;
