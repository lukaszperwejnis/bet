import mongoose from "mongoose";

export function toObjectId(id: string): mongoose.Types.ObjectId {
  return mongoose.Types.ObjectId(id);
}
