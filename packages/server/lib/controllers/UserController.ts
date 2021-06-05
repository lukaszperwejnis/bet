import { Controller } from "./Controller";
import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/UserService";
import { MailService } from "../services/MailService";
import {Password} from "../structuresToMove/user";

export class UserController extends Controller {
  private userService = new UserService();
  private mailService = new MailService();

  constructor() {
    super();
    this.startResetPassword = this.startResetPassword.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  async startResetPassword(
    req: Request<Password.StartResetPayload>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const doc = await this.mailService.sendResetPasswordEmail(req.body);
      return this.ok(res, doc);
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req: Request<Password.ResetPayload>, res: Response, next: NextFunction) {
    try {
      const doc = await this.userService.resetPassword(req.body);
      return this.ok(res, doc);
    } catch (error) {
      next(error);
    }
  }

  async updatePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const doc = await this.userService.updatePassword(req.body);
      return this.ok(res, doc);
    } catch (error) {
      next(error);
    }
  }
}
