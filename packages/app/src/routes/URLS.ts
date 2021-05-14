import { createTemplate } from './createTemplate';

export const URLS = {
  LOGIN: createTemplate('/login'),
  MAIL_INVITATION_SIGNUP: createTemplate('/mail-invitation-signup'),
  INVALID_MAIL_INVITATION_SIGNUP_TOKEN: createTemplate('/invalid-signup-token'),
  RESET_PASSWORD: createTemplate('/reset-password'),
  SET_PASSWORD: createTemplate('/set-password'),
  DASHBOARD: createTemplate('/dashboard'),
};
