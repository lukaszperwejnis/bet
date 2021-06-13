"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var Message_1 = require("./Message");
react_1.storiesOf("Message", module)
    .addDecorator(react_2.default)
    .add("success", function () { return (<Message_1.Message root="root" type="success" text={addon_knobs_1.text("text", "Success message")}/>); })
    .add("error", function () { return (<Message_1.Message root="root" type="error" text={addon_knobs_1.text("text", "Error message")}/>); })
    .add("warning", function () { return (<Message_1.Message root="root" type="warning" text={addon_knobs_1.text("text", "Warning message")}/>); })
    .add("primary", function () { return (<Message_1.Message root="root" type="info" text={addon_knobs_1.text("text", "Info message")}/>); });
