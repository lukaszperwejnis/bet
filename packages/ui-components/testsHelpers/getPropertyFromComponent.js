"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertyFromComponent = void 0;
var getPropertyFromComponent = function (component, property) {
    return component.getDOMNode()[property];
};
exports.getPropertyFromComponent = getPropertyFromComponent;
