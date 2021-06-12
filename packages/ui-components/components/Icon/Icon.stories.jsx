"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var Icon_1 = require("./Icon");
react_1.storiesOf("Icon", module)
    .addDecorator(react_2.default)
    .add("default", function () { return (<Icon_1.Icon size={addon_knobs_1.select("size", {
        small: "small",
        normal: "normal",
        large: "large",
    }, "normal")} icon={addon_knobs_1.select("icon", {
        dashboard: "dashboard",
        leftArrow: "leftArrow",
        plusCircle: "plusCircle",
        organization: "organization",
        menu: "menu",
        users: "users",
        trash: "trash",
        downArrow: "downArrow",
        logout: "logout",
        infoCircle: "infoCircle",
        circleWithCross: "circleWithCross",
        warning: "warning",
        tick: "tick",
        search: "search",
        edit: "edit",
        arrows: "arrows",
        image: "image",
        phoneIncoming: "phoneIncoming",
        unknown: "unknown",
    }, "dashboard")} type={addon_knobs_1.select("type", {
        default: "default",
        primary: "primary",
        secondary: "secondary",
        error: "error",
    }, "default")}/>); });
