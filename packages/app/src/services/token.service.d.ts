import { ErrorApiResponse } from '@structures';
declare type Tokens = {
    accessToken: string;
    refreshToken: string;
};
declare class TokenService {
    setTokens({ accessToken, refreshToken }: Tokens): void;
    clearTokens(): void;
    getAccessToken(): string | null;
    private static getExpirationDate;
    private static isExpired;
    isTokenInvalid: (jwtToken: string) => boolean;
    isInvalidTokenError: (error: ErrorApiResponse) => boolean;
}
export declare const tokenService: TokenService;
export {};
