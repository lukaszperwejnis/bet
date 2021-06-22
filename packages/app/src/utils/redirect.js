"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirect = void 0;
const history_1 = require("./history");
function redirect(url) {
    history_1.history.push(url);
}
exports.redirect = redirect;
