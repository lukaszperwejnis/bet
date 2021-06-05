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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Message as MessageStructure } from '@structures';
import { Container, Success, Error, Warning, Info } from './Message.styles';
import './message.css';
const defaultProps = Object.freeze({
    root: 'message-root',
    duration: 3,
});
const Icons = {
    [MessageStructure.Type.Success]: _jsx(Success, { icon: "tick" }, void 0),
    [MessageStructure.Type.Error]: _jsx(Error, { icon: "circleWithCross" }, void 0),
    [MessageStructure.Type.Warning]: _jsx(Warning, { icon: "warning" }, void 0),
    [MessageStructure.Type.Info]: _jsx(Info, { icon: "infoCircle" }, void 0),
};
const MessageComponent = ({ type, text }) => {
    const icon = Icons[type];
    return (_jsxs(Container, Object.assign({ type: type }, { children: [icon, text] }), void 0));
};
export const Message = (_a) => {
    var { root } = _a, otherProps = __rest(_a, ["root"]);
    const rootContainer = document.getElementById(root);
    const el = document.createElement('div');
    el.className = 'c-message__root';
    useEffect(() => {
        if (rootContainer) {
            rootContainer.appendChild(el);
        }
        return () => {
            if (rootContainer) {
                rootContainer.removeChild(el);
            }
        };
    }, []);
    return ReactDOM.createPortal(_jsx(MessageComponent, Object.assign({}, otherProps), void 0), el);
};
Message.defaultProps = defaultProps;
