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
const UserService_1 = require("../services/UserService");
const MailService_1 = require("../services/MailService");
class UserController extends Controller_1.Controller {
    constructor() {
        super();
        this.userService = new UserService_1.UserService();
        this.mailService = new MailService_1.MailService();
        this.sendResetPasswordMail = this.sendResetPasswordMail.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }
    sendResetPasswordMail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = yield this.mailService.sendResetPasswordEmail(req.body);
                return this.ok(res, doc);
            }
            catch (error) {
                next(error);
            }
        });
    }
    resetPassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = yield this.userService.resetPassword(req.body);
                return this.ok(res, doc);
            }
            catch (error) {
                next(error);
            }
        });
    }
    updatePassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = yield this.userService.updatePassword(req.body);
                return this.ok(res, doc);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map