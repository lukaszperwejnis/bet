import { Repository } from "./Repository";
import { TeamModel } from "../models/TeamModel";
import { Team } from "../structures/Team";

export class TeamRepository extends Repository<Team> {
  constructor() {
    super(TeamModel);
  }

  findById(id: string): Promise<Team> {
    return super.findById(id);
  }

  getOne(query: object): Promise<Team> {
    return super.findOne(query);
  }

  getMany(query: object): Promise<Team[]> {
    return super.find(query);
  }

  createOne(input: Team): Promise<Team> {
    return super.create<Team>(input);
  }
}
