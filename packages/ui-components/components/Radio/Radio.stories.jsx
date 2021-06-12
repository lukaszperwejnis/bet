"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var addon_actions_1 = require("@storybook/addon-actions");
var Radio_1 = require("./Radio");
react_1.storiesOf("Radio", module)
    .addDecorator(react_2.default)
    .add("default", function () { return (<Radio_1.Radio value="1" name="radio" disabled={addon_knobs_1.boolean("disabled", false)} checked={addon_knobs_1.boolean("checked", false)} label={addon_knobs_1.text("label", "Label")} onChange={addon_actions_1.action("onChange")} onBlur={addon_actions_1.action("onBlur")}/>); });
