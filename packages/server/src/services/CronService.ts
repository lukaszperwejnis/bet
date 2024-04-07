import { CronJob } from 'cron';
import { BetsValidationService } from './BetsValidationService';

export class CronService {
  getValidationCron(): CronJob {
    return new CronJob('*/10 * * * * *', async () => {
      console.log('VALIDATION CRON tick');
      // await new BetsValidationService().validateMatchBets();
    });
  }
}
