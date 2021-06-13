declare type TemplateOptionsType = Partial<{
    params: Record<string, unknown>;
    query: string;
    hash: string;
    fragment: string;
}>;
export declare function createTemplate(pattern: string): {
    (options?: TemplateOptionsType): string;
    pattern: string;
};
export {};
