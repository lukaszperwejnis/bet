import { NextFunction, Request, Response } from 'express';
import { Signin } from '@bet/structures';
import { Controller } from './Controller';
import { UserService } from '../services/UserService';
import { ResponseReturnType } from '../structures/ResponseReturnType';

export class SigninController extends Controller {
  private userService = new UserService();

  constructor() {
    super();
    this.signin = this.signin.bind(this);
  }

  async signin(
    req: Request<Signin.Payload>,
    res: Response,
    next: NextFunction,
  ): ResponseReturnType {
    try {
      const data = await this.userService.signin(req.body);
      return this.created(res, data);
    } catch (error) {
      return next(error);
    }
  }
}
