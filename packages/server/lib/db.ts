import * as mongoose from "mongoose";
import options from "./config";

export const connectToDatabase = () => {
  return mongoose.connect(options.dbURl, {
    useNewUrlParser: true,
  });
};
