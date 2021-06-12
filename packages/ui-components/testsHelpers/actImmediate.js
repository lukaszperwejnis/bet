"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actImmediate = void 0;
var test_utils_1 = require("react-dom/test-utils");
var actImmediate = function (wrapper) {
    return test_utils_1.act(function () {
        return new Promise(function (resolve) {
            setImmediate(function () {
                wrapper.update();
                resolve();
            });
        });
    });
};
exports.actImmediate = actImmediate;
