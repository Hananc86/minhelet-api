"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var sequelize_2 = require("./sequelize");
exports.User = sequelize_2["default"].define("User", {
    id: {
        type: sequelize_1.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_login: {
        type: sequelize_1.STRING
    }
}, {
    tableName: "wp_users",
    timestamps: false,
    underscored: true
});
//# sourceMappingURL=User.js.map