"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cron_1 = require("cron");
class CronService {
    getValidationCron() {
        // return new CronJob('1000', function() {
        //     console.log(new Date());
        // }, null);
        return new cron_1.CronJob('*/10 * * * * *', function () {
            console.log(new Date().getSeconds());
        });
    }
}
exports.CronService = CronService;
//# sourceMappingURL=CronService.js.map