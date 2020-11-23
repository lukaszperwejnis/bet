"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const userController = new UserController_1.UserController();
exports.ResetPasswordRoutes = express_1.Router();
exports.ResetPasswordRoutes.route('/')
    .post(userController.resetPassword);
exports.ResetPasswordRoutes.route('/start')
    .post(userController.sendResetPasswordMail);
//# sourceMappingURL=resetPasswordRoutes.js.map