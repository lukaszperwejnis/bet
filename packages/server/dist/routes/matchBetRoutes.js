"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MatchBetController_1 = require("../controllers/MatchBetController");
const matchBetController = new MatchBetController_1.MatchBetController();
exports.MatchBetRoutes = express_1.Router();
exports.MatchBetRoutes.route('/')
    .post(matchBetController.createOne);
exports.MatchBetRoutes.route('/:id')
    .get(matchBetController.getOne);
//# sourceMappingURL=matchBetRoutes.js.map