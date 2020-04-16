import {Repository} from "./Repository";
import {Game} from "../structures/Game";
import {GameModel} from "../models/GameModel";

export class GameRepository extends Repository<Game> {
    constructor() {
        super(GameModel);
    }

    public findById(id: string): Promise<Game> {
        return super.findById(id);
    }

    public getMany(query: object): Promise<Game[]> {
        return super.find(query);
    }

    public createOne(input: any): Promise<Game> {
        return super.create(input);
    }

    public getOne(input: any): Promise<Game> {
        return super.findOne(input);
    }

    public async updateOne(query: any, data: any): Promise<any> {
        return super.updateOne(query, data);
    }

    public getOneAndUpdate(query: object, data: object): Promise<Game> {
        return super.findOneAndUpdate(query, data);
    }
}
