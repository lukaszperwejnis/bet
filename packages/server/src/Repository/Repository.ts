import { Query } from '../structures/Query';

export abstract class Repository<T> {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  protected constructor(private model: any) {}

  async findById(id: string, projection?: unknown): Promise<T> {
    return this.model.findById(id, projection).lean();
  }

  async findByIds(ids: string[]): Promise<T[]> {
    return this.model.find({ _id: { $in: ids } }).lean();
  }

  async create<K>(input: K): Promise<K> {
    return this.model.create({ ...input });
  }

  async insertMany(array: unknown[]): Promise<T> {
    return this.model.insertMany(array);
  }

  async find(query: Query): Promise<T[]> {
    return this.model.find(query);
  }

  async findOne(query: Query, useLean?: boolean): Promise<T> {
    if (useLean) {
      return this.model.findOne(query).lean();
    }
    return this.model.findOne(query);
  }

  async updateOne(query: Query, data: unknown): Promise<T> {
    return this.model.updateOne(query, { $set: data }, { new: true }).lean();
  }

  async findOneAndUpdate(query: Query, data: unknown): Promise<T> {
    return this.model.findOneAndUpdate(query, data, { new: true }).lean();
  }

  async update(query: Query, data: unknown): Promise<T[]> {
    return this.model.updateMany(query, data);
  }

  async removeByIds(ids: string[]): Promise<void> {
    await this.model.deleteMany({
      _id: { $in: ids },
    });
  }

  async removeById(id: string): Promise<void> {
    await this.model.deleteOne({ _id: id });
  }

  async remove(query: Query): Promise<void> {
    await this.model.deleteMany(query);
  }

  async aggregate(pipeline: any[]): Promise<T[]> {
    return this.model.aggregate(pipeline);
  }
}
