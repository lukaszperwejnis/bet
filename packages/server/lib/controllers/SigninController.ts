import { NextFunction, Request, Response } from "express";
import { Controller } from "./Controller";
import { UserService } from "../services/UserService";
import {Password, Signin} from "../structuresToMove/user";

export class SigninController extends Controller {
  private userService = new UserService();

  constructor() {
    super();
    this.signin = this.signin.bind(this);
  }

  async signin(req: Request<Signin.Payload>, res: Response, next: NextFunction) {
    try {
      const data = await this.userService.signin(req.body);
      return this.created(res, data);
    } catch (error) {
      next(error);
    }
  }
}
