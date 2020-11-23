import {Message} from '../../types/message';
import {MessageActions, MOUNT_MESSAGE, UNMOUNT_MESSAGE} from '../types/message.type';

const initialState: Message[] = [];

export type MessageStoreType = typeof initialState;

export function messageReducer(state = initialState, {type, payload}: MessageActions): MessageStoreType {
    switch (type) {
        case MOUNT_MESSAGE:
            return [...state, payload];
        case UNMOUNT_MESSAGE:
            return state.filter((message) => message.key !== payload.key);
        default:
            return state;
    }
}
