import * as mongoose from "mongoose";
import { WinnerTypes } from "../enums/winnerTypes";
import { BetStatuses } from "../enums/betStatuses";

const gameBetSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
      required: true,
    },
    game: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game",
      required: true,
    },
    bet: {
      required: true,
      type: String,
      enum: [WinnerTypes.HOME_TEAM, WinnerTypes.DRAW, WinnerTypes.AWAY_TEAM],
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
      enum: [BetStatuses.SCHEDULED, BetStatuses.FINISHED],
      default: BetStatuses.SCHEDULED,
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
      ref: "User",
      required: true,
    },
  },
  {
    collection: "gameBet",
    timestamps: true,
  }
);

export const GameBetModel: mongoose.Model<any> = mongoose.model<any>(
  "GameBet",
  gameBetSchema
);
