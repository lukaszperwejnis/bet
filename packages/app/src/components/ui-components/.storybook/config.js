"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var req = require.context('../components', true, /\.stories\.tsx$/);
function loadStories() {
    req.keys().forEach(function (filename) { return req(filename); });
}
react_1.configure(loadStories, module);
react_1.addDecorator(addon_knobs_1.withKnobs);
