import { translate } from './intl';
const availableFieldsTranslations = [
    'email',
    'password',
    'newPassword',
    'confirmedPassword',
    'token',
];
const mappedFieldsFromError = (errors) => {
    const mappedErrors = errors.map(({ field }) => {
        if (availableFieldsTranslations.includes(field)) {
            return translate(`fields.${field}`);
        }
        return field;
    });
    return mappedErrors.join(', ');
};
export const mapErrorToMessage = (error) => {
    if (!error.response) {
        return translate('error.unknown');
    }
    const { status, data } = error.response;
    switch (true) {
        case status === 401 && data.message === 'Unauthorized':
            return translate('error.unauthorized');
        case data.code === 1000:
            return translate('error.userNotFound');
        case data.code === 1001:
            return translate('error.passwordIsEqualAsCurrent');
        case data.code === 1002:
            return translate('error.userWithGivenMailAlreadyExists');
        case data.code === 1003:
            return translate('error.fieldsValidation', {
                fields: mappedFieldsFromError(data.errors),
            });
        case status === 500 && data.message === 'jwt malformed':
            return translate('error.invalidToken');
        default:
            return translate('error.unknown');
    }
};
