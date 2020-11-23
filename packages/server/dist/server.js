"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./config");
const app = new app_1.default(config_1.default.port);
app.listen();
//# sourceMappingURL=server.js.map