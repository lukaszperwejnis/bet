"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const _styles_1 = require("@styles");
exports.Loader = styled_components_1.default.div `
  position: absolute;
  margin: 60px auto;
  font-size: 10px;
  text-indent: -9999em;
  border-top: 1.1em solid ${_styles_1.config.color.primary};
  border-right: 1.1em solid ${_styles_1.config.color.primary};
  border-bottom: 1.1em solid ${_styles_1.config.color.primary};
  border-left: 1.1em solid ${_styles_1.config.color.white};
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
  z-index: 1;

  &,
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
