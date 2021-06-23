import { NextFunction, Response, Request } from "express";
import { Controller } from "./Controller";
import { GetUserAuthInfoRequest } from "../interfaces/GetUserAuthInfoRequest";
import { ChampionBetService } from "../services/ChampionBetService";

export class ChampionBetController extends Controller {
  private championBetService = new ChampionBetService();

  constructor() {
    super();

    this.getOne = this.getOne.bind(this);
    this.createOne = this.createOne.bind(this);
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const doc = await this.championBetService.getOneById(req.params.id);
      return this.ok(res, doc);
    } catch (error) {
      next(error);
    }
  }

  async createOne(
    req: GetUserAuthInfoRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      const doc = await this.championBetService.createOne(
        req.user._id,
        req.body
      );
      return this.created(res, doc);
    } catch (error) {
      next(error);
    }
  }
}
