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
import { jsx as _jsx } from "react/jsx-runtime";
import { Dashboard as dashboard, LeftArrowAlt as leftArrow, DownArrow as downArrow, InfoCircle as infoCircle, PhoneIncoming as phoneIncoming, } from '@styled-icons/boxicons-solid';
import { PlusCircle as plusCircle, LogOut as logout, Search as search, Menu as menu, TrashAlt as trash, } from '@styled-icons/boxicons-regular';
import { Organization as organization } from '@styled-icons/octicons';
import { Users as users, CircleWithCross as circleWithCross, Warning as warning, Image as image, } from '@styled-icons/entypo';
import { Tick as tick } from '@styled-icons/typicons';
import { EditOutline as edit } from '@styled-icons/evaicons-outline';
import { ArrowsAltH as arrows } from '@styled-icons/fa-solid';
import './styles.css';
import { InvalidIconError } from '../../../../errors';
const Icons = {
    dashboard,
    leftArrow,
    plusCircle,
    organization,
    menu,
    users,
    trash,
    downArrow,
    logout,
    infoCircle,
    circleWithCross,
    warning,
    tick,
    search,
    edit,
    arrows,
    image,
    phoneIncoming,
};
export const Icon = (_a) => {
    var { className, icon, type, size } = _a, otherProps = __rest(_a, ["className", "icon", "type", "size"]);
    const IconComponent = Icons[icon];
    if (!IconComponent) {
        throw new InvalidIconError(icon);
    }
    const classNames = ['icon', `icon--${type}`, `icon--${size}`, className].join(' ');
    return _jsx(IconComponent, Object.assign({ className: classNames }, otherProps), void 0);
};
Icon.defaultProps = {
    type: 'default',
    size: 'normal',
};
