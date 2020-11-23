"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
function newToken(user) {
    const dataStoredInToken = {
        _id: user._id,
    };
    const expiresIn = config_1.default.secrets.jwtExp;
    return {
        expiresIn,
        token: jwt.sign(dataStoredInToken, config_1.default.secrets.jwt, { expiresIn }),
    };
}
exports.newToken = newToken;
exports.verifyToken = (token) => new Promise((resolve, reject) => {
    jwt.verify(token, config_1.default.secrets.jwt, (err, payload) => {
        if (err) {
            return reject(err);
        }
        resolve(payload);
    });
});
exports.checkPassword = (passwordHash, password) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, passwordHash, (err, same) => {
            if (err) {
                return reject(err);
            }
            resolve(same);
        });
    });
};
//# sourceMappingURL=authHelpers.js.map