import { MessageActionType } from '@stores/types';
import { Message } from '@structures';
import { rootStore } from '@stores/index';
export const mountMessage = (payload) => ({
    type: MessageActionType.MountMessage,
    payload,
});
export const unmountMessage = (payload) => ({
    type: MessageActionType.UnmountMessage,
    payload,
});
function message(type, text, duration = 3) {
    const key = new Date().getTime();
    rootStore.dispatch(mountMessage({
        key,
        type,
        text,
        duration,
    }));
    setTimeout(() => {
        rootStore.dispatch(unmountMessage({
            key,
        }));
    }, duration * 1000);
}
export const messageActions = {
    success: message.bind(this, Message.Type.Success),
    error: message.bind(this, Message.Type.Error),
    warning: message.bind(this, Message.Type.Warning),
    info: message.bind(this, Message.Type.Info),
};
