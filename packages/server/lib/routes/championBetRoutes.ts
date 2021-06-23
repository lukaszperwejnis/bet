import { Router } from "express";
import { ChampionBetController } from "../controllers/ChampionBetController";

const championBetController = new ChampionBetController();

export const ChampionBetRoutes: Router = Router();
ChampionBetRoutes.route("/").post(championBetController.createOne as any);

ChampionBetRoutes.route("/:id").get(championBetController.getOne);
