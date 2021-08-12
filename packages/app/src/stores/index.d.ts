import { MessageStoreType, AuthStoreType, PasswordStoreType } from './types';
export declare const rootStore: import("redux").Store<import("redux").EmptyObject & {
    auth: AuthStoreType;
    messages: MessageStoreType;
    password: PasswordStoreType;
}, import("./actions").MessageActions | import("./actions").PasswordActions | import("./actions").AuthActions> & {
    dispatch: unknown;
};
export declare type StoreType = {
    messages: MessageStoreType;
    auth: AuthStoreType;
    password: PasswordStoreType;
};
