"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var Input_1 = require("./Input");
react_1.storiesOf("Input", module)
    .addDecorator(react_2.default)
    .add("default", function () { return (<Input_1.Input disabled={addon_knobs_1.boolean("disabled", false)} isInvalid={addon_knobs_1.boolean("isInvalid", false)} placeholder={addon_knobs_1.text("placeholder", "placeholder")} type={addon_knobs_1.select("type", {
        text: "text",
        password: "password",
        email: "email",
        number: "number",
    }, "text")}/>); });
