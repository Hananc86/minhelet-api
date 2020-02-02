import { INTEGER, STRING, DATE, BOOLEAN, ENUM } from "sequelize";
import sequelize from "./sequelize";

export const User = sequelize.define("User", {
		id: {
			type: INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		user_login: {
			type: STRING
		},
		user_email: {
			type: STRING
		},
		user_pass: {
			type: STRING
		},
		user_nicename: {
			type: STRING
		},
		user_url: {
			type: STRING
		},
		user_registered: {
			type: STRING
		},
		user_activation_key: {
			type: STRING
		},
		user_status: {
			type: INTEGER
		},
		display_name: {
			type: STRING
		}
	},
	{
		tableName: "wp_users",
        timestamps: false,
        underscored: true,
	}
);