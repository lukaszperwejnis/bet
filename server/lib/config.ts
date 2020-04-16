const config = {
    port: 3010,
    dbURl: 'mongodb://localhost/bet',
    secrets: {
        jwt: 'bet',
        jwtAccessExp: 60 * 60,
        jwtRefreshExp: 65 * 60,
        jwtInvitationExp: 60,
        jwtResetExp: 24 * 60 * 60,

        //jwtInvitationExp: 24 * 60 * 60
        //jwtResetExp: 24 * 60 * 60
    },
    externalAPIAuthToken: 'b6565257ac824b0aaf3e6d883c156e27',
    mailgun: {
        API_KEY: 'dd704314e1a0edf3a0550b03115f3807-0a4b0c40-42884d34',
        domain: 'sandboxf5c28a28100246ba9811abffb3ae2632.mailgun.org'
    }
};


export default config;
