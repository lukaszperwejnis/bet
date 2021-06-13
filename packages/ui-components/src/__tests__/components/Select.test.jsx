"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var faker_1 = require("faker");
var components_1 = require("../../components/index");
var testsHelpers_1 = require("../../testsHelpers");
describe("<Select> component", function () {
    var value = faker_1.default.random.word();
    var initialProps = {
        name: faker_1.default.random.word(),
        value: value,
        onChange: jest.fn(),
        placeholder: faker_1.default.random.word(),
        options: [
            {
                name: faker_1.default.random.word(),
                value: value,
            },
            {
                name: faker_1.default.random.word(),
                value: faker_1.default.random.word(),
            },
            {
                name: faker_1.default.random.word(),
                value: faker_1.default.random.word(),
            },
        ],
    };
    var wrapper = enzyme_1.mount(<components_1.Select {...initialProps}/>);
    var select = wrapper.find("select[name=\"" + initialProps.name + "\"]");
    it("render <Select> component without crashing", function () {
        expect(wrapper.find(components_1.Select).exists()).toBeTruthy();
        expect(select.exists()).toBeTruthy();
        expect(testsHelpers_1.getPropertyFromComponent(select, "value")).toBe(initialProps.value);
        expect(testsHelpers_1.getPropertyFromComponent(select, "disabled")).toBeFalsy();
    });
    it("render <Select> component disabled", function () {
        wrapper.setProps({ disabled: true });
        expect(testsHelpers_1.getPropertyFromComponent(select, "disabled")).toBeTruthy();
    });
});
