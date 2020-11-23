"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SignupController_1 = require("../controllers/SignupController");
const signupController = new SignupController_1.SignupController();
exports.SignupRoutes = express_1.Router();
exports.SignupRoutes.route('/mail-invitation')
    .post(signupController.mailInvitationSignup);
//# sourceMappingURL=signupRoutes.js.map