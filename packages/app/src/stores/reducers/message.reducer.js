"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageReducer = void 0;
const types_1 = require("../types");
const initialState = [];
function messageReducer(state = initialState, { type, payload }) {
    switch (type) {
        case types_1.MessageActionType.MountMessage:
            return [...state, payload];
        case types_1.MessageActionType.UnmountMessage:
            return state.filter((message) => message.key !== payload.key);
        default:
            return state;
    }
}
exports.messageReducer = messageReducer;
