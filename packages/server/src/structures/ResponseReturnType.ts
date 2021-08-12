import { Response } from 'express';

export type ResponseReturnType = Promise<void | Response<
  any,
  Record<string, any>
>>;
