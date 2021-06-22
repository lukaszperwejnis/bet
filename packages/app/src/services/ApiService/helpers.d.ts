import { AxiosRequestConfig } from 'axios';
export declare type RequestConfigType = Partial<{
    authRequired: boolean;
    payload: Record<string, any>;
    requestConfig: AxiosRequestConfig;
}>;
export declare type RequestOptionsType = Omit<RequestConfigType, 'payload'>;
export declare function getMappedRequestOptions(options: RequestOptionsType): Record<string, unknown>;
