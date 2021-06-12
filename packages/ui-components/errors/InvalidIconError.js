"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidIconError = void 0;
var CustomError_1 = require("./CustomError");
var errorsCodes_1 = require("./errorsCodes");
var InvalidIconError = /** @class */ (function (_super) {
    __extends(InvalidIconError, _super);
    function InvalidIconError(icon) {
        return _super.call(this, icon, errorsCodes_1.ErrorCodes.NOT_FOUND) || this;
    }
    return InvalidIconError;
}(CustomError_1.CustomError));
exports.InvalidIconError = InvalidIconError;
