export declare class AuthProvider {
    private static instance;
    private observers;
    static getInstance(): AuthProvider;
    subscribe: (observer: (isLogged: boolean) => void) => void;
    unsubscribe: (observer: (isLogged: boolean) => void) => void;
    notify: () => void;
}
