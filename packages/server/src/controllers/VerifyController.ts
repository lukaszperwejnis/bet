import { NextFunction, Request, Response } from 'express';
import { Controller } from './Controller';
import { TokenService } from '../services/TokenService';
import { ResponseReturnType } from '../structures/ResponseReturnType';

export class VerifyController extends Controller {
  private tokenService = new TokenService();

  constructor() {
    super();
    this.verifyMailInvitationToken = this.verifyMailInvitationToken.bind(this);
    this.verifyAccessToken = this.verifyAccessToken.bind(this);
    this.refreshAccessTokenByRefreshToken =
      this.refreshAccessTokenByRefreshToken.bind(this);
    this.verifyResetPasswordToken = this.verifyResetPasswordToken.bind(this);
  }

  async verifyMailInvitationToken(
    req: Request,
    res: Response,
    next: NextFunction,
  ): ResponseReturnType {
    try {
      const payload = await this.tokenService.verifyMailInvitationToken(
        req.params.token,
      );
      return this.ok(res, payload);
    } catch (error) {
      return next(error);
    }
  }

  async verifyAccessToken(
    req: Request,
    res: Response,
    next: NextFunction,
  ): ResponseReturnType {
    try {
      const payload = await this.tokenService.verifyAccessToken(
        req.params.token,
      );
      this.ok(res, payload);
    } catch (error) {
      next(error);
    }
  }

  async refreshAccessTokenByRefreshToken(
    req: Request,
    res: Response,
    next: NextFunction,
  ): ResponseReturnType {
    try {
      const payload = await this.tokenService.refreshAccessTokenByRefreshToken(
        req.params.token,
      );
      return this.ok(res, payload);
    } catch (error) {
      return next(error);
    }
  }

  public async verifyResetPasswordToken(
    req: Request,
    res: Response,
    next: NextFunction,
  ): ResponseReturnType {
    try {
      const payload = await this.tokenService.verifyResetPasswordToken(
        req.params.token,
      );
      return this.ok(res, payload);
    } catch (error) {
      return next(error);
    }
  }
}
