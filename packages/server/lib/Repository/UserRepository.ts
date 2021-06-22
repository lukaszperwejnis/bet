import { Repository } from "./Repository";
import { UserModel } from "../models/UserModel";
import { User } from "../structures/User";

export class UserRepository extends Repository<User> {
  constructor() {
    super(UserModel);
  }

  public findById(id: string, projection?: object): Promise<User> {
    return super.findById(id, projection);
  }

  public findOne(query: object, useLean?: boolean): Promise<User> {
    return super.findOne(query, useLean);
  }

  public findMany(query: object): Promise<User[]> {
    return super.find(query);
  }

  public findManyByIds(ids: string[]): Promise<User[]> {
    return super.findByIds(ids);
  }

  public async createOne(input: any): Promise<User> {
    const user: User = {
      email: input.email,
      profile: {
        first_name: input.first_name,
        last_name: input.last_name,
      },
      password: input.password,
    };
    return super.create<User>(user);
  }

  public async getMany(query: object): Promise<User[]> {
    return super.find(query);
  }

  public updateById(id: string, input: object): Promise<User> {
    return super.updateOne({ _id: id }, input);
  }
}
