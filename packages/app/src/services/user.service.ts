import {tokenService} from './token.service';
import {apiService} from './api.service';
import {URLS} from '../urls';

type LoginResponse = {
    status: number;
    data?: {
        accessToken: string;
        refreshToken: string;
        user: Record<string, unknown>;
    };
    message?: string;
};

async function login(email: string, password: string): Promise<Record<string, unknown>> {
    //todo set tokens

    const {status, message, data} = await apiService.post<LoginResponse>(URLS.USER.SIGNIN, {
        email,
        password,
    });

    if (status !== 201) {
        return {
            status,
            message,
        };
    }

    const {user, ...tokens} = data;

    tokenService.setTokens(tokens);
    localStorage.setItem('user', JSON.stringify(user));

    return user;
}

function logout(): void {
    tokenService.clearTokens();
    localStorage.removeItem('user');
}

function isLoggedIn(): boolean {
    return !!tokenService.getTokens();
}

async function signup(token: string, password: string): Promise<unknown> {
    return apiService.post(URLS.USER.SIGNUP, {token, password});
}

async function startResetPassword(email: string): Promise<Response> {
    return apiService.post(URLS.USER.START_RESET_PASSWORD, {email});
}

async function resetPassword(data: {token: string; password: string}): Promise<Response> {
    return apiService.post(URLS.USER.RESET_PASSWORD, data);
}

type ValidateInvitationTokenResult = {
    status: number;
    message?: string;
    data?: {
        email: string;
        iat: number;
        exp: number;
    };
};

function validateInvitationToken(token: string): Promise<ValidateInvitationTokenResult> {
    return apiService.get<ValidateInvitationTokenResult>(URLS.TOKENS.MAIL_INVITATION + token);
}

//todo return type user
function getUser() {
    const user = localStorage.getItem('user');
    try {
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.error(error);
    }
}

export const userService = {
    login,
    logout,
    isLoggedIn,
    signup,
    validateInvitationToken,
    getUser,
    startResetPassword,
    resetPassword,
};

// function handleResponse(response) {
//     return response.text().then((text) => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 location.reload(true);
//             }
//
//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }
//
//         return data;
//     });
// }
