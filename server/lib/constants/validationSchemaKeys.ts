const Joi = require('@hapi/joi');

export const VALIDATION_SCHEMA_KEYS = {
    ID: Joi.string().required(),
    EMAIL: Joi.string()
        .email({minDomainSegments: 2})
        .trim()
        .required(),
    PASSWORD: Joi.string()
        .trim()
        .regex(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    TEAM: {
        NAME: Joi.string()
            .trim()
            .min(3)
            .max(30)
            .required(),
        SCORE: Joi.number().min(0).required(),
    },
};
