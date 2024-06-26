import mongoose from 'mongoose';
import { BetStatus, Winner } from '@bet/structures';

const gameBetSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
      required: true,
    },
    game: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Game',
      required: true,
    },
    bet: {
      required: true,
      type: String,
      enum: [Winner.HomeTeam, Winner.Draw, Winner.AwayTeam],
    },
    homeScore: {
      required: true,
      type: Number,
    },
    awayScore: {
      required: true,
      type: Number,
    },
    status: {
      type: String,
      enum: [BetStatus.Scheduled, BetStatus.Finished],
      default: BetStatus.Scheduled,
    },
    hasWinner: {
      type: Boolean,
      default: false,
    },
    hasTeamsScores: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    collection: 'gameBet',
    timestamps: true,
  },
);

export const GameBetModel: mongoose.Model<any> = mongoose.model<any>(
  'GameBet',
  gameBetSchema,
);
