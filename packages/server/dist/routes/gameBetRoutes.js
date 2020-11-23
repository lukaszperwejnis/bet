"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GameBetController_1 = require("../controllers/GameBetController");
const gameBetController = new GameBetController_1.GameBetController();
exports.GameBetRoutes = express_1.Router();
exports.GameBetRoutes.route('/')
    .post(gameBetController.createOne);
exports.GameBetRoutes.route('/:id')
    .get(gameBetController.getOne);
//# sourceMappingURL=gameBetRoutes.js.map