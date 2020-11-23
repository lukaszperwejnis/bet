"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SigninController_1 = require("../controllers/SigninController");
const signinController = new SigninController_1.SigninController();
exports.SigninRoutes = express_1.Router();
exports.SigninRoutes.route('/')
    .post(signinController.signin);
//# sourceMappingURL=signinRoutes.js.map