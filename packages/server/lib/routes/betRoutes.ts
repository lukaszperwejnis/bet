import { Router } from "express";
import { BetController } from "../controllers/BetController";

const betController = new BetController();
export const BetRoutes: Router = Router();

BetRoutes.route("/user").get(betController.getUserBets);

BetRoutes.route("/available").get(betController.getAvailable);

BetRoutes.route("/").post(betController.createBets);
