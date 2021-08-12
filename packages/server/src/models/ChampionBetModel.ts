import mongoose from 'mongoose';
import { BetStatus, Competition } from '@bet/structures';

const championBetSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    bet: {
      required: true,
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Team',
    },
    competition: {
      type: String,
      enum: [Competition.UefaChampionsLeague],
      default: Competition.UefaChampionsLeague,
    },
    status: {
      type: String,
      enum: [BetStatus.Scheduled, BetStatus.Finished],
      default: BetStatus.Scheduled,
    },
    hasChampionCorrect: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      required: true,
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
  },
  {
    collection: 'championBet',
    timestamps: true,
  },
);

export const ChampionBetModel: mongoose.Model<any> = mongoose.model<any>(
  'ChampionBet',
  championBetSchema,
);
