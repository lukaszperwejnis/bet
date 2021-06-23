import { toObjectId } from "./toObjectId";

export function compareObjectsIds(firstId: string, secondId: string): boolean {
  return toObjectId(firstId).equals(toObjectId(secondId));
}
