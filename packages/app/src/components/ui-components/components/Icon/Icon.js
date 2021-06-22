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
exports.Icon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const boxicons_solid_1 = require("@styled-icons/boxicons-solid");
const boxicons_regular_1 = require("@styled-icons/boxicons-regular");
const octicons_1 = require("@styled-icons/octicons");
const entypo_1 = require("@styled-icons/entypo");
const typicons_1 = require("@styled-icons/typicons");
const evaicons_outline_1 = require("@styled-icons/evaicons-outline");
const fa_solid_1 = require("@styled-icons/fa-solid");
require("./styles.css");
const errors_1 = require("../../../../errors");
const Icons = {
    dashboard: boxicons_solid_1.Dashboard,
    leftArrow: boxicons_solid_1.LeftArrowAlt,
    plusCircle: boxicons_regular_1.PlusCircle,
    organization: octicons_1.Organization,
    menu: boxicons_regular_1.Menu,
    users: entypo_1.Users,
    trash: boxicons_regular_1.TrashAlt,
    downArrow: boxicons_solid_1.DownArrow,
    logout: boxicons_regular_1.LogOut,
    infoCircle: boxicons_solid_1.InfoCircle,
    circleWithCross: entypo_1.CircleWithCross,
    warning: entypo_1.Warning,
    tick: typicons_1.Tick,
    search: boxicons_regular_1.Search,
    edit: evaicons_outline_1.EditOutline,
    arrows: fa_solid_1.ArrowsAltH,
    image: entypo_1.Image,
    phoneIncoming: boxicons_solid_1.PhoneIncoming,
};
const Icon = (_a) => {
    var { className, icon, type, size } = _a, otherProps = __rest(_a, ["className", "icon", "type", "size"]);
    const IconComponent = Icons[icon];
    if (!IconComponent) {
        throw new errors_1.InvalidIconError(icon);
    }
    const classNames = ['icon', `icon--${type}`, `icon--${size}`, className].join(' ');
    return jsx_runtime_1.jsx(IconComponent, Object.assign({ className: classNames }, otherProps), void 0);
};
exports.Icon = Icon;
exports.Icon.defaultProps = {
    type: 'default',
    size: 'normal',
};
