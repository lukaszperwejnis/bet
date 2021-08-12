import { CronJob } from 'cron';

export class CronService {
  getValidationCron(): CronJob {
    return new CronJob('*/10 * * * * *', () => {
      console.log(new Date().getSeconds());
    });
  }
}
