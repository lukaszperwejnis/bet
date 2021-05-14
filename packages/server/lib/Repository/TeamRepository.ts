import { Repository } from "./Repository";
import { TeamModel } from "../models/TeamModel";
import * as mongoose from "mongoose";
import { Team } from "../structures/Team";
import { Game } from "../structures/Game";

export class TeamRepository extends Repository<Team> {
  constructor() {
    super(TeamModel);
  }

  public findById(id: mongoose.SchemaTypes.ObjectId): Promise<Team> {
    return super.findById(id);
  }

  public getOne(query: object): Promise<Team> {
    return super.findOne(query);
  }

  public getMany(query: object): Promise<Team[]> {
    return super.find(query);
  }

  public createOne(input: object): Promise<Team> {
    return super.create(input);
  }
}
