"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTracker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const ui_components_1 = require("@bet/ui-components");
const MessageTracker = () => {
    const messages = react_redux_1.useSelector((store) => store.messages);
    return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: messages.map((_a) => {
            var { key } = _a, otherProps = __rest(_a, ["key"]);
            return (jsx_runtime_1.jsx(ui_components_1.Message, Object.assign({ root: "messages-root" }, otherProps), key));
        }) }, void 0));
};
exports.MessageTracker = MessageTracker;
