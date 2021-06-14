export abstract class Repository<T> {
  protected constructor(private model: any) {}

  async findById(id: string, projection?: object): Promise<T> {
    return await this.model.findById(id, projection).lean();
  }

  async findByIds(ids: string[]): Promise<T[]> {
    return await this.model.find({ _id: { $in: ids } }).lean();
  }

  async create<T>(input: T): Promise<T> {
    return await this.model.create({ ...input });
  }

  async insertMany(array: any[]): Promise<T> {
    return await this.model.insertMany(array);
  }

  async find(query: object): Promise<T[]> {
    return this.model.find(query);
  }

  async findOne(query: object, useLean?: boolean): Promise<T> {
    if (useLean) {
      return await this.model.findOne(query).lean();
    }
    return await this.model.findOne(query);
  }

  async updateOne(query: any, data: any) {
    return await this.model
      .updateOne(query, { $set: data }, { new: true })
      .lean();
  }

  async findOneAndUpdate(query: object, data: object): Promise<T> {
    return await this.model.findOneAndUpdate(query, data, { new: true }).lean();
  }

  async update(query: any, data: any) {
    return await this.model.updateMany(query, data);
  }

  async removeByIds(ids: string[]): Promise<void> {
    await this.model.deleteMany({
      _id: { $in: ids },
    });
  }

  async removeById(id: string): Promise<void> {
    await this.model.deleteOne({ _id: id });
  }

  async remove(query: object): Promise<void> {
    await this.model.deleteMany(query);
  }

  async aggregate(pipeline: any[]): Promise<T[]> {
    return await this.model.aggregate(pipeline);
  }
}
