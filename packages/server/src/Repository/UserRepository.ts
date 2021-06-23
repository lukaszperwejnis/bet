import { User } from "@bet/structures";
import { Repository } from "./Repository";
import { UserModel } from "../models/UserModel";

export class UserRepository extends Repository<User.User> {
  constructor() {
    super(UserModel);
  }

  public findById(id: string, projection?: object): Promise<User.User> {
    return super.findById(id, projection);
  }

  public findOne(query: object, useLean?: boolean): Promise<User.User> {
    return super.findOne(query, useLean);
  }

  public findMany(query: object): Promise<User.User[]> {
    return super.find(query);
  }

  public findManyByIds(ids: string[]): Promise<User.User[]> {
    return super.findByIds(ids);
  }

  public async createOne(input: any): Promise<User.User> {
    const user = {
      email: input.email,
      profile: {
        first_name: input.first_name,
        last_name: input.last_name,
      },
      password: input.password,
    };
    return super.create<User.User>(user as User.User);
  }

  public async getMany(query: object): Promise<User.User[]> {
    return super.find(query);
  }

  public updateById(id: string, input: object): Promise<User.User> {
    return super.updateOne({ _id: id }, input);
  }
}
