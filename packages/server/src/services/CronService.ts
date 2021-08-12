import { CronJob } from 'cron';

export class CronService {
  getValidationCron(): CronJob {
    return new CronJob('*/10 * * * * *', () => {
      // eslint-disable-next-line no-console
      console.log(new Date().getSeconds());
    });
  }
}
