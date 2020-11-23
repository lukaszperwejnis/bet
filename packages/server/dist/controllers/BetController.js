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
const BetService_1 = require("../services/BetService");
class BetController extends Controller_1.Controller {
    constructor() {
        super();
        this.betService = new BetService_1.BetService();
        this.getAvailable = this.getAvailable.bind(this);
    }
    getAvailable(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const availableBets = yield this.betService.getAvailableBetsByUserId(req.user._id);
                return this.ok(res, availableBets);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.BetController = BetController;
//# sourceMappingURL=BetController.js.map