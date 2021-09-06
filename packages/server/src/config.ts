const config = {
  port: 3010,
  dbURl: 'mongodb://localhost/bet',
  secrets: {
    jwt: 'bet',
    jwtAccessExp: 60 * 60 * 60,
    jwtRefreshExp: 65 * 60 * 60,
    jwtInvitationExp: 60 * 60 * 60,
    jwtResetExp: 24 * 60 * 60,
  },
  externalAPIAuthToken: 'XXXX',
  mailgun: {
    API_KEY: 'XXXX',
    domain: 'XXXX',
  },
  clientURL: 'http://localhost:4200',
};

export default config;
