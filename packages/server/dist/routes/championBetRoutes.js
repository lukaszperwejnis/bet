"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ChampionBetController_1 = require("../controllers/ChampionBetController");
const championBetController = new ChampionBetController_1.ChampionBetController();
exports.ChampionBetRoutes = express_1.Router();
exports.ChampionBetRoutes.route('/')
    .post(championBetController.createOne);
exports.ChampionBetRoutes.route('/:id')
    .get(championBetController.getOne);
//# sourceMappingURL=championBetRoutes.js.map