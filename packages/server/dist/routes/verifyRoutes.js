"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VerifyController_1 = require("../controllers/VerifyController");
const verifyController = new VerifyController_1.VerifyController();
exports.VerifyRoutes = express_1.Router();
exports.VerifyRoutes.route('/mail-invitation/:token')
    .get(verifyController.verifyMailInvitationToken);
exports.VerifyRoutes.route('/access/:token')
    .get(verifyController.verifyAccessToken);
exports.VerifyRoutes.route('/refresh/:token')
    .get(verifyController.refreshAccessTokenByRefreshToken);
exports.VerifyRoutes.route('/reset-password/:token')
    .get(verifyController.verifyResetPasswordToken);
//# sourceMappingURL=verifyRoutes.js.map