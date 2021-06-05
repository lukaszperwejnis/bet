import { MessageActionType } from '../types';
const initialState = [];
export function messageReducer(state = initialState, { type, payload }) {
    switch (type) {
        case MessageActionType.MountMessage:
            return [...state, payload];
        case MessageActionType.UnmountMessage:
            return state.filter((message) => message.key !== payload.key);
        default:
            return state;
    }
}
