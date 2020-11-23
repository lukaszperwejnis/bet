"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const InvitationController_1 = require("../controllers/InvitationController");
const invitationController = new InvitationController_1.InvitationController();
exports.InvitationRoutes = express_1.Router();
exports.InvitationRoutes.route('/')
    .get(invitationController.invite);
//# sourceMappingURL=invitationRoutes.js.map