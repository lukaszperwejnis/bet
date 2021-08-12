import { NextFunction, Response } from 'express';
import { Controller } from './Controller';
import { GetUserAuthInfoRequest } from '../interfaces/GetUserAuthInfoRequest';
import { BetService } from '../services/BetService';
import { ResponseReturnType } from '../structures/ResponseReturnType';

interface CreateBetsRequest extends GetUserAuthInfoRequest {
  body: Partial<{
    games: {
      gameId: string;
      homeScore: number;
      awayScore: number;
    }[];
    champion: {
      teamId: string;
    };
  }>;
}

export class BetController extends Controller {
  private betService = new BetService();

  constructor() {
    super();
    this.getAvailable = this.getAvailable.bind(this);
    this.createBets = this.createBets.bind(this);
    this.getUserBets = this.getUserBets.bind(this);
  }

  async getAvailable(
    req: GetUserAuthInfoRequest,
    res: Response,
    next: NextFunction,
  ): ResponseReturnType {
    try {
      const availableBets = await this.betService.getAvailableBetsByUserId(
        req.user._id,
      );
      return this.ok(res, availableBets);
    } catch (error) {
      return next(error);
    }
  }

  async createBets(
    req: CreateBetsRequest,
    res: Response,
    next: NextFunction,
  ): ResponseReturnType {
    try {
      const result = await this.betService.createBets(req.user._id, req.body);
      return this.ok(res, result);
    } catch (error) {
      return next(error);
    }
  }

  async getUserBets(
    req: GetUserAuthInfoRequest,
    res: Response,
    next: NextFunction,
  ): ResponseReturnType {
    try {
      const result = await this.betService.getBetsByUserId(req.user._id);
      return this.ok(res, result);
    } catch (error) {
      return next(error);
    }
  }
}
