"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const ErrorScreen_1 = require("./ErrorScreen");
class ErrorBoundary extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            hasError: false,
        };
    }
    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }
    render() {
        return this.state.hasError ? jsx_runtime_1.jsx(ErrorScreen_1.ErrorScreen, {}, void 0) : this.props.children;
    }
}
exports.ErrorBoundary = ErrorBoundary;
