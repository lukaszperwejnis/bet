"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var enzyme_1 = require("enzyme");
require("jest-styled-components");
var faker_1 = require("faker");
var components_1 = require("../../components/index");
describe("<Tile> component", function () {
    var mockedChildren = faker_1.default.lorem.sentence();
    var wrapper = enzyme_1.mount(<components_1.Tile>{mockedChildren}</components_1.Tile>);
    it("render <Tile> component without crashing", function () {
        expect(wrapper.find(components_1.Tile).exists()).toBeTruthy();
        expect(wrapper.text()).toBe(mockedChildren);
    });
    it("render <Tile> as rounded", function () {
        wrapper.setProps({ isRound: true });
        expect(wrapper).toHaveStyleRule("border-radius", "10px");
    });
});
