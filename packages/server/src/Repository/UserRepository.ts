import { User } from '@bet/structures';
import { Repository } from './Repository';
import { UserModel } from '../models/UserModel';
import { Query } from '../structures/Query';

export class UserRepository extends Repository<User.User> {
  constructor() {
    super(UserModel);
  }

  findById(id: string, projection?: unknown): Promise<User.User> {
    return super.findById(id, projection);
  }

  findOne(query: Query, useLean?: boolean): Promise<User.User> {
    return super.findOne(query, useLean);
  }

  findMany(query: Query): Promise<User.User[]> {
    return super.find(query);
  }

  findManyByIds(ids: string[]): Promise<User.User[]> {
    return super.findByIds(ids);
  }

  async createOne(input: {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
  }): Promise<User.User> {
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

  async getMany(query: Query): Promise<User.User[]> {
    return super.find(query);
  }

  updateById(id: string, input: unknown): Promise<User.User> {
    return super.updateOne({ _id: id }, input);
  }
}
