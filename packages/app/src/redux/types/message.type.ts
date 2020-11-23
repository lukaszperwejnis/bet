import {Message} from '../../types/message';

export const MOUNT_MESSAGE = 'MOUNT_MESSAGE';
export type MOUNT_MESSAGE = typeof MOUNT_MESSAGE;
export interface MountMessageAction {
    type: MOUNT_MESSAGE;
    payload: Message;
}
export const UNMOUNT_MESSAGE = 'UNMOUNT_MESSAGE';
export type UNMOUNT_MESSAGE = typeof UNMOUNT_MESSAGE;
export interface UnmountMessageAction {
    type: UNMOUNT_MESSAGE;
    payload: Message;
}
export type MessageActions = MountMessageAction | UnmountMessageAction;
