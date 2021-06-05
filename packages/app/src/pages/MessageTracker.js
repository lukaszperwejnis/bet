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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useSelector } from 'react-redux';
import { Message as MessageComponent } from '@bet/ui-components';
export const MessageTracker = () => {
    const messages = useSelector((store) => store.messages);
    return (_jsx(_Fragment, { children: messages.map((_a) => {
            var { key } = _a, otherProps = __rest(_a, ["key"]);
            return (_jsx(MessageComponent, Object.assign({ root: "messages-root" }, otherProps), key));
        }) }, void 0));
};
