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
    },
    user_email: {
        type: sequelize_1.STRING
    },
    user_pass: {
        type: sequelize_1.STRING
    },
    user_nicename: {
        type: sequelize_1.STRING
    },
    user_url: {
        type: sequelize_1.STRING
    },
    user_registered: {
        type: sequelize_1.STRING
    },
    user_activation_key: {
        type: sequelize_1.STRING
    },
    user_status: {
        type: sequelize_1.INTEGER
    },
    display_name: {
        type: sequelize_1.STRING
    }
}, {
    tableName: "wp_users",
    timestamps: true,
    underscored: true
});
//# sourceMappingURL=User copy.js.map