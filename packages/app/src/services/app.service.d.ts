import { User } from '@bet/structures';
import { ApiService } from './ApiService/ApiService';
declare type ValidateInvitationTokenResult = {
    status: number;
    message?: string;
    data?: {
        email: string;
        iat: number;
        exp: number;
    };
};
declare class AppService extends ApiService {
    setUser: (user: User.DTO) => void;
    getUser: () => User.DTO | null;
    validateInvitationToken: (token: string) => Promise<ValidateInvitationTokenResult>;
    logout: () => void;
    isLoggedIn: () => boolean;
}
export declare const userService: AppService;
export {};
