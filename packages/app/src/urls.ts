import {CONFIG} from './config';

export const URLS = {
    USER: {
        SIGNIN: getUrl('/signin'),
        SIGNUP: getUrl('/signup/mail-invitation'),
        START_RESET_PASSWORD: getUrl('/reset-password/start'),
        RESET_PASSWORD: getUrl('/reset-password'),
    },
    TOKENS: {
        REFRESH_TOKEN: getUrl('/verify/refresh/'),
        MAIL_INVITATION: getUrl('/verify/mail-invitation/'),
    },
    BET: {
        BETS: getUrl('/api/bets'),
    },
};

function getUrl(url: string): string {
    return CONFIG.API_URL + url;
}
