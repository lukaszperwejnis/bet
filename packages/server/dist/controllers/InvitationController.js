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
const MailService_1 = require("../services/MailService");
class InvitationController extends Controller_1.Controller {
    constructor() {
        super();
        this.mailService = new MailService_1.MailService();
        this.invite = this.invite.bind(this);
    }
    invite(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.mailService.sendInvitationEmail(req.body.recipient);
                return this.created(res, result);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.InvitationController = InvitationController;
//# sourceMappingURL=InvitationController.js.map