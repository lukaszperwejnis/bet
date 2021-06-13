import { RequestConfigType, RequestOptionsType } from './helpers';
export declare abstract class ApiService {
    private request;
    constructor();
    get<T>(url: string, config?: RequestOptionsType): Promise<T>;
    post<T>(url: string, config?: RequestConfigType): Promise<T>;
    put<T>(url: string, config?: RequestConfigType): Promise<T>;
    patch<T>(url: string, config?: RequestConfigType): Promise<T>;
    delete<T>(url: string, config?: RequestConfigType): Promise<T>;
}
