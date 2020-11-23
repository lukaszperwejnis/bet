import {Router} from "express";
import {BetController} from "../controllers/BetController";

const betController = new BetController();
export const BetRoutes: Router = Router();
BetRoutes.route('/')
    .get(betController.getAvailable);

