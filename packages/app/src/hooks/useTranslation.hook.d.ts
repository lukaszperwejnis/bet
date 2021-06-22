declare type UseTranslationReturnType = (id: string, values?: ValuesType) => string;
declare type ValuesType = Record<string, string | number> | Record<string, number>[];
export declare function useTranslation(): UseTranslationReturnType;
export {};
