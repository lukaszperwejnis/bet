import {NextFunction, Response, Request} from "express";
import {Controller} from "./Controller";
import {MailService} from "../services/MailService";

export class InvitationController extends Controller{
    private mailService = new MailService();

    constructor() {
        super();
        this.invite = this.invite.bind(this);
    }

    public async invite(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.mailService.sendInvitationEmail(req.body.recipient);
            return this.created(res, result);

        } catch (error) {
            next(error);
        }
    }
}
