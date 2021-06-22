export declare function useRouter(): {
    push: {
        (path: string, state?: unknown): void;
        (location: import("history").LocationDescriptor<unknown>): void;
    };
    replace: {
        (path: string, state?: unknown): void;
        (location: import("history").LocationDescriptor<unknown>): void;
    };
    pathname: string;
    query: {};
    match: import("react-router").match<{}>;
    location: import("history").Location<unknown>;
    history: import("history").History<unknown>;
};
