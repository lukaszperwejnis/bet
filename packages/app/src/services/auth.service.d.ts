import { ApiService } from './ApiService/ApiService';
declare class AuthService extends ApiService {
    login: <T>(payload: {
        email: string;
        password: string;
    }) => Promise<T>;
    signup: <T>(payload: {
        token: string;
        password: string;
    }) => Promise<T>;
    validateInvitationToken: <T>(token: string) => Promise<T>;
}
export declare const authService: AuthService;
export {};
