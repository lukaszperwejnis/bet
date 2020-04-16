import {Response} from 'express'

export abstract class Controller {
    public ok<T>(res: Response, data?: any) {
        if (data) {
            return res.status(200).json({data});
        }

        return res.sendStatus(200);
    }

    public created(res: Response, data?: any) {
        if (data) {
            return res.status(201).json({data});
        }
        return res.sendStatus(201);
    }
}
