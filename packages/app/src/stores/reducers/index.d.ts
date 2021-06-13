export declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    auth: import("../types").AuthStoreType;
    messages: import("../types").MessageStoreType;
    password: import("../types").PasswordStoreType;
}>, import("../actions").AuthActions | import("../actions").PasswordActions | import("../actions").MessageActions>;
