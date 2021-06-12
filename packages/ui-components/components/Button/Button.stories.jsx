"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var addon_actions_1 = require("@storybook/addon-actions");
// eslint-disable-next-line import/no-extraneous-dependencies
var boxicons_regular_1 = require("@styled-icons/boxicons-regular");
var Button_1 = require("./Button");
var TrashIcon = styled_components_1.default(boxicons_regular_1.TrashAlt)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: red;\n"], ["\n  color: red;\n"])));
react_1.storiesOf("Button", module)
    .addDecorator(react_2.default)
    .add("default", function () { return (<Button_1.Button type={addon_knobs_1.select("type", {
        primary: Button_1.ColorType.Primary,
        secondary: Button_1.ColorType.Secondary,
        error: Button_1.ColorType.Error,
        warning: Button_1.ColorType.Warning,
        success: Button_1.ColorType.Success,
        empty: Button_1.ColorType.Empty,
    }, Button_1.ColorType.Primary)} disabled={addon_knobs_1.boolean("disabled", false)} isHollow={addon_knobs_1.boolean("isHollow", false)} onClick={addon_actions_1.action("clicked")}>
      Hello Button
    </Button_1.Button>); })
    .add("Empty with icon", function () { return (<Button_1.Button type={Button_1.ColorType.Primary} disabled={addon_knobs_1.boolean("disabled", false)} onClick={addon_actions_1.action("clicked")}>
      <TrashIcon style={{ width: "17px", height: "17px" }}/>
    </Button_1.Button>); });
var templateObject_1;
