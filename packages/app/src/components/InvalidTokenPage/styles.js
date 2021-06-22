"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTile = void 0;
const ui_components_1 = require("@bet/ui-components");
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledTile = styled_components_1.default(ui_components_1.Tile) `
  width: 300px;
  height: 300px;
`;
