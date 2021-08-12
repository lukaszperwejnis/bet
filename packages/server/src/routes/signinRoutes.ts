import { Router } from 'express';
import { SigninController } from '../controllers/SigninController';

const signinController = new SigninController();
export const SigninRoutes: Router = Router();
SigninRoutes.route('/').post(signinController.signin);
