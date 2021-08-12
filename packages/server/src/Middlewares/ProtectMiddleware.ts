import { Response, NextFunction } from 'express';
import { GetUserAuthInfoRequest } from '../interfaces/GetUserAuthInfoRequest';
import { UnauthorizedError } from '../errors';
import { UserService } from '../services/UserService';
import { TokenService } from '../services/TokenService';

export class ProtectMiddleware {
  private tokenService = new TokenService();
  private userService = new UserService();

  constructor() {
    this.protect = this.protect.bind(this);
  }

  async protect(
    req: GetUserAuthInfoRequest,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    if (!req.headers.authorization) {
      next(new UnauthorizedError());
      return;
    }

    const token = req.headers.authorization.split('Bearer ')[1];
    if (!token) {
      next(new UnauthorizedError());
      return;
    }

    try {
      const payload: any = await this.tokenService.verifySigninToken(token);
      const user = await this.userService.getOneById(payload._id);

      if (!user) {
        next(new UnauthorizedError());
        return;
      }

      req.user = user;
      next();
    } catch (e) {
      next(new UnauthorizedError());
    }
  }
}
