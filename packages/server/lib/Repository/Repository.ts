import * as mongoose from 'mongoose';

export abstract class Repository<T> {

    protected constructor(private model: any) {
    }

    async findById(id: mongoose.Types.ObjectId, projection?: object): Promise<T> {
        return await this.model.findById(id, projection).lean();
    }

    async findByIds(ids: mongoose.Types.ObjectId[]): Promise<T[]> {
        return await this.model.find({_id: {$in: ids}}).lean();
    }

    async create(input: object): Promise<T> {
        return await this.model.create({...input});
    }

    async insertMany(array: any[]): Promise<T> {
        return await this.model.insertMany(array);
    }

    async find(query: object): Promise<T[]> {
        return this.model.find(query);
    }

    async findOne(query: object): Promise<T> {
        return await this.model.findOne(query);
    }

    async updateOne(query: any, data: any) {
        return await this.model.updateOne(query, {$set: data}, {new: true}).lean();
    }

    async findOneAndUpdate(query: object, data: object): Promise<T> {
        return await this.model.findOneAndUpdate(query, data, {new: true}).lean();
    }

    async update(query: any, data: any) {
        return await this.model.updateMany(query, data);
    }

    async removeByIds(ids: mongoose.Types.ObjectId[]): Promise<void> {
        await this.model.deleteMany({
            _id: {$in: ids}
        });
    }

    async removeById(id: mongoose.Types.ObjectId): Promise<void> {
        await this.model.deleteOne({_id: id});
    }

    async remove(query: object): Promise<void> {
        await this.model.deleteMany(query);
    }

    async aggregate(pipeline: any[]): Promise<T[]> {
        return await this.model.aggregate(pipeline);
    }
}
