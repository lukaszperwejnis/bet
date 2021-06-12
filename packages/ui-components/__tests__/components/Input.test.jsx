"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var faker_1 = require("faker");
var components_1 = require("../../components");
var testsHelpers_1 = require("../../testsHelpers");
describe("<Input> component", function () {
    var initialProps = {
        name: faker_1.default.random.word(),
        placeholder: faker_1.default.random.word(),
        defaultValue: faker_1.default.random.word(),
    };
    var wrapper = enzyme_1.mount(<components_1.Input {...initialProps}/>);
    var input = wrapper.find("input[name=\"" + initialProps.name + "\"]");
    it("render <Input> component without crashing", function () {
        expect(wrapper.find(components_1.Input).exists()).toBeTruthy();
        expect(testsHelpers_1.getPropertyFromComponent(input, "value")).toBe(initialProps.defaultValue);
        expect(testsHelpers_1.getPropertyFromComponent(input, "type")).toBe("text");
        expect(testsHelpers_1.getPropertyFromComponent(input, "disabled")).toBeFalsy();
    });
    it("render <Checkbox> component disabled", function () {
        wrapper.setProps({ disabled: true });
        expect(wrapper.prop("disabled")).toBeTruthy();
        expect(testsHelpers_1.getPropertyFromComponent(input, "disabled")).toBeTruthy();
    });
    it("render <Checkbox> changed type to password", function () {
        wrapper.setProps({ type: "password" });
        expect(testsHelpers_1.getPropertyFromComponent(input, "type")).toBe("password");
    });
});
