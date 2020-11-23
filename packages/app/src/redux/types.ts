import {MessageStoreType} from './reducers/message.reducer';

export const actionNames = {
    MOUNT_MESSAGE: 'MOUNT_MESSAGE',
    UNMOUNT_MESSAGE: 'UNMOUNT_MESSAGE',
};

export type StoreType = {
    messages: MessageStoreType;
};
