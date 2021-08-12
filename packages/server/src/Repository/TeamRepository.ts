import { Team } from '@bet/structures';
import { Repository } from './Repository';
import { TeamModel } from '../models/TeamModel';
import { Query } from '../structures/Query';

export class TeamRepository extends Repository<Team.Team> {
  constructor() {
    super(TeamModel);
  }

  findById(id: string): Promise<Team.Team> {
    return super.findById(id);
  }

  getOne(query: Query): Promise<Team.Team> {
    return super.findOne(query);
  }

  getMany(query: Query): Promise<Team.Team[]> {
    return super.find(query);
  }

  createOne(input: Team.Team): Promise<Team.Team> {
    return super.create<Team.Team>(input);
  }
}
