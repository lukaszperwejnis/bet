import {Router} from "express";
import {VerifyController} from "../controllers/VerifyController";

const verifyController = new VerifyController();

export const VerifyRoutes: Router = Router();

VerifyRoutes.route('/access/:token')
    .get(verifyController.verifyAccessToken);

VerifyRoutes.route('/refresh/:token')
    .get(verifyController.refreshAccessTokenByRefreshToken);

VerifyRoutes.route('/mail-invitation/:token')
    .get(verifyController.verifyMailInvitationToken);

VerifyRoutes.route('/reset-password/:token')
    .get(verifyController.verifyResetPasswordToken);

