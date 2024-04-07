import * as mongoose from 'mongoose';
import { CreationType, Team } from '@bet/structures';

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
        function checkCreationType(this: Team.Team) {
          return this.creationType !== CreationType.External;
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
      enum: [CreationType.Manual, CreationType.External],
      default: CreationType.External,
    },
    crest: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'team',
    timestamps: true,
  },
);

teamSchema.index({ name: 1, externalId: 1 }, { unique: true, sparse: true });

export const TeamModel: mongoose.Model<Team.Team> = mongoose.model<Team.Team>(
  'Team',
  teamSchema,
);
