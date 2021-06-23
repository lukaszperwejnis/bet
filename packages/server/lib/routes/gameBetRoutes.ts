import { Router } from "express";
import { GameBetController } from "../controllers/GameBetController";
import { BetRoutes } from "./betRoutes";

const gameBetController = new GameBetController();

export const GameBetRoutes: Router = Router();
GameBetRoutes.route("/").post(gameBetController.createOne as any);

GameBetRoutes.route("/:id").get(gameBetController.getOne);

// BetRoutes.route('/available')
//     .get(betController.getAvailable);
//
//
