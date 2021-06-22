"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormField = exports.FormComponents = void 0;
const components_1 = require("./components");
const Input_1 = require("./Input");
const Radio_1 = require("./Radio");
const ToggleSwitch_1 = require("./ToggleSwitch");
const Select_1 = require("./Select");
const Checkbox_1 = require("./Checkbox");
exports.FormComponents = {
    Description: components_1.Description,
    Error: components_1.Error,
    Label: components_1.Label,
    Wrapper: components_1.Wrapper,
};
exports.FormField = {
    Input: Input_1.Input,
    Radio: Radio_1.Radio,
    ToggleSwitch: ToggleSwitch_1.ToggleSwitch,
    Select: Select_1.Select,
    Checkbox: Checkbox_1.Checkbox,
};
