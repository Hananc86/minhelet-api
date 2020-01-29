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
		}
	},
	{
		tableName: "wp_users",
        timestamps: false,
        underscored: true,
	}
);