import * as express from "express";
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import {connectToDatabase} from "./db";
import {ProtectMiddleware} from "./Middlewares/ProtectMiddleware";
import {
    GamesRoutes,
    SigninRoutes,
    SignupRoutes,
    TeamRoutes,
    GameBetRoutes,
    ChampionBetRoutes,
    InvitationRoutes,
    VerifyRoutes, ResetPasswordRoutes
} from "./routes";
import {errorMiddleware} from "./Middlewares/ErrorMiddleware";
import {TeamService} from "./services/TeamService";
import {GameService} from "./services/GameService";
import {BetsValidationService} from "./services/BetsValidationService";
import {BetRoutes} from "./routes/betRoutes";
import {CronService} from "./services/CronService";
import {MailService} from "./services/MailService";

export default class App {
    public app: express.Application;
    public port: number;
    private cronService = new CronService();
    private mailService = new MailService();

    constructor(port) {
        this.app = express();
        this.port = port;

        connectToDatabase();
        this.initMiddlewares();
        this.initRoutes();
        this.fillDatabase();
        //this.mailService.sendInvitationEmail({email: 'perwiperwi@gmail.com'});
        //this.initCrones();
    }

    private initMiddlewares(): void {
        this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.options('*', cors());
        this.app.use('/api', new ProtectMiddleware().protect);
    }

    private initRoutes(): void {
        this.app.use('/verify', VerifyRoutes);
        this.app.use('/signup', SignupRoutes);
        this.app.use('/signin', SigninRoutes);
        this.app.use('/reset-password',  ResetPasswordRoutes);
        this.app.use('/api/bets', BetRoutes);
        this.app.use('/api/bets/games', GameBetRoutes);
        this.app.use('/api/bets/champions', ChampionBetRoutes);
        this.app.use('/api/team', TeamRoutes);
        this.app.use('/api/games', GamesRoutes);
        this.app.use('/api/invitations', InvitationRoutes);
        this.app.use(errorMiddleware);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }

    public initCrones(): void {
        const validationCron = this.cronService.getValidationCron();
        validationCron.start()
    }

    private async fillDatabase() {
        await new TeamService().addTeamsToDatabase();
        await new GameService().addScheduledMatchesToDatabase();
        await new BetsValidationService().validateMatchBets();
        //     const result = await this.mailService.sendInvitationEmail('perwiperwi@gmail.com');
        //     console.log({result});
    }
}
