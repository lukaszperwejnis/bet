"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Repository {
    constructor(model) {
        this.model = model;
    }
    findById(id, projection) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findById(id, projection).lean();
        });
    }
    findByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.find({ _id: { $in: ids } }).lean();
        });
    }
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.create(Object.assign({}, input));
        });
    }
    insertMany(array) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.insertMany(array);
        });
    }
    find(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find(query);
        });
    }
    findOne(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findOne(query);
        });
    }
    updateOne(query, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.updateOne(query, { $set: data }, { new: true }).lean();
        });
    }
    findOneAndUpdate(query, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findOneAndUpdate(query, data, { new: true }).lean();
        });
    }
    update(query, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.updateMany(query, data);
        });
    }
    removeByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.deleteMany({
                _id: { $in: ids }
            });
        });
    }
    removeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.deleteOne({ _id: id });
        });
    }
    remove(query) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.deleteMany(query);
        });
    }
    aggregate(pipeline) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.aggregate(pipeline);
        });
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map