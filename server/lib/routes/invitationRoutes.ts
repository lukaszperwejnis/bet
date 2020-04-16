import {Router} from "express";
import {InvitationController} from "../controllers/InvitationController";

const invitationController = new InvitationController();
export const InvitationRoutes: Router = Router();
InvitationRoutes.route('/')
    .get(invitationController.invite);
