import {NextFunction, Request, Response} from "express";
import {Controller} from "./Controller";
import {UserService} from "../services/UserService";

export class SignupController extends Controller {
    private userService = new UserService();

    constructor() {
        super();
        this.mailInvitationSignup = this.mailInvitationSignup.bind(this);
    }

    public async mailInvitationSignup(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.userService.mailInvitationSignup(req.body);
            return this.created(res, data);
        } catch (e) {
            next(e)
        }
    }
}
