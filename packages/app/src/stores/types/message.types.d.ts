import { Message } from '@structures';
export declare enum MessageActionType {
    MountMessage = "MOUNT_MESSAGE",
    UnmountMessage = "UNMOUNT_MESSAGE"
}
export declare type MessageStoreType = Message.Message[];
