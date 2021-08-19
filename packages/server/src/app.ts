import express from 'express';
import * as bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { connectToDatabase } from './db';
import { ProtectMiddleware } from './Middlewares/ProtectMiddleware';
import {
  GamesRoutes,
  SigninRoutes,
  SignupRoutes,
  TeamRoutes,
  GameBetRoutes,
  ChampionBetRoutes,
  InvitationRoutes,
  VerifyRoutes,
  ResetPasswordRoutes,
} from './routes';
import { errorMiddleware } from './Middlewares/ErrorMiddleware';
import { TeamService } from './services/TeamService';
import { GameService } from './services/GameService';
import { BetsValidationService } from './services/BetsValidationService';
import { BetRoutes } from './routes/betRoutes';
import { CronService } from './services/CronService';
import { MailService } from './services/MailService';
import { RedirectRoutes } from './routes/redirectRoutes';

export class App {
  app: express.Application;
  port: number;
  private cronService = new CronService();
  private mailService = new MailService();

  constructor(port: number) {
    this.app = express();
    this.port = port;

    connectToDatabase();
    this.initMiddlewares();
    this.initRoutes();
    App.fillDatabase();
    // TODO enter here mail for invitation
    // this.mailService.sendInvitationEmail({ email: 'perwiperwi@gmail.com' });
    // this.initCrones();
  }

  private initMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.options('*', cors() as any);
    this.app.use('/api', new ProtectMiddleware().protect as any);
  }

  private initRoutes(): void {
    // public routes
    this.app.use('/invitations', InvitationRoutes);
    this.app.use('/verify', VerifyRoutes);
    this.app.use('/signup', SignupRoutes);
    this.app.use('/signin', SigninRoutes);
    this.app.use('/reset-password', ResetPasswordRoutes);
    this.app.use('/redirect', RedirectRoutes);

    // protected routes with /api prefix
    this.app.use('/api/bets', BetRoutes);
    this.app.use('/api/bets/games', GameBetRoutes);
    this.app.use('/api/bets/champions', ChampionBetRoutes);
    this.app.use('/api/team', TeamRoutes);
    this.app.use('/api/games', GamesRoutes);
    this.app.use(errorMiddleware);
  }

  listen(): void {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(`App listening on the port ${this.port}`);
    });
  }

  initCrones(): void {
    const validationCron = this.cronService.getValidationCron();
    validationCron.start();
  }

  private static async fillDatabase() {
    await new TeamService().addTeamsToDatabase();
    await new GameService().addScheduledMatchesToDatabase();
    await new BetsValidationService().validateMatchBets();
  }
}
