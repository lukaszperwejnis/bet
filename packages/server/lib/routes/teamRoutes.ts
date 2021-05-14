import { Router } from "express";
import { TeamController } from "../controllers/teamController";

const teamController = new TeamController();

export const TeamRoutes: Router = Router();
TeamRoutes.route("/").get(teamController.getOne).post(teamController.createOne);

TeamRoutes.route("/:id").get(teamController.getOne);
