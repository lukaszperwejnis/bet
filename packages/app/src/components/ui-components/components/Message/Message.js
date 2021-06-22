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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_dom_1 = __importDefault(require("react-dom"));
const _structures_1 = require("@structures");
const Message_styles_1 = require("./Message.styles");
require("./message.css");
const defaultProps = Object.freeze({
    root: 'message-root',
    duration: 3,
});
const Icons = {
    [_structures_1.Message.Type.Success]: jsx_runtime_1.jsx(Message_styles_1.Success, { icon: "tick" }, void 0),
    [_structures_1.Message.Type.Error]: jsx_runtime_1.jsx(Message_styles_1.Error, { icon: "circleWithCross" }, void 0),
    [_structures_1.Message.Type.Warning]: jsx_runtime_1.jsx(Message_styles_1.Warning, { icon: "warning" }, void 0),
    [_structures_1.Message.Type.Info]: jsx_runtime_1.jsx(Message_styles_1.Info, { icon: "infoCircle" }, void 0),
};
const MessageComponent = ({ type, text }) => {
    const icon = Icons[type];
    return (jsx_runtime_1.jsxs(Message_styles_1.Container, Object.assign({ type: type }, { children: [icon, text] }), void 0));
};
const Message = (_a) => {
    var { root } = _a, otherProps = __rest(_a, ["root"]);
    const rootContainer = document.getElementById(root);
    const el = document.createElement('div');
    el.className = 'c-message__root';
    react_1.useEffect(() => {
        if (rootContainer) {
            rootContainer.appendChild(el);
        }
        return () => {
            if (rootContainer) {
                rootContainer.removeChild(el);
            }
        };
    }, []);
    return react_dom_1.default.createPortal(jsx_runtime_1.jsx(MessageComponent, Object.assign({}, otherProps), void 0), el);
};
exports.Message = Message;
exports.Message.defaultProps = defaultProps;
