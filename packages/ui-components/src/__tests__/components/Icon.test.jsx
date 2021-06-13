"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var faker_1 = require("faker");
var Icon_1 = require("../../components/Icon/Icon");
describe("<Icon> component", function () {
    var wrapper = enzyme_1.mount(<Icon_1.Icon icon="dashboard"/>);
    var component = wrapper.find("svg");
    it("render <Icon> component without crashing", function () {
        expect(component.hasClass("icon--default"));
        expect(component.hasClass("icon--normal"));
    });
    it("render <Icon> changed size to small", function () {
        wrapper.setProps({ size: "small" });
        expect(component.hasClass("icon--small"));
    });
    it("render <Icon> changed size to large", function () {
        wrapper.setProps({ size: "large" });
        expect(component.hasClass("icon--large"));
    });
    it("render <Icon> changed type to primary", function () {
        wrapper.setProps({ size: "primary" });
        expect(component.hasClass("icon--primary"));
    });
    it("render <Icon> changed type to secondary", function () {
        wrapper.setProps({ size: "secondary" });
        expect(component.hasClass("icon--secondary"));
    });
    it("render <Icon> changed type to error", function () {
        wrapper.setProps({ size: "error" });
        expect(component.hasClass("icon--error"));
    });
    it("render <Icon> unknown icon", function () {
        var icon = faker_1.default.random.word();
        var wrapper = enzyme_1.shallow(<Icon_1.Icon icon={icon}/>);
        expect(wrapper.find(Icon_1.Icon).exists()).toBeFalsy();
    });
});
