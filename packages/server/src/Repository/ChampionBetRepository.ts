import { ChampionBet } from '@bet/structures';
import { Repository } from './Repository';
import { ChampionBetModel } from '../models/ChampionBetModel';
import { Query } from '../structures/Query';

export class ChampionBetRepository extends Repository<ChampionBet> {
  constructor() {
    super(ChampionBetModel);
  }

  findById(id: string): Promise<ChampionBet> {
    return super.findById(id);
  }

  getOne(query: Query): Promise<ChampionBet> {
    return super.findOne(query);
  }

  public getMany(query: Query): Promise<ChampionBet[]> {
    return super.find(query);
  }

  public createOne(input: any): Promise<ChampionBet> {
    return super.create(input);
  }
}
