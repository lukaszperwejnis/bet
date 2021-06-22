"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButton = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const polished_1 = require("polished");
const _styles_1 = require("@styles");
exports.StyledButton = styled_components_1.default.button `
  border: none;
  border-radius: 4px;
  color: ${_styles_1.config.color.white};
  font-size: ${_styles_1.config.fontSize.small};
  padding: ${_styles_1.config.spacing.small};
  transition-property: background-color, border, color, opacity;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.27, 0.01, 0.38, 1.06);
  will-change: background-color, border, color, opacity;
  font-family: ${_styles_1.config.fontFamily.primary};
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
  }

  @media ${_styles_1.breakpoints.tabletUp} {
    font-size: ${_styles_1.config.fontSize.normal};
  }

  ${({ disabled }) => disabled &&
    styled_components_1.css `
      opacity: ${_styles_1.config.opacity.disabled};
      cursor: auto;
    `};

  ${({ colorType }) => colorType === 'primary' &&
    styled_components_1.css `
      background-color: ${_styles_1.config.color.primary};
      &:hover {
        background-color: ${polished_1.lighten(0.1, _styles_1.config.color.primary)};
      }
    `};

  ${({ colorType, isHollow }) => colorType === 'primary' &&
    isHollow &&
    styled_components_1.css `
      color: ${_styles_1.config.color.primary};
      border-color: ${_styles_1.config.color.primary};
      &:hover {
        background-color: ${_styles_1.config.color.primary};
      }
    `};
  ${({ colorType }) => colorType === 'secondary' &&
    styled_components_1.css `
      color: ${_styles_1.config.color.textColor};
      background-color: ${_styles_1.config.color.secondary};
      &:hover {
        background-color: ${polished_1.darken(0.1, _styles_1.config.color.secondary)};
      }
    `};

  ${({ colorType, isHollow }) => colorType === 'secondary' &&
    isHollow &&
    styled_components_1.css `
      color: ${_styles_1.config.color.secondary};
      border-color: ${_styles_1.config.color.secondary};
      &:hover {
        background-color: ${_styles_1.config.color.secondary};
      }
    `};
  ${({ colorType }) => colorType === 'error' &&
    styled_components_1.css `
      background-color: ${_styles_1.config.color.guardsmanRed};
      &:hover {
        background-color: ${polished_1.lighten(0.1, _styles_1.config.color.guardsmanRed)};
      }
    `};

  ${({ colorType, isHollow }) => colorType === 'error' &&
    isHollow &&
    styled_components_1.css `
      color: ${_styles_1.config.color.guardsmanRed};
      border-color: ${_styles_1.config.color.guardsmanRed};
      &:hover {
        background-color: ${_styles_1.config.color.guardsmanRed};
      }
    `};

  ${({ colorType }) => colorType === 'warning' &&
    styled_components_1.css `
      background-color: ${_styles_1.config.color.warning};
      &:hover {
        background-color: ${polished_1.lighten(0.1, _styles_1.config.color.warning)};
      }
    `};

  ${({ colorType, isHollow }) => colorType === 'warning' &&
    isHollow &&
    styled_components_1.css `
      color: ${_styles_1.config.color.warning};
      border-color: ${_styles_1.config.color.warning};
      &:hover {
        background-color: ${_styles_1.config.color.warning};
      }
    `};

  ${({ colorType }) => colorType === 'success' &&
    styled_components_1.css `
      background-color: ${_styles_1.config.color.success};
      &:hover {
        background-color: ${polished_1.lighten(0.1, _styles_1.config.color.success)};
      }
    `};

  ${({ colorType, isHollow }) => colorType === 'success' &&
    isHollow &&
    styled_components_1.css `
      color: ${_styles_1.config.color.success};
      border-color: ${_styles_1.config.color.success};
      &:hover {
        background-color: ${_styles_1.config.color.success};
      }
    `};

  ${({ colorType }) => colorType === 'empty' &&
    styled_components_1.css `
      margin: 0;
      background: none;
      padding: 0;
      min-width: auto;

      &:hover {
        background: none;
        opacity: 0.7;
      }
    `};

  ${({ isHollow }) => isHollow &&
    styled_components_1.css `
      background-color: ${_styles_1.config.color.white};
      border: 1px solid;
      &:hover {
        color: ${_styles_1.config.color.white};
      }
    `};
`;
