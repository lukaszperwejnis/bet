"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var faker_1 = require("faker");
require("jest-styled-components");
var styles_config_1 = require("../../styles/styles-config");
var Message_1 = require("../../components/Message/Message");
describe("<Message> component", function () {
    var modalRoot = global.document.createElement("div");
    modalRoot.setAttribute("id", "root");
    var body = global.document.querySelector("body");
    body.appendChild(modalRoot);
    it("render <Message> component without crashing as success type", function () {
        var mockedText = faker_1.default.random.word();
        var wrapper = getWrapper({
            type: "success",
            text: mockedText,
        });
        expect(wrapper.find(Message_1.Message).exists()).toBeTruthy();
        expect(wrapper.text()).toBe(mockedText);
        expect(wrapper.prop("type")).toBe("success");
        expect(wrapper).toHaveStyleRule("color", styles_config_1.stylesConfig.color.success);
        expect(wrapper).toHaveStyleRule("border-color", styles_config_1.stylesConfig.color.success);
    });
    it("render <Message> component with error type", function () {
        var wrapper = getWrapper({ type: "error" });
        expect(wrapper.prop("type")).toBe("error");
        expect(wrapper).toHaveStyleRule("color", styles_config_1.stylesConfig.color.error);
        expect(wrapper).toHaveStyleRule("border-color", styles_config_1.stylesConfig.color.error);
    });
    it("render <Message> component with warning type", function () {
        var wrapper = getWrapper({ type: "warning" });
        expect(wrapper.prop("type")).toBe("warning");
        expect(wrapper).toHaveStyleRule("color", styles_config_1.stylesConfig.color.warning);
        expect(wrapper).toHaveStyleRule("border-color", styles_config_1.stylesConfig.color.warning);
    });
    it("render <Message> component with primary type", function () {
        var wrapper = getWrapper({ type: "info" });
        expect(wrapper.prop("type")).toBe("info");
        expect(wrapper).toHaveStyleRule("color", styles_config_1.stylesConfig.color.primary);
        expect(wrapper).toHaveStyleRule("border-color", styles_config_1.stylesConfig.color.primary);
    });
});
function getWrapper(_a) {
    var type = _a.type, _b = _a.text, text = _b === void 0 ? faker_1.default.random.word() : _b, props = __rest(_a, ["type", "text"]);
    return enzyme_1.mount(<Message_1.Message root="root" type={type} text={text} {...props}/>);
}
