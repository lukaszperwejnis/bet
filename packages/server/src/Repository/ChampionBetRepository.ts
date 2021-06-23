import { Repository } from "./Repository";
import { ChampionBetModel } from "../models/ChampionBetModel";
import { ChampionBet } from "../structures/ChampionBet";

export class ChampionBetRepository extends Repository<ChampionBet> {
  constructor() {
    super(ChampionBetModel);
  }

  findById(id: string): Promise<ChampionBet> {
    return super.findById(id);
  }

  getOne(query: object): Promise<ChampionBet> {
    return super.findOne(query);
  }

  public getMany(query: object): Promise<ChampionBet[]> {
    return super.find(query);
  }

  public createOne(input: any): Promise<ChampionBet> {
    return super.create(input);
  }
}
