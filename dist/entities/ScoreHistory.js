"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var sequelize_2 = require("./sequelize");
exports.ScoreHistory = sequelize_2["default"].define("ScoreHistory", {
    ranking_id: {
        type: sequelize_1.INTEGER,
        primaryKey: true
    },
    score_order: {
        type: sequelize_1.INTEGER
    },
    type: {
        type: sequelize_1.INTEGER
    },
    score_date: {
        type: sequelize_1.DATE
    },
    source_id: {
        type: sequelize_1.INTEGER
    },
    user_id: {
        type: sequelize_1.INTEGER
    },
    score: {
        type: sequelize_1.INTEGER
    },
    full: {
        type: sequelize_1.INTEGER
    },
    goal_bonus: {
        type: sequelize_1.INTEGER
    },
    goal_diff_bonus: {
        type: sequelize_1.INTEGER
    },
    ranking: {
        type: sequelize_1.INTEGER
    }
}, {
    tableName: "pool_wp_scorehistory_s1_t1",
    timestamps: false,
    underscored: true
});
//# sourceMappingURL=ScoreHistory.js.map