import { MessageActionType } from '@stores/types';
import { Message } from '@structures';
interface Action<T> {
    type: MessageActionType;
    payload: T;
}
declare type UnmountMessagePayload = {
    key: number;
};
export declare const mountMessage: (payload: Message.Message) => Action<Message.Message>;
export declare const unmountMessage: (payload: UnmountMessagePayload) => Action<UnmountMessagePayload>;
export declare type MessageActions = ReturnType<typeof mountMessage> | ReturnType<typeof unmountMessage>;
export declare const messageActions: {
    success: (text: string, duration?: number | undefined) => void;
    error: (text: string, duration?: number | undefined) => void;
    warning: (text: string, duration?: number | undefined) => void;
    info: (text: string, duration?: number | undefined) => void;
};
export {};
