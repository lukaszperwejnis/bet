"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const _pages_1 = require("@pages");
const _config_1 = require("@config");
const _hooks_1 = require("@hooks");
const _utils_1 = require("@utils");
const _components_1 = require("@components");
const PublicRoutes = () => (jsx_runtime_1.jsx(_pages_1.ErrorBoundary, { children: jsx_runtime_1.jsxs(react_router_dom_1.Switch, { children: [jsx_runtime_1.jsx(react_router_dom_1.Route, { path: _config_1.AppUrls.LOGIN.pattern, component: _pages_1.Login }, void 0),
            jsx_runtime_1.jsx(react_router_dom_1.Route, { path: _config_1.AppUrls.MAIL_INVITATION_SIGNUP.pattern, component: _pages_1.Signup }, void 0),
            jsx_runtime_1.jsx(react_router_dom_1.Route, { path: _config_1.AppUrls.RESET_PASSWORD.pattern, component: _pages_1.StartResetPassword }, void 0),
            jsx_runtime_1.jsx(react_router_dom_1.Route, { path: _config_1.AppUrls.SET_PASSWORD.pattern, component: _pages_1.ResetPassword }, void 0),
            jsx_runtime_1.jsx(react_router_dom_1.Redirect, { to: _config_1.AppUrls.LOGIN() }, void 0)] }, void 0) }, void 0));
const PrivateRoutes = () => (jsx_runtime_1.jsx(_pages_1.ErrorBoundary, { children: jsx_runtime_1.jsx(_components_1.Layout, { children: jsx_runtime_1.jsxs(react_router_dom_1.Switch, { children: [jsx_runtime_1.jsx(react_router_dom_1.Route, { path: _config_1.AppUrls.DASHBOARD.pattern, component: _pages_1.Dashboard }, void 0),
                jsx_runtime_1.jsx(react_router_dom_1.Redirect, { to: _config_1.AppUrls.DASHBOARD.pattern }, void 0)] }, void 0) }, void 0) }, void 0));
const Routes = () => {
    const [logged] = _hooks_1.useAuth();
    return (jsx_runtime_1.jsx(react_router_dom_1.Router, Object.assign({ history: _utils_1.history }, { children: logged ? jsx_runtime_1.jsx(PrivateRoutes, {}, void 0) : jsx_runtime_1.jsx(PublicRoutes, {}, void 0) }), void 0));
};
exports.Routes = Routes;
