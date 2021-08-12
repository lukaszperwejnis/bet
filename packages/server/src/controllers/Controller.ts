import { Response } from 'express';

export abstract class Controller {
  ok(res: Response, data?: unknown): Response<any, Record<string, any>> {
    if (!data) {
      return res.sendStatus(200);
    }

    return res.status(200).json(data);
  }

  created(res: Response, data?: unknown): Response<any, Record<string, any>> {
    if (!data) {
      return res.sendStatus(201);
    }

    return res.status(201).json(data);
  }
}
