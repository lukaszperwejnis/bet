import {Router} from "express";
import {GameBetController} from "../controllers/GameBetController";

const gameBetController = new GameBetController();

export const GameBetRoutes: Router = Router();
GameBetRoutes.route('/')
    .post(gameBetController.createOne);

GameBetRoutes.route('/:id')
    .get(gameBetController.getOne);
