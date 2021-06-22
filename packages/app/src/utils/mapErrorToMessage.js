"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapErrorToMessage = void 0;
const structures_1 = require("@bet/structures");
const intl_1 = require("./intl");
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
            return intl_1.translate(`fields.${field}`);
        }
        return field;
    });
    return mappedErrors.join(', ');
};
const mapErrorToMessage = (error) => {
    if (!error.response) {
        return intl_1.translate('error.unknown');
    }
    const { status, data } = error.response;
    switch (true) {
        case status === 401 && data.message === 'Unauthorized':
            return intl_1.translate('error.unauthorized');
        case data.code === structures_1.ErrorCodes.UserNotFound:
            return intl_1.translate('error.userNotFound');
        case data.code === structures_1.ErrorCodes.PasswordIsEqualAsCurrent:
            return intl_1.translate('error.passwordIsEqualAsCurrent');
        case data.code === structures_1.ErrorCodes.UserWithGivenEmailAlreadyExists:
            return intl_1.translate('error.userWithGivenMailAlreadyExists');
        case data.code === structures_1.ErrorCodes.ValidationError:
            return intl_1.translate('error.fieldsValidation', {
                fields: mappedFieldsFromError(data.errors),
            });
        case status === 500 && data.message === 'jwt malformed':
            return intl_1.translate('error.invalidToken');
        default:
            return intl_1.translate('error.unknown');
    }
};
exports.mapErrorToMessage = mapErrorToMessage;
