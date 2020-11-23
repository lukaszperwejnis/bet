import {apiService} from './api.service';
import {URLS} from '../urls';
import {AuthProvider} from '../providers/AuthProvider';

const AUTH_TOKEN_KEY = 'AUTH_TOKENS';

type Tokens = {
    accessToken: string;
    refreshToken: string;
};

const setTokens = (tokens: Tokens): void => {
    if (tokens) {
        localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(tokens));
    } else {
        localStorage.removeItem(AUTH_TOKEN_KEY);
    }

    AuthProvider.getInstance().notify();
};

const getTokens = (): Tokens => {
    const tokens = localStorage.getItem(AUTH_TOKEN_KEY);
    if (!tokens) {
        return null;
    }

    try {
        return JSON.parse(tokens);
    } catch (e) {
        console.error(e);
    }
};

const getAccessToken = async (): Promise<string> => {
    const {accessToken} = getTokens();

    if (!accessToken) {
        return null;
    }

    if (isTokenInvalid(accessToken)) {
        const tokens = await getRefreshedTokens();
        setTokens(tokens);
        return tokens.accessToken;
    }

    return accessToken;
};

type RefreshTokenResponse = {
    status: number;
    data: {
        accessToken: string;
        refreshToken: string;
    };
};

const getRefreshedTokens = async (): Promise<Tokens> => {
    const {refreshToken} = getTokens();
    if (!refreshToken) {
        return null;
    }

    const result = await apiService.post<RefreshTokenResponse>(URLS.TOKENS.REFRESH_TOKEN, {refreshToken});

    console.log(result);
    if (result.status !== 201) {
        return null;
    }

    return result.data;
};

const clearTokens = (): void => {
    setTokens(null);
};

const isTokenInvalid = (jwtToken: string): boolean => {
    return isExpired(getExpirationDate(jwtToken));
};

const getExpirationDate = (jwtToken: string): number | null => {
    const jwt = JSON.parse(atob(jwtToken.split('.')[1]));
    return (jwt && jwt.exp && jwt.exp * 1000) || null;
};

const isExpired = (exp: number): boolean => {
    return exp ? Date.now() > exp : false;
};

export const tokenService = {
    setTokens,
    getAccessToken,
    clearTokens,
    getTokens,
    isTokenInvalid,
};
