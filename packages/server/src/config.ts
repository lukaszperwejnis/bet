//todo remove default import
const config = {
  port: 3010,
  dbURl: "mongodb://localhost/bet",
  secrets: {
    jwt: "bet",
    jwtAccessExp: 60 * 60 * 60,
    jwtRefreshExp: 65 * 60 * 60,
    jwtInvitationExp: 60 * 60 * 60,
    jwtResetExp: 24 * 60 * 60,

    //jwtInvitationExp: 24 * 60 * 60
    //jwtResetExp: 24 * 60 * 60
  },
  externalAPIAuthToken: "b6565257ac824b0aaf3e6d883c156e27",
  mailgun: {
    API_KEY: "key-934fc1822136a8f05869dc8343f8b06f",
    domain: "sandboxf5c28a28100246ba9811abffb3ae2632.mailgun.org",
  },
  clientURL: "http://localhost:4200",
};

export default config;
