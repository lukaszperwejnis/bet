declare class LocalStorageService {
    get<T>(key: string): T | null;
    set(key: string, value: unknown): void;
    remove(key: string): void;
}
export declare const localStorageService: LocalStorageService;
export {};
