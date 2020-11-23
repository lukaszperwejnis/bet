import {store} from '../store';
import {MessageType} from '../../types/message';
import {MOUNT_MESSAGE, UNMOUNT_MESSAGE} from '../types/message.type';

function message(type: MessageType, text: string, duration = 3) {
    const key = new Date().getTime();
    store.dispatch({
        type: MOUNT_MESSAGE,
        payload: {
            key,
            type,
            text,
            duration,
        },
    });
    setTimeout(() => {
        store.dispatch({
            type: UNMOUNT_MESSAGE,
            payload: {key},
        });
    }, duration * 1000);
}
export const messageActions = {
    success: message.bind(this, 'success'),
    error: message.bind(this, 'error'),
    warning: message.bind(this, 'warning'),
    info: message.bind(this, 'info'),
};
