import { Router } from "express";
import { SignupController } from "../controllers/SignupController";

const signupController = new SignupController();
export const SignupRoutes: Router = Router();
SignupRoutes.route("/mail-invitation").post(
  signupController.mailInvitationSignup
);
