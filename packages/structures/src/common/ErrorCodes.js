export var ErrorCodes;
(function (ErrorCodes) {
  ErrorCodes[(ErrorCodes['UserNotFound'] = 1000)] = 'UserNotFound';
  ErrorCodes[(ErrorCodes['PasswordIsEqualAsCurrent'] = 1001)] =
    'PasswordIsEqualAsCurrent';
  ErrorCodes[(ErrorCodes['UserWithGivenEmailAlreadyExists'] = 1002)] =
    'UserWithGivenEmailAlreadyExists';
  ErrorCodes[(ErrorCodes['ValidationError'] = 1003)] = 'ValidationError';
})(ErrorCodes || (ErrorCodes = {}));
