"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const db_1 = require("./db");
const ProtectMiddleware_1 = require("./Middlewares/ProtectMiddleware");
const routes_1 = require("./routes");
const ErrorMiddleware_1 = require("./Middlewares/ErrorMiddleware");
const TeamService_1 = require("./services/TeamService");
const GameService_1 = require("./services/GameService");
const BetsValidationService_1 = require("./services/BetsValidationService");
const betRoutes_1 = require("./routes/betRoutes");
const CronService_1 = require("./services/CronService");
const MailService_1 = require("./services/MailService");
class App {
    constructor(port) {
        this.cronService = new CronService_1.CronService();
        this.mailService = new MailService_1.MailService();
        this.app = express();
        this.port = port;
        db_1.connectToDatabase();
        this.initMiddlewares();
        this.initRoutes();
        this.fillDatabase();
        this.mailService.sendInvitationEmail({ email: 'perwiperwi@gmail.com' });
        //this.initCrones();
    }
    initMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.options('*', cors());
        this.app.use('/api', new ProtectMiddleware_1.ProtectMiddleware().protect);
    }
    initRoutes() {
        this.app.use('/invitations', routes_1.InvitationRoutes);
        this.app.use('/verify', routes_1.VerifyRoutes);
        this.app.use('/signup', routes_1.SignupRoutes);
        this.app.use('/signin', routes_1.SigninRoutes);
        this.app.use('/reset-password', routes_1.ResetPasswordRoutes);
        this.app.use('/api/bets', betRoutes_1.BetRoutes);
        this.app.use('/api/bets/games', routes_1.GameBetRoutes);
        this.app.use('/api/bets/champions', routes_1.ChampionBetRoutes);
        this.app.use('/api/team', routes_1.TeamRoutes);
        this.app.use('/api/games', routes_1.GamesRoutes);
        this.app.use(ErrorMiddleware_1.errorMiddleware);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
    initCrones() {
        const validationCron = this.cronService.getValidationCron();
        validationCron.start();
    }
    fillDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            yield new TeamService_1.TeamService().addTeamsToDatabase();
            yield new GameService_1.GameService().addScheduledMatchesToDatabase();
            yield new BetsValidationService_1.BetsValidationService().validateMatchBets();
            //     const result = await this.mailService.sendInvitationEmail('perwiperwi@gmail.com');
            //     console.log({result});
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map