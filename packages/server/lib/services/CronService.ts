import { CronJob } from "cron";

export class CronService {
  public getValidationCron(): CronJob {
    // return new CronJob('1000', function() {
    //     console.log(new Date());
    // }, null);

    return new CronJob("*/10 * * * * *", function () {
      console.log(new Date().getSeconds());
    });
  }
}
