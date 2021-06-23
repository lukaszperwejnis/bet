import * as mongoose from "mongoose";
import {Competition, GameStatus} from "@bet/structures";
import {CreationType, WinnerType} from "../enums";
import {Game} from "../structures/Game";

const gameSchema = new mongoose.Schema(
  {
    _id: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    externalId: {
      type: Number,
      required: [
        function (this: Game) {
          return this.creationType !== CreationType.External;
        },
      ],
    },
    winner: {
      type: String,
      enum: [
        null,
        WinnerType.HomeTeam,
        WinnerType.Draw,
        WinnerType.AwayTeam,
      ],
      required: [
        function (this: Game) {
          return this.status === GameStatus.Finished;
        },
      ],
    },
    stage: {
      type: String,
      required: true,
    },
    competition: {
      type: String,
      enum: [Competition.UefaChampionsLeague],
      default: Competition.UefaChampionsLeague,
    },
    homeTeam: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    awayTeam: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    homeScore: {
      type: Number,
    },
    awayScore: {
      type: Number,
    },
    status: {
      type: String,
      enum: [GameStatus.Scheduled, GameStatus.Finished],
      default: GameStatus.Scheduled,
    },
    creationType: {
      type: String,
      enum: [CreationType.Manual, CreationType.External],
      default: CreationType.External,
    },
    scheduledDate: {
      type: Date,
    },
  },
  {
    collection: "game",
    timestamps: true,
  }
);

export const GameModel: mongoose.Model<any> = mongoose.model<any>(
  "Game",
  gameSchema
);
