"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapSchemaValidationErrors(errors) {
    return errors.map(({ path, type, message }) => {
        return {
            field: path[0],
            type,
            message: message.split('" ')[1]
        };
    });
}
exports.mapSchemaValidationErrors = mapSchemaValidationErrors;
//# sourceMappingURL=mapSchemaValidationErrors.js.map