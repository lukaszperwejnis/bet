import { NextFunction, Request, Response } from 'express';
import * as cheerio from 'cheerio';
import { Controller } from './Controller';
import { ResponseReturnType } from '../structures/ResponseReturnType';

export class RedirectController extends Controller {
  constructor() {
    super();
    this.redirectTo = this.redirectTo.bind(this);
  }

  async redirectTo(
    req: Request,
    res: Response,
    next: NextFunction,
  ): ResponseReturnType {
    try {
      const $ = cheerio.load(
        `<script type='text/javascript'>window.open('${req.query.url}','_self')</script>`,
      );
      return res.send($.html());
    } catch (error) {
      return next(error);
    }
  }
}
