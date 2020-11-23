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
const Controller_1 = require("./Controller");
const GameBetService_1 = require("../services/GameBetService");
class GameBetController extends Controller_1.Controller {
    constructor() {
        super();
        this.gameBetService = new GameBetService_1.GameBetService();
        this.createOne = this.createOne.bind(this);
        this.getOne = this.getOne.bind(this);
        this.getMany = this.getMany.bind(this);
    }
    createOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = yield this.gameBetService.createOne(req.user._id, req.body);
                return this.created(res, doc);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = yield this.gameBetService.getOneById(req.params.id);
                return this.ok(res, doc);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getMany(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.gameBetService.getManyByUserId(req.user._id);
                return this.ok(res, docs);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.GameBetController = GameBetController;
//# sourceMappingURL=GameBetController.js.map