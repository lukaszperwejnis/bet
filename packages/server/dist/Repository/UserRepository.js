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
const Repository_1 = require("./Repository");
const UserModel_1 = require("../models/UserModel");
class UserRepository extends Repository_1.Repository {
    constructor() {
        super(UserModel_1.UserModel);
    }
    findById(id, projection) {
        return super.findById(id, projection);
    }
    findOne(query) {
        return super.findOne(query);
    }
    findMany(query) {
        return super.find(query);
    }
    findManyByIds(ids) {
        return super.findByIds(ids);
    }
    createOne(input) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const user = {
                email: input.email,
                profile: {
                    first_name: input.first_name,
                    last_name: input.last_name
                },
                password: input.password
            };
            return _super.create.call(this, user);
        });
    }
    getMany(query) {
        const _super = Object.create(null, {
            find: { get: () => super.find }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.find.call(this, query);
        });
    }
    updateById(id, input) {
        return super.updateOne({ _id: id }, input);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map