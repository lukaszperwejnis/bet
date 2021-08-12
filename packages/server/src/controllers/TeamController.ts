import { NextFunction, Request, Response } from 'express';
import { Controller } from './Controller';
import { TeamService } from '../services/TeamService';
import { ResponseReturnType } from '../structures/ResponseReturnType';

export class TeamController extends Controller {
  private teamService = new TeamService();

  constructor() {
    super();

    this.getOne = this.getOne.bind(this);
    this.createOne = this.createOne.bind(this);
  }

  async getOne(
    req: Request,
    res: Response,
    next: NextFunction,
  ): ResponseReturnType {
    try {
      const doc = await this.teamService.getOneById(req.params.id);
      return this.ok(res, doc);
    } catch (error) {
      return next(error);
    }
  }

  async createOne(
    req: Request,
    res: Response,
    next: NextFunction,
  ): ResponseReturnType {
    try {
      const doc = await this.teamService.createOne(req.body);
      return this.created(res, doc);
    } catch (error) {
      return next(error);
    }
  }
}
