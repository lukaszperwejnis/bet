"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTemplate = void 0;
const path_to_regexp_1 = require("path-to-regexp");
const qs_1 = __importDefault(require("qs"));
function createTemplate(pattern) {
    const toPath = path_to_regexp_1.compile(pattern, { encode: encodeURIComponent });
    const template = (options = {}) => {
        return (toPath(options.params) +
            (options.query
                ? qs_1.default.stringify(options.query, { addQueryPrefix: true })
                : '') +
            (options.hash ? '?' + options.hash : '') +
            (options.fragment ? '#' + options.fragment : ''));
    };
    template.pattern = pattern;
    return template;
}
exports.createTemplate = createTemplate;
