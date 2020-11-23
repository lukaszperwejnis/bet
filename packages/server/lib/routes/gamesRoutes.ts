import {Router} from "express";

export const GamesRoutes: Router = Router();
GamesRoutes.route('/')
    .get(() => {});
