import {Controller} from "./Controller";
import {IGetUserAuthInfoRequest} from "../interfaces/GetUserAuthInfoRequest";
import {NextFunction, Response} from "express";
import {BetService} from "../services/BetService";

export class BetController extends Controller {
    private betService = new BetService();

    constructor() {
        super();
        this.getAvailable = this.getAvailable.bind(this);
    }

    public async getAvailable(req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) {
        try {
            const availableBets = await this.betService.getAvailableBetsByUserId(req.user._id);
            return this.ok(res, availableBets);
        } catch (error) {
            next(error);
        }
    }
}
