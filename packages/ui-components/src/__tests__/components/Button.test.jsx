"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var faker_1 = require("faker");
require("jest-styled-components");
var components_1 = require("../../components/index");
var styles_config_1 = require("../../styles/styles-config");
var testsHelpers_1 = require("../../testsHelpers");
describe("<Button> component", function () {
    it("render <Button> component without crashing", function () {
        var _a = getWrapperAndComponent(), wrapper = _a.wrapper, component = _a.component;
        expect(wrapper.find(components_1.Button).exists()).toBeTruthy();
        expect(wrapper.prop("type")).toBe("primary");
        expect(component).toHaveStyleRule("background-color", styles_config_1.stylesConfig.color.primary);
        expect(component).toHaveStyleRule("type", undefined);
    });
    it("render <Button> as button type", function () {
        var component = getWrapperAndComponent({ htmlType: "button" }).component;
        expect(testsHelpers_1.getPropertyFromComponent(component, "type")).toBe("button");
    });
    it("render <Button> as secondary", function () {
        var _a = getWrapperAndComponent({
            type: "secondary",
        }), wrapper = _a.wrapper, component = _a.component;
        expect(wrapper.prop("type")).toBe("secondary");
        expect(component).toHaveStyleRule("background-color", styles_config_1.stylesConfig.color.secondary);
    });
    it("render <Button> as error", function () {
        var _a = getWrapperAndComponent({ type: "error" }), wrapper = _a.wrapper, component = _a.component;
        expect(wrapper.prop("type")).toBe("error");
        expect(component).toHaveStyleRule("background-color", styles_config_1.stylesConfig.color.error);
    });
    it("render <Button> as success", function () {
        var _a = getWrapperAndComponent({ type: "success" }), wrapper = _a.wrapper, component = _a.component;
        expect(wrapper.prop("type")).toBe("success");
        expect(component).toHaveStyleRule("background-color", styles_config_1.stylesConfig.color.success);
    });
    it("render <Button> as warning", function () {
        var _a = getWrapperAndComponent({ type: "warning" }), wrapper = _a.wrapper, component = _a.component;
        expect(wrapper.prop("type")).toBe("warning");
        expect(component).toHaveStyleRule("background-color", styles_config_1.stylesConfig.color.warning);
    });
    it("render <Button> as empty", function () {
        var _a = getWrapperAndComponent({ type: "empty" }), wrapper = _a.wrapper, component = _a.component;
        expect(wrapper.prop("type")).toBe("empty");
        expect(component).toHaveStyleRule("background-color", undefined);
    });
    it("render <Button> as disabled", function () {
        var _a = getWrapperAndComponent({ disabled: true }), wrapper = _a.wrapper, component = _a.component;
        expect(wrapper.prop("disabled")).toBeTruthy();
        expect(testsHelpers_1.getPropertyFromComponent(component, "disabled")).toBeTruthy();
    });
    it("render <Button> as hollow", function () {
        var wrapper = getWrapperAndComponent({ isHollow: true }).wrapper;
        expect(wrapper.prop("isHollow")).toBeTruthy();
    });
});
function getWrapperAndComponent(props) {
    var mockedOnClick = jest.fn();
    var mockedChildren = faker_1.default.random.word();
    var wrapper = enzyme_1.mount(<components_1.Button onClick={mockedOnClick} {...props}>
      {mockedChildren}
    </components_1.Button>);
    return { wrapper: wrapper, component: wrapper.find("button") };
}
