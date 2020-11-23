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
const TeamService_1 = require("../services/TeamService");
class TeamController extends Controller_1.Controller {
    constructor() {
        super();
        this.teamService = new TeamService_1.TeamService();
        this.getOne = this.getOne.bind(this);
        this.createOne = this.createOne.bind(this);
    }
    getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = yield this.teamService.getOneById(req.params.id);
                return this.ok(res, doc);
            }
            catch (error) {
                next(error);
            }
        });
    }
    createOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = yield this.teamService.createOne(req.body);
                return this.created(res, doc);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.TeamController = TeamController;
//# sourceMappingURL=teamController.js.map