import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userController = new UserController();
export const InvitationRoutes: Router = Router();
InvitationRoutes.route("/update-password").post(userController.updatePassword);
