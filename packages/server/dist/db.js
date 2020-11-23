"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config_1 = require("./config");
exports.connectToDatabase = () => {
    return mongoose.connect(config_1.default.dbURl, {
        useNewUrlParser: true
    });
};
//# sourceMappingURL=db.js.map