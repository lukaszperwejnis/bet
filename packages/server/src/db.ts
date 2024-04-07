import mongoose, { Mongoose, Promise } from 'mongoose';
import options from './config';

export const connectToDatabase = (): Promise<Mongoose> =>
  mongoose.connect(options.dbURl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
