import { Request } from "express";
import { User } from "@bet/structures";

export interface GetUserAuthInfoRequest extends Request {
  user: User.User;
}
