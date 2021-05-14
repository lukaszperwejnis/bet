import { Response, NextFunction } from "express";
import { IGetUserAuthInfoRequest } from "../interfaces/GetUserAuthInfoRequest";
import { UnauthorizedError } from "../errors";
import { UserService } from "../services/UserService";
import { TokenService } from "../services/TokenService";

export class ProtectMiddleware {
  private tokenService = new TokenService();
  private userService = new UserService();

  constructor() {
    this.protect = this.protect.bind(this);
  }

  public async protect(
    req: IGetUserAuthInfoRequest,
    res: Response,
    next: NextFunction
  ) {
    if (!req.headers.authorization) {
      next(new UnauthorizedError());
    }

    const token = req.headers.authorization.split("Bearer ")[1];
    if (!token) {
      next(new UnauthorizedError());
    }

    try {
      const payload: any = await this.tokenService.verifySigninToken(token);
      const user = await this.userService.getOneById(payload._id);

      if (!user) {
        next(new UnauthorizedError());
      }

      req.user = user;
      next();
    } catch (e) {
      next(new UnauthorizedError());
    }
  }
}
