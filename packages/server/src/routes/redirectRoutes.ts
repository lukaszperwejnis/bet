import { Router } from 'express';
import { RedirectController } from '../controllers/RedirectController';

const redirectController = new RedirectController();
export const RedirectRoutes: Router = Router();
RedirectRoutes.route('/').get(redirectController.redirectTo);
