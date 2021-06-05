import { translate } from './intl';
export const mapErrorToMessage = (error) => {
    if (!error.response) {
        return translate('error.unknown');
    }
    const { status, data } = error.response;
    switch (true) {
        case status === 401 && data.message === 'Unauthorized':
            return translate('error.unauthorized');
        case status === 422 && data.code === 1000:
            return translate('error.userNotFound');
        case status === 500 && data.message === 'jwt malformed':
            return translate('error.invalidToken');
        default:
            return translate('error.unknown');
    }
};
