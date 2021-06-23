import { Controller } from "./Controller";
import { NextFunction, Request, Response } from "express";
import { TokenService } from "../services/TokenService";

export class VerifyController extends Controller {
  private tokenService = new TokenService();

  constructor() {
    super();
    this.verifyMailInvitationToken = this.verifyMailInvitationToken.bind(this);
    this.verifyAccessToken = this.verifyAccessToken.bind(this);
    this.refreshAccessTokenByRefreshToken = this.refreshAccessTokenByRefreshToken.bind(
      this
    );
    this.verifyResetPasswordToken = this.verifyResetPasswordToken.bind(this);
  }

  public async verifyMailInvitationToken(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const payload = await this.tokenService.verifyMailInvitationToken(
        req.params.token
      );
      return this.ok(res, payload);
    } catch (error) {
      next(error);
    }
  }

  public async verifyAccessToken(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const payload = await this.tokenService.verifyAccessToken(
        req.params.token
      );
      return this.ok(res, payload);
    } catch (error) {
      next(error);
    }
  }

  public async refreshAccessTokenByRefreshToken(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const payload = await this.tokenService.refreshAccessTokenByRefreshToken(
        req.params.token
      );
      return this.ok(res, payload);
    } catch (error) {
      next(error);
    }
  }

  public async verifyResetPasswordToken(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const payload = await this.tokenService.verifyResetPasswordToken(
        req.params.token
      );
      return this.ok(res, payload);
    } catch (error) {
      next(error);
    }
  }
}
