import mongoose from "mongoose";
import options from "./config";

export const connectToDatabase = () =>  mongoose.connect(options.dbURl, {
    useNewUrlParser: true,
  });
