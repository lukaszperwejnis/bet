import * as mongoose from "mongoose";
import { CreationTypes } from "../enums/creationTypes";

const teamSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    externalId: {
      type: Number,
      required: [
        function () {
          return this.creationType !== CreationTypes.EXTERNAL;
        },
      ],
    },
    name: {
      type: String,
      trim: true,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    creationType: {
      type: String,
      enum: [CreationTypes.MANUAL, CreationTypes.EXTERNAL],
      default: CreationTypes.EXTERNAL,
    },
  },
  {
    collection: "team",
    timestamps: true,
  }
);

teamSchema.index({ name: 1, externalId: 1 }, { unique: true, sparse: true });

export const TeamModel: mongoose.Model<any> = mongoose.model<any>(
  "Team",
  teamSchema
);
