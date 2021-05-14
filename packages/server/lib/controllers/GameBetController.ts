import { NextFunction, Request, Response } from "express";
import { Controller } from "./Controller";
import { IGetUserAuthInfoRequest } from "../interfaces/GetUserAuthInfoRequest";
import { GameBetService } from "../services/GameBetService";

export class GameBetController extends Controller {
  private gameBetService = new GameBetService();

  constructor() {
    super();

    this.createOne = this.createOne.bind(this);
    this.getOne = this.getOne.bind(this);
    this.getMany = this.getMany.bind(this);
  }

  async createOne(
    req: IGetUserAuthInfoRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      const doc = await this.gameBetService.createOne(req.user._id, req.body);
      return this.created(res, doc);
    } catch (error) {
      next(error);
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const doc = await this.gameBetService.getOneById(req.params.id);
      return this.ok(res, doc);
    } catch (error) {
      next(error);
    }
  }

  async getMany(
    req: IGetUserAuthInfoRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      const docs = await this.gameBetService.getManyByUserId(req.user._id);
      return this.ok(res, docs);
    } catch (error) {
      next(error);
    }
  }
}
