"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    ok(res, data) {
        if (data) {
            return res.status(200).json({ data });
        }
        return res.sendStatus(200);
    }
    created(res, data) {
        if (data) {
            return res.status(201).json({ data });
        }
        return res.sendStatus(201);
    }
}
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map