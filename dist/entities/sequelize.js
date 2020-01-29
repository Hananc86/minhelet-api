"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var config_1 = require("../config");
var _a = config_1["default"].db, host = _a.host, password = _a.password;
var sequelize = new sequelize_1["default"]("rq0uyw0z4jn9cx47", "zyrflbvmsy008hkw", password, {
    dialect: "mysql",
    logging: console.log,
    host: host,
    pool: {
        max: 10,
        min: 0,
        idle: 30000
    }
});
exports["default"] = sequelize;
//# sourceMappingURL=sequelize.js.map