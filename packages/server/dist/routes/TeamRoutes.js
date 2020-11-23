"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teamController_1 = require("../controllers/teamController");
const teamController = new teamController_1.TeamController();
exports.TeamRoutes = express_1.Router();
exports.TeamRoutes.route('/')
    .get(teamController.getOne)
    .post(teamController.createOne);
exports.TeamRoutes.route('/:id')
    .get(teamController.getOne);
//# sourceMappingURL=TeamRoutes.js.map