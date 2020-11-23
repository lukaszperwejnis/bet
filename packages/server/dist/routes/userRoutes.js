"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const userController = new UserController_1.UserController();
exports.InvitationRoutes = express_1.Router();
exports.InvitationRoutes.route('/update-password')
    .post(userController.updatePassword);
//# sourceMappingURL=userRoutes.js.map