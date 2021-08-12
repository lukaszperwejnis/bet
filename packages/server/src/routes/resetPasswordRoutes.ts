import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const userController = new UserController();
export const ResetPasswordRoutes: Router = Router();
ResetPasswordRoutes.route('/').post(userController.resetPassword);

ResetPasswordRoutes.route('/start').post(userController.startResetPassword);
