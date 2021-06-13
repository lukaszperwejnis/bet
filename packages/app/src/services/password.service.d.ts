import { ApiService } from './ApiService/ApiService';
declare class PasswordService extends ApiService {
    startReset: <T>(payload: {
        email: string;
    }) => Promise<T>;
    reset: <T>(data: {
        token: string;
        password: string;
    }) => Promise<T>;
}
export declare const passwordService: PasswordService;
export {};
