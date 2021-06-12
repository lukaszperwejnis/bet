"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageMock = void 0;
var LocalStorageMock = /** @class */ (function () {
    function LocalStorageMock() {
        this.store = {};
    }
    LocalStorageMock.prototype.clear = function () {
        this.store = {};
    };
    LocalStorageMock.prototype.getItem = function (key) {
        return this.store[key];
    };
    LocalStorageMock.prototype.setItem = function (key, value) {
        this.store[key] = value;
    };
    LocalStorageMock.prototype.removeItem = function (key) {
        delete this.store[key];
    };
    Object.defineProperty(LocalStorageMock.prototype, "length", {
        get: function () {
            return Object.keys(this.store).length;
        },
        enumerable: false,
        configurable: true
    });
    LocalStorageMock.prototype.key = function (index) {
        return Object.values(this.store)[index];
    };
    return LocalStorageMock;
}());
exports.LocalStorageMock = LocalStorageMock;
