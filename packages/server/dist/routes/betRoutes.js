"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BetController_1 = require("../controllers/BetController");
const betController = new BetController_1.BetController();
exports.BetRoutes = express_1.Router();
exports.BetRoutes.route('/')
    .get(betController.getAvailable);
//# sourceMappingURL=betRoutes.js.map