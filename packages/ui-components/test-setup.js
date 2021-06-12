"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
var enzyme_adapter_react_16_1 = require("enzyme-adapter-react-16");
var faker_1 = require("faker");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
faker_1.default.seed(123456);
