import * as mongoose from 'mongoose';
import {
  Competition,
  CreationType,
  Game,
  GameStatus,
  Winner,
} from '@bet/structures';

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
        function checkCreationType(this: Game) {
          return this.creationType !== CreationType.External;
        },
      ],
    },
    winner: {
      type: String,
      enum: [null, Winner.HomeTeam, Winner.Draw, Winner.AwayTeam],
      required: [
        function checkGameStatus(this: Game) {
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
      ref: 'Team',
    },
    awayTeam: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
    },
    homeScore: {
      type: Number,
    },
    awayScore: {
      type: Number,
    },
    status: {
      type: String,
      enum: [GameStatus.Timed, GameStatus.Finished, GameStatus.Scheduled],
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
    collection: 'game',
    timestamps: true,
  },
);

export const GameModel: mongoose.Model<Game> = mongoose.model<Game>(
  'Game',
  gameSchema,
);
