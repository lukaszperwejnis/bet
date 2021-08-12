import { Repository } from './Repository';
import { GameBetModel } from '../models/GameBetModel';
import { GameBet } from '../structures/GameBet';
import { Query } from '../structures/Query';

export class GameBetRepository extends Repository<GameBet> {
  constructor() {
    super(GameBetModel);
  }

  public findById(id: string): Promise<GameBet> {
    return super.findById(id);
  }

  public findOne(query: Query): Promise<GameBet> {
    return super.findOne(query);
  }

  public getMany(query: Query): Promise<GameBet[]> {
    return super.find(query);
  }

  public createOne(input: any): Promise<GameBet> {
    return super.create(input);
  }

  public getOneAndUpdate(query: Query, data: unknown): Promise<GameBet> {
    return super.findOneAndUpdate(query, data);
  }

  public async aggregate(pipeline: any[]): Promise<GameBet[]> {
    return super.aggregate(pipeline);
  }
}
