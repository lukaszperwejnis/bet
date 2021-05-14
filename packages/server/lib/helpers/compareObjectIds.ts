import { toObjectId } from "./toObjectId";

export function compareObjectsIds(firstId, secondId) {
  return toObjectId(firstId).equal(toObjectId(secondId));
}
