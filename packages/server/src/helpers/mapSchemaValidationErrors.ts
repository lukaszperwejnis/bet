import { SchemaValidationError } from '@bet/structures';

export function mapSchemaValidationErrors(
  errors: any[],
): SchemaValidationError[] {
  return errors.map(({ path, type, message }) => {
    return {
      field: path[0],
      type,
      message: message.split('" ')[1],
    };
  });
}
