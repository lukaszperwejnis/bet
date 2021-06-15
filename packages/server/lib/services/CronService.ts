import { CronJob } from "cron";

export class CronService {
  getValidationCron(): CronJob {
    return new CronJob("*/10 * * * * *", function () {
      console.log(new Date().getSeconds());
    });
  }
}
