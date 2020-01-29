"use strict";
exports.__esModule = true;
var config = {
    development: {
        db: {
            password: "p142ir4xqmc98upb",
            host: "h7xe2knj2qb6kxal.cbetxkdyhwsb.us-east-1.rds.amazonaws.com"
        }
    }
};
config.test = config.development;
var env = process.env.NODE_ENV || "development";
exports["default"] = config[env];
//# sourceMappingURL=config.js.map