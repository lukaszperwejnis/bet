"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var faker_1 = require("faker");
var components_1 = require("../../components/index");
var testsHelpers_1 = require("../../testsHelpers");
describe("<ToggleSwitch> component", function () {
    var initialProps = {
        value: "1",
        name: faker_1.default.random.word(),
        label: faker_1.default.random.word(),
        checked: false,
        onChange: jest.fn(),
        onBlur: jest.fn(),
    };
    var wrapper = enzyme_1.mount(<components_1.ToggleSwitch {...initialProps}/>);
    var input = wrapper.find("input[name=\"" + initialProps.name + "\"]");
    it("render <ToggleSwitch> component without crashing in default state", function () {
        expect(wrapper.find(components_1.ToggleSwitch).exists()).toBeTruthy();
        expect(testsHelpers_1.getPropertyFromComponent(input, "value")).toBe(initialProps.value);
        expect(testsHelpers_1.getPropertyFromComponent(input, "disabled")).toBeFalsy();
        expect(testsHelpers_1.getPropertyFromComponent(input, "checked")).toBeFalsy();
    });
    it("render <Radio> checked", function () {
        wrapper.setProps({ checked: true });
        expect(testsHelpers_1.getPropertyFromComponent(input, "checked")).toBeTruthy();
    });
    it("render <Radio> disabled", function () {
        wrapper.setProps({ disabled: true });
        expect(testsHelpers_1.getPropertyFromComponent(input, "disabled")).toBeTruthy();
    });
});
