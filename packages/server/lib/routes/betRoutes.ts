import { Router } from "express";
import { BetController } from "../controllers/BetController";

const betController = new BetController();
export const BetRoutes: Router = Router();

BetRoutes.route("/user").get(betController.getUserBets as any);

BetRoutes.route("/available").get(betController.getAvailable as any);

BetRoutes.route("/").post(betController.createBets as any);
