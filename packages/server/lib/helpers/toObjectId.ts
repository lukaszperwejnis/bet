import * as mongoose from "mongoose";

export function toObjectId(id): mongoose.Types.ObjectId {
  if (!id) {
    return null;
  }

  return mongoose.Types.ObjectId(id);
}
