"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var faker_1 = require("faker");
var components_1 = require("../../components/index");
var testsHelpers_1 = require("../../testsHelpers");
describe("<Radio> component", function () {
    var initialProps = {
        name: faker_1.default.random.word(),
        label: faker_1.default.random.word(),
        value: faker_1.default.random.word(),
        onChange: jest.fn(),
        checked: false,
    };
    var wrapper = enzyme_1.mount(<components_1.Radio {...initialProps}/>);
    var input = wrapper.find("input[name=\"" + initialProps.name + "\"]");
    it("render <Radio> component without crashing", function () {
        expect(wrapper.find(components_1.Radio).exists()).toBeTruthy();
        expect(input.exists()).toBeTruthy();
        expect(testsHelpers_1.getPropertyFromComponent(input, "value")).toBe(initialProps.value);
        expect(wrapper.find('[data-radio-role="label"]').last().text()).toBe(initialProps.label);
    });
    it("render <Radio> component disabled", function () {
        wrapper.setProps({ disabled: true });
        expect(testsHelpers_1.getPropertyFromComponent(input, "disabled")).toBeTruthy();
    });
    it("render <Radio> component checked", function () {
        wrapper.setProps({ checked: true });
        expect(testsHelpers_1.getPropertyFromComponent(input, "checked")).toBeTruthy();
    });
});
