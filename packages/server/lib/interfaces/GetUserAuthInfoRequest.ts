import { Request } from "express"
import {User} from "../structures/User";
export interface IGetUserAuthInfoRequest extends Request {
    user: User;
}
