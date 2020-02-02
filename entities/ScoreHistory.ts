import { INTEGER, STRING, DATE, BOOLEAN, ENUM } from "sequelize";
import sequelize from "./sequelize";

export const ScoreHistory = sequelize.define("ScoreHistory", {
		ranking_id: {
			type: INTEGER,
			primaryKey: true
		},
		score_order: {
			type: INTEGER
		},
		type: {
			type: INTEGER
		},
		score_date: {
			type: DATE
		},
		source_id: {
			type: INTEGER
		},
		user_id: {
			type: INTEGER
		},
		score: {
			type: INTEGER
		},
		full: {
			type: INTEGER
		},
		goal_bonus: {
			type: INTEGER
		},
		goal_diff_bonus: {
			type: INTEGER
		},
		ranking: {
			type: INTEGER
		}
	},
	{
		tableName: "pool_wp_scorehistory_s1_t1",
        timestamps: false,
        underscored: true,
	}
);