"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const react_dom_1 = __importDefault(require("react-dom"));
const react_intl_1 = require("react-intl");
const index_1 = require("@stores/index");
const _pages_1 = require("@pages");
const _utils_1 = require("@utils");
const routes_1 = require("./routes/routes");
const App = () => (jsx_runtime_1.jsx(react_intl_1.RawIntlProvider, Object.assign({ value: _utils_1.intl }, { children: jsx_runtime_1.jsxs(react_redux_1.Provider, Object.assign({ store: index_1.rootStore }, { children: [jsx_runtime_1.jsx(routes_1.Routes, {}, void 0),
            jsx_runtime_1.jsx(_pages_1.MessageTracker, {}, void 0)] }), void 0) }), void 0));
react_dom_1.default.render(jsx_runtime_1.jsx(App, {}, void 0), document.getElementById('root'));
